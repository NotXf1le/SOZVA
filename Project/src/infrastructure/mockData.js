export const demoStudents = [
  { id: "s-001", name: "Mina Vukovic", year: "2nd year", interests: ["Design", "Events"] },
  { id: "s-002", name: "Luka Petrovic", year: "3rd year", interests: ["Tech", "Volunteering"] },
  { id: "s-003", name: "Sara Markovic", year: "1st year", interests: ["Public speaking", "Community"] },
];

export const demoActivities = [
  {
    id: "act-001",
    title: "Design Sprint for Campus Projects",
    category: "Workshop",
    summary: "A two-session sprint for students who want to turn ideas into structured extracurricular initiatives.",
    description:
      "Participants work in small teams on idea framing, stakeholder mapping and a final mini-pitch for a campus improvement concept.",
    status: "Published",
    capacityLimit: 20,
    registrationDeadline: "2026-03-26T18:00:00",
    coordinator: "PR and Innovation Team",
    location: "Innovation Room A3",
    sessions: [
      { id: "ses-101", startAt: "2026-03-28T16:00:00", endAt: "2026-03-28T18:30:00", location: "Innovation Room A3" },
      { id: "ses-102", startAt: "2026-03-30T16:00:00", endAt: "2026-03-30T18:30:00", location: "Innovation Room A3" },
    ],
    tags: ["collaboration", "design thinking", "pitch"],
  },
  {
    id: "act-002",
    title: "Volunteer Day at the Student Center",
    category: "Volunteer",
    summary: "A practical action focused on space refresh, logistics and welcome support for new members.",
    description:
      "Students help prepare the student center for the spring program, organize materials and work in rotating teams.",
    status: "Published",
    capacityLimit: 12,
    registrationDeadline: "2026-03-22T12:00:00",
    coordinator: "Operations Team",
    location: "Student Center Hall",
    sessions: [
      { id: "ses-201", startAt: "2026-03-23T10:00:00", endAt: "2026-03-23T14:00:00", location: "Student Center Hall" },
    ],
    tags: ["community", "operations", "service"],
  },
  {
    id: "act-003",
    title: "Public Speaking Lab",
    category: "Training",
    summary: "Short-format coaching for students who need a safer place to practice presentation and stage presence.",
    description:
      "The lab combines timed speaking rounds, peer feedback and one final moderated presentation in front of a small audience.",
    status: "Published",
    capacityLimit: 10,
    registrationDeadline: "2026-03-24T20:00:00",
    coordinator: "Education Program",
    location: "Faculty Hall 2",
    sessions: [
      { id: "ses-301", startAt: "2026-03-25T17:30:00", endAt: "2026-03-25T19:00:00", location: "Faculty Hall 2" },
      { id: "ses-302", startAt: "2026-03-27T17:30:00", endAt: "2026-03-27T19:00:00", location: "Faculty Hall 2" },
    ],
    tags: ["communication", "presentation", "confidence"],
  },
  {
    id: "act-004",
    title: "Partners Meetup for Student Initiatives",
    category: "Event",
    summary: "Networking evening with mentors, alumni and local partners interested in supporting student programs.",
    description:
      "The event includes short presentations, partner intros and structured networking focused on future collaboration opportunities.",
    status: "Published",
    capacityLimit: 40,
    registrationDeadline: "2026-03-31T17:00:00",
    coordinator: "Leadership Board",
    location: "City Youth Hub",
    sessions: [
      { id: "ses-401", startAt: "2026-04-02T18:00:00", endAt: "2026-04-02T20:30:00", location: "City Youth Hub" },
    ],
    tags: ["networking", "partners", "showcase"],
  },
  {
    id: "act-005",
    title: "Archived Winter Orientation Debrief",
    category: "Report",
    summary: "Closed retrospective session kept in the catalog as a historical reference.",
    description:
      "This activity is already completed and remains visible only as an example of a closed item in the activity catalog.",
    status: "Closed",
    capacityLimit: 18,
    registrationDeadline: "2026-02-01T12:00:00",
    coordinator: "Board Office",
    location: "Archive Room",
    sessions: [
      { id: "ses-501", startAt: "2026-02-03T15:00:00", endAt: "2026-02-03T16:30:00", location: "Archive Room" },
    ],
    tags: ["archive", "retrospective"],
  },
];

export const initialRegistrations = [
  { id: "reg-001", activityId: "act-001", studentId: "s-002", status: "Confirmed", createdAt: "2026-03-18T09:10:00" },
  { id: "reg-002", activityId: "act-001", studentId: "s-003", status: "Confirmed", createdAt: "2026-03-18T09:14:00" },
  { id: "reg-003", activityId: "act-002", studentId: "s-001", status: "Confirmed", createdAt: "2026-03-18T09:16:00" },
  { id: "reg-004", activityId: "act-003", studentId: "s-002", status: "Waitlisted", createdAt: "2026-03-18T10:10:00", waitlistOrder: 1 },
];

export const initialMessages = [
  {
    id: "msg-001",
    createdAt: "2026-03-19T08:45:00",
    title: "Catalog ready",
    body: "Published activities are now available for student self-service registration.",
    tone: "open",
  },
  {
    id: "msg-002",
    createdAt: "2026-03-19T09:05:00",
    title: "Waitlist policy active",
    body: "When an activity reaches capacity, the next registration is placed on the waitlist instead of being rejected.",
    tone: "waitlist",
  },
];
