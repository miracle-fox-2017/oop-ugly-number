class UglyNumber {
	constructor(number){
		this.number = number;
		this.arr = [1];
	}
	maxDivide(sisa, divider){		
		while(sisa%divider == 0){
			sisa = sisa/divider
		}
		return sisa;
	}
	isUgly(check){
		check  = this.maxDivide(check, 2);
		check  = this.maxDivide(check, 3);
		check  = this.maxDivide(check, 5);

		if (check  === 1){
			return true;
		}
		return false;
	}
	getUglyNo(){
		let i = 1;
		let countUglyNumber = 1;
		while (this.number > countUglyNumber){
			i++
			if (this.isUgly(i) === true){
				this.arr.push(i)
				countUglyNumber++;
			}
		}
		return this
	}
	getUglyArray(){
		return this.arr
	}
}

var uglyNumber = new UglyNumber(10);
console.log(uglyNumber.getUglyNo().getUglyArray())