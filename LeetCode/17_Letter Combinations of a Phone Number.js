// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const letterCombinations = digits => {
  if (digits === null || digits.length === 0) return [];
  const map = {
    2 : 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  const result = [];

  const permutations = (index, string) => {
    if (index === digits.length) {
      result.push(string);
      return;
    }

    for (const letter of map[digits[index]]) {
      permutations(index + 1, string + letter)
    }
  }

  permutations(0, '');  // Run the function at index 0 and empty string to start
  return result;
}



let digits = '23';
console.log(letterCombinations(digits));