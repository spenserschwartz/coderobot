/*Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself. 

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123. 
*/

// !BRUTE FORCE
// const plusOne = (digits) => {
//   return (Number(digits.join('')) + 1).toString().split('');
// }

const plusOne = digits => {
  // Iterate through the array backwards. If the current digit is 9, change to 0 and continue with the iteration
  //   Otherwise, just increment the current index value and return digits
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    if (digits[i] === 9) digits[i] = 0;
    else {
      digits[i] += 1;
      return digits;
    }

    // If proceeded through all the digits with 9s, add a 1 to the front of digits e.g. 9 >> 0 >> put 1 in front of 0
    digits.unshift(1);
    return digits;
  }
}

let digits = [1,2,3];
console.log(plusOne(digits));