// 일급 객체로서의 함수 : First-class Object
// 함수를 객체처럼 여러가지 방식으로 다룸
// 다른 객체들과 같다 = 함수를 유연하게 사용

/*
1. 매개변수 전달 
2. return 출력 
3. 모든 연산이 가능
*/

// (1) 변수에 함수를 할당
// 변수의 선언부 = 함수 할당
// 함수가 값으로 취급된다.(어디서나 호출 가능)
// 함수가 나중에 사용될 수 있도록 조치가 되었다.(객체, 변수, 매개변수로도 사용 가능)
const sayHello = function () {
	console.log('hello');
};
sayHello();

// (2) 함수를 인자로 다른 함수에 전달
// (2)-1. 콜백 함수 : 매개변수로 쓰이는 함수
// (2)-1. 고차 함수 : 함수를 인자로 받거나(callback), return(출력으로 반환)하는 함수
// 콜백 함수 => 고차 함수의 한 종류
function callFunction(
	func
	/* sayBye 전달 : 2. function () {console.log('Bye')}; */
) {
	// 매개변수로 받은 변수가 사실, 함수다
	func();
}
const sayBye = function () {
	console.log('Bye');
};
callFunction(
	sayBye
	/* 1. function () {console.log('Bye')}; */
); // Bye 실행시 매개변수로 던짐

// (3) 함수를 반환
function createAdder(num) {
	// 1. createAdder를 실행한 결과
	return function (x) {
		// addFive를 실행한 결과
		return x + num;
	};
}

const addFive = createAdder(5); // 1. createAdder를 실행한 결과(num)
// const addFive = function (x/* 10(2) */) {
// 	return x + 5(1);
// };
console.log(addFive(10));
