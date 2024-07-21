// 스코프 : 변수의 영향 범위
// 전역변수, 지역변수, 화살표 함수

let x = 10; // 전역변수

function printX() {
	console.log(x);
}
console.log(x);
printX;
