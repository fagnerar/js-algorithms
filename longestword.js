function longestWord(sen) {
  var arr = sen.match(/[a-z]+/gi);

  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  return sorted[0];
}

// function longestWord(sen) {
//   const words = sen.split(' ');
//   let max = 0;
//
//   for (let i = 0; i < words.length; i++) {
//     const numLetters = countLetters(words[i]);
//     if (max < numLetters) {
//       sen = words[i];
//       max = numLetters;
//     }
//   }
//
//   return sen;
// }
//
// function countLetters(word) {
//   const alphabet = getAlphabet();
//   const chars = word.split('');
//   let letters = 0;
//   for (let i = 0; i < chars.length; i++) {
//     if ( alphabet.indexOf(chars[i]) > -1 ) {
//       letters += 1;
//     }
//   }
//   return letters;
// }
//
// function getAlphabet() {
//   return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// }

console.log( longestWord('the $$$longest# word is darthvader') );
