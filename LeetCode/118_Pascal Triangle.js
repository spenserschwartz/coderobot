// https://leetcode.com/problems/pascals-triangle/

// ! First pass 
// const generate = numRows => {
//   if (numRows < 1 || typeof numRows !== 'number') return [];
//   if (numRows === 1) return [[1]];
//   if (numRows === 2) return [[1], [1,1]];


//   const result = [
//                   [1],
//                  [1, 1]
//                  ];

//   for (let i = 3; i <= numRows; i++) {
//     const currRow = [];
//     const prevRow = result[i - 2];

//     for (let j = 0; j < prevRow.length - 1; j++) {
//       currRow.push(prevRow[j] + prevRow[j + 1]);
//     }
//     currRow.unshift(1);
//     currRow.push(1);
//     result.push(currRow);
//   }
//   return result;
// }

// ! Faster
// https://leetcode.com/problems/pascals-triangle/discuss/562065/JavaScript%3A-faster-than-100.00-of-JavaScript-online

var generate = function(numRows) {
  const pascalsTriangles = [];
  if(numRows === 0) {
     return pascalsTriangles;
  }
  
  pascalsTriangles.push([1]);
  let last = [];
  while(pascalsTriangles.length < numRows) {
      let newEntry = [1];
      
      for(let i=0; i < last.length -1; i++) {
          newEntry[i+1] = last[i] + last[i+1];
      }
      newEntry.push(1);
      pascalsTriangles.push(newEntry);
      last  = newEntry;
  }
  return pascalsTriangles;
};

console.log(generate(5));