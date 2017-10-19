'use strict'
class UglyNumber{
  constructor(angka){
    this.angka = angka
  }
  maxDivides(number,divisible){

    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }


  isUgly(numberUgly){
    numberUgly = this.maxDivides(numberUgly, 2);//maxDivide
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    return (numberUgly == 1) ? true : false;
  }

  getUglyNo(){
    let i = 1;
    let countUglyNumber = 1; // ugly number count *==

    debugger
    //console.log(this.angka,'ini this angka')
    while(this.angka > countUglyNumber) {

      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
        //console.log(this.isUgly(i))
      }
    }
    //this.angka = i;
    return i
  }
}

let ugly150 = new UglyNumber(150);
let ugly7 = new UglyNumber(7)
//console.log(ugly150)
console.log(ugly7.getUglyNo())
