'use strict';
function roundSumToDec(num_1, num_2) {
  let sum = num_1 + num_2;
  sum = parseFloat(sum.toFixed(3));
  if (sum.isNaN) return 'NaN';
  return sum;
}
module.exports = roundSumToDec;