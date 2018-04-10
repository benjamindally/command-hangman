function Letter(lettertoGuess, guess) {
  this.theLetter = lettertoGuess; //creates a variable for the letter that is to tested against the user Input
  this.guessed = guess; //stores the value of whether or not the letter has been guessed or not
  this.printLetter = function() {
    // checks if the letter has been guessed
    if (this.guessed) {
      return this.theLetter;
    } else {
      return "_";
    }
  };
}

module.exports = Letter;
