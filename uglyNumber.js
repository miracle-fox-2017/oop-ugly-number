class UglyNumber {
  constructor() {
    this.arrUgly = [];
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

    if(numberUgly === 1) {
       return true
        } else {
        return false
      }
  }

  getUglyNo() {
   return this.arrUgly[this.arrUgly.length - 1]
  }

  getUglyArray(input) {
    let i = 1
    let countUglyNumber = 1
    this.arrUgly.push(1)

    while(input > countUglyNumber) {
      i++
      if(this.isUgly(i)) {
        this.arrUgly.push(i)
        countUglyNumber++
      }
    }
    return this.arrUgly
  }

}

var uglynumber = new UglyNumber(7)

console.log(uglynumber.getUglyArray(7));