// https://leetcode.com/problems/diameter-of-binary-tree/

const diameterOfBinaryTree = (root) => {
  let diamter = 0;

  maxDepth(root);

  return diameter;
}

const maxDepth = root => {
  if (root === null) return 0;
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  // If the path doesn't go through the root, we just get the max of them
  diameter = Math.max(diameter, left + right);
  return Math.max(left, right) + 1  // +1 for the root 
}