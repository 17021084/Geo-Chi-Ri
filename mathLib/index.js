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

/**
 * Return module of vetor P1P2 . In another word, the length of P1P2
 * @param {*} point1 is Array [x1,y1]
 * @param {*} point2 is Array [x2,y2]
 * 
 */

/**
 * Return cossin of angles bettwen vector P1P2 and  vector P3P4
 * 
 * @param {*} point1 is Array [x1,y1]
 * @param {*} point2 is Array [x2,y2]
 * @param {*} point3 is Array [x3,y3]
 * @param {*} point4 is Array [x4,y4]
 */

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

/**
 * Return cossin of angles bettwen vector P1P2 and  vector P3P4
 * 
 * @param {*} point1 is Array [x1,y1]
 * @param {*} point2 is Array [x2,y2]
 * @param {*} point3 is Array [x3,y3]
 * @param {*} point4 is Array [x4,y4]
 * @param {*} fix is Number of Numbers'Fragment
 * @param {*} opttion is what types of angles 

 */
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
 * return Determinant
 * | a  , b |
 * | c  , d |
 *  return a*d-c*b
 */

function det(a, b, c, d) {
	a = Number(a);
	b = Number(b);
	c = Number(c);
	d = Number(d);
	if (isNaN(a * b * c * d)) {
		return Error(` Argument is not a number , please check input value `);
	}
	return a * d - c * b;
}

//
/** Vector multiplication with 4 point
 * 
 * 	Return Vector P1P2xP3P4 as 3D array [x,y,z]
 * 
 * @param {*} point1 is array [x1,y1]
 * @param {*} point2 is array [x1,y1]
 * @param {*} point3 is array [x1,y1]
 * @param {*} point4 is array [x1,y1]
 */
function multipVectorP1P2xP3P4(point1, point2, point3, point4) {
	let p1x = Number(point1[0]);
	let p1y = Number(point1[1]);
	let p1z = Number(point1[2]);
	let p2x = Number(point2[0]);
	let p2y = Number(point2[1]);
	let p2z = Number(point2[2]);
	let p3x = Number(point3[0]);
	let p3y = Number(point3[1]);
	let p3z = Number(point3[2]);
	let p4x = Number(point4[0]);
	let p4y = Number(point4[1]);
	let p4z = Number(point4[2]);

	if (isNaN(p1x * p1y * p2x * p2y * p3x * p3y * p4x * p4y * p1z * p2z * p3z * p4z)) {
		return Error(
			` point1 ='[${p1x},${p1y},${p1z}]' || point2 = '[${p2x},${p2y},${p2z}]' || point3 ='[${p3x},${p3y},${p3z}]' || point4 = '[${p4x},${p4y},${p4z}]' is not a number , please check input value `
		);
	}
	let vetorP1P2 = [ p2x - p1x, p2y - p1y, p2z - p1z ];
	let vetorP3P4 = [ p4x - p3x, p4y - p3y, p4z - p3z ];

	//  vtA [a1,a2,a3]a1,a2
	//  vtB [b1,b2,b3]b1,b2
	// vtC=vtA x vtB = [a2b3-a3b2 , a3b1-a1b3, a1b2-b1a2  ]

	let result_vector = [
		det(vetorP1P2[1], vetorP1P2[2], vetorP3P4[1], vetorP3P4[2]),
		det(vetorP1P2[2], vetorP1P2[0], vetorP3P4[2], vetorP3P4[0]),
		det(vetorP1P2[0], vetorP1P2[1], vetorP3P4[0], vetorP3P4[1])
	];
	return result_vector;
}

// // console.log(  cosOfTwosVetor([0,0],[0,0],[0,0],[1,1])  );
// console.log(cosOfTwosVetor([ -1, 0 ], [ 0, 0 ], [ 1, 0 ], [ 0, 0 ]));
// console.log(anglesOfTwosVetor([ -1, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, -1 ], 1, 'degree'));
// var vector = multipVectorP1P2xP3P4([ 0, 0 ,0], [5, 5, 0 ], [ 0,0, 0 ], [4, 4,0  ])
// console.log(`[${vector[0]},${vector[1]},${vector[2]}]`);

/**
 * Return vector P1P2 as array [x ,y]    
 * 
 * @param {*} point1 is array [x1,y1]
 * @param {*} point2 is array [x2,y2]
 */

function vectorP1P2(point1, point2) {
	let p1x = Number(point1[0]);
	let p1y = Number(point1[1]);
	let p2x = Number(point2[0]);
	let p2y = Number(point2[1]);
	if (isNaN(p1x * p1y * p2x * p2y)) {
		console.log(
			` point1 ='[${p1x},${p1y}]' or point2 = '[${p2x},${p2y}]' is not a number , please check input value `
		);
		return Error(
			` point1 ='[${p1x},${p1y}]' or point2 = '[${p2x},${p2y}]' is not a number , please check input value `
		);
	}
	return [ p2x - p1x, p2y - p1y ];
}



 
/**
 * tìm điểm cắt 2 đường thẳng khi biết vector chỉ phương và 1 điểm bất kì thuộc đường thẳng đó 
 * 
 * @param {*} U1  vector chỉ phương
 * @param {*} U2  vector chỉ phương 
 * @param {*} Point1  điểm thuộc đương thẳng có vector chỉ phương là U1
 * @param {*} Point2  điểm thuộc đương thẳng có vector chỉ phương là U2
 */ 
function getCuttingPoint(U1, U2, Point1, Point2) {
	const N1 = [ Number(U1[1] * -1), Number(U1[0]) ];
	const N2 = [ Number(U2[1]) * -1, Number(U2[0]) ];
	Point1 = [ Number(Point1[0]), Number(Point1[1]) ];
	Point2 = [ Number(Point2[0]), Number(Point2[1]) ];

	//  u (-b,a) => n(a,b) p (x0,y0)
	//  a(x-x0) +b(y-y0)=0
	// => ax +by +c` =0  or ax+by=c
	// c=ax0+by0
	const C1 = N1[0] * Point1[0] + N1[1] * Point1[1];
	const C2 = N2[0] * Point2[0] + N2[1] * Point2[1];
	// a x + b   y = c
	// a'x + b  'y = c'
	// search key word : ANH BẠN CẦM BÁT ăn cơm

	// console.log(` 
	// 	${N1[0]}x + ${N1[1]}y =${C1}
	// 	${N2[0]}x + ${N2[1]}y =${C2}
	
	// `);


	const D = det(N1[0], N1[1], N2[0], N2[1]);
	const Dx = det(C1, N1[1], C2, N2[1]);
	const Dy = det(N1[0], C1, N2[0], C2);
	if (D == 0) {
		console.log('Math Error');
		return Error('Math Error');
	}
	return [ Dx / D , Dy / D ];
}

// var point = getCuttingPoint([ -1, 0 ], [ 0, -1 ], [ 5, 2 ], [ 2, 5 ]);
// console.log(`[${point[0]} , ${point[1]}]` )

module.exports = {
	multipVectorP1P2xP3P4: multipVectorP1P2xP3P4,
	det: det,
	cosOfTwosVetor: cosOfTwosVetor,
	anglesOfTwosVetor: anglesOfTwosVetor,
	moduleOfVector: moduleOfVector,
	degreeToRadian: degreeToRadian,
	vectorP1P2: vectorP1P2,
	getCuttingPoint:getCuttingPoint,
};
