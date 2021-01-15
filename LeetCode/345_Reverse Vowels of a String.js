// https://leetcode.com/problems/reverse-vowels-of-a-string/

const reverseVowels = s => {
  const memo = {a : true, e : true, i : true, o : true, u : true,
                A : true, E : true, I : true, O : true, U : true}
  const arr = [];

  for (let el of s) {
    if (memo[el]) arr.push(el);
  }

  arr.reverse();
  let result = '';
  let i = 0;
  
  for (let el of s) {
    if (memo[el]) {
      result += arr[i];
      i++;
    } else {
      result += el;
    }
  }
  return result;
}

console.log(reverseVowels('leetcode'));