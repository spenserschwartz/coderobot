// https://leetcode.com/problems/minimum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 const minDepth = root => {
   if (!root) return 0;
   let min = Infinity;

   const dfs = (root, level) => {
     if (!root) return;
     if (!root.left && !root.right) min = Math.min(min, level);
     else {
       dfs(root.left, level + 1);
       dfs(root.right, level + 1);
     }
   }

   dfs(root, 1);
   return min;
 }