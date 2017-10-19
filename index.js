class UglyNumber {
  constructor() {

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
  getUglyNo(input){
    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(input > countUglyNumber) {
      debugger
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
        // console.log(countUglyNumber);
      }
    }
    return i;
  }
  getUglyArray(input){
    let result = [];
    for (var idx = 1; idx < 100; idx++) {
      result.push(this.getUglyNo(idx))
    }
    // console.log(result);
    let endResult =[]
    for (var i = 0; i < input; i++) {
      endResult.push(result[i])
    }
    return endResult
  }
}
let uglynumber = new UglyNumber()
// console.log(uglynumber.getUglyNo(150)); //5832
// console.log(uglynumber.getUglyNo(7)); //8
console.log(uglynumber.getUglyNo(10)); //12
// console.log(uglynumber.getUglyNo(15)); //24
console.log('ARRAY',uglynumber.getUglyArray(10));
