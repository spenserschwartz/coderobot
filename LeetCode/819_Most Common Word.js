/*

Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

 

Example:

Input: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.

*/

const mostCommonWord = (paragraph, banned) => {
  paragraph = paragraph.replace(/','/gi, ' ')
                       .replace(/[^\w ]/gi, ' ').toLowerCase()
                       .split(' ')
                       .filter(el => el !== ' ' && el !== '');

  const memo = {};
  for (let word of paragraph) {
    if (!banned.includes(word)) memo[word] ? memo[word] += 1 : memo[word] = 1;
  }

  let max = Math.max(...Object.values(memo));
  
  for (let word of Object.keys(memo)) {
    if (memo[word] === max) return word;
  }

  return memo;
}

// let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
// let banned = ['hit'];

let paragraph = "a, a, a, a, b,b,b,c, c";
let banned = ['a'];
console.log(mostCommonWord(paragraph, banned));


// ! Learn this method
// const paragraphArr = paragraph.match(/[a-zA-Z]+/g);