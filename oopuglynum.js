class unglyNumberOop {
  constructor() {
    this.array = [];
  }
  maxDivides(number,divisible){
    while (number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }
  isUgly(numberUgly){
    numberUgly = this.maxDivides(numberUgly,2);
    numberUgly = this.maxDivides(numberUgly,3);
    numberUgly = this.maxDivides(numberUgly,5);
    return (numberUgly ==1) ? true : false;
  }
  getUglyNo(input){
    let i = 1;
    let countUglyNumber = 1;
    while(input > countUglyNumber){
      i++;
      if(this.isUgly(i) == 1){
        countUglyNumber++
        this.array.push(i)
      }
    }
    return this
  }
  getUglArray(){
    return this.array
  }
}

let unglyNumber = new unglyNumberOop();
console.log(unglyNumber.getUglyNo(7));
console.log(unglyNumber.getUglArray());
