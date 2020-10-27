// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, sum = 0, arr = []) {

  if (!root) return;

  sum += root.value;
  if (!root.left && !root.right) {
    arr.push(sum);
    if (arr.length === 1) return arr;
    return;
  }

  branchSums(root.left, sum, arr);
  branchSums(root.right, sum, arr);

  return arr;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
