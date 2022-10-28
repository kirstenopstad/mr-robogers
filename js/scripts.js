function roboTranslateNums(num){
  // Initialize numsArray
  const numsArray = [];
  // Validate that user input is a number
  if (!Number.isInteger(num)) {
    return 0;
  } else {
    // Create array from 0 to user input
    for (i = 0; i <= num; i++) {
      numsArray.push(i);
    };
  };
  return numsArray;
  // Replace any elements that include a 1 (using UI Logic) with "Beep!"
    // If element contains 2, implement 2 replacement
    // If element contains 3, implement 3 replacement
  // Replace any elements that include a 2 (using UI Logic) with "Boop!"
    // If element contains 3, implement 3 replacement
  // Replace any elements that include a 3 (using UI Logic) with "Won't you be my neighbor?"
}