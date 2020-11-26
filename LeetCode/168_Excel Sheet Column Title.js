// https://leetcode.com/problems/excel-sheet-column-title/

// ! Look at this
const convertToTitle = function(n) {
  const digits = [];
  while (n > 0) {
    digits.unshift((n - 1) % 26);
    n = Math.trunc((n - 1) / 26);
  }
  return String.fromCharCode(...digits.map(d => d + 65));
};

console.log(26 ** 2);

console.log(convertToTitle(703))