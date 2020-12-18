// https://leetcode.com/problems/word-pattern/

const wordPattern = (pattern, s) => {
  const memo = {};
  const usedWords = {};
  s = s.split(' ');
  if (pattern.length !== s.length) return false;
  
  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];

    if (!memo[letter]) {
      if (usedWords[s[i]]) return false;
      else memo[letter] = s[i], usedWords[s[i]] = true;
    } else {
      if (memo[letter] !== s[i]) return false;
    }
  }
  return true;
}

const pattern = "abba", s = "dog dog dog dog";
console.log(wordPattern(pattern, s));