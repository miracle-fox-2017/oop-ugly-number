class UglyNumber {
    constructor() {
        this.arrNumber = [1] // 1 angka ugly
    }
    getUglyNo(number) {
        let angka = 1;
        let countUglyNumber = 1

        while (number > countUglyNumber) {
            angka++
            if (UglyNumber.isUgly(angka)) {
                this.arrNumber.push(angka)
                countUglyNumber++
            }
        }
        return angka;
    }
    static isUgly(input) {
        input = UglyNumber.maxDivide(input, 2)
        input = UglyNumber.maxDivide(input, 3)
        input = UglyNumber.maxDivide(input, 5)

        return (input == 1) ? true : false
    }
    static maxDivide(angka, divisible) {
        while (angka % divisible == 0) {
            angka = angka / divisible
        }
        return angka
    }
    getUglyArray() {
        return this.arrNumber;
    }

}

let ugly = new UglyNumber()
console.log(ugly.getUglyNo(7))
console.log(ugly.getUglyArray())

let uglySepuluh = new UglyNumber()
console.log(uglySepuluh.getUglyNo(10))
console.log(uglySepuluh.getUglyArray())


