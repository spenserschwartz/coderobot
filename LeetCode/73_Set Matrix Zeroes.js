// https://leetcode.com/problems/set-matrix-zeroes/

const setZeroes = matrix => {
  const solution = [];

  // Find all matrix[i][j] === 0, push i,j to solution array
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        solution.push(i);
        solution.push(j);
      }
    }
  }
  console.log(solution);
  // Traversal array, change the value
  for (let k = 0; k < solution.length; k++) {
    for (let j = 0; j < matrix[solution[k]].length; j++) {
      matrix[solution[k]][j] = 0;
    }
    
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][solution[k + 1]] = 0;
      console.log('M: ', matrix)
    }
    k++;
    
  }
  return matrix;
}


const input1 = [[1,1,1],[1,0,1],[1,1,1]];
const input2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
console.log(setZeroes(input2));