// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const validateBst = (tree, min = -Infinity, max = Infinity) => {
  if (tree === null) return true;

  if (tree.value < min || tree.value >= max) return false;
  return validateBst(tree.left, min, tree.value) && validateBst(tree.right, tree.value, max);
}