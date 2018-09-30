function letterChanges(str) {
  str = str.replace(/[a-zA-Z]/g, function(ch) {
    if (ch === 'z') return 'a';
    else if (ch === 'Z') return 'A';
    else return String.fromCharCode(ch.charCodeAt(0) + 1);
  });

  return str.replace(/[aeiou]/g, function(ch) {
    return ch.toUpperCase();
  });
}

// function letterChanges(str) {
//   let arr = str.split('');
//   let alpha = 'abcdefghijklmnopqrstuvwxyz';
//
//   for (let i = 0; i < arr.length; i++) {
//     let alphaIndex = alpha.indexOf(arr[i]);
//
//     if (alphaIndex === -1) {
//       //nothing happens
//     } else if (alphaIndex === alpha.length - 1) {
//       arr[i] = alpha[0];
//     } else {
//       arr[i] = alpha[alphaIndex + 1];
//     }
//
//     let isVogal = (arr[i] === 'a'||
//                   arr[i] === 'e'||
//                   arr[i] === 'i'||
//                   arr[i] === 'o'||
//                   arr[i] === 'u');
//     if (isVogal) {
//       arr[i] = arr[i].toUpperCase();
//     }
//   }
//
//   return arr.join('');
// }

console.log( letterChanges('fun times!*3') ); // gvO Ujnft!*3
