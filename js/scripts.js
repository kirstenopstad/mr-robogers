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
  // For each number in array
  const translatedArray = numsArray.map(function(num){
    // Cast to string and check for 1
    num = num.toString();
    // Replace any elements that include a 1 (and not a 2 or 3) with "Beep!"
    if (num.includes("1") && !num.includes("2") && !num.includes("3")) {
      return num = "Beep!";
    // Replace any elements that include a 2 (and not a 3) with "Boop!"
    } else if (num.includes("2") && !num.includes("3")){
      return num = "Boop!";
    // Replace any elements that include a 3 with "Won't you be my neighbor?"
    } else if (num.includes("3")){
      return num = "Won't you be my neighbor?";
    } else {
      return parseInt(num);
    }
  });
  
  return translatedArray;
}