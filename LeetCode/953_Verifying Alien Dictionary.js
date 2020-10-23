// https://leetcode.com/problems/verifying-an-alien-dictionary/

const isAlienSorted = (words, order) => {
  for (let i = 0; i < words.length - 1; i += 1) {
    let cW = words[i];
    for (let j = 0; j < cW.length; j += 1) {
      // If no letters left on the next word, they're out of order so return false 
      if (!words[i + 1][j]) return false;

      if (order.indexOf(cW[j]) === order.indexOf(words[i + 1][j])) continue;
      else if ( order.indexOf(cW[j]) < order.indexOf(words[i + 1][j]) ) break;
      else return false;
    }
  }
  return true;
}

let words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
console.log(isAlienSorted(words, order));