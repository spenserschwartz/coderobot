/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6] */

const merge = (nums1, m, nums2, n) => {
  // Iterate through second array. If the value is greater than index value in nums1, move on
  //  If not, splice

  if (!nums2.length) return nums1;
  
  nums1 = nums1.slice(0, m);

  let index1 = 0;
  for (let num of nums2) {
    while (num > nums1[index1] && index1 < nums1.length) index1 += 1;
    if (nums1[index1 + 1]) nums1.splice(index1 + 1, 0, num);
    else nums1.push(num)
  }

  return nums1;
}

// let nums1 = [1,2,3,0,0,0], m = 3
// let nums2 = [2,5,6],       n = 3

// let nums1 = [0], m = 0, nums2 = [1], n = 1

// console.log(merge(nums1, m, nums2, n));

/*
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/


// const merge = (nums1, m, nums2, n) => {
//   // Take out those zeroes
//   let takeOutZeroes = nums1.length - m;
//   while (takeOutZeroes > 0) {
//     nums1.pop();
//     takeOutZeroes -= 1;
//   }

//   // Pointer increments for nums1 and nums2
//   let i1 = 0, i2 = 0;
//   while (i1 < nums1.length && i2 < nums2.length) {
//     if (nums1[i1] > nums2[i2]) {
//       nums1.splice(i1, 0, nums2[i2]);
//       i2 += 1;
//     } else {
//       i1 += 1
//     }
//   }

//   while (i2 < nums2.length) {
//     nums1.push(nums2[i2]);
//     i2 += 1;
//   }

//   return nums1;
// }

let nums1 = [1,2,3,0,0,0], m = 3
let nums2 = [2,5,6],       n = 3
console.log(merge(nums1,m,nums2,n));

