# Geo Chiri

##### 1. Check the RelationShip between 2 segments

We have two Segments ( S1 and S2  )  
* S1 created by Point1 and Point2.
* S2 created by Point3 and Point4.

Whether S1 cutted S2

```js
var point1 = [ 0, 0 ];
var point2 = [ 8, 8 ];
var point3 = [ 1, 0 ];
var point4 = [ 2, 0 ];

//result  : DontCut
console.log(segmentRelation(point1, point2, point3, point4));

```


##### 2. Calculator distance  from 2 place in the Earth 

```javascript
// lat and long get from google map
var VNU =[21.0359403,105.7816] 
var HUST = [21.006176, 105.8434203,17.25]
var VNUtoHUST =distanceOnEarth(VNU,HUST)

// results : 7.2629399999999995 km
console.log( `the distance from VNU to HUST is ~ ${VNUtoHUST} km`);

```
