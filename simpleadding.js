function simpleAdding(num) {
  if (num === 1) return 1;
  else return num + simpleAdding(num - 1);
}

// function simpleAdding(num) {
//   let result = 0;
//   for (let i = num; i > 0; i--) {
//     result += num;
//     num--;
//   }
//   return result;
// }

console.log(simpleAdding(8)); // 8+7+6+5+4+3+2+1 = 36
