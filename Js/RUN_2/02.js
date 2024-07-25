// 메서드 : 방법
// 프로그래밍에서 메서드 : 단축기(함수 불러오기)
// 배열은 객체

const arr = [];

// 배열 값넣기
arr.push(1); // [1]
arr.push(2); // [ 1, 2 ]
arr.pop(); // [1]

// 맨 앞에 값 넣기
arr.unshift(1); // [1]
arr.unshift(2); // [ 2, 1 ]
arr.shift(); // [1]

// 배열 인자 순서 외우기

console.log(arr);

// splice
let fruits = ['Apple', 'Banana', 'Cherry'];
fruits.splice(1, 2, ['Blueberry', 'Apple']); // index, 갯수
fruits.splice(1, 2, ['Blueberry', 'Apple']); // [ 'Apple', [ 'Blueberry', 'Apple' ] ]
fruits.splice(1, 2, ...['Blueberry', 'Apple']); // index, 갯수

console.log(fruits); // ['Apple', 'Blueberry', 'Cherry']

fruits.sort();
console.log(fruits); // ['Apple', 'Banana', 'Cherry']

let numbers = [4, 2, 5, 1, 3];
let names = ['최유나', '이재상', '김또깡'];
numbers.sort((a, b) => a - b); // 숫자 정렬
// [1, 2] 이런식으로 뒤의 값을 비교해서 순서를 맞춤
// 원본배열의 순서를 바꿔줌
names.sort();
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(names); // [1, 2, 3, 4, 5]

// 비변경 메서드

let value = '';
let isExist = fruits.indexOf(value) !== -1;
let isExist1 = fruits.findIndex((a) => a === 'Apple') !== -1;
console.log(isExist);
console.log(isExist1);

// map
// let numbers = [1, 2, 3];
// let doubled = numbers.map((n) => n * 2);
// console.log(doubled); // [2, 4, 6]

// const person = {
// 	name: '김준현',
// 	age: 123123,
// };
// const person1 = {
// 	name: '김준현1',
// 	age: 11,
// };

// const arr2 = [person, person1];
// const ageArr = arr2.map((person) => {
// 	return person.age;
// }); // undefined(void 함수) , 중괄호 있을때는 return person.age;
// console.log(arr2);
// console.log(ageArr);

// filter() 없앤다음 배열
let numberss = [1, 2, 3, 4, 5];
let even = numberss.filter((n) => n % 2 === 0);
even = numberss.filter((n) => false); //[]
console.log(even); // [2, 4]
console.log(numberss.filter((n) => n % 2 === 0)); // 반환값 배열(할당 안할 시)
// 짝수를 2로 나눈다음에 2로 곱해
console.log(numberss.filter((n) => n % 2 === 0).map((n) => n * 2)); // [4,8]

// 메서드 체이닝
// numberss.filter(isEven).map(multyply).map();

// 배열 메서드는 객체 메서드에 쓸 수 있다(중요!)

console.log(numberss.every((n) => n % 2 === 0)); // && 모든요소가 조건을 만족하는지 판단 false
console.log(numberss.some((n) => n % 2 === 0)); // || (한개라도)짝수 몇개가 있어? true

// 동물농장 만들기
// 동식물 같이 데이터베이스 줄때

// numberss
// .filter()
// .map()
// .every((n) => n % 2 === 0)

let people = { name: 'John', age: 30, city: 'New York' };
let keys = Object.keys(people); //배열 반환값 => 배열메서드 쓸수있다
console.log(keys); // ['name', 'age', 'city']

let entries = Object.entries(people);
console.log(entries); // [['name', 'John'], ['age', 30], ['city', 'New York']]

// 덮어쓰기
let target = { name: 'John' };
let source = { age: 30, city: 'New York' };
let returnedTarget = Object.assign(target, source);
console.log(target); // { name: 'John', age: 30, city: 'New York' }
console.log(returnedTarget); // { name: 'John', age: 30, city: 'New York' }

// readonly 타입
// Object.freeze()
let person = { name: 'John', age: 30 };
Object.freeze(person);
person.age = 31; // 무시됨
console.log(person.age); // 30

// 객체를 밀봉(seal)하여 새로운 속성을 추가하거나 기존 속성을 삭제할 수 없게 하지만, 속성의 값은 변경할 수 있습니다
Object.seal(person);
person.age = 31; // 변경 가능
person.city = 'New York'; // 추가 불가
delete person.name; // 삭제 불가
console.log(person); // { name: 'John', age: 31 }
