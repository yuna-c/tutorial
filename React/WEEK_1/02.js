/*
객체----------------------
*/

// 1. 객체의 기본 구조와 문법
// 1-1. 기본 정의 :  키(key)와 값(value)으로 구성된 데이터 구조(데이터 타입) ,  JSON(JavaScript Object Notation)에서 쓰임
// 1-2. 객체 선언 및 접근
// 객체는 const 또는 let으로 변수화 시켜 선언
// value에는 어떤 데이터 타입이라도 올 수 있음
let user = {
	name: '르탄이',
	age: 30,
	isAdmin: true,
	printHello: () => console.log('hello!'),
};

// 객체접근방법1 : dot notation(점 표기법)
console.log(user.name); // 르탄이
console.log(user.age); // 30
user.printHello();

// 객체접근방법2 : Bracket Notation(괄호 표기법)
// 키 값이 변수일 때 주로 사용
// * state 사용할 때는 사용 X, 불변성 유지해서 새로운 객체 배열 만들어서 변경(객체 자체는 변경된게 아님) = 불변성이 깨진 상태
// example 1
console.log(user['name']);
console.log(user['age']);
// example 2
user.name = '김흐린눈'; // 객체 바꾸기
[...(user.name = '김부릅뜬눈')]; // spead로 바꾼것/ 깊은 복사
let attribute = 'name';
// console.log(user.attribute); // 이 케이스는 안됌
console.log(user[attribute]);

// 2. 객체 속성
// 2-1. 속성 추가 및 수정
// 위 코드에 계속
user.email = 'john.doe@example.com'; // 추가
user.age = 31; // 수정
console.log(user);

// 2-2. 속성 삭제
delete user.email;
console.log(user);
