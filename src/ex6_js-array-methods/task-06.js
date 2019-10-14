'use strict';
function getReducedArr(array, callback, initValue) {
  let accumulator = initValue !== undefined ? callback(initValue, array[0], 0, array) : array[0];
  for (let i = 1; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}
module.exports = getReducedArr;