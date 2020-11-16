// Find the length of the longest substring which has no repeating characters

const noRepeatSubstring = s => {
  if (!s.length || typeof s !== 'string') return 'Please use a valid string';
  if (s.length === 1) return 1;

  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = k; j < i; j++)
  }
  
}

const string = 'aabccbb'
console.log(noRepeatSubstring(string));