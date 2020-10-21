/* Given an array nums, write a function to move all 0's to the end of it while 
   maintaining the relative order of the non-zero elements. 
   Do in-place without making a copy
    Input: [0,1,0,3,12]
    Output: [1,3,12,0,0]
*/

// ! Iterate backwards 
// const moveZeroes = nums => {
//   for (let i = nums.length - 1; i >= 0; i -= 1) {
//     if (nums[i] === 0) {
//       nums.push(0);
//       nums.splice(i,1);
//     }
//   }
//   return nums;
// }

// !Pointers
const moveZeroes = nums => {
  // pointer is index where we eventually start changing values to 0
  let pointer = 0;

  for (let i = 0; i < nums.length; i += 1) {
    // If value is NOT 0, increment pointer (meaning less zeroes to make)
    if (nums[i] !== 0) {
      nums[pointer++] = nums[i];
    }
  }

  for (let i = pointer; i < nums.length; i += 1) nums[i] = 0;

  return nums;
}

let input = [0,1,0,3,12];
console.log(moveZeroes(input));