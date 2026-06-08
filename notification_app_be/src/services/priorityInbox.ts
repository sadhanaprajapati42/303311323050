import { Notification } from "../models/notification";
import { MaxHeap } from "../utils/heap";

export class PriorityInbox {
    private heap = new MaxHeap();

    addNotification(notification: Notification): void {
        this.heap.insert(notification);
    }

    getNextNotification(): Notification | null {
        return this.heap.extractMax();
    }

    hasNotifications(): boolean {
        return !this.heap.isEmpty();
    }
}