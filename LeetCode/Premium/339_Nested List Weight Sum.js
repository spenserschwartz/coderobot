/*
Given a nested list of integers, return the sum of all integers in the list weighted by their depth.
Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Input: [[1,1],2,[1,1]]
Output: 10 
Explanation: Four 1's at depth 2, one 2 at depth 1.
Input: [1,[4,[6]]]
Output: 27 
Explanation: One 1 at depth 1, one 4 at depth 2, and one 6 at depth 3; 1 + 4*2 + 6*3 = 27.  */

const depthSum = (nestedList, depth = 1) => {
  let sum = 0;

  for (let el of nestedList) {
    if (Array.isArray(el)) sum += depthSum(el, depth + 1);
    else sum += depth * el;
  }

  return sum;
}

let nestedList = [[1,1],2,[1,1]];
console.log(depthSum(nestedList));