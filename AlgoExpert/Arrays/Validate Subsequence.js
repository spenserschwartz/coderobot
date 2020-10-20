// function isValidSubsequence(array, sequence) {
//   // Iterate through second array. If its index value in the first array for that value
//   //  is not greater than the last index value, return false

//   for (let i = 0; i < sequence.length; i += 1) {
//     let cV = sequence[i];
//     console.log(array.indexOf(cV));
//     if (array.indexOf(cV) === -1) return false;
//     else array = array.slice(array.indexOf(cV) + 1);
//   }
//   return true;
// }


function isValidSubsequence(array, sequence) {
  let arrIndex = 0;
  let seqIndex = 0;

  // Keep iterating both indexes until one hits the end. 
  // Iterate the arrIndex and once that equals the value from seq, iterate seq too
  // If seq runs out before arr (as it should), it'll return true
  while (arrIndex < array.length && seqIndex < sequence.length) {
    if (array[arrIndex] === sequence[seqIndex]) seqIndex += 1;
    arrIndex += 1;
  }
  return seqIndex === sequence.length;
}

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [26]

console.log(isValidSubsequence(array, sequence));