// https://leetcode.com/problems/running-sum-of-1d-array/

const runningSum = nums => {
  for (let i = 1; i < nums.length; i += 1) {
    nums[i] += nums[i - 1];
  }
  return nums;
}

let nums = [1,2,3,4];
console.log(runningSum(nums));