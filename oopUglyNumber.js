class Ugly_number{
  constructor(){
  }

  maxDivides(number, divisible) {
    while(number % divisible == 0) {
      number = number / divisible;
    }
    return number; // << 3
  }

  isUgly(numberUgly) {
    numberUgly = this.maxDivides(numberUgly, 2); // << 2
    numberUgly = this.maxDivides(numberUgly, 3); // << 2
    numberUgly = this.maxDivides(numberUgly, 5); // << 2

    return (numberUgly == 1) ? true : false; // << 4
  }

  getUglyNo(input) {
    let i = 1;
    let countUglyNumber = 1; // << 1 ugly number count

    while(input > countUglyNumber) {
      i++;
      if(this.isUgly(i) == 1) {
        countUglyNumber++; // << 5
      }
      // return i; // << 6
    }
    return i; // << 7
  }

  getUglyArray(input){
    let arrTemp = []
    // loop uglyNumber sampai 100
    for(let i=1; i<100; i++){
      arrTemp.push(this.getUglyNo(i))
    }
    // loop ambil arr ugly number > input
    let arrUglyNumber = []
    for(let j=0; j<input; j++){
      arrUglyNumber.push(arrTemp[j])
    }
    // console.log(arrUglyNumber)
    return arrUglyNumber
  }

}

let ugly_number = new Ugly_number()

// console.log(ugly_number.getUglyNo(150))
console.log(ugly_number.getUglyNo(7))
console.log(ugly_number.getUglyArray(7));
console.log(ugly_number.getUglyNo(10))
console.log(`arr ugly number = ${ugly_number.getUglyArray(10)}`)

// console.log(ugly_number.getUglyNo(15))
