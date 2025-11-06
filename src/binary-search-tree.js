const {NotImplementedError} = require('../lib/errors');
const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    root() {
        if (this._root === undefined) {
            this._root = null;
        }
        return this._root;
    }

    add(data) {
        if (!this.root()) {
            this._root = new Node(data);
            return;
        }
        let current = this.root();
        while (true) {
            if (data === current.data) {
                return;
            }
            if (data < current.data) {
                if (!current.left) {
                    current.left = new Node(data);
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = new Node(data);
                    return;
                }
                current = current.right;
            }
        }
    }

    find(data) {
        let current = this.root();
        while (current) {
            if (data === current.data) {
                return current;
            }
            current = data < current.data ? current.left : current.right;
        }
        return null;
    }

    has(data) {
        let current = this.root();
        while (current) {
            if (data === current.data) {
                return true;
            }
            current = data < current.data ? current.left : current.right;
        }
        return false;
    }

    remove(data) {
        this._root = this.removeNode(this.root(), data);
    }

    removeNode(node, data) {
        if (!node) return null;
        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
        } else {
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            let maxLeft = node.left;
            while (maxLeft.right) {
                maxLeft = maxLeft.right;
            }
            node.data = maxLeft.data;
            node.left = this.removeNode(node.left, maxLeft.data);
        }
        return node;
    }

    min() {
        if (!this._root) {
            return;
        }
        let node = this._root;
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    max() {
        if (!this._root) {
            return;
        }
        let node = this._root;
        while (node.right) {
            node = node.right;
        }
        return node.data;
    }
}

module.exports = {
    BinarySearchTree
};