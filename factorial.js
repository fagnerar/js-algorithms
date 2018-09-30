function firstFactorial(num) {
  return (num > 1) ? num * firstFactorial(num-1) : 1;
}

console.log(firstFactorial(4)); // 4*3*2*1 = 24
