class UglyNumber {
    constructor (input,arr) {
        this.input = input;
        this.arr = [arr]
    }


    getUglyNo(){
        let i = 1;
        let countUglyNumber = 1; // ugly number count
      
        while(this.input > countUglyNumber) {
          i++;
          
          if(this.isUgly(i) == 1) {
            countUglyNumber++;
            this.arr.push(i)
          }
          
        }
        return i
    }
    isUgly(numberUgly){
        numberUgly = UglyNumber.maxDivide(numberUgly, 2);
        numberUgly = UglyNumber.maxDivide(numberUgly, 3);
        numberUgly = UglyNumber.maxDivide(numberUgly, 5);
      
        return (numberUgly == 1) ? true : false;
      }

     static maxDivide(number,divisible){
      while(number % divisible == 0) {
        number = number / divisible;
      }
      return number;
    }
    getUglyArray(){
        return this.arr
    }
}

let satu = new UglyNumber(7,2)
console.log(satu.isUgly(1))
console.log(satu.getUglyNo())
console.log(satu.getUglyArray())