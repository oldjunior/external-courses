'use strict';
function spellBackwards(str) {
  let backwardStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    backwardStr += str[i];
  }
  return backwardStr;
}
module.exports = spellBackwards;