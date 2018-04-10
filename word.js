var Letter = require("./letter.js");

// this makes each letter into an object with the letter from the selected word and a value of false. The boolean might be redundent here...
function Word(newWord) {
  this.word = newWord;
  this.wordArray = this.word.split("");
  this.resultArray = [];
  this.guessArray = [];
  this.count = 0;

  this.holdThisWord = function() {
    for (var x = 0; x < this.wordArray.length; x++) {
      if (this.wordArray[x] === " ") {
        this.resultArray.push(" ");
      } else if (this.wordArray[x] === "-") {
        this.resultArray.push("-");
      } else {
        this.resultArray.push("_");
      }
    }
    //console.log(this.resultArray);
  };

  this.checkLetter = function(userInput) {
    this.guessArray.push(userInput);
    var letter = "";
    for (var i = 0; i < this.wordArray.length; i++) {
      if (this.resultArray[i] != "_") {
        //console.log(this.resultArray);
      } else if (
        this.wordArray[i] === userInput &&
        this.resultArray[i] === "_"
      ) {
        letter = new Letter(userInput, true);
        this.resultArray[i] = letter.printLetter();
        return;
      } else {
        letter = new Letter(userInput, false);
        this.resultArray[i] = letter.printLetter();
      }
    }
    this.count++;
    return;
  };
}

module.exports = Word;
