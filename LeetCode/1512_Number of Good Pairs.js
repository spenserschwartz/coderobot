// https://leetcode.com/problems/number-of-good-pairs/submissions/


const numIdenticalPairs = nums => {
  let count = 0;
  const memo = {};

  nums.forEach(num => {
    if (memo[num]) {
      count += memo[num];
      memo[num] += 1;
    } else memo[num] = 1
  })

  return count;
}

let nums = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums));