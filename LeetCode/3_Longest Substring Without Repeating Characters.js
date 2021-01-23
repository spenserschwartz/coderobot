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
  let longestString = '';
  let maxLength = 0;

  // Iterate over string. If the letter is already in the longestString, mutate longestString to start after the repeat letter
  for (let letter of s) {
    if (longestString.includes(letter)) longestString = longestString.substr(longestString.indexOf(letter) + 1);

    // Add the iterated letter to the longestString and update the maxLength
    longestString += letter;
    maxlength = Math.max(maxLength, longestString.length);
  }
  return maxLength;
}