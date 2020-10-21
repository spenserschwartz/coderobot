/* Given two arrays, write a function to compute their intersection.

    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2,2]   */


const intersect = (nums1, nums2) => {
  const memo = {};
  const result = [];

  nums1.forEach(el => {
    memo[el] ? memo[el] += 1 : memo[el] = 1;
  })

  nums2.forEach(el => {
    if (memo[el] > 0) {
      result.push(el);
      memo[el] -= 1;
    }
  })

  return result;
}

console.log(intersect([1,3, 2, 2,1], [2]));