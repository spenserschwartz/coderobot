// https://leetcode.com/problems/isomorphic-strings/

const isIsomorphic = (s, t) => {
  const memo = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (!memo[letter]) memo[letter] = t[i];
    else {
      if (memo[letter] !== t[i]) return false;
    }
  }
  return true;
}

// const s = "egg", t = "add"
// const s = "foo", t = "bar"
const s = "paper", t = "title"


console.log(isIsomorphic(s,t));