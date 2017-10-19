class UglyNumber {
  constructor(input){
    this.input = input;
    this.arrUgly= [1];
  }

  maxDivides(number, divisible){
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }

  isUgly(numberUgly){
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    return (numberUgly == 1) ? true : false;
  }

  getUglyNo(){
    let i = 1;
    let countUglyNumber = 1; // ugly number count
    let arr = []

    while(this.input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
        this.arrUgly.push(i)
        // console.log(this.arrUgly)
      }
    }
    return i;
  }

  getUglyArray(){
    return this.arrUgly
  }
}

var uglyNumber7 = new UglyNumber(7)
var uglyNumber10 = new UglyNumber(10)
var uglyNumber15 = new UglyNumber(15)

console.log(uglyNumber7.getUglyNo())
console.log(uglyNumber7.getUglyArray())

console.log(uglyNumber10.getUglyNo())
console.log(uglyNumber10.getUglyArray())

console.log(uglyNumber15.getUglyNo())
console.log(uglyNumber15.getUglyArray())

// console.log(UglyNumber.getUglyNo(150)); //5832
// console.log(UglyNumber.getUglyNo(7)); //8
// console.log(UglyNumber.getUglyNo(10)); //12
// console.log(UglyNumber.getUglyNo(15)); //24
