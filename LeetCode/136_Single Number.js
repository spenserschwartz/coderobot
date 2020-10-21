/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?  */

// BRUTE FORCE
// const singleNumber = (nums) => {
//   for (let num of nums) {
//     if (nums.indexOf(num) === nums.lastIndexOf(num)) return num;
//   }
// };


// XOR Operator ^
// Returns a 1 in each bit position where there's only one 1, but not both operands
const singleNumber = (nums) => {
  return nums.reduce((a,b) => a ^ b);
}