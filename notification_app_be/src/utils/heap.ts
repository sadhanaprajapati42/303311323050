import { Notification } from "../models/notification";

export class MaxHeap {
    private heap: Notification[] = [];

    private parent(i: number): number {
        return Math.floor((i - 1) / 2);
    }

    private left(i: number): number {
        return 2 * i + 1;
    }

    private right(i: number): number {
        return 2 * i + 2;
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] =
        [this.heap[j], this.heap[i]];
    }

    insert(notification: Notification): void {
        this.heap.push(notification);

        let current = this.heap.length - 1;

        while (
            current > 0 &&
            this.heap[current].priority >
            this.heap[this.parent(current)].priority
        ) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }

    extractMax(): Notification | null {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) {
            return this.heap.pop()!;
        }

        const max = this.heap[0];

        this.heap[0] = this.heap.pop()!;

        this.heapify(0);

        return max;
    }

    private heapify(i: number): void {
        let largest = i;

        const left = this.left(i);
        const right = this.right(i);

        if (
            left < this.heap.length &&
            this.heap[left].priority >
            this.heap[largest].priority
        ) {
            largest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right].priority >
            this.heap[largest].priority
        ) {
            largest = right;
        }

        if (largest !== i) {
            this.swap(i, largest);
            this.heapify(largest);
        }
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    size(): number {
        return this.heap.length;
    }
}