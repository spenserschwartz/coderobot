// https://leetcode.com/problems/remove-element/



const removeElement = (nums, val) => {
  let i = 0;

  while (i < nums.length) {
    nums[i] === val ? nums.splice(i, 1) : i += 1;
    console.log(nums);
  }
  return nums.length;
}

// ! Seungho
// const removeElement = (nums, val) => {
//   let p1 = 0;
//   for (let i = 0; i < nums.length; i +=1 ) {
//     if (nums[i] !== val) {
//       nums[p1] = nums[i];
//       console.log(nums);
//       p1 += 1;
//     }
//   }
//   return p1;
// }


//console.log(removeElement([0,1,2,2,3,0,4,2], 2));
console.log(removeElement([3,2,2,3], 3));