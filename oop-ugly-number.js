class UglyNumber {
	constructor(value) {
		this.value = value
		this.arrUgly = [1] // karena ugly number dimulai angka 1
	}

	static  maxDivides(number, divisible) {
		while(number % divisible === 0) {
			number /= divisible
		}
		return number
	}

	static isUgly(numberUgly) {
		numberUgly = this.maxDivides(numberUgly, 2)
		numberUgly = this.maxDivides(numberUgly, 3)
		numberUgly = this.maxDivides(numberUgly, 5)
		return (numberUgly === 1) ? true : false
	}

	getUglyNo() {
		let i = 1
		let countUglyNumber = 1

		while(this.value > countUglyNumber) {
			i++
			if (UglyNumber.isUgly(i) == 1) {
				countUglyNumber++
				this.arrUgly.push(i)
			}
		}
		return i
	}

	getUglyArray(value) {
		return this.arrUgly
	}
}

var uglyNumber = new UglyNumber(10)
console.log(uglyNumber.getUglyNo())
console.log(uglyNumber.getUglyArray())

var uglyNumber = new UglyNumber(7)
console.log(uglyNumber.getUglyNo())
console.log(uglyNumber.getUglyArray())