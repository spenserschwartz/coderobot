// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

//! My first solution
// const lowestCommonAncestor = (root, p, q) => {
//   if (!root) return false;
//   if (p === q) return root;

//   let lca = root.val;

//   if (dfs(root.left, []).includes(p) && dfs(root.left, []).includes(q)) return lowestCommonAncestor(root.left, p, q);
//   if (dfs(root.right, []).includes(p) && dfs(root.right, []).includes(q)) return lowestCommonAncestor(root.right, p, q);

//   return lca;
// }

// const dfs = (root, arr = []) => {
//   if (!root) return false;
//   arr.push(root.val);
//   dfs(root.left, arr);
//   dfs(root.right, arr);
//   return arr;
// }

const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  return left || right;

}




class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null
  }
}

/*
        3
      5   1
    6  2    8 
*/
const bst = new Node(3)
bst.left = new Node(5)
bst.right = new Node(1)
bst.left.left = new Node(6)
bst.left.right = new Node(2)
bst.right.right = new Node(8)

console.log(lowestCommonAncestor(bst, 2, 2))