// https://leetcode.com/problems/count-and-say/

const countAndSay = n => {
  let memo = {};
  let arr = [];

  for (let digit of n) {
    if (memo[digit]) memo[digit] += 1;
    else if (Object.keys(memo).length > 0) {
      arr.push([Number(Object.keys(memo)[0]), Object.values(memo)[0]]);
      memo = {};
      memo[digit] = 1;
    } 
  }

  return memo;
}

let n = '3322251';
console.log(countAndSay(n));