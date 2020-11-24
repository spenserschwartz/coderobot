// https://leetcode.com/problems/valid-sudoku/


const isValidSudoku = board => {
  // Check each row
  for (let i = 0; i < 9; i++) {
    let row = board[i];
    const memo = {};
    for (let el of row) {
      if (el === '.') continue;
      if (memo[el]) return false;
      else memo[el] = true;
    }

    // Check each column
    const colMemo = {};
    for (let j = 0; j < 9; j++) {
      if (board[j][i] === '.') continue;
      if (colMemo[board[j][i]]) return false;
      else colMemo[board[j][i]] = true;
      console.log(colMemo)
    }
  }


  // Check each square


}

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