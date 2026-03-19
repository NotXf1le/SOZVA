import { demoActivities, demoStudents, initialMessages, initialRegistrations } from "./mockData.js";

const REGISTRATION_KEY = "sozva.registrations";
const MESSAGE_KEY = "sozva.messages";

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

function readList(key, fallback) {
  const raw = window.localStorage.getItem(key);

  if (!raw) {
    return clone(fallback);
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    console.warn(`Failed to parse localStorage key ${key}. Resetting to fallback.`, error);
    return clone(fallback);
  }
}

function writeList(key, items) {
  window.localStorage.setItem(key, JSON.stringify(items));
}

export class ActivityRepository {
  async listActivities() {
    return clone(demoActivities);
  }

  async getActivityById(activityId) {
    return clone(demoActivities.find((activity) => activity.id === activityId) || null);
  }
}

export class StudentRepository {
  async listStudents() {
    return clone(demoStudents);
  }
}

export class RegistrationRepository {
  async listRegistrations() {
    return readList(REGISTRATION_KEY, initialRegistrations);
  }

  async saveRegistrations(registrations) {
    writeList(REGISTRATION_KEY, registrations);
    return clone(registrations);
  }

  async reset() {
    writeList(REGISTRATION_KEY, clone(initialRegistrations));
  }
}

export class MessageRepository {
  async listMessages() {
    return readList(MESSAGE_KEY, initialMessages);
  }

  async saveMessages(messages) {
    writeList(MESSAGE_KEY, messages);
    return clone(messages);
  }

  async reset() {
    writeList(MESSAGE_KEY, clone(initialMessages));
  }
}
