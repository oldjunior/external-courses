'use strict';
function displayNumOfEvensAndOdds(arr) { 
	let num = [0, 0, 0];
	for (let i = 0; i < arr.length; i++) {
		if (Number.isInteger(arr[i])) {
			if (arr[i] === 0) {
				num[2]++;
			} else if (arr[i] % 2) {
				num[1]++;
			} else {
				num[0]++;
			}
		}
	}
	return num;
}
module.exports = displayNumOfEvensAndOdds;