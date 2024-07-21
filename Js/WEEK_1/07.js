// 함수 = function(기능)
// input, output
// 기능의 단위로 묶은 다음에 재활용을 한다.

// 1. 함수 선언문
// function add(매개변수) {
// 	// 함수 내부에서 실행할 로직
// }

// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add(x, y) {
	return x + y;
}

// 2. 함수 표현식
let add2 = function (x, y) {
	return x + y;
};

// 함수를 호출한다(= 사용한다)
// 함수명 () => add()
console.log(add(1, 2));

let functionResult = add(4, 5);
console.log(functionResult);

// add2를 가지고 10과 20을 더한 값을 출력하기
console.log(add2(10, 20));
let functionResult2 = add2(10, 20);
console.log(functionResult2);

// 함수의 input => 매개변수 (매개체가 되는 변수!)
// return문 뒤에 오는 값 : 반환값
