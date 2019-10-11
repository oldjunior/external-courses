'use strict';
function inject(str, substr, pos) {
  const trmStr = str.trim();
  let spaceIndex = -1;
  let i = 0;
  while (true) {
    spaceIndex = trmStr.indexOf(' ', spaceIndex + 1);
    if (spaceIndex === -1) return trmStr.concat(' ', substr);
    if (i === pos) break;
    i++;
  }
return trmStr.substring(0, spaceIndex) + ' ' + substr + trmStr.substring(spaceIndex);
}
module.exports = inject;