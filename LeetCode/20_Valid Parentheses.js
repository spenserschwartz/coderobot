// https://leetcode.com/problems/valid-parentheses/

const isValid = s => {
  let map = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  }
  let arr = [];

  for (let el of s) {
    if (map[el]) arr.push(map[el]);
    else {
      if (el !== arr.pop()) return false;
    }
  }

  return arr.length === 0 ? true : false;
}

const s = "()"
console.log(isValid(s));