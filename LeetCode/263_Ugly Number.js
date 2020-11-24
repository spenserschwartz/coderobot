// https://leetcode.com/problems/ugly-number/

// ! Logic works, exceeds callstack
// const isUgly = num => {
//   if (num === 2 || num === 3 || num === 5) return true;

//   if (num % 2 === 0 && isUgly(num / 2)) return true; 
//   if (num % 3 === 0 && isUgly(num / 3)) return true;
//   if (num % 5 === 0 && isUgly(num / 5)) return true;

//   return false;
// }



const isUgly = num => {
  const arr = [];
  if (num <= 0) return false;

  while (num > 1) {
    if (num % 5 === 0) num /= 5;
    else if (num % 3 === 0) num /= 3;
    else if (num % 2 === 0) num /= 2;
    else return false;
  }
  return true;
}


console.log(isUgly(2));