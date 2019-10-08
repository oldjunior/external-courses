'use strict';
function isTherePropIn(prop, obj) {
  return obj.hasOwnProperty(prop);
}
module.exports = isTherePropIn;