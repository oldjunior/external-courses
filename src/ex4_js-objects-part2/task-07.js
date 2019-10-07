'use strict';
function cropStr(str, size) {
  if (str.length < size) return str;
  return str.slice(0, size - 1).concat('…');
}
module.exports = cropStr;