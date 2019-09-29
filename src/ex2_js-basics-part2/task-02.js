'use strict';
function displayArrItems(arr) {
	for (let i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
	console.log('Total items: ' + arr.length);
}
module.exports = displayArrItems;