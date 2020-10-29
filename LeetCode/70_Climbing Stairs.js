// https://leetcode.com/problems/climbing-stairs/
/* 1: 1 (1)
   2: 2 (11, 2)
   3: 3 (111, 12, 21)
   4: 5 (1111, 112, 211, 121, 22)
   5: 8 (11111, 1112, 1211, 1121, 221, 122, 212, 2111)
*/

// Output will be sum of output of previous 2
// Calculate the output for each step. Remembering that number + previous, we can iterate to the next step
// Hard code the first two steps (prev1, prev2) and consider this edge case (n = 1 or 2)

const climbStairs = (n) => {
  let count = 0, i = 3;
  let prev1 = 1, prev2 = 2;
  
  if (n < 3) return n;

  while (i <= n) {
    count = prev1 + prev2;
    prev1 = prev2
    prev2 = count;
    i += 1;
  }
  return count;
}

console.log(climbStairs(5));