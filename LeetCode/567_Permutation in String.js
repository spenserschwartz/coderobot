// https://leetcode.com/problems/permutation-in-string/
/*
Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
*/

// ! Using sort
// const checkInclusion = (s1, s2) => {
//   const s1sort = s1.split('').sort().join(''); 

//   for (let i = 0; i < s2.length - s1.length + 1; i++) {
//     if (s1.includes(s2[i])) {
//       const s2sub = s2.substring(i, i + s1.length).split('').sort().join('');
//       if (s2sub === s1sort) return true;
//     }
//   }
//   return false;
// }


let s1 = "ab", s2 = "eidbaooo";
let s3 = 'ab', s4 = 'eidboaoo';
// console.log(checkInclusion(s1, s2));
// console.log(checkInclusion(s3, s4));