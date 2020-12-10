// https://leetcode.com/problems/kth-smallest-element-in-a-bst/


const kthSmallest = (root, k) => {
  // Traversal the tree depth first
  const traversal = root => {
    if (root.left) traversal(root.left)
    arr.push(root.val)
    if (root.right) traversal(root.right)
    return;
  }
  
  const arr = [];
  traversal(root);

  // Find the kth smallest from array
  return arr[k - 1];
}



class BST {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);

console.log(kthSmallest(root, 2))