// Class = api 인스턴스
const jun = {
	name: '김준현',
	age: 123123,
};
const yun = {
	name: '정윤오',
	age: 12,
};
const gi = {
	name: '이기성',
	age: 20,
};

const gisun = makeperson('이기성', 20);
const gisun1 = makeperson('rla기성', 20);

function makeperson(name, age) {
	return {
		name,
		age,
	};
}

// Class 특징
class Person {
	// 설계도
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	// 정적 메서드 : 바로바로 사용하기 위해서
	static tell() {
		console.log(`${this.name} : tell`);
	}

	// 인스턴스 메서드(객체 안에 들어가는 함수 메소드)
	speak() {
		console.log(`${this.name} : hello! `);
	}
}
const junhyne = new Person('김준현', 123123); // 인스턴스(생성이 된 객체)
const yunho = new Person('김윤호', 13);

console.log(junhyne);
console.log(junhyne === yunho); // false (같은 사람이야?)
console.log(junhyne instanceof Person); // true (사람이야?)
junhyne.speak();
Person.tell();
// Promise.all();

class Animal {
	// 설계도
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} : makes a noise! `);
	}
	speak2() {
		console.log(`${this.name} : makes a noise!! `);
	}
}
// 다형성
class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this.breed = breed;
	}
	speak() {
		console.log(`${this.name} : barks!, ${this.breed} `);
	}
}
console.log(`-----------------`);
const animal = new Animal('Cat');
animal.speak(); // makes a noise!

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // Rex : barks!, Labrador
dog.speak2(); // Rex : makes a noise!! 오버라이딩 덮어쓰기 가능

// 객체 지향 프로그램 할 때 쓰임
// this, class 호환성 떨어짐
