// https://www.hackerrank.com/challenges/repeated-string/problem

// s is the string
// n is number of characters of the infinite string
// s = 'abcac' and n = 10, substring to consider is 'abcacabcac', number of a = 4
// s = 'aba' and n = 7, substring to consider is 'abaabaa', number of a = 5

const repeatedStrings = (string, n) => {
  let totalCount = 0;
  let loopCount = 0;

  for (let letter of string) letter === 'a' ? loopCount++ : false;

  let fullLoops = Math.floor(n / string.length);
  totalCount += fullLoops * loopCount;


  let remainderString = string.substring(0, n % string.length);

  for (let letter of remainderString) {
    if (letter === 'a') totalCount++;
  }

  return totalCount;
}

let string = 'abcac';
let n = 10;

console.log(repeatedStrings(string, n));