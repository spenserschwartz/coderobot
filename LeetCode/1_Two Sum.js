/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
   You may assume that each input would have exactly one solution, and you may not use the same element twice.
   You can return the answer in any order.
   
   Input: nums = [2,7,11,15], target = 9
   Output: [0,1]
   Output: Because nums[0] + nums[1] == 9, we return [0, 1]. */

// ! Brute Force
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length - 1; i += 1) {
//     for (let j = i + 1; j < nums.length; j += 1) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
//   return [];
// }

const twoSum = (nums, target) => {
  let memo = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] in memo) return [i, memo[nums[i]]];
    else memo[target - nums[i]] = i; 
  }
}


let nums = [2,7,11,15], target = 9;
console.log(twoSum(nums, target));