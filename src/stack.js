const {NotImplementedError} = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
    push(value) {
        if (!this.node) {
            this.node = [];
        }
        this.node.push(value);
    }

    pop() {
        // if (this.node) {
        //     return this.node.pop();
        // } else {
        //     return undefined;
        // }
        return this.node ? this.node.pop() : undefined;
    }

    peek() {
        if (!this.node || this.node.length === 0) {
            return undefined;
        }
        return this.node[this.node.length - 1];
    }
}

module.exports = {
    Stack,
};
