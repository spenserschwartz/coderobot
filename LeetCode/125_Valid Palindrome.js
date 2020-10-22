/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Input: "A man, a plan, a canal: Panama"
Output: true     */

const isPalindrome = s => {
  let string = s.replace(/[^\w\!]/g, '').toLowerCase();

  let halfway = Math.floor(string / 2);

  for (let i = 0; i <= halfway; i += 1) {
    console.log(string[i]);
    console.log(string[string.length - 1 - i]);
    if (string[i] !== string[string.length - 1 - i]) return false;
  }

  return true;
}

let s = "A man, a plan, a canal: Panamaf";
console.log(isPalindrome(s));