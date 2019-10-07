'use strict';
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function capEveryFirst(str) {
  const subs = str.split(' ');
  let mutatedStr = capitalize(subs[0]);
  for (let i = 1; i < subs.length; i++) {
    mutatedStr = mutatedStr.concat(' ', capitalize(subs[i]));
  }
  return mutatedStr;
}
module.exports = capEveryFirst;