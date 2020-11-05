// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
  print(node = this, arr = []) {
    if (!node) return;
    arr.push(node.val);
    this.print(node.left, arr);
    this.print(node.right, arr);
    return arr;
  }
}


const zigzagLevelOrder = (root, depth = 1) => {
  const obj = {};


  const helper = (root, depth = 1) {
    obj[depth] ? obj[depth].push(root.val) : obj[depth] = [root.val];

    if (root.left) helper(root.left, depth + 1);
    if (root.right) helper(root.right, depth + 1);
  }

  return obj;

}



const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7); 

// console.log(tree.print());

console.log(zigzagLevelOrder(tree));