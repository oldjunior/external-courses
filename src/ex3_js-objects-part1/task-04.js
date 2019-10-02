'use strict';
function checkAndAddProp(prop, obj) {
  const paramToReassign = obj; // lint 'no-param-reassign' rule
  if (!obj.hasOwnProperty(prop)) {
    paramToReassign[prop] = 'new';
  }
  return obj;
}
module.exports = checkAndAddProp;