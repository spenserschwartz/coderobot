// https://leetcode.com/problems/convert-bst-to-greater-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 const convertBST = root => {
   let sum = 0, prev = 0;

   const update = root => {
     if (root) {
       update(root.right);
       sum += root.val;
       root.val += prev;
       prev = sum;
       update(root.left);
     }
   }

   update(root);
   return root;
 }