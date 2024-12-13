function fixPackages(packages) {
    // Base case: If no parentheses, return the string as-is
    if (!packages.includes('(')) {
      return packages;
    }
  
    // Find the first closing parenthesis
    let closeIndex = packages.indexOf(')');
    
    // From the closing parenthesis, move backward to find the matching opening parenthesis
    let openIndex = packages.lastIndexOf('(', closeIndex);
  
    // Extract the content inside these parentheses
    const inside = packages.slice(openIndex + 1, closeIndex);
  
    // Reverse the inside content
    const reversed = inside.split('').reverse().join('');
  
    // Reconstruct the string without the parentheses, replacing the original part
    const newStr = packages.slice(0, openIndex) + reversed + packages.slice(closeIndex + 1);
  
    // Recursively process again until no parentheses remain
    return fixPackages(newStr);
  }