class uglyNumber {
  constructor(input) {
    this.input = input;
    this.arr = [1];
  }

  maxDivides(number, divisible){
    debugger;
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number;
  }

  isUgly(numberUgly){
    debugger;
    numberUgly = this.maxDivides(numberUgly, 2);
    numberUgly = this.maxDivides(numberUgly, 3);
    numberUgly = this.maxDivides(numberUgly, 5);
    return (numberUgly === 1) ? true : false;;
  }

  getUglyNo(){
    let angka = this.input;
    let i = 1;
    let countUglyNumber = 1;

    while (angka > countUglyNumber) {
      i++;
      debugger;
      if (this.isUgly(i) == 1) {
        this.getUglyArray(i);
        countUglyNumber ++
      }
    }

    return this.arr
  }

  getUglyArray(i){
    return this.arr.push(i);
  }
}

let newUgly = new uglyNumber(7);
// let newUglyNew = new uglyNumber(150);
let newUglyLaset = new uglyNumber(10);

console.log(newUgly.getUglyNo()); //8
//console.log(newUglyNew.getUglyNo()); //8
console.log(newUglyLaset.getUglyNo()); //8
