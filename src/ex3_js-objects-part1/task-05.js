'use strict';
function makeShallowCopy(obj) {
  return Object.assign({}, obj);
}
module.exports = makeShallowCopy;