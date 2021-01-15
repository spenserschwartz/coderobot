// https://leetcode.com/problems/power-of-four/

const isPowerOfFour = n => {
  while (n > 1) {
    n /= 4;
    if (!Number.isInteger(n)) return false;
  }

  return n === 1;
}