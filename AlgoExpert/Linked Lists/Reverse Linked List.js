function reverseLinkedList(head) {
  let previousNode = null;
  let currentNode = head;

  while (currentNode !== null) {        // (1,2,3,4,5), (2,3,4,5), (3,4,5), (4,5), (5)
    const nextNode = currentNode.next;  // (2,3,4,5), (3,4,5), (4,5), (5), null
    currentNode.next = previousNode;    // (null), (1,null), (2,1,null), (3,2,1,null), (4,3,2,1,null)
    previousNode = currentNode;         // (1, null), (2,1,null), (3,2,1,null), (4,3,2,1,null), (5,4,3,2,1,null)
    currentNode = nextNode;             // (2,3,4,5), (3,4,5), (4,5),(5), null
  }

  return previousNode;
}

// input: 1,2,3,4,5