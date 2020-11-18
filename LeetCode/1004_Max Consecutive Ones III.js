// https://leetcode.com/problems/max-consecutive-ones-iii/

const longestOnes = (array, numberAllowed) => {
  let maxLength = 0;
  let p1 = 0;
  let numZeroes = 0;

  for (let p2 = 0; p2 < array.length; p2++) {
    if (array[p2] === 0) numZeroes++;

    if (numZeroes > numberAllowed) {
      if (array[p1] === 0) numZeroes--;
      p1++;
    }
    maxLength = Math.max(maxLength, p2 - p1 + 1);
  }

  return maxLength;
}


let A = [1,1,1,0,0,0,1,1,1,1,0], K = 2;
console.log (longestOnes(A, K));

