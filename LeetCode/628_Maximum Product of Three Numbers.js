// https://leetcode.com/problems/maximum-product-of-three-numbers/

// const maximumProduct = nums => {
//   const len = nums.length;
//   if (len < 3) return null;

//   nums.sort((a,b) => a - b);
//   const p1 = nums[0] * nums[1] * nums[len - 1];
//   const p2 = nums[len - 1] * nums[len - 2] * nums[len - 3];
//   return Math.max(p1, p2);
// }


const maximumProduct = nums => {
  let max1 = max2 = max3 = -Infinity;
  let min1 = min2 = Infinity;

  for (let num of nums) {
    if (num >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = num
    } else if (num >= max2) {
      max3 = max2;
      max2 = num;
    } else if (num >= max3) max3 = num;

    if (num <= min1) {
      min2 = min1;
      min1 = num;
    } else if (num <= min2) min2 = num;
  };

  const product1 = max1 * max2 * max3;
  const product2 = max1 * min1 * min2;
  return Math.max(product1, product2);
}

const nums = [-100,-98,-1,2,3,4];
console.log(maximumProduct(nums));