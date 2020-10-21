/* Given an array, rotate the array to the right by k steps, where k is non-negative.
   
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]  */


const rotate = (nums, k) => {
  while (k > 0) {
    nums.unshift(nums.pop());
    k -= 1;
  }
  return nums;
}

// ! More space used
// const rotate = (nums, k) => {
//   if (k === 0) return nums;
//   let move = k % nums.length + 1;
//   let rotatedNums = nums.map((el, i) => nums[(i + move) % nums.length]);
//   return rotatedNums;
// }


let nums = [1,2,3,4,5,6,7], k = 3;
console.log(rotate(nums, k));