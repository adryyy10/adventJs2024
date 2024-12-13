/**
 * @param {string[]} box
 * @returns {boolean} True if the gift (*) is inside the box
 */
function inBox(box) {
    let starRow = -1;
    let starCol = -1;
  
    // Find the position of the first '*'
    for (let i = 0; i < box.length; i++) {
      const col = box[i].indexOf('*');
      if (col !== -1) {
        starRow = i;
        starCol = col;
        break;
      }
    }
  
    // If no '*' found at all
    if (starRow === -1) return false;
  
    // Check that '*' is not on the top or bottom border
    if (starRow === 0 || starRow === box.length - 1) return false;
  
    // Check that '*' is not on the left or right border
    const line = box[starRow];
    if (starCol === 0 || starCol === line.length - 1) return false;
  
    // If all checks pass, the '*' is inside
    return true;
  }