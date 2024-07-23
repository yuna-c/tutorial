// 2. 원시 참조 구분

/* 원시형 타입 : primite */
// 2. 데이터 타입 : 기본 데이터 타입

// 1-1. Number(정수,소수), BigInt(2^53-1)
let name = 100; // 숫자 노랑
console.log(name);

// 문자열
// '', "", `템플릿 리터널 => teml html` => 여러줄 쓸때
let name2 = '1001'; // 문자열 흰색
console.log(name2);

// Boolean : true, false(1, 0)
// githib copilot
let isActive = true;
let stringAction = 'true';
console.log(isActive); // Boolean 노랑
console.log(stringAction);

// null : 휴지걸이는 있고 휴지는 없다(있었는데 없었다), 명시적으로 값이 없음
// undefiend : 휴지걸이도 없음(아예 없어요), 변수가 초기화 되지 않음

/* 참조형 타입(객체 데이터 타입) : 집합 */
// Object : {} key-value : 객체 리터럴, 주소값
// 하나의 변수를 표현하는데 여러가지 속성이 필요(사람 = 이름, 나이)
const person = {
	// let이면 let person = ''; 속성 변경 가능
	name: 'yuna',
	age: 15,
};
person.name; // 접근자(name) : 값
person.age = 30;
// const person = ''; // 원시타입에 따라서 속성값을 변경가능

// Array : []; ~들
const person2 = {
	name: 'yuna',
	age: 15,
};
const persons = [person, person2];
console.log(persons[0]); // offset 0 start

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;
console.log(arr1 === arr2);
console.log(arr1 === arr3); // 주소값을 공유

// 원시타입 : 저장됨(변수가) 콜스택
// 참조타입(배열,객체) : 참조됨(주소가) 콜스택, 저장됨(변수가) 메모리 휩, 주소값 비교시 false

// const -> 주소값을 변경 불가(원시타입은 변수값 변경 불가능)
// 메모리 휩의 값을 참조해서 요소 수정시 수정 가능(mutation = 돌연변이)

arr3.push(4); // 원본 변함
console.log(arr1);
arr4 = [...arr1, 6]; // 원본 안변함
console.log(arr1);
console.log(arr4);
console.log(arr1);

/* 연산자 */
// 논리
// and : 하나라도 false = > false
console.log(true && true); // true
console.log(true && false); // false

// or : ~거나
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

// !(not)
console.log(!true);
console.log(!false);

let abc = '123'; // 스트링의 값이 있거나 숫자이면 true
console.log(!abc); // false
console.log(!!abc); // true

/* 함수 */
// 함수 선언
function 함수(파라미터 = 인자) {}

// 함수 표현식
const 함수2 = function () {};

//화살표 함수
const 함수3 = () => {};

function add(a, b) {
	return a + b; // 함수가 종료되면서 반환됨
}

// void 함수 반환값 없음
// function add(a, b) {
// 	// addEvent로 콜백으로 쓸때
// }
console.log(add(1, 2)); // 1 + 2 // a + b
