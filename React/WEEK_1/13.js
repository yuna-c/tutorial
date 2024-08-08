/*
Arrow Function(화살표 함수)
*/
// 1. 화살표 함수의 간결성 : 가장 간결한 형태의 화살표 함수

// 1-1. 화살표 함수의 사용
const add = (a, b) => a + b;
const result1 = add(5, 3); // 값 담아주기

const log = (a, b) => {
	console.log(`options`);
	return a - b;
};
console.log(add(5, 3), result1, log(4, 6)); // 8

// 1-2. multi-line : 중괄호({}) 및 return문은 꼭 명시
const sampleLogging = () => {
	const name = '르탄이';
	const age = 20;
	console.log(`안녕, ${name}`);

	return age + 1;
};
