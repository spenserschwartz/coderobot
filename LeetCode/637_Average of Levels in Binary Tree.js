//https://leetcode.com/problems/average-of-levels-in-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 // ! First answer

const averageOfLevels = root => {
  const result = [];
  const memo = {};

  const dfs = (node, level) => {
    if (!node) return;
  
    if (memo[level]) memo[level].push(node.val);
    else memo[level] = [node.val];
  
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root, 0);

  for (let key in memo) {
    const keyLen = memo[key].length;
    result[key] = memo[key].reduce((a,b) => a + b, 0) / keyLen;
  }
  return result;
}
