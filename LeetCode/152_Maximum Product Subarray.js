// https://leetcode.com/problems/maximum-product-subarray/

const maxProduct = nums => {
  let len = nums.length;
  if (!len) return 0;
  let curMax = nums[0];
  let curMin = nums[0];
  let max = nums[0];


  for (let i = 1; i < len; i++) {
      const num = nums[i];
      const minProd = curMin * num;
      const maxProd = curMax * num;

      curMax = Math.max(num, minProd, maxProd);
      curMin = Math.min(num, minProd, maxProd);
      max = Math.max(max, curMax);
  }
  return max;
}