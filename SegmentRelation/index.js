const { moduleOfVector, vectorP1P2, multipVectorP1P2xP3P4, getCuttingPoint } = require('../mathLib');

/**
 *  Base segment is  P1P2
 * Segment1 has been created by point1 point2
 * Segment3 has been created by point3 point4
 * @param {*} point1 as a  [x,y,0]
 * @param {*} point2 as a  [x,y,0]
 * @param {*} point3 as a  [x,y,0]
 * @param {*} point4 as a  [x,y,0]
 * 
 * return: 
 * [x,y] is cutting point ,
 * Overlay,
 * DontCut,
 */
function segmentRelationAlgorithm(point1, point2, point3, point4) {
	//get Z of vector
	const Zp12xp13 = multipVectorP1P2xP3P4(point1, point2, point1, point3)[2];
	const Zp14xp12 = multipVectorP1P2xP3P4(point1, point4, point1, point2)[2];

	// both p3 and p4 in same side with border p1p2
	if (Zp12xp13 * Zp14xp12 < 0) {
		return 'DontCut';
	} else if (Zp12xp13 * Zp14xp12 > 0) {
		const P1P2 = vectorP1P2(point1, point2);
		const P3P4 = vectorP1P2(point3, point4);
		const cuttingPoint = getCuttingPoint(P1P2, P3P4, point1, point3);

		const lengthP1P2 = moduleOfVector(point1, point2);
		const lengthP1Cut = moduleOfVector(point1, cuttingPoint);
		const lengthP2Cut = moduleOfVector(point2, cuttingPoint);
		if (lengthP1P2 == lengthP1Cut + lengthP2Cut) {
			return cuttingPoint;
		} else {
			return 'DontCut';
		}

		//  p3 and p4 in difference of side with border line p1p2 in OXY
		// maybe SEGMENT  P3P4 cut SEGMENT P1P2
		//get cutting point of 2 LINE
		//to
	} else {
		const lengthP1P2 = moduleOfVector(point1, point2);
		const lengthP3P4 = moduleOfVector(point3, point4);
		const lengthP1P4 = moduleOfVector(point1, point4);
		const lengthP2P4 = moduleOfVector(point2, point4);
		const lengthP1P3 = moduleOfVector(point1, point3);
		const lengthP2P3 = moduleOfVector(point2, point3);
		// p3 or p4 or both in the LINE P1P2

		//CASE 1 : P3 is not a point in SEGMENT P1P2 . Check P4 whether it is a point in SEGMENT P1P2
		if (Zp12xp13 !== 0) {
			if (lengthP1P2 == lengthP1P4 + lengthP2P4) {
				return [ point4[0], point4[1] ];
			} else {
				// DontCut
				return 'DontCut';
			}
		}

		//CASE 2 : P4 is not a point in SEGMENT P1P2 . Check P3 whether it is a point in SEGMENT P1P2
		if (Zp14xp12 !== 0) {
			if (lengthP1P2 == lengthP1P3 + lengthP2P3) {
				return [ point3[0], point3[1] ];
			} else {
				// DontCut
				return 'DontCut';
			}
		}

		//CASE 3 : both P3 and P4 in LINE P1P2
		if (lengthP1P2 == lengthP1P4 + lengthP2P4) {
			//P4 between P1P2
			return 'SegmentOverlap';
		}
		if (lengthP1P2 == lengthP1P3 + lengthP2P3) {
			//P3 between P1P2
			return 'SegmentOverlap';
		}

		if (lengthP3P4 == lengthP1P3 + lengthP1P4) {
			// P1 between P3 P4
			return 'SegmentOverlap';
		}
		// DontCut
		return 'DontCut';
	}
}

// console.log(segmentRelation([ 0, 0, 0 ], [ '5', 5, 0 ], [ 0, 0, 0 ], [ 4, 4, 0 ]));

/**
 * 
 * Segment1 has been created by point1 point2 , 
 *  Segment2 has been created by point3 point4
 * Check the relationship between Segment1 and Segment2 .
 *  return : [cuttingPoint x , cuttingPoint y] || 'DontCut' || 'OverLap'
 * 
 * @param {*} point1 as a  [x,y]
 * @param {*} point2 as a  [x,y]
 * @param {*} point3 as a  [x,y]
 * @param {*} point4 as a  [x,y]
 * 
 */
function SegmentRelation(point1, point2, point3, point4) {
	return segmentRelationAlgorithm([ ...point1, 0 ], [ ...point2, 0 ], [ ...point3, 0 ], [ ...point4, 0 ]);
}

module.exports = SegmentRelation;
