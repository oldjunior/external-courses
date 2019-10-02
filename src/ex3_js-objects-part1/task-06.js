'use strict';
function deepCopyOf(obj) {
  if (typeof obj === "object" && obj !== null) {
    let copy = {};
    if (Array.isArray(obj)) {
      copy = [];
      for (let i = 0; i < obj.length; i++) {
        copy[i] = deepCopyOf(obj[i]);
      }
      return copy;
    }
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        copy[prop] = deepCopyOf(obj[prop]);
      }
    }
    return copy;
  }
return obj;
}
module.exports = deepCopyOf;