class UglyNumber {
	constructor(number) {
		this.number = number;
		this.arrCountUglyNumber = [];
	}

	maxDivides(number, divisible) {
		while(number % divisible == 0) {

			number = number / divisible;
		}

		return number;
	}

	isUgly(numberUgly) {
		numberUgly = this.maxDivides(numberUgly, 2);
		numberUgly = this.maxDivides(numberUgly, 3);
		numberUgly = this.maxDivides(numberUgly, 5);

		return (numberUgly === 1) ? true : false;
	}

	getUglyNo() {
		let i = 1;
		let countUglyNumber = 1; // ugly number count
		this.addUgly(i);

		while(this.number > countUglyNumber) {
			i++;

			if(this.isUgly(i) == 1) {
			  this.addUgly(i);
			  countUglyNumber++;
			}			
		}

		return i;
	}

	getUglyArray() {
		return this.arrCountUglyNumber;
	}

	addUgly(num) {
		this.arrCountUglyNumber.push(num);
	}
}

let number = new UglyNumber(7)
console.log(number.getUglyNo());
console.log(number.getUglyArray()) 

let number1 = new UglyNumber(10)
console.log(number1.getUglyNo());
console.log(number1.getUglyArray()) 

let number2 = new UglyNumber(15)
console.log(number2.getUglyNo());
console.log(number2.getUglyArray()) 

// let number3 = new UglyNumber(150)
// console.log(number3.getUglyNo());
// console.log(number3.getUglyArray()) 
