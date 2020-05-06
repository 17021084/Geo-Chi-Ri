//  Number of Fragment
const FIX_NUMBER = 5;

// EARTH RADIUS in kilometers
const EARTH_RADIUS = 6371;

//PI NUMBER
const PI = Math.PI.toFixed(FIX_NUMBER);

/** Convert angles from Degree to Radian 
 * @param {*} degree  ( 0 <= Degree <=360 )
 * 
 * @Return Radian
 * 
 */

function degreeToRadian(degree) {
	let dg = Number(degree);
	if (isNaN(dg)) {
		return Error(` "${degree}" is not a number, please check input value `);
	}
	if (dg >= 0 && dg <= 360) {
		return dg * PI / 180;
	}
	return Error(`Angles in Degree must in [0,360] , your inputed Argument =${degree} is invalid `);
}

/**
 * Calulate  length of Chord.
 * Default angles is in RADIAN
 * @param {*} angles : number 
 * @param {*} radius : number
 * @param {*} option : 'radian' is default or 'degree'
 */

function ChordLength(angles, radius, option = 'radian') {
	let a = Number(angles);
	let r = Number(radius);
	if (isNaN(a) || isNaN(r)) {
		return Error(` "${angles}" or "${radius}" is not a number , please check input value `);
	}
	if (option == 'radian') return a * r;
	else if (option == 'degree') return r * a * PI / 180;
	return Error('Option Argument is  invalid');
}

/**
 * Return module of vetor P1P2 . In another word, the length of P1P2
 * @param {*} point1 is Array [x1,y1]
 * @param {*} point2 is Array [x2,y2]
 */

function moduleOfVector(point1, point2) {
	let p1x = Number(point1[0]);
	let p1y = Number(point1[1]);
	let p2x = Number(point2[0]);
	let p2y = Number(point2[1]);
	if (isNaN(p1x * p1y * p2x * p2y)) {
		return Error(
			` point1 ='[${p1x},${p1y}]' or point2 = '[${p2x},${p2y}]' is not a number , please check input value `
		);
	}
	return Math.sqrt((p2y - p1y) * (p2y - p1y) + (p2x - p1x) * (p2x - p1x));
}

function cosOfTwosVetor(point1, point2, point3, point4) {
	let p1x = Number(point1[0]);
	let p1y = Number(point1[1]);
	let p2x = Number(point2[0]);
	let p2y = Number(point2[1]);
	let p3x = Number(point3[0]);
	let p3y = Number(point3[1]);
	let p4x = Number(point4[0]);
	let p4y = Number(point4[1]);

	if (isNaN(p1x * p1y * p2x * p2y * p3x * p3y * p4x * p4y)) {
		return Error(
			` point1 ='[${p1x},${p1y}]' || point2 = '[${p2x},${p2y}]' || point3 ='[${p3x},${p3y}]' || point4 = '[${p4x},${p4y}]' is not a number , please check input value `
		);
	}

	//divided zero
	if (moduleOfVector(point1, point2) * moduleOfVector(point3, point4) == 0) {
		return Error(`Divide Zeroooooo!`);
	}

	let vetorP1P2 = [ p2x - p1x, p2y - p1y ];
	let vetorP3P4 = [ p4x - p3x, p4y - p3y ];

	return (
		(vetorP1P2[0] * vetorP3P4[0] + vetorP3P4[1] * vetorP1P2[1]) /
		(moduleOfVector(point1, point2) * moduleOfVector(point3, point4))
	);
}

function anglesOfTwosVetor(point1, point2, point3, point4, fix = FIX_NUMBER, option = 'degree') {
	if (isNaN(Number(fix))) return Error(`Argument :fix = "${fix}" is not a number!!!`);
	if (option == 'degree') {
		return (Math.acos(cosOfTwosVetor(point1, point2, point3, point4)) * 180 / PI).toFixed(fix);
	} else if (option == 'radian') {
		return Math.acos(cosOfTwosVetor(point1, point2, point3, point4)).toFixed(fix);
	}
	return Error(`Option = ${option} is invalid`);
}

/**
 * | a  , b |
 * | c  , d |
 *  return a*d-c*b
 */

function Determinant2D(a, b, c, d) {
	a = Number(a);
	b = Number(b);
	c = Number(c);
	d = Number(d);
	if (isNaN(a * b * c * d)) {
		return Error(` Argument is not a number , please check input value `);
    }
    return a*b-c*d
}

// console.log(  cosOfTwosVetor([0,0],[0,0],[0,0],[1,1])  );
console.log(cosOfTwosVetor([ -1, 0 ], [ 0, 0 ], [ 1, 0 ], [ 0, 0 ]));
console.log(anglesOfTwosVetor([ -1, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, -1 ], 1, 'degree'));
