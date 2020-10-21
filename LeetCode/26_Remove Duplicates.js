/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
*/


const removeDuplicates = (nums) => {
  let len = 1;
  for (let j = 1; j < nums.length; j += 1) {
    if (nums[j] !== nums[j - 1]) nums[len++] = nums[j];
  }
  return len;
}


let nums = [1,1,2,2,3,3];
console.log(removeDuplicates(nums));