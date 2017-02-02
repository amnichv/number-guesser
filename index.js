// target the input field where the user enters thier guess.
//get the value of the input field
//display the value on the screen

var inputField = document.querySelector(".GET-guess");
var guessDisplay = document.querySelector(".guess-display");
var guessButton = document.querySelector(".guess-button");
var clearButton = document.querySelector(".clear-button");
var resetButton = document.querySelector(".reset-button");

//Display message too high, low, or boom when conditional runs
//var = messageToUser document.querySelector(".message-to-user");
function showGuess () {
  var displayValue = inputField.value;
  guessDisplay.innerText = displayValue;
  console.log(displayValue);
}

function generateRandomNumber() {

}
//page refresh -- what is this... how do I make it work
window.onload = function () {
  generateRandomNumber (min, max);
}

var randomNumber = Math.floor(Math.random() * 100)

guessButton.addEventListener("click", function() {
  console.log("hi")
  showGuess()
  console.log(randomNumber);
})

clearButton.addEventListener("click", function() {
  console.log("yay")
  inputField.value = ''
})


resetButton.addEventListener("click", function() {
  console.log("reset")
  randomNumber = Math.floor(Math.random() * 100)
  console.log(randomNumber);
  //clear input field
  //clear the p tag with guess
  //generate a new random number
})


//take user input and compare it to random number
//if user guess is too high...do something
//if user guess is too low...do something
//if user guesses correctly...new random number
