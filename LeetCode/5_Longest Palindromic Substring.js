// https://leetcode.com/problems/longest-palindromic-substring/

const isPalindrome = string => {
  return string === string.split('').reverse().join('');
}


const longestPalindrome = s => {
  let maxLength = 0;
  let maxString = '';

  for (let i = 0; i < s.length; i++) {
    let currSubString = s.substring(i, s.length);
    for (let j = s.length; j >= 0; j--) {
      let subSub = currSubString.substring(0, j);
      if (subSub.length <= 1) continue;

      if (isPalindrome(subSub) && subSub.length > maxLength) {
        maxLength = subSub.length;
        maxString = subSub;
      }
    }
  }
  return maxLength;
}

let string = 'aabab';
console.log(longestPalindrome(string));