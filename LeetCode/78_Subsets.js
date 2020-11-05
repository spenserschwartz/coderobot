// https://leetcode.com/problems/subsets/

/*

[]  [1]   [2],[1,2]   [3],[1,3],[2,3],[1,2,3]


*/

// const subsets = nums => {
//   let result = [];
  
//   const dfs = (current, index) => {
//     result.push(current);
//     for (let i = index; i < nums.length; i += 1) {
//       dfs(current.concat(nums[i]), i + 1)
//     }
//   }

//   dfs([], 0);
//   return result;
// }

const subsets = nums => {
  const result = [];

  const dfs = (current, index) => {
    result.push(current);
    for (let i = index; i < nums.length; i += 1) {
      dfs(current.concat(nums[i]), i + 1);
    }
  }

  dfs([], 0);
  return result;
}



let nums = [1, 2, 3];
console.log(subsets(nums));