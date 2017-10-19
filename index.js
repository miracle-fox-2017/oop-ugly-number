class UglyNumber {

	constructor(){

		this.result = [1]

	}

	maxDivide(number, divisible){

		while(number % divisible == 0) {
    		number = number / divisible;
  		}
  
  		return number;
	}

	isUgly(numberUgly){

		numberUgly = this.maxDivide(numberUgly, 2);
  		numberUgly = this.maxDivide(numberUgly, 3);
  		numberUgly = this.maxDivide(numberUgly, 5);

  		return (numberUgly == 1) ? true : false;
	}

	getUglyNo(input){

		//console.log(input);
		let i = 1;
  		let countUglyNumber = 1; // ugly number count

  		while(input > countUglyNumber) {
    		i++;
    		if(this.isUgly(i)) {
      			countUglyNumber++;
      			this.result.push(i)
    		}
  		}

  		return i;
	}

	getUglyArray(input){
		this.result = [1]
		this.getUglyNo(input)
		return this.result
	}
}

let a = new UglyNumber()

console.log(a.getUglyNo(11));
console.log(a.getUglyArray(11));