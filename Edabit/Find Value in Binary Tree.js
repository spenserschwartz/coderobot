// https://edabit.com/challenge/GGDMJ33wg8y3EHQfP

// ! One line, using flat
// const valueInTree = (tree, val) => {
//   return tree.flat(Infinity).includes(val);
// }

const valueInTree = (tree, val) => {
  for (let el of tree) {
    if (Array.isArray(el) && valueInTree(el, val)) return true;
    if (el === val) return true; 
  }
  return false;
}

const arr = [3, [ 8, [ 5, null, null], null], [ 7, null, null]];
console.log(valueInTree(arr, 5))