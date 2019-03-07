const createNode = (value) => {
    return {
        value,
        left: null,
        right: null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.isEmpty()) {
            this.root = createNode(value);
            return this.root.value;
        }

        let current = this.root;

        while (current) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = createNode(value);
                    return value;
                }

                current = current.left;
            } else {
                if (!current.right) {
                    current.right = createNode(value);
                    return value;
                }

                current = current.right;
            }
        }
    }

    lookup(value) {
        let current = this.root;

        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return current;
            }
        }

        return null;
    }

    remove(value) {
        if (!this.root) return false;

        let current = this.root;
        let prev = null;
        let successor = null;
        let prevSuccessor = null;

        while (current && current.value !== value) {
            prev = current;

            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            }
        }

        if (!current) return false;
        
        if (!current.right) {
            successor = current.left;
            
        } else {
            successor = current.right;
            while (successor.left) {
                prevSuccessor = successor;
                successor = successor.left;
            }
        }

        if (prev.left === current) prev.left = successor;
        else prev.right = successor;

        if (!current.right) {
            return this;

        } else if (!current.right.left) {
            successor.left = current.left;
            return this;

        } else {
            prevSuccessor.left = successor.right;
            successor.left = current.left;
            successor.right = current.right;
        }

        return this;
    }

    isEmpty() {
        return this.root === null;
    }
}

const bst = new BinarySearchTree();
// bst.insert(9);
// bst.insert(4);
// bst.insert(20);
// bst.insert(1);
// bst.insert(6);
// bst.insert(15);
// bst.insert(170);

// console.log(bst.root);
// console.log(bst.lookup(15));

bst.insert(46);
bst.insert(8);
bst.insert(6);
bst.insert(20);
bst.insert(15);
bst.insert(10);
bst.insert(12);

console.log(bst.root);

bst.remove(8);

console.log(bst.root);
