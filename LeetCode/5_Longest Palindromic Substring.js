// https://leetcode.com/problems/longest-palindromic-substring/

// ! Brute Force
// const isPalindrome = string => {
//   return string === string.split('').reverse().join('');
// }


// const longestPalindrome = s => {
//   let maxLength = 0;
//   let maxString = '';

//   for (let i = 0; i < s.length; i++) {
//     let currSubString = s.substring(i, s.length);
//     for (let j = s.length; j >= 0; j--) {
//       let subSub = currSubString.substring(0, j);
//       if (subSub.length <= 1) continue;

//       if (isPalindrome(subSub) && subSub.length > maxLength) {
//         maxLength = subSub.length;
//         maxString = subSub;
//       }
//     }
//   }
//   return maxLength;
// }

// Optimize
const longestPalindrome = s => {
  if (s.length == 0) return '';
  let [startIndex, offset] = [0, 1];

  for (let i = 0; i < s.length-1; i++) {
      let [p1, p2] = [i, i];

      // expand to cover contiguous repeated chars...
      while (p1 >= 0 && p2 < s.length-1 && s[p1] === s[p2+1]) p2 ++;

      // expand around a center window (p1 -> p2)
      while (p1 >= 0 && p2 < s.length && s[p1] === s[p2]) {
          if (p2 + 1 - p1 > offset) [startIndex, offset] = [p1, p2 + 1 - p1];
          p1 -= 1; p2 += 1;
      }
  }
  return s.substring(startIndex, startIndex + offset);
};



let string = 'aabab';
console.log(longestPalindrome(string));