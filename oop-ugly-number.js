class UglyNumber
{
  constructor()
  {
    this.uglyNumbers = [];
  }

  maxDivide(number, divisible)
  {
    while(number % divisible == 0)
    {
      number = number / divisible;
    }

    return number;
  }

  isUgly(numberUgly)
  {
    numberUgly = this.maxDivide(numberUgly, 2);
    numberUgly = this.maxDivide(numberUgly, 3);
    numberUgly = this.maxDivide(numberUgly, 5);

    return (numberUgly === 1) ? true : false;
  }

  getUglyNo(input)
  {
    let i = 0;
    let countUglyNumber = 1; // ugly number count

    while(input >= countUglyNumber)
    {
      i++;
      if(this.isUgly(i) === true)
      {
        countUglyNumber++;
        this.uglyNumbers.push(i);
      }
    }

    return i;
  }

  getUglyArray(num)
  {
    this.getUglyNo(num);
    return this.uglyNumbers;
  }
}


let someNumber = new UglyNumber();


console.log(someNumber.getUglyArray(10));
