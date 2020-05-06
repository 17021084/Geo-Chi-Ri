//  Number of Fragment
const FIX_NUMBER = 5;

// EARTH RADIUS in kilometers
const EARTH_RADIUS = 6371;

//PI NUMBER
const PI = Math.PI.toFixed(FIX_NUMBER);

const {degreeToRadian} = require('../mathLib/index');


function sqr(number) {
	return number * number;
}

function distanceOnEarth(place1, place2, option = 'degree') {
	lat1 = Number(place1[0]);
	long1 = Number(place1[1]);
	lat2 = Number(place2[0]);
	long2 = Number(place2[1]);

	if (isNaN(lat1 * long1 * lat2 * long2)) {
		return Error(
			` place1 ='[${lat1},${long1}]' or place2 = '[${lat2},${long2}]' is not a number , please check input value `
		);
	}
	if (option == 'degree') {
		lat1 = degreeToRadian(place1[0]);
		long1 = degreeToRadian(place1[1]);
		lat2 = degreeToRadian(place2[0]);
		long2 = degreeToRadian(place2[1]);
	}

	//haverts
	return (
		2 *
		EARTH_RADIUS *
		Math.asin(
			Math.sqrt(
				sqr(Math.sin((lat2 - lat1) / 2)) + Math.cos(lat1) * Math.cos(lat2) * sqr(Math.sin((long2 - long1) / 2))
			)
		)
	);
};

console.log(distanceOnEarth([0,0] , [90,0]));
