//  Number of Fragment
const FIX_NUMBER = 5;

// EARTH RADIUS in kilometers
const EARTH_RADIUS = 6371;

//PI NUMBER
const PI = Math.PI.toFixed(FIX_NUMBER);

const { degreeToRadian } = require('../mathLib/index');

/**
 * Get Square of number
 * @param {*} number 
 */
function sqr(number) {
	return number * number;
}

/** 
 * Return the distance from place1 to place2 (kilometers)
 * lat and long is in degree (by default) 
 * @param {*} place1 :[lat,long]  
 * @param {*} place2 :[lat,long]
 * @param {*} fix : number of fragment
 * @param {*} option : degree (default) or radian 
 */


function distanceOnEarth(place1, place2, fix = FIX_NUMBER, option = 'degree') {
	fix = Number(fix);
	lat1 = Number(place1[0]);
	long1 = Number(place1[1]);
	lat2 = Number(place2[0]);
	long2 = Number(place2[1]);

	if (isNaN(lat1 * long1 * lat2 * long2*fix)) {
		return Error(
			` place1 ='[${lat1},${long1}]' or place2 = '[${lat2},${long2}]' or fix = '${fix}' is not a number , please check input value `
		);
	}
	if (option == 'degree') {
		lat1 = degreeToRadian(place1[0]);
		long1 = degreeToRadian(place1[1]);
		lat2 = degreeToRadian(place2[0]);
		long2 = degreeToRadian(place2[1]);
	}

	//haverts
	// radian
	return (
		2 *
		EARTH_RADIUS *
		Math.asin(
			Math.sqrt(
				sqr(Math.sin((lat2 - lat1) / 2)) + Math.cos(lat1) * Math.cos(lat2) * sqr(Math.sin((long2 - long1) / 2))
			)
		).toFixed(fix)
	);
}

module.exports= distanceOnEarth;
