// https://leetcode.com/problems/maximum-product-of-three-numbers/

const maximumProduct = nums => {
  const len = nums.length;
  if (len < 3) return null;

  nums.sort((a,b) => a - b);
  const p1 = nums[0] * nums[1] * nums[len - 1];
  const p2 = nums[len - 1] * nums[len - 2] * nums[len - 3];
  return Math.max(p1, p2);
}

const nums = [-100,-98,-1,2,3,4];
console.log(maximumProduct(nums));