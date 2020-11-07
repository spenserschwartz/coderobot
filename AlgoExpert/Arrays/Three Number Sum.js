//! Passes on AlgoExpert, but not LeetCode; LeetCode allows duplicate numbers

// const threeNumberSum = (array, targetSum) => {
//   // Sort the array
//   array.sort((a,b) => a - b);
//   const result = [];

//   for (let i = 0; i < array.length - 2; i++) {
//     let left = i + 1;
//     let right = array.length - 1;

//     while (left < right) {
//       const currentSum = array[i] + array[left] + array[right];

//       if (currentSum === targetSum) {
//         result.push([array[i], array[left], array[right]]);
//         left++;
//         right--;
//       } else if (currentSum < targetSum) left++;
//       else if (currentSum > targetSum) right--;
//     }
//   }
//   return result;
// }


const threeNumberSum = (array, targetSum) => {
  array.sort((a,b) => a - b);
  const result = [];

  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] > targetSum) return result; // We're never hitting targetSum again if that's the number we start with
    if (array[i] === array[i - 1]) continue;  // Prevent dupe triples

    let left = i + 1;
    let right = array.length - 1;

    for (let j = i + 1, k = array.length - 1; j < k;) {
      let num1 = array[i], num2 = array[j], num3 = array[k];
      let currentSum = num1 + num2 + num3;

      if (currentSum === targetSum) {
        result.push([num1, num2, num3]);
        j += 1;
        k -= 1;
        while (j < k && array[j] === array[j - 1]) j++;
        while (j < k && array[k] === array[k + 1]) k--;
      } else if (currentSum > targetSum) k--;
      else if (currentSum < targetSum) j++;
    }
  }
  return result;
}

let array = [12, 3, 1, 2, -6, 5, -8, 6];
let targetSum = 0;

console.log(threeNumberSum(array, targetSum));