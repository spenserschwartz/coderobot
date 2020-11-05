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
  let List = new ListNode(0);
  let head = List;  // pointer in result list
  let sum = 0;      // sum gets emptied into List every iteration of while loop
  let carry = 0;    // carrying a 1 if sum >= 10

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    };

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    head.next = new ListNode(sum);  // changing the next node in List to sum
    head = head.next; 

    sum = carry;
    carry = 0; 
  }
}