// Create a LinkedList

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let next = {
            value,
            next: null
        }

        this.tail.next = next;

        this.tail = next;

        this.length++;
    }

    prepend(value) {
        const head = {
            value,
            next: this.head
        }

        this.head = head;
        this.length++;
    }

    insert(index, value) {
        if (index > this.length - 1) {
            return this.append(value);
        }

        if (index <= 0) {
            return this.prepend(value);
        }

        const newNode = this.createNode(value);
        const before = this.traverseToIndex(index - 1);
        const head = before.next;

        before.next = newNode;
        newNode.next = head;

        this.length++;
    }

    remove(index) {
        if (index > this.length - 1 || index < 0) {
            return console.log('Can\'t REMOVE: index out of bounds');
        }

        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        const before = this.traverseToIndex(index - 1);
        before.next = before.next.next;

        if (index === this.length - 1) {
            this.tail = before;
        }

        this.length--;
    }

    createDoublyLinkedList() {
        let node = this.head;
        let prev = null;

        node.prev = null;

        while (node.next !== null) {
            prev = node;
            node = node.next;
            node.prev = prev;
        }
        
    }

    reverse() {
        if (this.length === 1) {
            return;
        }

        this.tail = this.head;

        let prev = null;
        let node = this.head;
        let next = node.next;
        node.next = prev;

        while (next !== null) {
            prev = node;
            node = next;
            next = node.next;
            node.next = prev;
        }

        this.head = node;
    }

    printList() {
        let head = this.head;

        while (head !== null) {
            console.log(head.value);
            head = head.next;
        }
    }

    traverseToIndex(index) {
        let node = this.head;

        for (let i = 0; i < index; i++) {
            node = node.next;
        }

        return node;
    }

    createNode(value) {
        return {
            value,
            next: null
        }
    }
}

const linkedList = new LinkedList('Aristotle');

linkedList.append('Kant');
linkedList.append('Plato');
linkedList.append('Confucius');

linkedList.prepend('Hume');
linkedList.prepend('Descartes');

linkedList.insert(2, 'Socrates');

linkedList.remove(6);

linkedList.printList();

linkedList.reverse();

linkedList.printList();