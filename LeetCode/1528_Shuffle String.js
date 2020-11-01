// https://leetcode.com/problems/shuffle-string/

const restoreString = (s, indices) => {
  let array = [];

  for (let i = 0; i < s.length; i += 1) {
    array[indices[i]] = s[i]
  }
  return array.join('');
}

let s = "codeleet", indices = [4,5,6,7,0,2,1,3];
console.log(restoreString(s, indices));