// target the input field where the user enters thier guess.
//get the value of the input field
//display the value on the screen

var inputField = document.querySelector(".GET-guess");
var guessDisplay = document.querySelector(".guess-display");
var guessButton = document.querySelector(".guess-button");

function showGuess () {
  var displayValue = inputField.value;
  guessDisplay.innerText = displayValue;
  console.log(displayValue);
}

guessButton.addEventListener("click", function() {
  console.log("hi")
  showGuess()
})
