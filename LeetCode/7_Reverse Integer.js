/*
Given a 32-bit signed integer, reverse digits of an integer.
Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21    */

const reverse = x => {
  const sign = Math.sign(x);
  x = Number(Math.abs(x).toString().split('').reverse().join('')) * sign;
  
  return x < Math.pow(2, 31) && x >= -Math.pow(2, 31) ? x : 0;
}

let input = -123;
console.log(reverse(input));