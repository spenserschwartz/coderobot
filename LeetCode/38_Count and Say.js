// https://leetcode.com/problems/count-and-say/

const countAndSay = n => {
  let memo = {};
  let arr = [];

  for (let i = 0; i < n.length; i += 1) {
    if (memo[n[i]]) memo[n[i]] += 1;
    else if (Object.keys(memo).length === 1 && n[i] !== n[i - 1]) {
      arr.push(memo);
      
    } else {
      memo[n[i]] = 1;
    }
  }
  console.log(memo);
  return arr;
}

let n = '3344451';
console.log(countAndSay(n));