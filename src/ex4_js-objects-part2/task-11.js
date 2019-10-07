'use strict';
function countEntrance(str) {
  const uniqChars = [];
  let isUnique = true;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < uniqChars.length; j++) {
      isUnique = false;
      if (str[i] === uniqChars[j]) break;
      isUnique = true;
    }
    if (isUnique) uniqChars[uniqChars.length] = str[i];
  }

  let entCounter = 0;
  for (let i = 0; i < uniqChars.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (uniqChars[i] === str[j]) entCounter++;
    }
    console.log(`${uniqChars[i]}: ${entCounter}`);
    entCounter = 0;
  }
}
module.exports = countEntrance;