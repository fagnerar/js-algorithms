function checkNums(num1, num2) {
  return num1 === num2 ? '-1' : num1 < num2 ? 'true' : 'false';
}

// function checkNums(num1,num2) {
//  if (num2 === num1) return '-1';
//  else if (num2 > num1) return 'true';
//  else return 'false';
// }

// keep this function call here
console.log(checkNums(67, 67)); // -1
