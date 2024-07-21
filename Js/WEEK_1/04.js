// 불리언(Boollean)
// true(참), false(거짓)
let bool1 = true; // '' <-문자열
let bool2 = false;

console.log(bool1);
console.log(typeof bool1);
console.log(bool2);
console.log(typeof bool2);

// if : 만약 ~ 한다면! if(){}
// for(let i = 0; i < ..)

// undefined
// un : not, define : 정의하다
// 변수를 선언하고 값을 할당 안함
let x;
console.log(x);

// null : 값이 존재하지 않음 '명시적'으로 나타내는 방법
// null != undifined
let y = null;
console.log(y);

// object(객체) : key-value pair
let person = {
	name: 'choi',
	age: 20,
	isMerried: true,
};

console.log(typeof person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.keys(person)[0], Object.values(person)[0]);
console.log(person.age);

// array(배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입
let number = [1, 2, 3, 4, 5]; // 하나하나 인덱스를 가지고 있음
console.log(Array.isArray(number));

let fruits = ['apple', 'banana', 'mango'];
console.log(fruits[0]);
