class Stack {
    constructor() {
        this.array = [];
        this.length = 0;
    }

    peek() { return this.array[this.array.length - 1]; }

    push(value) {
        this.length++;
        return this.array.push(value);
    }

    pop() {
        this.length--;
        return this.array.pop();
    }

    isEmpty() { return this.array.length === 0; }
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