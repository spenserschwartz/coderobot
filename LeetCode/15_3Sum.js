// https://leetcode.com/problems/3sum/


// ! The second for loop may be harder to put together on the fly
// const threeSum = nums => {
//   nums.sort((a,b) => a - b)
//   const result = [];

//   for (let i = 0; i < nums.length - 2; i++) {
//     // If smallest number > 0, we're never hitting 0, so return result right away
//     if (nums[i] > 0) return result;
//     if (nums[i] === nums[i - 1]) continue;  // prevent duplicates

//     let pI1 = i + 1;            // pointer Index 1
//     let pI2 = nums.length - 1;  // pointer Index 2

//     for (let j = i + 1, k = nums.length - 1; j < k;) {
//       let num1 = nums[i], num2 = nums[j], num3 = nums[k];
//       let sum = num1 + num2 + num3;

//       if (sum === 0) {
//         result.push([num1, num2, num3]);
//         j++;
//         k--;
//         while (j < k && nums[j] === nums[j - 1]) j++;
//         while (j < k && nums[k] === nums[k + 1]) k--;
//       } else if (sum > 0) k--;
//       else j++;
//     }
//   }
//   return result;
// }


// ! Easier to understand
const threeSum = nums => {
  nums.sort((a, b) => a - b); // Sort the array
  const result = [];          // Result array for triples to be pushed to

  // Iterate through the array with enough space for three digits to be summed
  for (let i = 0; i < nums.length - 2; i += 1) {
    if (nums[i] > 0) return result; // Never hitting targetSum again
    if (nums[i] === nums[i - 1]) continue; // Prevent dupes

    let j = i + 1, k = nums.length - 1;

    while (j < k) {
      let num1 = nums[i], num2 = nums[j], num3 = nums[k];
      let currentSum = num1 + num2 + num3;

      if (currentSum === 0) {
        result.push([num1, num2, num3]);
        j += 1;
        k -= 1;
        while (j < k && nums[j] === nums[j - 1]) j += 1;
        while (j < k && nums[k] === nums[k + 1]) k -= 1;
      } else if (currentSum > 0) k -= 1;
      else if (currentSum < 0) j += 1;
    }
  }
  return result;
}

let nums1 = [-1,0,1,2,-1,-4];
let nums2 = [0,0,0,0];
console.log(threeSum(nums1));