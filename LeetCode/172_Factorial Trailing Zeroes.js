// https://leetcode.com/problems/factorial-trailing-zeroes/

const trailingZeroes = n => {
  let numOfZero = 0;

  while (n >= 5) {
    numOfZero += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }

  return numOfZero;
}

console.log(trailingZeroes(30));