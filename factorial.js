function factorial(num) {
  return (num > 1) ? num * factorial(num-1) : 1;
}

console.log(factorial(4)); // 4*3*2*1 = 24

function recursiveFactorial(num) {
  if (num === 1) return 1;
  else return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(5)); // 5*4*3*2*1 = 120

function iterativeFactorial(num) {
  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
  }

  return result;
}

console.log(iterativeFactorial(6)); // 6*5*4*3*2*1 = 720