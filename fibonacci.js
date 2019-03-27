function fibonacciRecursive(num) {
    if (num < 2) {
        return num;
    } else {
        return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
    }
}

function fibonacciIterative(num) {
    if (num < 2) {
       return num;
    }

    let minus2 = 0;
    let minus1 = 1;
    let result = 1;


    for (let i = 3; i <= num; i++) {
        minus2 = minus1;
        minus1 = result;
        result = minus1 + minus2;
    }

    return result;
}

console.log(fibonacciRecursive(0)); // 0
console.log(fibonacciRecursive(1)); // 1
console.log(fibonacciRecursive(2)); // 1
console.log(fibonacciRecursive(3)); // 2
console.log(fibonacciRecursive(4)); // 3
console.log(fibonacciRecursive(5)); // 5
console.log(fibonacciRecursive(6)); // 8
console.log(fibonacciRecursive(7)); // 13
console.log(fibonacciRecursive(8)); // 21
console.log(fibonacciRecursive(9)); // 34
console.log(fibonacciRecursive(10)); // 55
console.log(fibonacciRecursive(11)); // 89

console.log(fibonacciIterative(0)); // 0
console.log(fibonacciIterative(1)); // 1
console.log(fibonacciIterative(2)); // 1
console.log(fibonacciIterative(3)); // 2
console.log(fibonacciIterative(4)); // 3
console.log(fibonacciIterative(5)); // 5
console.log(fibonacciIterative(6)); // 8
console.log(fibonacciIterative(7)); // 13
console.log(fibonacciIterative(8)); // 21
console.log(fibonacciIterative(9)); // 34
console.log(fibonacciIterative(10)); // 55
console.log(fibonacciIterative(11)); // 89