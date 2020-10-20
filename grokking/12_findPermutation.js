function findPermutation(string, pattern) {
  // Use sort method for ease - check if sorted string w/ same length matches sorted pattern
  let sortedPattern = pattern.split('').sort().join('');
  let pLength = sortedPattern.length;
  console.log(pLength)
  
  for (let i = 0; i < string.length - pLength + 1; i += 1) {
    let sortedSubstring = string.substring(i, i + pattern.length).split('').sort().join('');
    if (sortedSubstring === sortedPattern) return true;
  }

  return false;
}


console.log(findPermutation('oidbcaf', 'abc'));
// console.log(findPermutation('odicf', 'dc'));