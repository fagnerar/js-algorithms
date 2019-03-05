const createNode = (value) => {
    return {
        value,
        next: null
    }
}

class Queue {
    constructor() {
        this.first = null,
        this.last = null,
        this.length = 0
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.first.value;
    }

    enqueue(value) {
        const newNode = createNode(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return newNode.value;
    }

    dequeue() {
        if (this.isEmpty()) return null;

        if (this.first === this.last) {
            this.last = null;
        }

        const oldFirst = {...this.first};
        this.first = this.first.next;
        this.length--;
        return oldFirst.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const myQueue = new Queue();

myQueue.enqueue('Matrix');
myQueue.enqueue('Blade Runner');
myQueue.enqueue('Ghost in the Shell');

console.log(`Peek: ${myQueue.peek()}, Length: ${myQueue.length}`);

myQueue.dequeue();

console.log(`Dequeue: ${myQueue.dequeue()}, Length: ${myQueue.length}`);

console.log(`Peek: ${myQueue.peek()}, Length: ${myQueue.length}`);

console.log(`Is empty: ${myQueue.isEmpty()}, Length: ${myQueue.length}`);

myQueue.dequeue();

console.log(`Is empty: ${myQueue.isEmpty()}, Length: ${myQueue.length}`);