const ticTacToe = board => {
  // Check each row
  for (let row of board) {
    if (row[0] === row[1] && row[0] === row[2]) return row[0];
  }

  // Check each column
  for (let i = 0; i < board.length; i++) {
    if (board[0][i] === board[1][i] && board[0][i] === board[2][i]) return board[0][i];
  }

  // Check diagonal
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) return board[0][0];
  if (board[2][0] === board[1][1] && board[2][0] === board[0][2]) return board[2][0]; 
  
  // Draw
  return "Draw";
}