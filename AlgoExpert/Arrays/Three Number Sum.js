const threeNumberSum = (array, targetSum) => {
  // Sort the array
  array.sort((a,b) => a - b);

  // Iterate through the array, leaving room for 2 additional numbers
  for (let i = 0; i < array.length - 2; i += 1)
}