// https://leetcode.com/problems/max-consecutive-ones/

const findMaxConsecutiveOnes = nums => {
  let maxLength = 0;
  let currLength = 0;
  
  for (let num of nums) {
    if (num !== 0) currLength++;
    else currLength = 0;
    maxLength = Math.max(maxLength, currLength);
  }
  
  return maxLength;
}

const input = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(input));