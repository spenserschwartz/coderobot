// https://leetcode.com/problems/isomorphic-strings/

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;
  if (s === t) return true;

  const memoS = {};
  const memoT = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    const letterT = t[i];

    if (!memoT[letterT]) memoT[letterT] = letter;
    if (!memoS[letter]) memoS[letter] = letterT;

    if (memoS[letter] !== letterT || memoT[letterT] !== letter) return false;
  }
  return true;
}

// const s = "egg", t = "add"
// const s = "foo", t = "bar"
const s = "paper", t = "title"


console.log(isIsomorphic(s,t));