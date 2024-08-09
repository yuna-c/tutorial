// 자바스크립트 ES6+ 기능 이해도 평가 항목

// [요구사항]
// 아래의 함수를 화살표 함수로 변환하세요.

// [코드]
const add = (a, b) => a + b;
console.log(add(1, 4));
// 여기에 코드를 작성하세요.

// [요구사항]
// 아래 변수 value의 값이 10보다 크면 "big"을, 그렇지 않으면 "small"을 변수 result에 저장하는 삼항연산자를 작성하세요.

// [코드]
let value = 8;
let result;
// 여기에 코드를 작성하세요.
const checkNumber = (value) => {
	return (result = value > 10 ? 'big' : 'small');
};
console.log(checkNumber());
// [테스트]
// result의 값이 "small"인지 확인하세요.

// [요구사항]
// 아래의 객체에서 name과 age 속성을 구조분해할당을 사용하여 각각의 변수에 저장하세요.

// [코드]
let person = { name: 'Alice', age: 25, job: 'Engineer' };
// 여기에 코드를 작성하세요.
let { name, age } = person;
// [테스트]
// name 변수의 값이 "Alice"이고, age 변수의 값이 25인지 확인하세요.
console.log(person.name, person.age);

// [요구사항]
// 아래의 변수들을 사용하여 단축 속성명을 이용한 객체를 생성하세요.

// [코드]
let a = 'hello';
let b = 'world';
// 여기에 코드를 작성하세요.
const obj = { ...[a, b] };
console.log(obj);
// [테스트]
// 생성된 객체의 a 속성의 값이 "hello"이고, b 속성의 값이 "world"인지 확인하세요.

// [요구사항]
// 아래의 배열을 전개구문을 사용하여 새로운 배열에 복사하세요.

// [코드]
let fruits = ['apple', 'banana', 'cherry'];
let newFruits;
// 여기에 코드를 작성하세요.
newFruits = [...fruits];
console.log(newFruits === fruits);
// [테스트]
// newFruits 배열이 ["apple", "banana", "cherry"]인지 확인하고, 원본 fruits 배열과는 다른 참조를 가지고 있는지 확인하세요.
