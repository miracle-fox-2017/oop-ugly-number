class UglyNumber {
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
    return (numberUgly == 1) ? true : false;
  }

  getUglyNo(input) {
    let i = 1;
    let countUglyNumber = 1; // ugly number count

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++;
      }
    }
    return i;
  }

  getUglyArray(input){
    let i = 1;
    let countUglyNumber = 1; // ugly number count
    let result = [i];

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        result.push(i);
        countUglyNumber++;
      }
    }
    return result;
  }

}

//export si class UglyNumber
module.exports = UglyNumber;
