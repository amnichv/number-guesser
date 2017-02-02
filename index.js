// target the input field where the user enters thier guess.
//get the value of the input field
//display the value on the screen
var randomNumber = 0;
var min = 1;
var max = 100;


var inputField = document.querySelector(".GET-guess");
var guessDisplay = document.querySelector(".guess-display");
var guessButton = document.querySelector(".guess-button");
var clearButton = document.querySelector(".clear-button");
var resetButton = document.querySelector(".reset-button");
var messageToUser = document.querySelector(".message-to-user");

window.onload = function () {
  console.log("Initializing...")
  randomNumber = generateRandomNumber(min, max);
  console.log("Random number: " + randomNumber);
  resetButton.disabled = true;
  clearButton.disabled = true;
  guessButton.disabled = true;
}
//Display message too high, low, or boom when conditional runs
//var = messageToUser document.querySelector(".message-to-user");
function showGuess () {
  var displayValue = inputField.value;
  guessDisplay.innerText = displayValue;
  console.log(displayValue);
}

function generateRandomNumber(minimum, maximum) {
  return Math.floor(Math.random()*(maximum+1-minimum) + minimum);
}

guessButton.addEventListener("click", function() {
  console.log("guess received");
  resetButton.disabled = false;
  showGuess();
  console.log(randomNumber);
  if (parseInt(inputField.value, 10)){
    var userNum = parseInt(inputField.value, 10);
    if (userNum == randomNumber){
      messageToUser.innerText = "Boom!";
    } else if (userNum < randomNumber && userNum >= min){
      messageToUser.innerText = "Your number is too low";
    } else if (userNum > randomNumber && userNum <= max) {
      messageToUser.innerText = "Your number is too high";
    } else {
      alert("Enter a number between 1 and 100");
    }
  } else {
    alert("Enter a number");
  }
  inputField.value = "";
  clearButton.disabled = true;
  guessButton.disabled = true;
})
//isNaN built in JS method to test whether argument is not a number
clearButton.addEventListener("click", function() {
  console.log("yay");
  inputField.value = "";
})

document.addEventListener("keyup", function() {
  clearButton.disabled = false;
  guessButton.disabled = false;
})

resetButton.addEventListener("click", function() {
  console.log("reset")
  messageToUser.innerText = "Try again!";
  guessDisplay.innerText = "";
  inputField.value = "";
  randomNumber = generateRandomNumber(min, max);
  console.log(randomNumber);
  //clear input field
  //clear the p tag with guess
  //generate a new random number
})



//take user input and compare it to random number
//if user guess is too high...do something
//if user guess is too low...do something
//if user guesses correctly...new random number
