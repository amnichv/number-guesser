var randomNumber = 0;
var min = 1;
var max = 100;


var inputField = document.querySelector("#get-guess");
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
};

function showGuess () {
  var displayValue = inputField.value;
  guessDisplay.innerText = displayValue;
  console.log(displayValue);
};

function generateRandomNumber(minimum, maximum) {
  return Math.floor(Math.random()*(maximum+1-minimum) + minimum);
};

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
});

clearButton.addEventListener("click", function() {
  console.log("yay");
  inputField.value = "";
});

document.addEventListener("keyup", function() {
  clearButton.disabled = false;
  guessButton.disabled = false;
});

resetButton.addEventListener("click", function() {
  console.log("reset")
  messageToUser.innerText = "Try again!";
  guessDisplay.innerText = "";
  inputField.value = "";
  randomNumber = generateRandomNumber(min, max);
  console.log(randomNumber);
});
