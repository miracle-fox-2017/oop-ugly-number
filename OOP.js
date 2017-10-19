class UglyNumber{
  constructor(input){
  this.input = input
  this.arr = [1]
  }
  maxDivides(number,divisible){
    while(number % divisible == 0){
      number = number / divisible
    }
    return number
  }
  isUgly(numberUgly){
    numberUgly = this.maxDivides(numberUgly,2)
    numberUgly = this.maxDivides(numberUgly,3)
    numberUgly = this.maxDivides(numberUgly,5)

    return (numberUgly == 1) ? true:false
  }
  getUglyNo(){
    let i = 1;
    let countUglyNumber = 1;
    while (this.input > countUglyNumber){
      i++
      if(this.isUgly(i) == 1){
        this.arr.push(i)
        countUglyNumber++
      }
    }
  }
  getUglyArray(){
    this.getUglyNo()
    return this.arr
  }
}
let Angka7 = new UglyNumber(7)
console.log(Angka7.getUglyArray())
