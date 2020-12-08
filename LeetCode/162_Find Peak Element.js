// https://leetcode.com/problems/find-peak-element/

// ! Brute Force
// const findPeakElement = nums => {
//   if (nums.length === 1) return 0;

//   for (let i = 0; i < nums.length; i++) {
//     // Ends of array
//     if ( (i === 0 && nums[i] > nums[i + 1]) || (i === nums.length - 1 && nums[i] > nums[i - 1]) ) return i;
//     else if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) return i;
//   }
//   return -1;  // No peak
// }


// ! Oddly optimized
const findPeakElement = nums => {
  return nums.indexOf(Math.max(...nums));
}

const nums = [1, 2, 3];
console.log(findPeakElement(nums));