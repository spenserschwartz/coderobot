// https://leetcode.com/problems/hamming-distance/

const hammingDistance = (x,y) => {
  let xor = x ^ y;
  let sum = 0;

  // Find number of ones in XOR result
  while (xor > 0) {
    sum += xor & 1;
    xor = xor >> 1;
  }
  return sum;
}

console.log(hammingDistance(1,4));