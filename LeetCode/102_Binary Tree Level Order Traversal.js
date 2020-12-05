// https://leetcode.com/problems/binary-tree-level-order-traversal/

const levelOrder = root => {
  if (!root) return [];

  const result = [];
  const array = [root];

  while (array.length) {
    console.log('ARRAY: ', array);
    const size = array.length;
    console.log(size);
    const values = [];

    for (let i = 0; i < size; i++) {
      const node = array.shift();
      values.push(node.val);
      if (node.left) array.push(node.left);
      if (node.right) array.push(node.right);
    }
    result.push(values);
  }
  return result;
};

const input = [3,9,20,null,null,15,7];
console.log(levelOrder(input));
