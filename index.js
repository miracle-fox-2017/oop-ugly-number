'use strict'

class UglyNumber{
	constructor(input){
		this.input = input

	}

	maxDivides(number, divisible){
		while(number % divisible == 0) {
	    number = number / divisible;
		  }
		  return number;
	}

	isUgly(numberUgly){
		numberUgly = this.maxDivides(numberUgly, 2);
		numberUgly = this.maxDivides(numberUgly, 3);
		numberUgly = this.maxDivides(numberUgly, 5);

  		return (numberUgly == 1) ? true : false;
	}

	getUglyNumber(){
		return this.getUglyArray()[this.getUglyArray().length-1]
	  
	}

	getUglyArray(){
	  let arr = []
	  let i = 1;
	  let countUglyNumber = 1; // ugly number count

	  while(this.input > countUglyNumber) {
	    i++;
	    arr.push(i)
	    // console.log(i)
	    if(this.isUgly(i) == 1) {
	      countUglyNumber++;
	    }
	    
	  }
	  return arr;

	}
}

let ugly = new UglyNumber(7)
console.log(ugly.getUglyNumber(6))
console.log(ugly.getUglyArray())