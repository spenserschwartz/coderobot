// https://leetcode.com/problems/contains-duplicate-iii/ 

// ! Doesn't pass LeetCode's weird huge integer thing
const containsNearbyAlmostDuplicate = (nums, k, t) => {
  for (let i = 0; i < nums.length - k; i++) {
    for (let j = i + 1; j <= i + k; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) return true;
    }
  }

  return false;
}