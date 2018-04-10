var inquirer = require("inquirer");
var Word = require("./word.js");

var wordBank = [
  "thundercats",
  "he-man",
  "duck tales",
  "gi-joe",
  "transformers",
];
var count = 0;

var selectedWord = "";
var guess = "";
gameStart();
//wordSelector();

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
        wordSelector();
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
  console.log(selectedWord);
  guess = new Word(selectedWord);
  guess.holdThisWord();
}

function guessALetter() {
  if (count < 12) {
    inquirer
      .prompt([
        {
          name: "userInput",
          message: "Come on, gimme a letter",
        },
      ])
      .then(function(answer) {
        guess.checkLetter(answer.userInput);
        console.log(guess.resultArray);
        console.log(guess.wordArray);
        console.log(guess.resultArray.join(" "));
        count++;
        guess.wordCheck();
        guessALetter();
      });
  }
}
