// 일급 객체로서의 함수 (2)

// (4) 객체의 프로퍼티로 함수를 할당
// 객체 안에서 this 자기자신 객체를 가르킴
const person = {
	name: 'nana',
	age: 10,
	isMarried: true,
	sayHello: () => console.log(`hello my name is~ ${this.name}`), //hello my name is~ undefined
	// 화살표 함수는 this를 바인딩하지 않는다
	// function () {
	// 	// console.log('hello my name is~ ' + this.name);
	// 	console.log(`hello my name is~ ${this.name}`);
	// },
};
person.sayHello(); //hello my name is~ nana
