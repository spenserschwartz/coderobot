// https://leetcode.com/problems/symmetric-tree/

const isSymmetric = root => {
  if (!root) return true;
  return isMirror(root.left, root.right);
}

const isMirror = (s,t) => {
  if (!s && !t) return true;  // Both are null, both are okay

  if (!s || !t || s.val !== t.val) return false;  // Found a mismatch

  // Compare the left subtree of s to right subtree of t and vice versa
  return isMirror(s.left, t.right) && isMirror(s.right, t.left);
}