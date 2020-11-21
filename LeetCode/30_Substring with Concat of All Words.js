// https://leetcode.com/problems/substring-with-concatenation-of-all-words/


// ! Brute Force w/ sort
const findSubstring = (s, words) => {
  const result = [];
  const wLen = words[0].length;
  const mLen = wLen * words.length;

  for (let i = 0; i < s.length - mLen + 1; i += wLen) {
    const copy = words.slice();
    
    if (copy.includes(s.substring(i, i + wLen))) {
      let j = i;
      while (copy.includes(s.substring(j, j + wLen))) {
        // Take word out of copy 
        copy.splice(copy.indexOf(s.substring(j, j + wLen)), 1);
        // Update j 
        j += wLen;
      }
      if (copy.length === 0) result.push(i);
    }
  }
  return result;
}

let s = "barfoothefoobarman", words = ["foo","bar"]
console.log(findSubstring(s, words));