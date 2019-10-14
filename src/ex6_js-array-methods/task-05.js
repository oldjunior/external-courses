'use strict';
function makeModifiedCopyOf(array, callback) {
  const newArray = [];
  array.forEach((element, index, array) => newArray.push(callback(element, index, array)));
  return newArray;
}
module.exports = makeModifiedCopyOf;