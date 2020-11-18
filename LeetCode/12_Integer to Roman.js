// https://leetcode.com/problems/integer-to-roman/



const intToRoman = num => {
  const map = ['Start at index 1', ['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M']];

  let placeValue = 0;
  let string = '';

  while (num > 0) {
    let lastString = string;
    placeValue++;
    if (placeValue > 3) {
      string = 'M'.repeat(num) + lastString;
      break;
    }
    const cN = num % 10;
    
    if (cN === 0) console.log('Here is 0 at ', placeValue);
    else if (cN === 4) string = map[placeValue][0] + map[placeValue][1] + lastString;
    else if (cN === 9) string = map[placeValue][0] + map[placeValue][2] + lastString;
    else string = map[placeValue][1].repeat(Math.floor(cN / 5)) + map[placeValue][0].repeat(cN % 5) + lastString;
    
    console.log(num);
    num = Math.floor(num / 10);  // stop infinite loop for now
  }

  return string;
}



console.log(intToRoman(1994));