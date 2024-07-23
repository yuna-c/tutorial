// ES6

// 2015년도 이전 => var
// (1) es6 => let(변수), const(상수)
// (2) arrow function

// 함수 선언문
function add() {}
// 함수 표현식
var add = function () {};

// 화살표 함수
var add = () => {
	return 1;
};
var add = () => 1; // {} 생략 : return 이후 한줄일 경우
var add = (x) => 1; // () 생략 : 매개변수 있을 시

// (3) 삼항연산자
// condition ? true인 경우 : false인 경우
console.log(true ? '참' : '거짓'); //true
console.log(false ? '참' : '거짓'); //false
console.log(1 === 1 ? '참' : '거짓'); //true
console.log(1 !== 1 ? '참' : '거짓'); //false
