// https://leetcode.com/problems/path-sum/

// !My first solution
// const hasPathSum = (root, sum, branchSum = 0) => {
//   if (!root) return false;

//   if (!root.left && !root.right && branchSum + root.val === sum) return true;
  
//   if (root.left && hasPathSum(root.left, sum, branchSum + root.val)) return true;
//   if (root.right && hasPathSum(root.right, sum, branchSum + root.val)) return true;
  
//   return false;
// }

// ! Cleaner, no comments

// const hasPathSum = (root, sum) => {
//   if (!root) return false;

//   if (!root.left && !root.right) return root.val === sum;
//   else return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
// }

const hasPathSum = (root, sum) => {
  // Once there is no more branches, you can return that sum. If that = sum, return true
  //   If none of the end of the branches = sum, return false

  if (!root) return false;
  // As you move down each branch, subtract the current root value from the sum 
  // If you've reached a leaf and it equals sum, then true
  if (!root.left && !root.right && root.val === sum) return true;
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}