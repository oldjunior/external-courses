'use strict';
function checkForSameItems(arr) {
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== arr[0]) return false;
	}
	return true;
}
module.exports = checkForSameItems;