// function maxDivides() {

// }

// function isUgly() {

// }

// function getUglyNo(){

// }

// console.log(getUglyNo());

class Abc {
	constructor() {
		this.arr = [];
	}

	add(abjad) {
		this.arr.push(abjad);
	}

	getAll() {
		return this.arr;
	}
}

let abjad = new Abc();
abjad.add('A');
abjad.add('B');
console.log(abjad.getAll());
