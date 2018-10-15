/*
Using the JavaScript language, have the function
chessboardTravel(str) read str which will be a
string consisting of the location of a space on a
standard 8x8 chess board with no pieces on the
board along with another space on the chess board.
The structure of str will be the following:
"(x y)(a b)" where (x y) represents the position
you are currently on with x and y ranging from
1 to 8 and (a b) represents some other space on
the chess board with a and b also ranging from
1 to 8 where a > x and b > y. Your program should
determine how many ways there are of traveling
from (x y) on the board to (a b) moving only up and
to the right. For example: if str is (1 1)(2 2)
then your program should output 2 because there are
only two possible ways to travel from space (1 1)
on a chessboard to space (2 2) while making only
moves up and to the right.
*/

function chessboardTravel(str) {
  const xyab = str.match(/\d/g);

  const dx = parseInt(xyab[2]) - parseInt(xyab[0]) + 1;
  const dy = parseInt(xyab[3]) - parseInt(xyab[1]) + 1;

  const vet = Array(dy).fill(1);
  const vlen = vet.length;

  let counter = 0;

  while (vet[0] <= dx) {
    let pos = vet.indexOf(dx);

    if (pos > -1) {
      vet[pos - 1] += 1;
      vet.fill(vet[pos - 1], pos);
    } else {
      vet[vlen - 2] += 1;
      vet[vlen - 1] = vet[vlen - 2];
    }

    counter++;
  }

  return counter;
}
  // | 41  42  43 |
  // | 31  32  33 |
  // | 21  22  23 |
  // | 11  12  13 |
  //
  // [1, 1, 1, 1]
  // [1, 1, 2, 2]
  // [1, 1, 3, 3]
  // [1, 2, 2, 2]
  // [1, 2, 3, 3]
  // [1, 3, 3, 3]
  // [2, 2, 2, 2]
  // [2, 2, 3, 3]
  // [2, 3, 3, 3]
  // [3, 3, 3, 3]


console.log(chessboardTravel('(2 2)(4 3)'));
