'use strict';
function shallowCopyOf(obj) {
  return Object.assign({}, obj);
}
module.exports = shallowCopyOf;