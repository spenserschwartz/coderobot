// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

const removeNthFromEnd = (head, n) => {
  let pHolder = head;
  let node = head;

  while (n--) pHolder = pHolder.next;

  while (pHolder && pHolder.next) {
    pHolder = pHolder.next;
    node = node.next;
  }

  if (!pHolder) head = head.next;
  else node.next = node.next.next;

  return head;
}
