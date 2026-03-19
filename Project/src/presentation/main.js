import { ActivityService } from "../application/activityService.js";
import {
  ActivityRepository,
  MessageRepository,
  RegistrationRepository,
  StudentRepository,
} from "../infrastructure/storage.js";

const service = new ActivityService({
  activityRepository: new ActivityRepository(),
  studentRepository: new StudentRepository(),
  registrationRepository: new RegistrationRepository(),
  messageRepository: new MessageRepository(),
});

const state = {
  draftStudentId: "s-001",
  studentId: null,
  selectedActivityId: null,
  filters: {
    search: "",
    category: "all",
    availability: "all",
  },
};

const elements = {
  authScreen: document.querySelector("#auth-screen"),
  appShell: document.querySelector("#app-shell"),
  loginStudentSelect: document.querySelector("#login-student-select"),
  loginButton: document.querySelector("#login-button"),
  heroStats: document.querySelector("#hero-stats"),
  currentStudentName: document.querySelector("#current-student-name"),
  currentStudentMeta: document.querySelector("#current-student-meta"),
  logoutButton: document.querySelector("#logout-button"),
  resetButton: document.querySelector("#reset-button"),
  resultsNote: document.querySelector("#results-note"),
  searchInput: document.querySelector("#search-input"),
  categorySelect: document.querySelector("#category-select"),
  availabilitySelect: document.querySelector("#availability-select"),
  activityList: document.querySelector("#activity-list"),
  detailCard: document.querySelector("#detail-card"),
  messageFeed: document.querySelector("#message-feed"),
};

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString));
}

function getStatusClass(phase) {
  return `status-${phase}`;
}

function getStatusLabel(phase) {
  if (phase === "open") {
    return "Open";
  }

  if (phase === "waitlist") {
    return "Waitlist";
  }

  return "Closed";
}

function renderLoginSelect(students) {
  elements.loginStudentSelect.innerHTML = students
    .map(
      (student) => `
        <option value="${student.id}" ${student.id === state.draftStudentId ? "selected" : ""}>
          ${student.name} · ${student.year}
        </option>
      `,
    )
    .join("");
}

function renderHeroStats(stats) {
  elements.heroStats.innerHTML = stats
    .map(
      (stat) => `
        <article class="stat-chip">
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </article>
      `,
    )
    .join("");
}

function renderCategorySelect(categories, selectedCategory) {
  elements.categorySelect.innerHTML = ['<option value="all">All categories</option>']
    .concat(
      categories.map(
        (category) =>
          `<option value="${category}" ${selectedCategory === category ? "selected" : ""}>${category}</option>`,
      ),
    )
    .join("");
}

function renderActivityList(viewModel) {
  elements.resultsNote.textContent = `${viewModel.activities.length} activities in the current catalog slice`;

  if (!viewModel.activities.length) {
    elements.activityList.innerHTML = `
      <div class="empty-state">
        No activities match the current filter set. Try another category, search term or availability status.
      </div>
    `;
    return;
  }

  elements.activityList.innerHTML = viewModel.activities
    .map((activity) => {
      const isSelected = viewModel.selectedActivity?.id === activity.id;
      const registration = activity.studentRegistration;

      return `
        <article class="activity-card ${isSelected ? "activity-card--selected" : ""}" data-activity-id="${activity.id}">
          <div class="activity-card__top">
            <div>
              <div class="pill-row">
                <span class="pill">${activity.category}</span>
                <span class="status-badge ${getStatusClass(activity.metrics.phase)}">${getStatusLabel(activity.metrics.phase)}</span>
                ${registration ? `<span class="pill">Your status: ${registration.status}</span>` : ""}
              </div>
              <h3>${activity.title}</h3>
            </div>
            <button class="button button--ghost" type="button" data-open-id="${activity.id}">
              View details
            </button>
          </div>
          <p class="activity-card__summary">${activity.summary}</p>
          <div class="meta-row">
            <span class="pill">${activity.metrics.availableSeats} seats left</span>
            <span class="pill">Waitlist: ${activity.metrics.waitlistCount}</span>
            <span class="pill">${activity.metrics.nextSession ? formatDate(activity.metrics.nextSession.startAt) : "No session yet"}</span>
            <span class="pill">${activity.location}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function setShellVisibility(isAuthenticated) {
  elements.authScreen.hidden = isAuthenticated;
  elements.appShell.hidden = !isAuthenticated;
}

function buildActionButton(activity) {
  const registration = activity.studentRegistration;

  if (registration && (registration.status === "Confirmed" || registration.status === "Waitlisted")) {
    return `<button class="button button--secondary" type="button" id="cancel-button">Cancel registration</button>`;
  }

  if (activity.metrics.phase === "closed") {
    return `<button class="button button--ghost" type="button" disabled>Registration closed</button>`;
  }

  if (activity.metrics.phase === "waitlist") {
    return `<button class="button button--primary" type="button" id="register-button">Join waitlist</button>`;
  }

  return `<button class="button button--primary" type="button" id="register-button">Register now</button>`;
}

function renderDetailCard(viewModel) {
  const activity = viewModel.selectedActivity;

  if (!activity) {
    elements.detailCard.innerHTML = `
      <div class="empty-state">
        Select an activity card to inspect the schedule, rules and registration state.
      </div>
    `;
    return;
  }

  const registration = activity.studentRegistration;

  elements.detailCard.innerHTML = `
    <div class="detail-card__top">
      <div>
        <p class="section-kicker">Activity detail</p>
        <h2>${activity.title}</h2>
      </div>
      <span class="status-badge ${getStatusClass(activity.metrics.phase)}">${getStatusLabel(activity.metrics.phase)}</span>
    </div>

    <p class="detail-card__summary">${activity.description}</p>

    <div class="detail-card__grid">
      <div class="metric">
        <span>Coordinator</span>
        <strong>${activity.coordinator}</strong>
      </div>
      <div class="metric">
        <span>Location</span>
        <strong>${activity.location}</strong>
      </div>
      <div class="metric">
        <span>Registration deadline</span>
        <strong>${formatDate(activity.registrationDeadline)}</strong>
      </div>
      <div class="metric">
        <span>Your current state</span>
        <strong>${registration ? registration.status : "Not registered"}</strong>
      </div>
      <div class="metric">
        <span>Seats left</span>
        <strong>${activity.metrics.availableSeats}</strong>
      </div>
      <div class="metric">
        <span>Waitlist</span>
        <strong>${activity.metrics.waitlistCount}</strong>
      </div>
    </div>

    <div class="button-row">
      ${buildActionButton(activity)}
    </div>

    <div class="session-list">
      ${activity.sessions
        .map(
          (session) => `
            <article class="session-item">
              <strong>${formatDate(session.startAt)} - ${formatDate(session.endAt)}</strong>
              <span>${session.location}</span>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderMessages(messages) {
  if (!messages.length) {
    elements.messageFeed.innerHTML = `
      <div class="empty-state">System messages will appear here after registration changes.</div>
    `;
    return;
  }

  elements.messageFeed.innerHTML = messages
    .map(
      (message) => `
        <article class="message-card">
          <strong>${message.title}</strong>
          <p>${message.body}</p>
          <span class="pill ${getStatusClass(message.tone || "open")}">${formatDate(message.createdAt)}</span>
        </article>
      `,
    )
    .join("");
}

async function render() {
  const bootstrap = await service.bootstrap();
  const students = bootstrap.students;

  if (!students.length) {
    return;
  }

  if (!state.draftStudentId) {
    state.draftStudentId = students[0].id;
  }

  renderLoginSelect(students);

  if (!state.studentId) {
    setShellVisibility(false);
    return;
  }

  setShellVisibility(true);

  const viewModel = await service.buildViewModel(state);

  if (!viewModel.currentStudent) {
    state.studentId = students[0].id;
    state.draftStudentId = students[0].id;
    return render();
  }

  state.studentId = viewModel.currentStudent.id;
  state.draftStudentId = viewModel.currentStudent.id;
  state.selectedActivityId = viewModel.selectedActivity?.id || null;

  elements.currentStudentName.textContent = viewModel.currentStudent.name;
  elements.currentStudentMeta.textContent = `${viewModel.currentStudent.year} · ${viewModel.currentStudent.interests.join(", ")}`;
  renderHeroStats(viewModel.heroStats);
  renderCategorySelect(viewModel.categories, state.filters.category);
  renderActivityList(viewModel);
  renderDetailCard(viewModel);
  renderMessages(viewModel.messages);

  elements.searchInput.value = state.filters.search;
  elements.availabilitySelect.value = state.filters.availability;
}

elements.loginStudentSelect.addEventListener("change", (event) => {
  state.draftStudentId = event.target.value;
});

elements.loginButton.addEventListener("click", async () => {
  state.studentId = state.draftStudentId;
  state.selectedActivityId = null;
  await render();
});

elements.logoutButton.addEventListener("click", async () => {
  state.draftStudentId = state.studentId;
  state.studentId = null;
  state.selectedActivityId = null;
  await render();
});

elements.searchInput.addEventListener("input", async (event) => {
  state.filters.search = event.target.value;
  await render();
});

elements.categorySelect.addEventListener("change", async (event) => {
  state.filters.category = event.target.value;
  await render();
});

elements.availabilitySelect.addEventListener("change", async (event) => {
  state.filters.availability = event.target.value;
  await render();
});

elements.activityList.addEventListener("click", async (event) => {
  const trigger = event.target.closest("[data-open-id], [data-activity-id]");

  if (!trigger) {
    return;
  }

  state.selectedActivityId = trigger.getAttribute("data-open-id") || trigger.getAttribute("data-activity-id");
  await render();
});

elements.detailCard.addEventListener("click", async (event) => {
  if (event.target.id === "register-button") {
    await service.register({ activityId: state.selectedActivityId, studentId: state.studentId });
    await render();
  }

  if (event.target.id === "cancel-button") {
    await service.cancel({ activityId: state.selectedActivityId, studentId: state.studentId });
    await render();
  }
});

elements.resetButton.addEventListener("click", async () => {
  await service.resetDemoData();
  await render();
});

render();
