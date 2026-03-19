import {
  cancelRegistration,
  filterActivities,
  getActivityMetrics,
  getStudentRegistration,
  registerForActivity,
} from "../domain/policies.js";

export class ActivityService {
  constructor({ activityRepository, studentRepository, registrationRepository, messageRepository }) {
    this.activityRepository = activityRepository;
    this.studentRepository = studentRepository;
    this.registrationRepository = registrationRepository;
    this.messageRepository = messageRepository;
  }

  async bootstrap() {
    const [students, activities, registrations, messages] = await Promise.all([
      this.studentRepository.listStudents(),
      this.activityRepository.listActivities(),
      this.registrationRepository.listRegistrations(),
      this.messageRepository.listMessages(),
    ]);

    return {
      students,
      activities,
      registrations,
      messages: messages.sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt)),
    };
  }

  async buildViewModel({ studentId, filters, selectedActivityId }) {
    const { students, activities, registrations, messages } = await this.bootstrap();
    const now = new Date();
    const filteredActivities = filterActivities({
      activities,
      registrations,
      search: filters.search,
      category: filters.category,
      availability: filters.availability,
      now,
    });

    const currentStudent = students.find((student) => student.id === studentId) || students[0] || null;
    const catalogActivities = filteredActivities.map((activity) => ({
      ...activity,
      studentRegistration: currentStudent ? getStudentRegistration(activity.id, currentStudent.id, registrations) : null,
    }));
    const selectedActivity =
      catalogActivities.find((activity) => activity.id === selectedActivityId) ||
      catalogActivities[0] ||
      null;

    return {
      students,
      currentStudent,
      categories: [...new Set(activities.map((activity) => activity.category))].sort(),
      heroStats: this.buildHeroStats(activities, registrations, now),
      activities: catalogActivities,
      selectedActivity: selectedActivity || null,
      messages,
    };
  }

  buildHeroStats(activities, registrations, now) {
    const publishedActivities = activities.filter((activity) => activity.status === "Published");
    const openActivities = publishedActivities.filter(
      (activity) => getActivityMetrics(activity, registrations, now).phase === "open",
    ).length;
    const waitlistSignals = publishedActivities.filter(
      (activity) => getActivityMetrics(activity, registrations, now).phase === "waitlist",
    ).length;
    const confirmedRegistrations = registrations.filter((registration) => registration.status === "Confirmed").length;

    return [
      { value: publishedActivities.length, label: "Published activities" },
      { value: openActivities, label: "Open for direct registration" },
      { value: waitlistSignals + confirmedRegistrations, label: "Active seats and queue signals" },
    ];
  }

  async register({ activityId, studentId }) {
    const [activity, registrations] = await Promise.all([
      this.activityRepository.getActivityById(activityId),
      this.registrationRepository.listRegistrations(),
    ]);

    if (!activity) {
      return { ok: false, reason: "Activity was not found." };
    }

    const result = registerForActivity({ activity, studentId, registrations, now: new Date() });

    if (!result.ok) {
      return result;
    }

    await this.registrationRepository.saveRegistrations(result.registrations);
    await this.appendMessage({
      title: result.status === "Confirmed" ? "Registration confirmed" : "Placed on waitlist",
      body:
        result.status === "Confirmed"
          ? `A student secured a seat for ${activity.title}.`
          : `A student joined the waitlist for ${activity.title}.`,
      tone: result.status === "Confirmed" ? "open" : "waitlist",
    });

    return result;
  }

  async cancel({ activityId, studentId }) {
    const [activity, registrations] = await Promise.all([
      this.activityRepository.getActivityById(activityId),
      this.registrationRepository.listRegistrations(),
    ]);

    if (!activity) {
      return { ok: false, reason: "Activity was not found." };
    }

    const result = cancelRegistration({ activity, studentId, registrations, now: new Date() });

    if (!result.ok) {
      return result;
    }

    await this.registrationRepository.saveRegistrations(result.registrations);
    await this.appendMessage({
      title: "Registration cancelled",
      body: `A student cancelled the registration for ${activity.title}. Capacity and waitlist were recalculated.`,
      tone: "closed",
    });

    return result;
  }

  async resetDemoData() {
    await Promise.all([this.registrationRepository.reset(), this.messageRepository.reset()]);
  }

  async appendMessage({ title, body, tone }) {
    const messages = await this.messageRepository.listMessages();
    const nextMessages = [
      {
        id: `msg-${Date.now()}`,
        createdAt: new Date().toISOString(),
        title,
        body,
        tone,
      },
      ...messages,
    ].slice(0, 8);

    await this.messageRepository.saveMessages(nextMessages);
  }
}
