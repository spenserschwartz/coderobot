/*
Given an array of positive numbers and a positive number ‘k’, find the maximum
sum of any contiguous subarray of size ‘k’.

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].  */

// const max_sub_array_of_size_k = function(k, arr) {
//   let maxSum = 0;
//   let windowSum = 0;
//   let windowStart = 0;

//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd += 1) {
//     windowSum += arr[windowEnd];  // add the next element
//     // Slide the window if we've hit the required window size (k)
//     if (windowEnd >= k - 1) {
//       maxSum = Math.max(maxSum, windowSum);
//       windowSum -= arr[windowStart];  // subtract the element going out
//       windowStart += 1; // slide the window ahead
//     }
//   }
//   return maxSum;
// };

const max_sub_array_of_size_k = (k, arr) => {
  let windowStart = 0;
  let windowSum = 0;
  let maxSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd += 1) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k) {
      windowSum -= arr[windowStart];
      windowStart += 1;
      maxSum = Math.max(maxSum, windowSum);
    }
  }
  return maxSum;
}


let input1 = [2, 1, 5, 1, 3, 2], k1 = 3;
let input2 = [2, 3, 4, 1, 5], k2 = 2;

console.log(max_sub_array_of_size_k(k1, input1));
console.log(max_sub_array_of_size_k(k2, input2));