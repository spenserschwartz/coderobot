/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:
s = "leetcode"
return 0.

s = "loveleetcode"
return 2    */

const firstUniqChar = s => {
  const memo = {};
  const arr = []; // array of unique letters (up to that point)
  // Check each letter
  for (let letter of s) {
    if (memo[letter]) {
      if (arr.includes(letter)) arr.splice(arr.indexOf(letter), 1);
    } else {
      memo[letter] = true;
      arr.push(letter);
    }
  }
  // If no repeats, return - 1
  return arr.length === 0 ? -1 : s.indexOf(arr[0]);
}

let s = 'leetcode';
console.log(firstUniqChar(s));