/*  Given an array of integers, find if the array contains any duplicates.
    Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

    Input: [1,2,3,1]
    Output: true  */

const containsDuplicate = nums => {
  let memo = {};
  for (let num of nums) {
    if (memo[num]) return true;
    else memo[num] = true;
  }
  return false;
}

let input = [1,2,3,1];
console.log(containsDuplicate(input));