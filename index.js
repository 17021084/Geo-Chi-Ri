const segmentRelation = require('./SegmentRelation');
const distanceOnEarth = require('./DistanceOnEath');

// check đường thẳng  [0,0] ,[8,8]   co cat  [1,0],[2,0]

var point1 = [ 0, 0 ];
var point2 = [ 8, 8 ];
var point3 = [ 1, 0 ];
var point4 = [ 2, 0 ];

console.log(segmentRelation(point1, point2, point3, point4));

//got lat and long in google map
var VNU = [ 21.0359403, 105.7816 ];
var HUST = [ 21.006176, 105.8434203, 17.25 ];
var VNUtoHUST = distanceOnEarth(VNU, HUST);
console.log(`the distance from VNU to HUST is ~ ${VNUtoHUST} km`);
