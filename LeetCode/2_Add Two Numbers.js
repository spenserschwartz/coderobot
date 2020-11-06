// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 // ! Digits stored in reverse order
const addTwoNumbers = (list1, list2) => {
  let list = new ListNode(0);
  let head = list;
  let sum = 0;
  let carry = 0;

  while (list1 !== null || list2 !== null || sum !== 0) {
    if (list1 !== null) {
      sum += list1.val;
      list1 = list1.next;
    }

    if (list2 !== null) {
      sum += list2.val;
      list2 = list2.next;
    }

    if (sum > 9) {
      carry = 1;
      sum -= 10;
    }

    head.next = new ListNode(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }

  return list.next;
}