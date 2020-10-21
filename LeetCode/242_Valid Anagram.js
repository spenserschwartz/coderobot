/*
Given two strings s and t , write a function to determine if t is an anagram of s.
Input: s = "anagram", t = "nagaram"
Output: true   */

// !Using sort method
// const isAnagram = (s,t) => {
//   return s.split('').sort().join('') === t.split('').sort().join('');
// }

// !Memo
const isAnagram = (s,t) => {
  const memo = {};
  for (let letter of s) memo[letter] ? memo[letter] += 1 : memo[letter] = 1;

  for (let letter of t) {
    if (!memo[letter]) return false;
    else memo[letter] -= 1;

    if (memo[letter] === 0) delete memo[letter];
  }

  return Object.keys(memo).length < 1;
}


let s = "anagramf", t = "fnagaram";
console.log(isAnagram(s,t));