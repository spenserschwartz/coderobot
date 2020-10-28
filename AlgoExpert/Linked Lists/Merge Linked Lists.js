// https://www.algoexpert.io/questions/Merge%20Linked%20Lists
// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const mergeLinkedLists = (headOne, headTwo) => {
  if (!headOne || !headTwo) return headOne || headTwo;

  if (headOne.value < headTwo.value) {
    headOne.next = mergeLinkedLists(headOne.next, headTwo);
    return headOne;
  } else {
    headTwo.next = mergeLinkedLists(headOne, headTwo.next);
    return headTwo;
  }
}

// https://leetcode.com/problems/merge-two-sorted-lists/discuss/509602/Javascript-Recursive-Solution
