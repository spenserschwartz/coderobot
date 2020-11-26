// https://leetcode.com/problems/power-of-three/

const isPowerOfThree = n => {
  if (n <= 0) return false;
  while (n % 3 === 0) n /= 3;

  return n === 1;
}



console.log(isPowerOfThree(243));