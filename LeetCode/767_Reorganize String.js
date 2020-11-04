// https://leetcode.com/problems/reorganize-string/
// ! To be finished
const reorganizeString = S => {
  let memo = {};
  for (let letter of S) memo[letter] = memo[letter] + 1 || 1;


  return memo;
}

let S = 'aab';
console.log(reorganizeString(S));