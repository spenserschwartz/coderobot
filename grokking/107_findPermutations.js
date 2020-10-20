const findPermutations = (array) => {
  const result = []; // result array for permutations to be pushed to
  permutationsHelper(array, [], result);  // Run the helper function
  return result;
};

const permutationsHelper = (array, currentPermutation, result) => {
  // Once there's no more values in the array (& there's a currentPermutation), push that currentPermutation to the result
  if (!array.length && currentPermutation.length) {
    result.push(currentPermutation);
    console.log('cP: ', currentPermutation);
  }
  // If there's still a length in the array, iterate over the remaining array
  else {
    for (let i = 0; i < array.length; i += 1) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      console.log('+', newArray);
      const newPermutation = currentPermutation.concat([array[i]]);
      console.log(newPermutation);
      permutationsHelper(newArray, newPermutation, result);
    }
  }
}

let nums = [1, 3, 5];
console.log(findPermutations(nums));