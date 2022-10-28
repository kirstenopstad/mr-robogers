// Business Logic

function roboTranslateNums(num){
  // Initialize numsArray
  const numsArray = [];
  // Cast argument to type number
  num = parseInt(num);
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
  console.log(translatedArray);
  return translatedArray;
}

// UI Logic
function handleFormSubmission() {
  // Retrieve user input
  const userInput = document.getElementById("userInput1").value;
  console.log(userInput);
  // Pass number to business logic, store return in variable
  const translation = roboTranslateNums(userInput);
  console.log(translation);
  console.log(roboTranslateNums(userInput));
  // If function returns 0, print error
  let p = 0;
  if (translation === 0) {
    // Create new paragraph element with id 'error'
    p = document.createElement("p");
    p.append("Error! Please input a number.")
  } else {
    // Else create new paragraph element with class 'results'
    p = document.createElement("p");
    // For every element in array
    for (i = 0; i <= translation.length - 1; i++) {
      if (i != translation.length - 1) {
        // If element is number
        if (Number.isInteger(translation[i])) {
          p.append(translation[i] + ", ");
        // Else, wrap in quotation marks
        } else {
          p.append("'" + translation[i] + "', ");
        }
      } else {
        // If element is number
        if (Number.isInteger(translation[i])) {
          p.append(translation[i]);
        // Else, wrap in quotation marks
        } else {
          p.append("'" + translation[i] + "'");
        };
      };
    };
  }
  // Add paragraph to speech bubble, unhide div
  const speechBub = document.getElementById("speech-bubble")
  speechBub.removeAttribute("class");
  speechBub.append(p);
}

window.addEventListener("load", function(){
  document.body.addEventListener("submit", function() {
    event.preventDefault();
    handleFormSubmission();
  });
})