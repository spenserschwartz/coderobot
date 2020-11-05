/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.   */

const longestCommonPrefix = strings => {
  if (!strings || strings.length === 0) return '';

  let prefix = strings.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0,i);
  })

  return prefix;
}

let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));