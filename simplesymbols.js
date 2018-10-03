/*
The str parameter will be composed of + and = symbols with several
letters between them (ie. ++d+===+c++==a) and for the string to be
true each letter must be surrounded by a + symbol. So the string
to the left would be false. The string will not be empty and will
have at least one letter.
*/

function simpleSymbols(str) {
  return ('=' + str + '=').match(/([^+][a-z])|([a-z][^+])/gi) === null;
}

// function simpleSymbols(str) {
//   let patt = /[a-z]/gi;
//
//   while (match = patt.exec(str)) {
//     const index = match.index;
//     const rule  = index === 0 ||
//                   index === str.length ||
//                   str.substr(index - 1, 1) !== '+' ||
//                   str.substr(index + 1, 1) !== '+';
//
//     if (rule) return false;
//   }
//
//   return true;
// }

console.log(simpleSymbols('+d+=3=+s+')); //true
