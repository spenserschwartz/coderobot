/*
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Definition for singly-linked list.
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)  
    }
*/

// const mergeTwoLists = (list1, list2) => {
//   // Create a node for values to be put in
//   let node = new ListNode(-1);

//   if (!list1 && !list2) return null;
//   if (!list1 || !list2) return list1 || list2;

//   if (list1.val <= list2.val) {
//     node.val = list1.val;
//     list1 = list1.next;
//   } else {
//     node.val = list2.val;
//     list2 = list2.next
//   }

//   node.next = mergeTwoLists(list1, list2);
//   return node;
// }


 

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