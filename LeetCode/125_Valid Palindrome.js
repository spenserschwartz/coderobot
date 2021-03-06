/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Input: "A man, a plan, a canal: Panama"
Output: true     */

const isPalindrome = s => {
  let string = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  let halfway = Math.floor(string.length / 2);

  for (let i = 0; i <= halfway; i += 1) {
    if (string[i] !== string[string.length - 1 - i]) return false;
  }

  return true;
}

let s = "A man, a plan, a canal: Panama";
let s2 = 'ab_a'
console.log(isPalindrome(s2));