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

let number = new UglyNumber(15)

console.log(number.getUglyNo());
console.log(number.getUglyArray()) // 1,2,3,4,5,6,8