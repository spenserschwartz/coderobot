/*
Reverse a singly linked list.
 Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL */

// !Iterative
const reverseList = head => {
  let prev = null;

  while (head) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

// !Recursive
const reverseList = (head, prev = null) {
  if (!head) return null;

  const next = reverseList(head.next, head);
  head.next = prev;
  return next || head;
}