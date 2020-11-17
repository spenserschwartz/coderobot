// https://leetcode.com/problems/word-ladder/

const ladderLength = (beginWord, endWord, wordList, length = 1) => {
  if (beginWord === endWord) return length;
  const arr = [];

  for (let i = 0; i < wordList.length; i++) {
    let word = wordList[i];
    let diffLetters = 0;
    for (let j = 0; j < word.length; j++) {
      beginWord[j] === word[j] ? false : diffLetters++;
    }
    if (diffLetters === 1) {
      let newWordList = wordList.slice();
      newWordList.splice(i, 1);
      let result = ladderLength(word, endWord, newWordList, length + 1);
      if (result) arr.push(result);
    }
  }
  
  return Math.min(...arr) === Infinity ? 0 : Math.min(...arr);
}

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot","dot","dog","lot","log","cog"]

console.log(ladderLength(beginWord, endWord, wordList)); // 5

console.log(ladderLength("a", "c", ['a','b','c'])) // 2

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log"])) // 0