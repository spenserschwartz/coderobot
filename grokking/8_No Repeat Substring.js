// Find the length of the longest substring which has no repeating characters

/*
  a  a  b  c  d  c  b  b
    p1
       p2
*/


const noRepeatSubstring = s => {
  if (!s.length || typeof s !== 'string') return 'Please use a valid string';
  if (s.length === 1) return 1;

  let maxLength = 0, p1 = 0, p2 = 1;

  while (s[p1] && s[p2]) {
    if (s[p1] === s[p2]) p1++, p2++;
    else {
      const memo = { [s[p1]]: true, [s[p2]]: true };
      p2++;
      while (s[p2] && !memo[s[p2]]) memo[s[p2]] = true, p2++;

      maxLength = Math.max(maxLength, p2 - p1);
      p1++;
    }
  }
  return maxLength;
}

const string = 'aabcdcbb' // 4
console.log(noRepeatSubstring(string));