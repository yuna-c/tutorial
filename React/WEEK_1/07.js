/*
Destructuring
*/
// 객체나 배열의 속성을 보다 쉽게 추출할 수 있게 해주는 문법

// 1. 객체 Destructuring
// 1-1. 다중 속성
const item = {
	name: '커피',
	price: 4000,
};
// const name = item.name;
// const price = item.name;
// console.log(`name =>`, name); // 커피
// console.log(`price =>`, price); // 4000
// 찢어놔서 각각 변수화를 시킴 구조 파괴선언에 이니셜라이져가 있어야 함
const { name, price } = item;
console.log(name); // 커피
console.log(price); // 4000

// 1-2. 함수 매개변수에서의 사용
// 리액트 컴포넌트에서 정말 많이 사용
// 객체 Destructuring에서는 obj안의 ‘key’를 그대로 사용하여 분해한다는 것
// 순서가 아님

function greet(/*person*/ { age, name }) {
	console.log(`안녕하세요, 제 이름은 ${name}이고 나이는 ${age}살입니다.`);
}
// const person = {
// 	name: '르돌돌',
// 	age: 1230123,
// };
// greet(person);

greet({ name: '르순이', age: 28 });

// 2. 배열 Destructuring
// 배열의 요소를 위치에 따라 변수로 할당
// 2-1. 다중 속성 추출
let colors = ['red', 'green', 'blue'];
let [firstColor, secondColor] = colors;
let [, , thirdColor] = colors; // 구분자로 특정 값만
console.log(firstColor); // red
console.log(secondColor); // green
console.log(thirdColor); // blue
