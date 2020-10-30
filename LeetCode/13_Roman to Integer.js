// https://leetcode.com/problems/roman-to-integer/

const romanToInt = s => {
  const memo = { 'I' : 1,
                 'V' : 5,
                 'X' : 10,
                 'L' : 50,
                 'C' : 100,
                 'D' : 500,
                 'M' : 1000
  }
  let number = 0;

  for (let i = 0; i < s.length; i += 1) {
    const letter = s[i];
    if (memo[letter] < memo[s[i + 1]]) number -= memo[letter];
    else number += memo[letter];
  }
  return number;
}

let s = 'MCMXCIV';  // 1994
console.log(romanToInt(s));