// 화살표 함수
// ES6 신 문법

function add(x, y) {
	return x + y;
}

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
	console.log((x += 1));
	console.log((x %= 2));
	console.log(x);
	return x + y;
};

// 1-2. 한 줄로 : 중괄호, return 생략 가능
let arrowFunc02 = (x, y) => x + y;

// 바꾸기
function testFunc(x) {
	return x;
}

let arrowFunc03 = (x) => x;
