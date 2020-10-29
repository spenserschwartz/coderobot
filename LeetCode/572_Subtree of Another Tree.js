// https://leetcode.com/problems/subtree-of-another-tree/

// const isSubtree = (s, t) => {
//   if (!s) return !t;
//   return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
// }

// const isEqual = (root1, root2) => {
//   if (!root1 || !root2) return !root1 && !root2;
//   if (root1.val !== root2.val) return false;

//   return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
// }

const isSubtree = (s, t) => {
  if (!s) return !t;
  return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
}

const isEqual = (root1, root2) => {
  if (!root1 || !root2) return !root1 && !root2;
  if (root1.val !== root2.val) return false;

  return isEqual(root1.left, root2.left) && isEqual(root2.left, root2.right)
}