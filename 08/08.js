/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    return indices
      .map((index, i) => {
        const spaces = ' '.repeat(indices.length - i - 1);
        
        // Handle positive, zero, and negative indices separately
        let race = '';
        if (index === 0) {
          race = '~'.repeat(length);
        } else if (index > 0) {
          race = '~'.repeat(index) + 'r' + '~'.repeat(length - index - 1);
        } else { // index < 0
          race = '~'.repeat(length + index) + 'r' + '~'.repeat(-index - 1);
        }
        
        return `${spaces}${race} /${i + 1}`;
      })
      .join('\n');
  }