// https://leetcode.com/problems/validate-binary-search-tree/


const isValidBST = (root, min = -Infinity, max = Infinity) => {
  if (!root) return true;
  
  if (root.val >= max) return false;
  if (root.val <= min) return false;

  return (isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max))
}