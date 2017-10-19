'use strict';
class UglyNumber {
  constructor(input,arr,hasil){
    this.input=input;
    this.hasil=hasil;
    this.ArrUgly=[];
  }
  getUglyNo() {

    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(this.input > countUglyNumber) {

      i++;

      if(this.isUgly(i) == 1) {
        // this.ArrUgly.push(i)
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
    //kenapa dibuat proses mengecek ugly number
    //lagi disini dan tidak hanya memanggil method getUglyNo
    //karena di getUgly num i nya dimulai dr 1, sehingga hanya akan
    //mengeluarkan output array ugly number sepanjang 6 bukan 7
    let i =0;
    while(this.ArrUgly.length<this.input){
      i++
      if(this.isUgly(i)=== true){
        this.ArrUgly.push(i)
      }

    }
    return 'ini value ke '+this.input+' dari array Ugly Number = '+this.hasil+' dan ini array ugly numbernya '+this.ArrUgly;
  }
}



var UglyNumber7 = new UglyNumber(7)
console.log(UglyNumber7.getUglyNo().getUglyArr());
