'use strict';
function getDataType(val) {
  if (typeof val === 'number') return 'number';
  if (typeof val === 'string') return 'string';
  return undefined;
}
module.exports = getDataType;