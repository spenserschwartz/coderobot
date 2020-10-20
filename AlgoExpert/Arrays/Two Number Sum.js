function twoNumberSum(array, targetSum) {
  const memo = {};

  // Iterate through the array. If the sought value exists,
  //   return array of the two values that add to the targetSum
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] in memo) return [array[i], memo[array[i]]];
    else memo[(targetSum - array[i])] = array[i];
  }

  // If no two numbers add to sum, return empty array
  return [];
}

let input = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

console.log(twoNumberSum(input, targetSum));