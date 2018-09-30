function reverse(str) {
  return str.split('').reverse().join('');
}

// function reverse(str) {
//   const vet = str.split('');
//   str = '';
//   for (let i = vet.length - 1; i > -1; i--) {
//     str += vet[i];
//   }
//
//   return str;
// }

console.log(reverse('Hello World and Coders')); //sredoC dna dlroW olleH
