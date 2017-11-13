/*jshint esversion: 6 */
/* jshint node: true */

const distance = require('gps-distance');
const fs = require('fs');

module.exports = class POIDistance {

	constructor(listOfPOIs) {
		this._listOfPOIs = listOfPOIs;
	}

	calculateDistance(liveLocationCoord) {
		for (var key in this._listOfPOIs) {
			var result = distance(liveLocationCoord[0], liveLocationCoord[1], this._listOfPOIs[key][0], this._listOfPOIs[key][1]);
			if (result < 0.5) {
				console.log('Distance to ' + key + ' is ' + result);
			}
		}
	}
};