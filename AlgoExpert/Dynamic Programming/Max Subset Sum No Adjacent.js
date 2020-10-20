/* Write a function that takes in an array of positive integers
    and returns the maximum sum of non-adjacent elements in the array.
    If a sum can't be generated, function should return 0 */

function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];

  // maxSums represents the max value that can be achieved at that index value
  // E.g. at index 2, the max value is either going to be (120 + 75) or 105, so 195
  //  at index 3, the max value is either going to be (105 + 80) or 195, so 195
  const maxSums = array.slice();  // copy of the array
  maxSums[1] = Math.max(array[0], array[1]);  // index 1 of maxSums is larger of 0 or 1 index value

  for (let i = 2; i < array.length; i += 1) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
    console.log(maxSums);
  }

  return maxSums[maxSums.length - 1];
}

let input = [75, 105, 120, 80, 90, 135];  // Answer = 330   75 + 120 + 135
console.log(maxSubsetSumNoAdjacent(input));


