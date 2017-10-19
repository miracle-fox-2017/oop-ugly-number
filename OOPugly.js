'use strict';
class UglyNumber {
  constructor(input,arr,hasil){
    this.input=input;
    this.ArrUgly=[];
    this.hasil=hasil;
  }
  getUglyNo() {

    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(this.input > countUglyNumber) {

      i++;

      if(this.isUgly(i) == 1) {

        countUglyNumber++;

      }

    }
    this.hasil = i
    return this
  }
  isUgly(numberUgly) {

    numberUgly = this.maxDivide(numberUgly, 2);
    numberUgly = this.maxDivide(numberUgly, 3);
    numberUgly = this.maxDivide(numberUgly, 5);

    // return (numberUgly = 1) ? true : false;
    //sama artinya seperti kode dibawah
    if(numberUgly == 1) {
      return true

    } else {
      return false
    }
  }
  maxDivide(number, divisible) {

    while(number % divisible == 0) {

      number = number / divisible;
    }
    return number
  }
  getUglyArr(){
    let i =0;
    while(this.ArrUgly.length<=this.input){
      i++
      if(this.isUgly(i)=== true){
        this.ArrUgly.push(i)
      }
    }
    return 'ini adalah value ugly number ke '+ this.input+ ' = '+this.hasil+' dan ini adalah array Ugly Number sejumlah '+ this.input + ' = '+[this.ArrUgly]
}
}





var UglyNumber7 = new UglyNumber(7)
console.log(UglyNumber7.getUglyNo().getUglyArr());
