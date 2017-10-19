class UglyNumber {
  constructor() {

  }

  maxDivide(number, divisible) {
    while(number % divisible == 0) {
      number = number / divisible
    }
    return number
  }

  isUgly(numberUgly) {
    numberUgly = this.maxDivide(numberUgly, 2)
    numberUgly = this.maxDivide(numberUgly, 3)
    numberUgly = this.maxDivide(numberUgly, 5)

    return (numberUgly == 1)? true: false
  }

  getUglyNo(input) {
   return this.getUglyArray(input)[this.getUglyArray(input).length - 1]
  }

  getUglyArray(input) {
    let i = 1
    let countUglyNumber = 1
    let arrUgly = []

    arrUgly.push(1)

    while(input > countUglyNumber) {
      i++
      if(this.isUgly(i)) {
        arrUgly.push(i)
        countUglyNumber++
      }
    }
    return arrUgly
  }

}

var uglynumber = new UglyNumber()
console.log(uglynumber.maxDivide(8,2))
console.log(uglynumber.isUgly(7));
console.log(uglynumber.getUglyNo(15));
console.log(uglynumber.getUglyArray(15));
