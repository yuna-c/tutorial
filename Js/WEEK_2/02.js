// 구조분해할당 : Destructuring(De + structure + ing)
// De = not
// structure = 구조
// 배열, 객체의 속성 분해해서 변수에 넣어 줄 수 있게

// (1) 배열인 경우
// [변수, 변수] = [배열1, 배열2]
// 순서가 중요
let [value1, value2] = [1, 'new'];
console.log('1', value1); // 1 2 3
console.log('2', value2);

let arr = ['value1', 'value2', 'value3', 'value4'];
let [a, b, c, d = 4] = arr; // undefined 막기 위해 초기값 지정
console.log('1', a); // value1
console.log('2', b);
console.log('3', c);
console.log('4', d); // undefined 인 경우
console.log(arr); // [ 'value1', 'value2', 'value3', 'value4' ]
// 구조분해할당의 변수에 d = 4 지정해 놓으면 4(초기값)
// 만약 d의 값이 생긴다면 value4

// (2) 객체인 경우
// key가 중요
let user = {
	name: 'nana',
	age: 10,
	birth: 20150301,
};
let { name, age } = {
	name: 'cris',
	age: 12,
};

console.log('name =>', name); // string type
console.log('age =>', age); // number type

// 새로운 이름으로 할당
let { name: newName, age: newAge } = user;
console.log('newName =>', newName); // name을 newName이라는 변수에 넣어라 : nana
console.log('newAge =>', newAge); // newAge : 10

let { name: nameed, age: ageed, birth = 'today' } = user; // undefined 막기 위해 초기값 지정
console.log('name =>', nameed); // name => nana
console.log('age =>', ageed); // age => 10
console.log('birth =>', birth); // undefined(값 X) => today(임시 값) => 20150301(값 정해지면)
