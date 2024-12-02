function createFrame(names) {
  // Find the length of the longest name
  const longestNameLength = Math.max(...names.map(name => name.length));
  
  // Determine the width of the frame
  const frameWidth = longestNameLength + 4; // 2 spaces + 2 border stars
  
  // Generate the full star border
  const fullStarLine = '*'.repeat(frameWidth);
  
  // Build the frame
  const framedNames = names.map(name => `* ${name.padEnd(longestNameLength, ' ')} *`);
  
  // Combine all parts of the frame into a single string
  let frame = fullStarLine + '\n' +
              framedNames.join('\n') + '\n' +
              fullStarLine;
  
  return frame;
}

// Example usage
const frame = createFrame(['midu', 'madeval', 'educalvolpz']);
console.log(frame);