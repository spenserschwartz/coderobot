// https://leetcode.com/problems/validate-binary-search-tree/

/*
Explanation: If there's no root, return true (valid tree);
             If curr val is >= set max or <= set min, not a valid tree
             If nothing has returned yet, check the valid trees down the left & right side
             The max value is set when going left (root.val will now be the max)
             The min value is set when going right (root.val will not be the min)
*/

const isValidBST = (root, min = -Infinity, max = Infinity) => {
  if (!root) return true;
  
  if (root.val >= max) return false;
  if (root.val <= min) return false;

  return (isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max))
}