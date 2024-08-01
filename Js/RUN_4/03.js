'use strict';
// 함수에 this 쓰면 global 함수
function hi() {
	console.log(this);
}
hi(); // undefined

const person = {
	name: 'yuna',
	age: 30,

	greet() {
		console.log(`hello, my name is ${this.name}`); // hello, my name is yuna
	},
	divideAge() {
		console.log(`${this.age}`);
	},
};

person.greet();
// 암묵적 바인딩 : 누가 호출하고 있느냐
const obj1 = {
	name: 'obj1',
	sayName() {
		console.log(this.name);
	},
};
obj1.sayName();

const obj2 = {
	name: 'obj2',
	sayName: obj1.sayName,
};
obj2.sayName();
// 호출하는 시점에 따라 바뀐다

// 명시적 바인드 : call, apply, bind : 어떤 것을 바라봐야 할 지
function greet(greeting, punctuation) {
	console.log(`${greeting}, my name is ${this.name}💟 ${punctuation}`); // hello, my name is yuna
}
const user = {
	name: 'bob',
};

greet.call(user, 'Hi', '!'); // hello, my name is bob💟
greet.apply(user, ['Hi', '!']); // hello, my name is bob💟 [배열로 받음]
const boundGreet = greet.bind(user); // undefined, my name is bob💟 undefined(묶어놓고)
boundGreet(); // 호출
