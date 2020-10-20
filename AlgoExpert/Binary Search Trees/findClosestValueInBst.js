function findClosestValueInBst(tree, target) {
  let closest = tree.value;

  while (tree) {
    if (Math.abs(target - tree.value) < Math.abs(target - closest)) closest = tree.value;

    // Traverse down one of the branches
    if (target < tree.value) tree = tree.left;
    else tree = tree.right;
  }

  return closest;
}