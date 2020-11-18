// https://leetcode.com/problems/longest-palindromic-substring/

// ! Brute Force
// const isPalindrome = string => {
//   return string === string.split('').reverse().join('');
// }


// const longestPalindrome = s => {
//   let maxLength = 0;
//   let maxString = '';

//   for (let i = 0; i < s.length; i++) {
//     let currSubString = s.substring(i, s.length);
//     for (let j = s.length; j >= 0; j--) {
//       let subSub = currSubString.substring(0, j);
//       if (subSub.length <= 1) continue;

//       if (isPalindrome(subSub) && subSub.length > maxLength) {
//         maxLength = subSub.length;
//         maxString = subSub;
//       }
//     }
//   }
//   return maxLength;
// }

// ! Optimize
const isPalindrome = string => {
  return string = string.split('').reverse().join('');
}

const longestPalindrome = s => {
  // Construct a 2D array
  const dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));

  let longestString = '';

  // Base case for one character
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    lps = s[i];
  }

  // Base case for two characters
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) dp[i][i + 1] = true;
    if (dp[i][i + 1]) longestString = s.substring(i, i + 2);
  }

  // Expand to 3 or more characters
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      if (dp[i][j]) longestString = longestString.length < (j - i + 1) ? s.substring(i, j + 1) : longestString;
    }
  }
  
  return longestString;
}


let string = 'aabab';
console.log(longestPalindrome(string));