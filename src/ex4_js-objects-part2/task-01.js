'use strict';
function checkIfProto(prop, obj) {
  for (let key in obj) {
    if(key === prop && !obj.hasOwnProperty(prop)) return obj[prop];
  }
  return undefined; // lint 'consistent-return' rule
}
module.exports = checkIfProto;