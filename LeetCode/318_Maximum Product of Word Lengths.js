// https://leetcode.com/problems/maximum-product-of-word-lengths/

const maxProduct = words => {
  let product = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i; j < words.length; j++) {
      product = Math.max(product, wordProduct(words[i], words[j]));
    }
  }
  return product;
}


const wordProduct = (word1, word2) => {
  const memo = {};
  for (let el of word1) memo[el] = 1;

  for (let el of word2) {
    if (memo[el]) return 0;
  }
  return word1.length * word2.length;
}