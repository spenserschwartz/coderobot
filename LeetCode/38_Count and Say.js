// https://leetcode.com/problems/count-and-say/

const countAndSay = n => {
  if (n.length < 2) return n;

  let count = 1;    // current letter count
  let cL = n[0];           // current letter
  let string = '';  // result string

  for (let i = 1; i < n.length; i += 1) {
    const letter = n[i];

    if (letter === cL) count += 1;
    else {
      string += parseInt(count);
      string += cL;
      count = 1;
      cL = n[i];
    }
  }

  // last count
  string += parseInt(count);
  string += cL;

  return string;
}

let n = '3322251';
console.log(countAndSay(n));