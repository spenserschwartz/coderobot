// https://leetcode.com/problems/pascals-triangle/

// ! First pass 
const generate = numRows => {
  if (numRows < 1 || typeof numRows !== 'number') return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1,1]];


  const result = [
                  [1],
                 [1, 1]
                 ];

  for (let i = 3; i <= numRows; i++) {
    const currRow = [];
    const prevRow = result[i - 2];

    for (let j = 0; j < prevRow.length - 1; j++) {
      currRow.push(prevRow[j] + prevRow[j + 1]);
    }
    currRow.unshift(1);
    currRow.push(1);
    result.push(currRow);
  }
  return result;
}

// ! Faster
// https://leetcode.com/problems/pascals-triangle/discuss/562065/JavaScript%3A-faster-than-100.00-of-JavaScript-online

console.log(generate(10));