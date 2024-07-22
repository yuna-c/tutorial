// 객체
// key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다!

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
let person = {
	name: '김또깡',
	age: 30,
	gender: '남자',
	// key : 어떤 값! ('문자', 숫자, Boolean, function() {함수}, [배열], {또 다른 객체})
};

// 1-2. 생성자 함수를 이용한 객체 생성 방법(this,class)
function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

let person01 = new Person('홍길동', 30, '남자');
let person02 = new Person('홍길순', 25, '여자');

// 2. 접근하는 방법
console.log(`1 ${person.name}`);
console.log(`2 ${person.age}`);
console.log(`3 ${person.gender}`);

// 3. 객체 메소드 (객체가 가진 여러가지 기능 Object.~~~)
// 3-1. Object.keys() : key를 가져오는 메소드
let keys = Object.keys(person); // 매개변수
console.log(keys); //keys => [ 'name', 'age', 'gender' ] 배열값

// 3-2. Object.values() : value를 가져오는 메소드
let values = Object.values(person);
console.log(values); //values => [ '김또깡', 30, '남자' ] 배열값

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열(2차원 배열)
let entries = Object.entries(person);
console.log(entries); //[ [ 'name', '김또깡' ], [ 'age', 30 ], [ 'gender', '남자' ] ]

console.log(`----------------------------------------`);
console.log(`이차원 배열에 접근하는 방법 => ` + entries[0]); // 문자열 : name,김또깡
console.log(`이차원 배열에 접근하는 방법 => ` + entries[0][1]); // 문자열 : 김또깡
console.log(`----------------------------------------`);

// 3-4. assign(객체 복사)
let newPerson = {};
Object.assign(newPerson, person, { age: 34 }); // 변경
Object.assign(newPerson, person, { today: new Date() }); // 추가
// Object.assign(target: {}, source: any)
// target: {} : 어디에다가 복사할래
// source: any : 뭘 복사할래
console.log('newPerson =>', newPerson); // { name: '김또깡', age: 34, gender: '남자' }

console.log(`----------------------------------------`);
console.log(`newPerson => ${newPerson}`); // newPerson => [object Object]
console.log(`object Object 출력 방법 => `, JSON.stringify(newPerson)); // Dates 문자열화 : { name: '김또깡', age: 34, gender: '남자' }
console.dir(newPerson); // 객체로 출력 { name: '김또깡', age: 30, gender: '남자', today: 2024-07-22T11:07:16.036Z }
console.log(`----------------------------------------`);

// 3-5. 객체 비교
// 크기가 상당히 커요! -> 메모리에 저장할 때 별도의 공간에 저장
// person1 별도의 공간에 대한 주소
let person1 = {
	name: '김또깡',
	age: 30,
	gender: '남자',
};
// person2 별도의 공간에 대한 주소

let person2 = {
	name: '김또깡',
	age: 30,
	gender: '남자',
};
// false : 주소가 다르다. 참조타입으로 값을 메모리(주소)에 저장하기 때문에
// 참조 타입 데이터 : 배열, 객체, 함수
// 주소값 : 참조타입 데이터가 저장된 메모리 힙의 주소값은 콜스택에 각각 저장
console.log(`answer => `, person1 === person2);
console.log(`answer => `, JSON.stringify(person1) === JSON.stringify(person2)); // true (문자열화)
let str1 = 'aaa';
let str2 = 'aaa';
// true : 값을 직접 callstack에 저장하기 때문에
// 원시 타입 데이터 : 변수, 값
console.log(`answer => `, str1 === str2);

// 3.6 객체 병합
let person3 = {
	name: '김또깡',
	age: 30,
};
let person4 = {
	gender: '남자',
};

// ...spread 연산자
// 공간을 다 풀어서 병합 해줄 때, 얕은 복사 (주소값을 복사하면서 두 객체를 병합)
let perfectMan = { ...person3, ...person4 };
console.log(`spread => `, perfectMan);

// concat (배열만 되나바..) 그럼 join, push도?
let concatsMan = str1.concat(str2);
console.log(`concat => `, concatsMan);

// _merge()
// $ npm install --save lodash
// const newObj = _.merge({}, person3, person4); //병합될 target객체, 병합될 source객체 기존 객체 변경 X, 깊은 복사 (실제 값 복사)
// console.log(`merge => `, newObj);
