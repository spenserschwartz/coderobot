// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = strs => {
  const memo = {};

  for (let string of strs) {
    // Sort the word and check if the sorted already exists
    const sortedS = string.split('').sort().join('');   
    memo[sortedS] ? memo[sortedS].push(string) : memo[sortedS] = [string];
  }
  return Object.values(memo); // Return the values of memo that are all arrays
}

const strs = ["a"]
console.log(groupAnagrams(strs));