const numbers = {
    _a : 1,
    _b : 2,
    sum : 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    // setter함수에서 calculate 함수를 호출
    get a(){
        return this._a;
    },
    get b(){
        return this._b;
    },
    set a(value) {
        this._a = value;
        //함수 업데이트
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
};

console.log(numbers.sum);
numbers.a = 5; 
numbers.b = 7;
numbers.a = 9; // 값이 바뀔때마다 조회
console.log(numbers.sum);
console.log(numbers);


const number = { //sum 이 조회할 때 마다 호출됨
    a : 1,
    b : 2,
    get sum(){
        console.log('sum');
        return this.a + this.b;
    }
};

console.log(number.sum);
number.a = 5; 
number.b = 7;
number.a = 9; 
console.log(number.sum);
console.log(number.sum);
console.log(number.sum);
console.log(number.sum);
console.log(number);
