// https://leetcode.com/problems/number-of-good-pairs/submissions/

var numIdenticalPairs = function(nums) {
  const map = {};
  let count = 0;
  nums.forEach(num => {
      if (map[num]) {
          count += map[num];
          map[num]++;
      } else {
          map[num] = 1;
      }
  })
  return count;
};