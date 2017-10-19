class UglyNumber{
  constructor(input){
    this.input = input
    this.uglyNo = 0
    this.uglyArr = []
  }

  getUglyNo(){
    let i = 1;
    let countUglyNumber = 1;
    while(this.input > countUglyNumber){
      i++;
      if(UglyNumber.isUgly(i)){
        countUglyNumber++;
        this.uglyArr.push(i);
      }
    }
    this.uglyNo = i
    return this.uglyNo;
  }

  static isUgly(numberUgly){
    numberUgly = UglyNumber.maxDivides(numberUgly, 2);
    numberUgly = UglyNumber.maxDivides(numberUgly, 3);
    numberUgly = UglyNumber.maxDivides(numberUgly, 5);

    return (numberUgly == 1) ? true:false;
  }

  static maxDivides(number, divisible){
    while(number % divisible == 0){
      number = number / divisible;
    }
    return number
  }

  getUglyArray(input){
    return this.uglyArr
  }
}

var ugly = new UglyNumber(150)
console.log(ugly.getUglyNo());
console.log(ugly.getUglyArray());
//
var ugly = new UglyNumber(7)
console.log(ugly.getUglyNo());
console.log(ugly.getUglyArray());

var ugly = new UglyNumber(10)
console.log(ugly.getUglyNo());
console.log(ugly.getUglyArray());

var ugly = new UglyNumber(15)
console.log(ugly.getUglyNo());
console.log(ugly.getUglyArray());
