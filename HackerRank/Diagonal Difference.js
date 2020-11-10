// https://www.hackerrank.com/challenges/diagonal-difference/problem?h_r=next-challenge&h_v=zen

function diagonalDifference(arr) {
  let sum1 = 0, sum2 = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][arr.length - 1 - i];
  }
 
  return Math.abs(sum1 - sum2);
}

const arr = [[1,2,3],[4,5,6],[9,8,9]];
console.log(diagonalDifference(arr));