var inquirer = require("inquirer");
var Word = require("./word.js");

var wordBank = [
  "thundercats",
  "he-man",
  "duck tales",
  "gi-joe",
  "transformers",
];
var userInput = "";

var selectedWord = "";
var guess = "";
gameStart();

function gameStart() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "beginNew",
        message:
          "Would you like to play a game of classic Saturday morning cartoons hangman?",
        default: false,
      },
    ])
    .then(function(response) {
      if (response.beginNew) {
        console.log(
          "\nRighteous! Let's get started. You have 7 chances. Don't worry; only incorrect guesses count against you.\n"
        );
        wordSelector();
        console.log(guess.resultArray.join(" ") + "\n");
      } else {
        console.log("No problem. Maybe next time.");
        return;
      }
      guessALetter();
    });
}

function wordSelector() {
  var randomNumber = Math.floor(Math.random() * 5);
  selectedWord = wordBank[randomNumber];
  guess = new Word(selectedWord);
  guess.holdThisWord();
}

function guessALetter() {
  if (guess.count < 7) {
    inquirer
      .prompt([
        {
          name: "userInput",
          message:
            "Come on, gimme a letter. You have " +
            (7 - guess.count) +
            " guesses remaining.",
        },
      ])
      .then(function(answer) {
        userInput = answer.userInput;
        runGame();
      });
  } else {
    console.log("Better luck next time, kiddo.\n");
  }
}

function runGame() {
  guess.checkLetter(userInput.toLowerCase());
  console.log("\n" + guess.resultArray.join(" ") + "\n");
  if (guess.resultArray.toString() === guess.wordArray.toString()) {
    console.log(
      "You win! Collect your prize at the bottom of your next cereal box!\n"
    );
    return;
  }
  guessALetter();
}
