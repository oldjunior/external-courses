'use strict';
function countOccurrences(str) {
  const uniqChars = [];
  let isUnique = true;
  let occurCount = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < uniqChars.length; j++) {
      isUnique = false;
      if (str[i] === uniqChars[j]) break;
      isUnique = true;
    }
    if (isUnique) uniqChars[uniqChars.length] = str[i];
  }

  for (let i = 0; i < uniqChars.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (uniqChars[i] === str[j]) occurCount++;
    }
    console.log(`${uniqChars[i]}: ${occurCount}`);
    occurCount = 0;
  }
}
module.exports = countOccurrences;