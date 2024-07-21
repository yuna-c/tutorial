// 객체 안에 getter,setter함수를 설정할 수 있음
const numbers = {
    a : 1,
    b : 2,
    get sum() { //get은 꼭 return 해야함, 조회시
        console.log('sum 함수가 실행됩니다');
        return this.a + this.b;
    }
};

// numbers.a = 5;
// console.log(numbers.a);
// console.log(numbers);
console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);