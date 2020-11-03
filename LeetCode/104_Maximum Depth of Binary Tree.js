// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// !Extra argument
// const maxDepth = (root, sum = 0) => {
//   if (!root) return sum;

//   return Math.max(maxDepth(root.left, sum + 1), maxDepth(root.right, sum + 1))
// }

const maxDepth = root => {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}