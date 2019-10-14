'use strict';
function getSliceOf(array, begin = 0, end = array.length) {
  const fromIndex = begin < 0 ? array.length + begin : begin;
  const toIndex = end < 0 ? array.length + end : end;
  const subarray = [];
  array.forEach((element, index) => (fromIndex <= index && index < toIndex) && subarray.push(element));
  return subarray;
}
module.exports = getSliceOf;