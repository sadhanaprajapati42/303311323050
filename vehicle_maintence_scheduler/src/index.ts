import { PriorityInbox } from "./services/priorityInbox";

const inbox = new PriorityInbox();

inbox.addNotification({
    id: 1,
    title: "Exam Alert",
    message: "Tomorrow is DSP Exam",
    priority: 10,
    timestamp: Date.now()
});

inbox.addNotification({
    id: 2,
    title: "Holiday Notice",
    message: "College closed on Friday",
    priority: 3,
    timestamp: Date.now()
});

inbox.addNotification({
    id: 3,
    title: "Placement Drive",
    message: "Google Hiring Event",
    priority: 8,
    timestamp: Date.now()
});

while (inbox.hasNotifications()) {
    console.log(inbox.getNextNotification());
}