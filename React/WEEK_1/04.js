/*
주요 메서드----------------------
*/

// 1. 객체
// 1-1. Object.keys() : 객체의 키만을 추출하여 배열로 반환
const user1 = {
	name: '르탄이',
	age: 30,
	isAdmin: true,
};
const keys = Object.keys(user1);
console.log(keys); // ["name", "age", "isAdmin"]

// 1-2. Object.values() : 객체의 값만을 추출하여 배열로 반환
// 위 코드에 이어

const values = Object.values(user1);
console.log(values); // ["르탄이", 30, true]

// 1-3. Object.entries() : 객체의 키와 값을 쌍으로 하는 배열을 반환
// 위 코드에 이어

const entries = Object.entries(user1);
console.log(entries);
// [["name", "르탄이"], ["age", 30], ["isAdmin", true]]

// 1-4. Object.assign() : 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사
// 위 코드에 이어

const userDetails = {
	occupation: '개발자',
};
Object.assign(user1, userDetails);
console.log(user);
// {name: "르탄이", age: 30, isAdmin: true, occupation: "개발자"}
