'use strict';
function Hangman(word) {
  this.word = word ? word : '';
  this.answerArr = this.word.split('').map(el => '_');
  this.answer = this.answerArr.join('');
  this.attemptCounter = 6;
  this.wrongLetters = [];
  this.guess = function(letter) {
    let isWrong = true;
    let i = -1;
    while(true) {
      i = this.word.toLowerCase().indexOf(letter, i + 1);
      if (i === -1) break;
      this.answerArr[i] = this.word[i];
      isWrong = false;
    }
    if (isWrong) {
      this.attemptCounter -= 1;
      this.wrongLetters.push(letter);
      this.wrongLetters.sort();
      console.log(`wrong letter, errors left ${ this.attemptCounter } | ${ this.wrongLetters }`);
      return this;
    }
    this.answer = this.answerArr.join('');
    console.log(this.answer);
    return this;
  }
  this.getGuessedString = function() {
    return this.answer;
  }
  this.getErrorsLeft = function() {
    return this.attemptCounter;
  }
  this.getWrongSymbols = function() {
    return this.wrongLetters;
  }
  this.getStatus = function() {
    return `${ this.answer } | errors left ${ this.attemptCounter }`;
  }
  this.startAgain = function(word) {
    this.word = word ? word : '';
    this.answerArr = this.word.split('').map(el => '_');
    this.answer = this.answerArr.join('');
    this.attemptCounter = 6;
    this.wrongLetters = [];
    return this;
  }
}
const hang = new Hangman();
module.exports = hang;