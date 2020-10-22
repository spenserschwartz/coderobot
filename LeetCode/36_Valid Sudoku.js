const isValidSudoku = board => {
  // Sudoku is 9x9, so row and column lengths are fixed
  
  // Check each row
  for (let row of board) {
    const arr = row.filter(el => el !== ".");
    if (hasDupes(arr)) return false;
  }

  // Check each column
  for (let i = 0; i < 9; i += 1) {
    const arr = getColumn(board, i).filter(el => el !== '.');
    if (hasDupes(arr)) return false;
  }

  // Check each square
  // !Still in progress
}

const hasDupes = array => {
  let memo = {};
  for (let el of array) {
    if (memo[el]) return true;
    else memo[el] = 1;
  }
  return false;
}

const getColumn = (arr,column) => arr.map(el => el[column]);

const getSquare = board => {
  const arr = [];
  
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < )
  }
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

console.log(getSquare(input))