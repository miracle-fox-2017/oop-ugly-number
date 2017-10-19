'use strict'
class UglyNumber{
  
constructor(input){
  this.input = input;
  this.arr = [];
}
  
maxDivides(number, divisible) {
  while (number % divisible === 0) {
    number = number / divisible;
  }
  return number;
}

isUgly(numberUgly) {
  numberUgly = this.maxDivides(numberUgly, 2);
  numberUgly = this.maxDivides(numberUgly, 3);
  numberUgly = this.maxDivides(numberUgly, 5);

  return (numberUgly == 1) ? true : false;
}

getUglyNo() {
  var i = 1;
  var countUglyNumber = 1; // ugly number count
  this.arr.push(i);
  while (this.input > countUglyNumber) {
    i++;
    if (this.isUgly(i) == 1) {
      countUglyNumber++;
      this.arr.push(i);
    }
  }
  return this.arr
}
  
getUglyArray(){
  this.getUglyNo();
  return this.arr;
}
  
}

var Ugly = new UglyNumber(15);
console.log(Ugly.getUglyArray());
// //driver code
// console.log(UglyNumber.getUglyNo(150)); //5832
// console.log(UglyNumber.getUglyNo(7)); //8
// var UglyDuaBelas = new UglyNumber(10);
// console.log(UglyDuaBelas.getUglyArray());
// console.log(getUglyNo(15)); //24