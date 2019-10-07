'use strict';
function getRandomInt(minNum, maxNum) {
  const range = Math.floor(maxNum) - Math.ceil(minNum);
  return Math.floor(Math.random() * (range + 1)) + Math.ceil(minNum);
}
module.exports = getRandomInt;