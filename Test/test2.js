// const processInput = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     const cN = arr[i];
//     let isYes = true;
    
//     if (cN.length !== 17) {
//       isYes = false;
//       continue;
//     }

  
//     if (cN[0] === '4' && cN[0] === '5' && cN.substring(0,2) === '37') {
//       isYes = false;
//       continue;
//     }

//     for (let j = 0; j < cN.length; j++) {
//       console.log(cN[10]);
//       if (j === 5 || j === 11) {
//         if (cN[j] !== ':' && cN[j] !== '-' && cN[j] !== '/') {
//           isYes = false;
//           continue;
//         }
//       } else {
//         if (isNaN(cN[j])) {
//           isYes = false;
//           continue;
//         }
//       }
//     }
//     console.log(isYes ? 'yes' : 'no');
//   }
// }

const processInput = arr => {
  for (let i = 1; i < arr.length; i++) {
    let isYes = true;
    const cN = arr[i];

    if (cN.length !== 17) isYes = false;
    if (cN[0] !== '4' && cN[0] !== '5' && cN.substring(0, 2) !== '37') isYes = false;

    for (let j = 0; j < cN.length; j++) {
      if (j === 5 || j === 11) {
        if (cN[j] !== ':' && cN[j] !== '-' && cN[j] !== '/') isYes = false;
      } else {
        if (isNaN(cN[j])) isYes = false;
      }
    }


    console.log(isYes ? 'yes' : 'no');
  }
}

let arr = [2, '47182-22222-32562', '44444-52a33-ff222'];
console.log(processInput(arr));