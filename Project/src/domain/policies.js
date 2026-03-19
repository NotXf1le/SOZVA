function isActiveRegistration(registration) {
  return registration && (registration.status === "Confirmed" || registration.status === "Waitlisted");
}

function sortSessions(activity) {
  return [...activity.sessions].sort((left, right) => new Date(left.startAt) - new Date(right.startAt));
}

export function getActivityPhase(activity, now = new Date()) {
  if (activity.status !== "Published") {
    return "closed";
  }

  if (new Date(activity.registrationDeadline) < now) {
    return "closed";
  }

  return "open";
}

export function getActivityMetrics(activity, registrations, now = new Date()) {
  const relevant = registrations.filter(
    (registration) => registration.activityId === activity.id && isActiveRegistration(registration),
  );
  const confirmed = relevant.filter((registration) => registration.status === "Confirmed");
  const waitlisted = relevant.filter((registration) => registration.status === "Waitlisted");
  const availableSeats = Math.max(activity.capacityLimit - confirmed.length, 0);
  const phase = getActivityPhase(activity, now);

  return {
    confirmedCount: confirmed.length,
    waitlistCount: waitlisted.length,
    availableSeats,
    phase: phase === "closed" ? "closed" : availableSeats > 0 ? "open" : "waitlist",
    nextSession: sortSessions(activity)[0] || null,
  };
}

export function getStudentRegistration(activityId, studentId, registrations) {
  return (
    registrations.find(
      (registration) =>
        registration.activityId === activityId &&
        registration.studentId === studentId &&
        isActiveRegistration(registration),
    ) || null
  );
}

export function registerForActivity({ activity, studentId, registrations, now = new Date() }) {
  if (getActivityPhase(activity, now) === "closed") {
    return { ok: false, reason: "Registration is closed for this activity.", registrations };
  }

  const existingRegistration = getStudentRegistration(activity.id, studentId, registrations);

  if (existingRegistration) {
    return { ok: false, reason: "You already have an active registration for this activity.", registrations };
  }

  const metrics = getActivityMetrics(activity, registrations, now);
  const nextId = `reg-${Date.now()}`;

  if (metrics.availableSeats > 0) {
    return {
      ok: true,
      status: "Confirmed",
      registrations: [
        ...registrations,
        {
          id: nextId,
          activityId: activity.id,
          studentId,
          status: "Confirmed",
          createdAt: now.toISOString(),
        },
      ],
    };
  }

  return {
    ok: true,
    status: "Waitlisted",
    registrations: [
      ...registrations,
      {
        id: nextId,
        activityId: activity.id,
        studentId,
        status: "Waitlisted",
        createdAt: now.toISOString(),
        waitlistOrder: metrics.waitlistCount + 1,
      },
    ],
  };
}

function normalizeWaitlist(registrations, activityId) {
  const waitlisted = registrations
    .filter((registration) => registration.activityId === activityId && registration.status === "Waitlisted")
    .sort((left, right) => new Date(left.createdAt) - new Date(right.createdAt));

  const mappedOrders = new Map(waitlisted.map((registration, index) => [registration.id, index + 1]));

  return registrations.map((registration) => {
    if (registration.activityId !== activityId || registration.status !== "Waitlisted") {
      return registration;
    }

    return {
      ...registration,
      waitlistOrder: mappedOrders.get(registration.id),
    };
  });
}

export function cancelRegistration({ activity, studentId, registrations, now = new Date() }) {
  if (activity.status !== "Published") {
    return { ok: false, reason: "Only published activities allow registration updates.", registrations };
  }

  const activeRegistration = getStudentRegistration(activity.id, studentId, registrations);

  if (!activeRegistration) {
    return { ok: false, reason: "There is no active registration to cancel.", registrations };
  }

  let updatedRegistrations = registrations.map((registration) => {
    if (registration.id !== activeRegistration.id) {
      return registration;
    }

    return {
      ...registration,
      status: "Cancelled",
      cancelledAt: now.toISOString(),
    };
  });

  if (activeRegistration.status === "Confirmed") {
    const nextWaitlisted = updatedRegistrations
      .filter((registration) => registration.activityId === activity.id && registration.status === "Waitlisted")
      .sort((left, right) => new Date(left.createdAt) - new Date(right.createdAt))[0];

    if (nextWaitlisted) {
      updatedRegistrations = updatedRegistrations.map((registration) => {
        if (registration.id !== nextWaitlisted.id) {
          return registration;
        }

        return {
          ...registration,
          status: "Confirmed",
          promotedAt: now.toISOString(),
        };
      });
    }
  }

  return {
    ok: true,
    registrations: normalizeWaitlist(updatedRegistrations, activity.id),
  };
}

export function filterActivities({ activities, registrations, search, category, availability, now = new Date() }) {
  const normalizedSearch = search.trim().toLowerCase();

  return activities
    .map((activity) => {
      const metrics = getActivityMetrics(activity, registrations, now);
      return { ...activity, metrics };
    })
    .filter((activity) => {
      if (category !== "all" && activity.category !== category) {
        return false;
      }

      if (availability !== "all" && activity.metrics.phase !== availability) {
        return false;
      }

      if (!normalizedSearch) {
        return true;
      }

      const haystack = [activity.title, activity.summary, activity.category, activity.location, ...activity.tags]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedSearch);
    })
    .sort((left, right) => {
      if (left.metrics.phase !== right.metrics.phase) {
        const order = { open: 0, waitlist: 1, closed: 2 };
        return order[left.metrics.phase] - order[right.metrics.phase];
      }

      return new Date(left.metrics.nextSession?.startAt || 0) - new Date(right.metrics.nextSession?.startAt || 0);
    });
}
