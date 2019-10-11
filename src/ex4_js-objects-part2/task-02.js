'use strict';
function createProtoless(obj) {
  return Object.create(null);
}
module.exports = createProtoless;