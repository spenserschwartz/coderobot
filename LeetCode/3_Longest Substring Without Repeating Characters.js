// https://leetcode.com/problems/longest-substring-without-repeating-characters/


// ! Sliding Window
// const lengthOfLongestSubstring = s => {
//   const map = {};
//   let max = 0;
//   let p1 = 0, p2 = 0;

//   while (p2 < s.length) {
//     if (map[s[p2]]) {
//       map[s[p1]] = null;
//       p1++;
//     } else {
//       map[s[p2]] = true;
//       max = Math.max(max, p2 - p1 + 1)
//       p2++;
//     }
//   }
//   return max;
// }

const lengthOfLongestSubstring = s => {
  let longString = '';
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (longString.includes(s[i])) longString = longString.substr(longString.indexOf(s[i]) + 1);

    longString += s[i];
    maxLength = Math.max(maxLength, longString.length);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));