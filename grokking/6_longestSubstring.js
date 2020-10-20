/* Given a string, find the length of the longest substring in it with no more than K
distinct characters. */

function longestSubstring(str, k) {
  let windowStart = 0,
  maxLength = 0,
  charFrequency = {};

  // Extend the range of the window
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) charFrequency[rightChar] = 0;

    charFrequency[rightChar] += 1;

    // Shrink the sliding window, until we are left with 'k' distinct characters
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
      delete charFrequency[leftChar];
      }
    windowStart += 1; // shrink the window
    }

    // Remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}


let input1 = 'araaci', k1 = 2;  // 'araa'
let input2 = 'araaci', k2 = 1;  // 'aa'
let input3 = 'cbbebi', k3 = 3;  // 'cbbeb' or 'bbebi'

console.log(longestSubstring(input1, k1));