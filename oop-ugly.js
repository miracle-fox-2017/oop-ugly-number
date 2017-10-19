

 class UglyNumber {
  constructor (number, array){
    this.number = number;
    this.array = [1];
  }
  getUglyNo() {
     let i = 1;
     let countUglyNumber = 1; // ugly number count
     while(this.number > countUglyNumber) {
       i++;

       if(this.isUgly(i) == 1) {
         countUglyNumber++;
         this.array.push(i)
       }
     }
     return this.array;
   }
  //  getUglyArray(){
   //
  //    for (let i = 1; i < this.getUglyNo()-1; i++){
  //      this.array.push(i)
  //    }
  //    return this.array
  //  }


   isUgly(numberUgly) {
     numberUgly = this.maxDivides(numberUgly, 2);
     numberUgly = this.maxDivides(numberUgly, 3);
     numberUgly = this.maxDivides(numberUgly, 5);
     if(numberUgly == 1) {
       return true
     } else {
       return false
     }
   }
   maxDivides(number, divisible) {
     while(number % divisible == 0) {
       number = number / divisible;
     }
     return number;
   }


}
var ugly = new UglyNumber(8)
console.log(ugly.getUglyNo());
