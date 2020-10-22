/*
Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
You may assume all the characters consist of printable ascii characters.

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]   */

// ! Is done in place with reverse method
// const reverseString = string => {
//   return string.reverse();
// }

const reverseString = stringArray => {
  let count = stringArray.length;
  
  while (count > 0) {
    stringArray.splice(stringArray.length - count, 0, stringArray.pop());
    count -= 1;
  }
  return stringArray;
}

let input = ["h","e","l","l","o"];
console.log(reverseString(input));