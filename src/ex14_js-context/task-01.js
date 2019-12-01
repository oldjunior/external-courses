'use strict';
function Calculator() {
  this.result = 0;
  this.add = function(num) {
    if(num === undefined) return this;
    if (!Number.isNaN(num)) this.result += num;
    return this;
  }
  this.subtract = function(num) {
    if(num === undefined) return this;
    if (!Number.isNaN(num)) this.result -= num;
    return this;
  }
  this.divide = function(num) {
    if(num === undefined) return this;
    if (!Number.isNaN(num) && num !== 0) this.result /= num;
    return this;
  }
  this.multiply = function(num) {
    if(num === undefined) return this;
    if (!Number.isNaN(num)) this.result *= num;
    return this;
  }
  this.setState = function(num) {
    if(num === undefined) return this;
    if (!Number.isNaN(num)) this.result = num;
    return this;
  }
  this.fetchData = function(cb) {
    setTimeout(() => {
      this.result = cb(500);
    }, 2000);
  }
  this.reset = function() {
    this.result = 0;
    return this;
  }
  this.getResult = function() {
    return this.result;
  }
}
const calc = new Calculator();
module.exports = calc;