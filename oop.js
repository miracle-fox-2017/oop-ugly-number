  class NumberUgly {
    constructor() {
      this.arr = []
    }

    maxDivides(number, divisible) {
      while(number % divisible == 0) {
        number = number / divisible;
      }
      return number;
    }

  isUgly(numberUgly) {
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    if(numberUgly === 1) {
      return true;
    } else {
      return false;
    }
  }

  getUglyNo(input) {
    let i = 1;
    let countUglyNumber = 1; // ugly number count
    //this.arr.push(i)
    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
        //this.arr.push(i)
      }

    }
    return i;
  }

  getDeretArray(input) {
    for (var i = 1; i <= input; i++) {
      this.arr.push(this.getUglyNo(i));
    }
    return this.arr;
  }

}

var angka = new NumberUgly();

// console.log(angka.getUglyNo(10));
console.log(angka.getDeretArray(10));
