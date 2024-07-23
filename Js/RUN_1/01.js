// 1. 변수 함수 선언

// 선언문
// var : 재선언 재할당 호이스팅 가능
console.log(run); // 호이스팅 가능
var run; // undefined
var run = 'run';
console.log(run);

// let : 재선언X, 초기화X, 변경O
let a = 1;
a = 2;
console.log(a);

// const : 재선언X, 재할당X, 변경 X, 초기화X
// 선언과 동시에 초기화
// b = 1;
