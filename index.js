class UglyNumber {
  constructor() {
    this.arr =[]
  }
  maxDivides(number, divisible) {
    debugger
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }

  isUgly(numberUgly) {
    debugger
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);

    return (numberUgly == 1) ? true : false;
  }

  getUglyNo(input) {
    // debugger
    this.counter = 1 ;
    let countUglyNumber = 1; // ugly number count
    this.arr.push(this.counter)

    while(input > countUglyNumber) {
        this.counter++;
        if(this.isUgly(this.counter) == 1) {
            countUglyNumber++;
            this.arr.push(this.counter)
        }
      // return i;
    }
    // this.arr.push(this.counter)
    return this.counter;
  }

 getUglyArray(){
   return this.arr
 }

}

let ugly = new UglyNumber()
ugly.getUglyNo(10)
console.log(ugly.getUglyArray())
