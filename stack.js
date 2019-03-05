const createNode = (value) => {
    return {
        value,
        next: null
    }
};

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top.value;
    }

    push(value) {
        const newNode = createNode(value);

        if (this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
            return newNode.value;
        }

        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return newNode.value;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        const oldTop = { ...this.top };
        this.top = this.top.next;
        this.length--;
        return oldTop.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const myStack = new Stack();

myStack.push('Matrix');
myStack.push('Blade Runner');
myStack.push('Ghost in the Shell');

console.log(`Peek: ${myStack.peek()}, Length: ${myStack.length}`);

myStack.pop();

console.log(`Pop: ${myStack.pop()}, Length: ${myStack.length}`);

console.log(`Peek: ${myStack.peek()}, Length: ${myStack.length}`);

console.log(`Is empty: ${myStack.isEmpty()}, Length: ${myStack.length}`);

myStack.pop();

console.log(`Is empty: ${myStack.isEmpty()}, Length: ${myStack.length}`);