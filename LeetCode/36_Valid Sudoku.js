// https://leetcode.com/problems/valid-sudoku/


// const isValidSudoku = board => {
//   // Check each row
//   for (let i = 0; i < 9; i++) {
//     let row = board[i];
//     const memo = {};
//     for (let el of row) {
//       if (el === '.') continue;
//       if (memo[el]) return false;
//       else memo[el] = true;
//     }

//     // Check each column
//     const colMemo = {};
//     for (let j = 0; j < 9; j++) {
//       if (board[j][i] === '.') continue;
//       if (colMemo[board[j][i]]) return false;
//       else colMemo[board[j][i]] = true;
//       console.log(colMemo)
//     }
//   }


//   // Check each square


// }


var isValidSudoku = function(board) {
  // create an empty set for each row/col/square
  const rowRules = new Array(9).fill().map(() => new Set())
  const colRules = new Array(9).fill().map(() => new Set())
  const mixedRules = new Array(9).fill().map(() => new Set())
  
  // iterate through each cell on the board
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const curr = board[row][col]
      
      // some tricky math to get the index of the 3x3 squares
      const mixedIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3)

      if (curr === ".") continue  // ignore dots
      
      // if the current number already exists in the set, board is invalid
      const a = rowRules[row].has(curr)
      const b = colRules[col].has(curr)
      const c = mixedRules[mixedIdx].has(curr)
      if (a || b || c) return false
      
      // add the number to the appropriate set
      rowRules[row].add(curr)
      colRules[col].add(curr)
      mixedRules[mixedIdx].add(curr)
    }
  }
  
  // all checks out
  return true
};

let input = [["5","3",".",".","7",".",".",".","."]
            ,["6",".",".","1","9","5",".",".","."]
            ,[".","9","8",".",".",".",".","6","."]
            ,["8",".",".",".","6",".",".",".","3"]
            ,["4",".",".","8",".","3",".",".","1"]
            ,["7",".",".",".","2",".",".",".","6"]
            ,[".","6",".",".",".",".","2","8","."]
            ,[".",".",".","4","1","9",".",".","5"]
            ,[".",".",".",".","8",".",".","7","9"]] // true

console.log(isValidSudoku(input));