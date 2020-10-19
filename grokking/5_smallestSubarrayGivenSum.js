/*
Given an array of positive numbers and a positive number ‘S’, find the length of
the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
Return 0, if no such subarray exists.
*/

const smallestSubarrayWithGivenSum = (s, arr) => {
  let windowSum = 0;
  let minLength = Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd += 1) {
    windowSum += arr[windowEnd]; // add the next element
    // Shrink the window as small as possible until windowSum < s
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

let input1 = [2, 1, 5, 2, 3, 2], s1 = 7;  // [5,2]
let input2 = [2, 1, 5, 2, 8], s2 = 7;     // [8]
let input3 = [3, 4, 1, 1, 6], s3 = 8;     // [3,4,1] or [1,1,6]

console.log(smallestSubarrayWithGivenSum(s1, input1));
console.log(smallestSubarrayWithGivenSum(s2, input2));
console.log(smallestSubarrayWithGivenSum(s3, input3));