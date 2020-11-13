/*
Longest consecutive chain of just two disparate letters 


const Fruit=['A', 'B', 'C', 'A', 'C']         Answer is 3 [C A C]
const Fruit=['A', 'B', 'C', 'B', 'B', 'C']    Answer is 5 [B C B B C]


*/
const fruitsIntoBaskets = fruits => {
  let windowStart = 0;
  let maxLength = 0;
  const charFrequency = {};

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightChar = fruits[windowEnd];
    rightChar in charFrequency ? charFrequency[rightChar] = 1 : charFrequency[rightChar] += 1;

    while (Object.keys(charFrequency) > 2) {
      const leftChar = fruits[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) delete charFrequency[leftChar];
      windowStart += 1;
    } 
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  
  return maxLength;
}



const fruit=['A', 'B', 'C', 'A', 'C'];
console.log(fruitsIntoBaskets(fruit));