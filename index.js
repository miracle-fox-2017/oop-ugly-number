

//maxDivide
//isUgly
//getUglyNo
//getUglyArray

class UglyNumber {
  constructor (){
    this.uglyArray = []
  }
  maxDivide(num, divisible){
    while(num % divisible == 0){
      num = num / divisible
    }
    return num
  }

  isUgly(numberUgly){
    numberUgly = this.maxDivide(numberUgly, 2)
    numberUgly = this.maxDivide(numberUgly, 3)
    numberUgly = this.maxDivide(numberUgly, 5)
    return (numberUgly == 1) ? true:false
  }
  getUglyNo(number){
    // gunakan while loop i
    // lalu set countUglyNum = 1
    let i =0;
    let countUglyNum = 1

    while(number > countUglyNum){
      i++
      if(this.isUgly(i)==true){
        countUglyNum++
        this.uglyArray.push(i)
      }
    }
    return i
  }

  getUglyArray(){
    return this.uglyArray
  }

}

var ugly = new UglyNumber ()
console.log(ugly.getUglyNo(150));
console.log(ugly.getUglyNo(8));
console.log(ugly.getUglyArray());
console.log(ugly.getUglyArray())
