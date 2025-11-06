const {NotImplementedError} = require('../lib/errors');
const {ListNode} = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    getUnderlyingList() {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        const result = { value: current.value, next: null };
        let prev = result;
        current = current.next;
        while (current) {
            prev.next = { value: current.value, next: null };
            prev = prev.next;
            current = current.next;
        }
        return result;
    }

    enqueue(value) {
        const node = new ListNode(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node
        }
    }

    dequeue() {
        if (!this.head) {
            return undefined;
        }
        const current = this.head;
        this.head = current.next;
        if (!this.head) {
            this.tail = null;
        }
        return current.value;
    }
}

module.exports = {
    Queue
};
