// https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/


// ! Logic works, timeout on LeetCode
// const smallestDivisor = (nums, threshold) => {
//   let divisor = 1;
//   while (divisorSum(nums, divisor) > threshold) divisor++;
//   return divisor;
// }

// const divisorSum = (nums, divisor) => {
//   return nums.reduce((a, b) => a + Math.ceil(b / divisor), 0);
// }

const smallestDivisor = (nums, threshold) => {
  let p1 = 1;
  let p2 = Math.max(...nums);

  while (p1 < p2) {
    const mid = Math.floor((p1 + p2) / 2);
    const sum = nums.reduce((a, b) => a + Math.ceil(b / mid), 0);

    if (sum > threshold) p1 = mid + 1;
    else p2 = mid;
  }
  return p1;
}



// const nums = [1, 2, 5, 9];
// const threshold = 6;
// console.log(divisorSum(nums,5));
// console.log(smallestDivisor(nums, threshold));

// const nums2 = [2,3,5,7,11];
// const threshold2 = 11;
// console.log(smallestDivisor(nums2, threshold2));

// const nums3 = [19]
// const threshold3 = 5;
// console.log(smallestDivisor(nums3, threshold3))