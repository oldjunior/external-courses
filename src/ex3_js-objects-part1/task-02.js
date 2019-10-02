'use strict';
function displayPropsOf(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop + ': ' + obj[prop]);
    }
  }
}
module.exports = displayPropsOf;