// (1) 단축 속성명 : property shorthand
const name = 'abc';
const age = '30';

// key - value
// key : value(name: name)값이 같으면 생략 가능
const obj = {
	name,
	age /* age : newAge */,
};

const obj1 = { name, age }; // 단축 속성명 : 배열 같지만 객체
const obj2 = { name: name, age: age };

// (2) 전개 구문 : Spread operator
// destructuring(구조분해할당) 과 함께 가장 많이 사용되는 es6 문법 중 하나

// 배열
let arr = [1, 2, 3];
console.log(arr); // [ 1, 2, 3 ]
console.log(...arr); // 1 2 3 배열이 벗겨지고 전개 됨 : 구조를 벗어버리고 새로운 구조로 덧입여야 할때 쓰임

let newArr = [...arr, 4];
console.log(arr); // [ 1, 2, 3 ]
console.log(newArr); // [ 1, 2, 3, 4 ]

// 객체
const user = { name: 'nana', age: 10 };
const newUser = { ...user, gender: 'fe' };
console.log(user); // { name: 'nana', age: 10 }
console.log(newUser); // { name: 'nana', age: 10, gender: 'fe' }

// (3) 나머지 매개변수 : rest parameter
// 매개변수의 개수를 정확하게 모를 때 ...args 추가적으로 인자가 추가될 수 있다는 걸 명시
function func(a, b, c, ...args /* 인자 */) {
	console.log(a, b, c); // 1 2 3
	console.log(...args); // 4 5 6 7
	console.log(args); // spread 형태를 빼면 [ 4, 5, 6, 7 ] 배열형태로 args에 들어감
}

func(1, 2, 3); // 3
func(1, 2, 3, 4, 5, 6, 7); // 3 4 5 6 7

// (4) 템플릿 리터럴 : Template literals
// js코드, 변수, 연산 지원
const testValue = 'hello';
console.log(`js코드${3 + 3} ${testValue}, 변수, 연산`);
console.log(`${testValue} 202407240210`);

// 멀티라인 지원(문자열,로그)
console.log(`
cris
        ${testValue} 
  ${new Date()} 

    = 202407240210`);
