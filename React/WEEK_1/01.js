/*
변수 선언 매커니즘----------------------
*/

// 1. 변수 필요한 이유
// 1-1. 데이터 저장 및 관리의 필요성
let numberOfUsers = 50; // 사용자 수를 저장
numberOfUsers = numberOfUsers + 5; // 새로운 사용자 추가
// numberOfUsers += 5;
console.log('Total users: ' + numberOfUsers); // 출력: Total users: 55

// 1-2. 프로그램의 복잡성 관리
let temperature = 36.5; // 체온 값 저장

// if (36.5 > 37.5) { // 변수가 없다면?
if (temperature > 37.5) {
	console.log('You might have a fever.');
} else {
	console.log('Your temperature is normal.');
}

// 1-3. 재사용성 및 유지보수 향상
let basePrice = 12000;
let taxRate = 0.1;
let totalPrice = basePrice + basePrice * taxRate; // 세금 포함 가격 계산
console.log(`The total price is: ${totalPrice}`); // 출력: The total price is: 13200

// 2. 변수의 종류
// 2-1. let, const, var

// 2-2.스코프에 따른 분류
let blockScopeVariable = 'Avilable only in this block';
if (true) {
	let blockedScope = 'Visible inside this block';
	console.log(blockedScope);
}

// console.log(blockedScope); blockedScope is not defined 모르는 놈이야
console.log(blockScopeVariable);

// 2-3. 재할당 가능성에 따른 분류
const fixedValue = 100;
let changeableValue = 100;
changeableValue = 200; // 재할당 가능
var reassignableVar = 300;
reassignableVar = 400; // 재할당 가능
// fixedValue = 200; // TypeError: Assignment to constant variable.

/*
const, let----------------------
*/

// 1. const
// 1-1. 상수 선언의 중요성 : 값변경 X, 코드 안정성 높음, 의도치 않은 값변경으로 인한 버그 예방
const MAX_USERS = 100;
// MAX_USERS = 150; // TypeError: Assignment to constant variable.
console.log(MAX_USERS);

// 1-2. 블록스코프와 안전한 프로그래밍 : 선언된 블록 내애서만 유효, 예측가능성 업
// 누구라도 temp라는 변수는 if문 안에서만 사용될 거라고 예상할거에요.
if (true) {
	const temp = 'local';
	console.log(temp); // 'local'
}
// console.log(temp); // ReferenceError: temp is not defined

// 2. let
// 2-1. 변수의 유연한 관리 : 계산이나 조건에 따라 변할 수 있는 값 사용시
let score = 90;
score += 10;
console.log(score); // 100

// 2-2. 블록스코프의 이점 : 안정성 높음
for (let i = 0; i < 3; i++) {
	console.log(i); // 0, 1, 2
}
// console.log(i); // ReferenceError: i is not defined

/*
var와 그 사용을 지양해야 하는 이유----------------------
*/

// 1. var
// 1-1. 함수 스코프를 가지는 var : 함수 내외부 어디서든 접근 가능
function testFunction() {
	var test = 'accessible within this function';
	if (true) {
		var test = 'still accessible within the whole function';
	}
	console.log(test); // 'still accessible within the whole function'
}
testFunction();

// 1-1. 호이스팅 문제 : 선언 전에도 참조 가능(호이스팅)
console.log(myVar); // undefined, not ReferenceError
var myVar = 10;

// 2. var을 사용하면 안되는 이유
// 2-1. 범위 관리의 어려움
if (true) {
	var notBlockScoped = 'I am available outside this block.';
}

// 당...황!!
console.log(notBlockScoped); // "I am available outside this block."

// 2-2. 코드의 가독성과 유지보수성 저하
// 가독성 정말 떨어지는 코드!
function doSomething() {
	for (var i = 0; i < 10; i++) {
		// loop body
	}
	console.log(i); // 10, accessible outside the loop
}
doSomething();

// const, let도 호이스팅 가능
