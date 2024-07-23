// for, while => ~동안 : 반복문
// for (초기값; 조건식; 증감식) {}

// 1. for문
// i라는 변수는 0부터 시작할거야!
// i라는 변수가 10에 도달하기 전까지 출력할꺼야!
// i라는 변수가 한 사이클을 돌고 나면 1씩 증가 할꺼야!
for (let i = 0; i < 10; i++) {
	// 블록단위 사이클
	console.log('For문 => ' + i);
}

// 1-1. 배열과 함께하는 for문(응용)
// 배열과 for문은 짝꿍이다.
const arr = ['one', 'two', 'three', 'four', 'five'];
for (let i = 0; i < arr.length; i++) {
	console.log('arr값 => ' + arr[i] + ' idx => ' + i);
	// arr값 => one idx => 0
	// arr값 => two idx => 1
	// arr값 => three idx => 2
	// arr값 => four idx => 3
	// arr값 => five idx => 4
}

// 1-2. 예시
// 0부터 10까지의 수 중에서 2의 배수(나머지)만 출력하는 예시
for (let i = 0; i <= 10; i++) {
	if (i >= 2) {
		if (i % 2 === 0) {
			console.log(i + '는 2의 배수입니다.');
		}
	}
	// if (i / 2 === 0) {
	// 	console.log(i + '는 2의 배수입니다?');
	// }
}
// console.log(10 % 2);
// console.log(10 / 2);

// 2. for ~ in 문
// 객체의 속성을 출력하는 문법
let person = {
	name: 'john',
	age: 30,
	gender: 'male',
};

// 객체의 value : person[key]
for (let key in person) {
	console.log(key + ' : ' + person[key]);
}
