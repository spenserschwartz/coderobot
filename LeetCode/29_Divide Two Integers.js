// https://leetcode.com/problems/divide-two-integers/

/*
Don't use *  /   %
Truncate towards 0
*/


const divide = (dividend, divisor) => {
  // Edge case for big number
  if (dividend === -Math.pow(2, 31) && divisor === -1) return Math.pow(2, 31) - 1;
  if (divisor === 1) return dividend;

  let count = 0;
  let isNeg = true;
  if (dividend < 0 && divisor < 0) isNeg = false;
  if (dividend > 0 && divisor > 0) isNeg = false;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  
  while (dividend - divisor >= 0) {
    count ++;
    dividend -= divisor;
  }

  return isNeg ? 0 - count : count;
}

console.log(divide(-10,-3));