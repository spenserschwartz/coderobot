// https://leetcode.com/problems/3sum/

const threeSum = nums => {
  nums.sort((a,b) => a - b)
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // If smallest number > 0, we're never hitting 0, so return result right away
    if (nums[i] > 0) return result;
    if (nums[i] === nums[i - 1]) continue;  // prevent duplicates

    let pI1 = i + 1;            // pointer Index 1
    let pI2 = nums.length - 1;  // pointer Index 2

    while (pI1 < pI2) {
      let a = nums[pI1], b = nums[pI2];
      const sum = nums[i] + a + b;

      if (sum === 0) result.push([nums[i], a, b]);

      
    }
  }
  return result;
}

let nums1 = [-1,0,1,2,-1,-4];
let nums2 = [0,0,0,0]
console.log(threeSum(nums2));