/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    let boardRow = -1;
    let boardCol = -1;
  
    // Find the position of '@' in the board
    outerLoop: 
    for (let i = 0; i < board.length; i++) {
      boardCol = board[i].indexOf('@');
      if (boardCol !== -1) {
        boardRow = i;
        break outerLoop;
      }
    }
  
    // If '@' is not found, return 'crash' as a fallback (although it's assumed '@' always exists)
    if (boardRow === -1 || boardCol === -1) return 'crash';
  
    // Move based on the direction
    switch (mov) {
      case 'U': boardRow--; break;
      case 'D': boardRow++; break;
      case 'L': boardCol--; break;
      case 'R': boardCol++; break;
    }
  
    // Check if the new position is out of bounds
    if (boardRow < 0 || boardRow >= board.length || boardCol < 0 || boardCol >= board[boardRow].length) {
      return 'crash';
    }
  
    const nextMove = board[boardRow][boardCol];
  
    // Check for collisions or eating
    if (nextMove === 'o') {
      return 'crash';
    } else if (nextMove === '*') {
      return 'eat';
    }
  
    return 'none';
  }