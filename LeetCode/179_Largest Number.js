// https://leetcode.com/problems/largest-number/

const largestNumber = nums => {
  let largestNum = nums.map(num => num.toString())
                       .sort((a, b) => parseInt(b + a) - parseInt(a + b))
                       .reduce((prev, curr) => prev += curr);

  
  // Edge case where all zeroes
  if (largestNum[0] === '0') return '0';
  else return largestNum;
}

const nums = [3,30,34,5,9];
console.log(largestNumber(nums));