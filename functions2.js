/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(number) {
  if (number % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

let testNumber = 10;
let resultOdd = isOdd(testNumber);
console.log(`${testNumber} is ${resultOdd}`);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(number) {
  // Your code here
  function oddsSmallerThan(number) {
    return Math.floor(number / 2);
  }

  // Testing oddsSmallerThan
  let testOdds = 15;
  let resultOdds = oddsSmallerThan(testOdds);
  console.log(`Number of odd numbers smaller than ${testOdds}: ${resultOdds}`);
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
}
