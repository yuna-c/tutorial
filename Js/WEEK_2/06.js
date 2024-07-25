// 일급 객체로서의 함수 (2)
// (5) 배열의 요소로 함수를 할당
const myArr = [
	function (a, b) {
		return a + b;
	},
	function (a, b) {
		return a - b;
	},
];
// 더하기
console.log(myArr[0](5, 10)); // 15 출력
// 빼기
console.log(myArr[1](10, 7)); // 3 출력

// 고차함수
function multiplyBy(num) {
	return function (x) {
		return x * num; // num2
	};
}

function add(x, y) {
	return x + y;
}

const multiplyByTwo = multiplyBy(2);
// const multiplyByTwo = function (2) { // 리팩토링
//   return x * 2;
// };
console.log(multiplyByTwo); //[Function (anonymous)]
console.log(multiplyByTwo(4)); //실행한 결과 : NaN, 매개변수 넣으면 : 8

const multiplyByThree = multiplyBy(3);
// const multiplyByThree = function (3) {
//   return x * 3;
// };
console.log(multiplyByThree); //[Function (anonymous)]
console.log(multiplyByThree(10)); //실행한 결과 : NaN 매개변수 넣으면 : 30

const result = add(multiplyByTwo(5), multiplyByThree(10)); // 40 출력
console.log(result); // 40
