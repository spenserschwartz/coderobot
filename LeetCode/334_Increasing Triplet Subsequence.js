// https://leetcode.com/problems/increasing-triplet-subsequence/

const increasingTriplet = nums => {
  if (nums.length < 3) return false;
  let firstNum = Infinity;
  let secNum = Infinity;

  for (let currNum of nums) {
    if (currNum > secNum && currNum > firstNum) return true;

    if (currNum > firstNum) secNum = currNum;
    else firstNum = currNum;
  }
  return false;
}



const input = [1,2,3,4,5];
console.log(increasingTriplet(input));

const nums = [5,4,3,2,1];
console.log(increasingTriplet(nums));