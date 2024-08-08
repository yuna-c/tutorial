/*
rest operator
*/

// 1. 나머지 연산자(= rest operator) 사용방법
// ... 변수명
// (1) 함수의 매개변수
// (2) 객체 분해 할당 시, 여러 값을 그룹핑(객체 리터럴, 배열 리터럴)
// 예를 들어, 함수에서 여러 인수를 배열로 그룹화하거나, 객체 분해 할당(destructuring)에서 특정 속성을 제외한 나머지 속성들을 새 객체로 그룹화할 때 사용
// 객체 리터럴(배열 리터럴) : 단순히 중괄호 {}를 이용하여 객체를 직접 선언하는 방식

// 1-1. 함수
function sum(numbers) {
	return numbers.reduce((acc, current) => acc + current);
}
console.log(sum([1, 2, 3])); // 6 [] 배열 표식을 해줘야 한다

// function sum1(first, seconde, third) {
// 	// return numbers.reduce((acc, current) => acc + current); 이 표현식을 못씀
// }
// const result = sum1(1, 2, 3);
// console.log(result); // 6

function sum2(...numbers) {
	// rest operater을 써서 매개변수()를 지정하면 sum2에 들어간 플레인 text값이 배열로 바뀜
	console.log('HERE =>', numbers); // [ 1, 2, 3, 4, 5 ]
	return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sum2(1, 2, 3, 4, 5)); // 15

// 1-2. 객체 분해 할당 : 나머지 값 그루핑
const person1 = {
	name: 'John',
	age: 30,
	country: 'USA',
	occupation: 'Developer',
};

const { country, ...rest } = person1;
console.log(rest); // { name: "John", age: 30, occupation: "Developer" }
console.log(country); // USA
