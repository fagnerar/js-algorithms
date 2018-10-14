/*
Arrange the digits in descending order and in
ascending order (adding zeroes to fit it to a
4-digit number), and subtract the smaller
number from the bigger number. Then repeat
the previous step. Performing this routine
will always cause you to reach a fixed number: 6174.
Then performing the routine on 6174 will always
give you 6174 (7641 - 1467 = 6174). Your program
should return the number of times this routine
must be performed until 6174 is reached. For example:
if num is 3524 your program should return 3 because
of the following steps: (1) 5432 - 2345 = 3087,
(2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.
*/

function kaprekarsConstant(num) { // 6174
  let count = 0;

  while (num !== 6174) {
    const asc = num.toString().split('').sort().join('');
    const desc = num.toString().split('').sort(function(a, b) {
      return b - a;
    }).join('');

    num = parseInt(desc) - parseInt(asc);

    if (num.toString().length < 4) {
      num *= 10;
    }

    count += 1;
  }

  return count;
}

console.log(kaprekarsConstant(9831)); // 7
