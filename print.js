const UglyNumber = require('./index.js');

//RUN!!!!
var Ugly = new UglyNumber();
console.log(Ugly.getUglyNo(20)); //36
console.log(Ugly.getUglyArray(20)); //[ 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 27, 30, 32, 36 ]
console.log(Ugly.getUglyArray(20).length); //20
