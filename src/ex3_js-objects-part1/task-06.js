'use strict';
function makeDeepCopy(obj) {
  if (typeof obj === "object" && obj !== null) {
    let copy = {};
    if (Array.isArray(obj)) {
      copy = [];
      for (let i = 0; i < obj.length; i++) {
        copy[i] = makeDeepCopy(obj[i]);
      }
      return copy;
    }
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        copy[prop] = makeDeepCopy(obj[prop]);
      }
    }
    return copy;
  }
return obj;
}
module.exports = makeDeepCopy;