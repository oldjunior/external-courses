'use strict';
const calc = (function() {
  let result = 0;
  function add(num) {
    if(num === undefined) return add;
    if (!Number.isNaN(num)) result += num;
    add.add = (function() { return add; }());
    add.subtract = (function() { return subtract; }());
    add.divide = (function() { return divide; }());
    add.multiply = (function() { return multiply; }());
    add.getResult = (function() { return getResult; }());
    return add;
  }
  function subtract(num) {
    if(num === undefined) return subtract;
    if (!Number.isNaN(num)) result -= num;
    subtract.add = (function() { return add; }());
    subtract.subtract = (function() { return subtract; }());
    subtract.divide = (function() { return divide; }());
    subtract.multiply = (function() { return multiply; }());
    subtract.getResult = (function() { return getResult; }());
    return subtract;
  }
  function divide(num) {
    if(num === undefined) return divide;
    if (!Number.isNaN(num) && num !== 0) result /= num;
    divide.add = (function() { return add; }());
    divide.subtract = (function() { return subtract; }());
    divide.divide = (function() { return divide; }());
    divide.multiply = (function() { return multiply; }());
    divide.getResult = (function() { return getResult; }());
    return divide;
  }
  function multiply(num) {
    if(num === undefined) return multiply;
    if (!Number.isNaN(num)) result *= num;
    multiply.add = (function() { return add; }());
    multiply.subtract = (function() { return subtract; }());
    multiply.divide = (function() { return divide; }());
    multiply.multiply = (function() { return multiply; }());
    multiply.getResult = (function() { return getResult; }());
    return multiply;
  }
  function getResult() {
    return result;
  }
  function reset() {
    result = 0;
  }
  return {add, subtract, divide, multiply, getResult, reset};
}());
module.exports = calc;