'use strict';
function getTruthyOf(array, callback) {
  const subarray = [];
  array.forEach((element, index, array) => callback(element, index, array) && subarray.push(element));
  return subarray;
}
module.exports = getTruthyOf;