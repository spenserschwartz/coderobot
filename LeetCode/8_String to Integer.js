// https://leetcode.com/problems/string-to-integer-atoi/


// ! Logic is fine, work out edge cases
const myAtoi = s => {
  while (s[0] === ' ') s = s.substring(1);
  let first = s[0]
  
  let isPos = true;
  if (s[0] === '+') s = s.substring(1);
  else if (s[0] === '-') {
    isPos = false;
    s = s.substring(1);
  }

  let num = 0;
  while (!isNaN(s[0])) {
    if (s[0] === ' ') break;
    num *= 10;s
    num += Number(s[0])
    s = s.substring(1);
  }

  
  num = isPos ? num : num * -1;
  if (num > Math.pow(2,31)) return Math.pow(2, 31) - 1;
  if (num < Math.pow(-2, 31)) return Math.pow(-2, 31);

  return num;
}

let str = "-4193 with words"
console.log(myAtoi(str));
