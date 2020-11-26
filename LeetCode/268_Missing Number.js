// https://leetcode.com/problems/missing-number/

// !With helper, easier to read
const helper = n => {
  return 0.5 * (n - 1) * n;
}

// const missingNumber = nums => {
//   let len = nums.length;

//   const sum = nums.reduce((a, b) => a + b);


//   return helper(len + 1) - sum;
// }


// !More compact

const missingNumber = nums => {
  return 0.5 * (nums.length) * (nums.length + 1) - nums.reduce((a,b) => a + b);
}



console.log(missingNumber([9,6,4,2,3,5,7,0,1]))