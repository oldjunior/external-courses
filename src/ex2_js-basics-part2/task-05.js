'use strict';
function getMaxItem(arr) {
  let maxItem = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxItem) {
      maxItem = arr[i];
    }
  }
  return maxItem;
}
module.exports = getMaxItem;