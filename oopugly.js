class UglyNumber
{
  constructor (input)
  {
    this.input = input
    this.arr = [1]
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

  if(numberUgly == 1)
  {
    return true
  }
    else
    {
      return false
    }
}


getUglyNo()
{
  let i = 1;
  let countUglyNumber = 1;

  while(this.input > countUglyNumber)
  {
    i++
    if(this.isUgly(i) == 1)
    {
      countUglyNumber++;
      this.arr.push(i);
    }
  }
  return i;

}
getUglyArray()
{
  return this.arr;
}

}

var ugly = new UglyNumber(150)
console.log(ugly.getUglyNo());
console.log(ugly.getUglyArray());

var ugly = new UglyNumber(7)
console.log(ugly.getUglyNo());
console.log(ugly.getUglyArray());

var ugly = new UglyNumber(10)
console.log(ugly.getUglyNo());
console.log(ugly.getUglyArray());

var ugly = new UglyNumber(15)
console.log(ugly.getUglyNo());
console.log(ugly.getUglyArray());
