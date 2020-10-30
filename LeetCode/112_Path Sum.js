// https://leetcode.com/problems/path-sum/

// !My first solution
// const hasPathSum = (root, sum, branchSum = 0) => {
//   if (!root) return false;

//   if (!root.left && !root.right && branchSum + root.val === sum) return true;
  
//   if (root.left && hasPathSum(root.left, sum, branchSum + root.val)) return true;
//   if (root.right && hasPathSum(root.right, sum, branchSum + root.val)) return true;
  
//   return false;
// }

// !Cleaner
// const hasPathSum = (root, sum) => {
//   if (!root) return false;

//   if (!root.left && !root.right) return sum === root.val;
//   else {
//     // Subtract root val to leave remaining sum 
//     return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
//   }
// }


const hasPathSum = (root, sum) => {
  if (!root) return false;

  if (!root.left && !root.right) return root.val === sum;
  else return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}