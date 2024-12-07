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

// Tests
function runTests() {
  const testCases = [
    {
      input: ['midu', 'madeval', 'educalvolpz'],
      expected: 
        "***************\n" +
        "* midu        *\n" +
        "* madeval     *\n" +
        "* educalvolpz *\n" +
        "***************"
    },
    {
      input: ['short', 'longestname', 'midlength'],
      expected: 
        "***************\n" +
        "* short       *\n" +
        "* longestname *\n" +
        "* midlength   *\n" +
        "***************"
    },
    {
      input: ['onlyone'],
      expected: 
        "***********\n" +
        "* onlyone *\n" +
        "***********"
    },
    {
      input: ['a', 'ab', 'abc'],
      expected: 
        "*******\n" +
        "* a   *\n" +
        "* ab  *\n" +
        "* abc *\n" +
        "*******"
    }
  ];
  
  let passed = 0;
  for (let i = 0; i < testCases.length; i++) {
    const { input, expected } = testCases[i];
    const result = createFrame(input);
    if (result === expected) {
      console.log(`Test ${i + 1} passed ✅`);
      passed++;
    } else {
      console.log(`Test ${i + 1} failed ❌`);
      console.log(`Input: ${JSON.stringify(input)}`);
      console.log(`Expected:\n${expected}`);
      console.log(`Received:\n${result}`);
    }
  }
  
  console.log(`${passed}/${testCases.length} tests passed.`);
}

// Run Tests
runTests();