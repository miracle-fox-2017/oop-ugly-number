class UglyNumber{
    constructor(number){
        this.nextUgly="";
        this.uglyArray=[];
        this.number=number;
    }
    maxDivide(nilai,pembagi){
        while(nilai % pembagi === 0){
            nilai=nilai / pembagi;
        }
        return nilai;
    }
    isUgly(number){
        number=this.maxDivide(number,2);
        number=this.maxDivide(number,3);
        number=this.maxDivide(number,5);
        if(number === 1){
            return true;
        }else{
            return false;
        }
    }
    getUglyNo(){
        let i=1;
        let uglyCounter=1;
        while(this.number > uglyCounter){
            i++;
            if(this.isUgly(i) === true){
                uglyCounter++;
            }
        }
        this.nextUgly=i;
        return this;
    }
    getUglyArray(){
        let tempUgly=0;
        while(this.uglyArray.length !== this.number){
            tempUgly++;
            if(this.isUgly(tempUgly) === true){
                this.uglyArray.push(tempUgly);
            }
        }
        return `Ugly No : ${this.nextUgly} | Ugly Array : ${this.uglyArray}`;
    }
}

const uglyNumber=new UglyNumber(15);
console.log(uglyNumber.getUglyNo().getUglyArray());
