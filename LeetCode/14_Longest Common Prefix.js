/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.   */

const longestCommonPrefix = strings => {
  // Sort the array and compare the first and the last 
  strings.sort();

  let i = 0;
  while (i < strings[0].length && i < strings[strings.length - 1].length) {
    
  }
}