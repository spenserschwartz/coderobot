// https://leetcode.com/problems/count-and-say/

const countAndSay = n => {
  const map = ['', '1'];
  if (n <= 1) return map[n];
  
  for (let i = 2; i <= n; i++) {
    map[i] = countAndSayHelper(map[i - 1])
  }

  return map[n];

}

const countAndSayHelper = n => {
  const string = n.toString();
  if (string === null || string.length === 0) return '';

  let result = '';
  let counter = 1;
  let cL = string[0];

  for (let i = 1; i < string.length; i++) {
    if (string[i] === cL) counter++;
    else {
      result += counter.toString() + cL;
      counter = 1;
      cL = string[i];
    }
  }

  result += counter.toString() + cL;

  return result;
}

let n = 4;
console.log(countAndSay(n));


console.log(countAndSayHelper(3322251));
