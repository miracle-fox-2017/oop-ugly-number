class UglyNumber {
  constructor(input) {
    this.input = input;
    this.arrResult = [];
  }

  getUglyNo() {
    let i = 0;
    let countUglyNumber = 1;

    while (this.input > countUglyNumber) {
      i++;
      this.arrResult.push(i);
      if (this.isUgly(i) == 1) countUglyNumber++;
    }

    return this.arrResult;
  }

  isUgly(numberUgly) {
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);
    
    return numberUgly == 1 ? true : false;
  }

  maxDivides(number, divisible) {
    while (number % divisible == 0) number /= divisible;
    return number;
  }
}

const ugly150 = new UglyNumber(150);
const ugly7 = new UglyNumber(7);
const ugly10 = new UglyNumber(10);
const ugly15 = new UglyNumber(15);

console.log(ugly150.getUglyNo());  // 5832
console.log(ugly7.getUglyNo());  // 8
console.log(ugly10.getUglyNo());  // 12
console.log(ugly15.getUglyNo());  // 24
