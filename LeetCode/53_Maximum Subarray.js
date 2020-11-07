// https://leetcode.com/problems/maximum-subarray/

// !First way
// const maxSubArray = nums => {
//   if (nums.length === 0) return;
//   if (nums.length === 1) return nums[0];
//   let max = nums[0];
//   let cV = nums[0];

//   for (let i = 1; i < nums.length; i += 1) {
//     if (cV < 0) cV = nums[i];
//     else cV += nums[i];

//     if (cV > max) max = cV;
//   }

//   return max;
// }

// ! Faster & cleaner
const maxSubArray = nums => {
  let max = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    max = Math.max(currSum, max);
  }

  return max;
}


let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));