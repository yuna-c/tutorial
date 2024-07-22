// 조건부 실행
// 특정한 조건에 들어와야 실행

let x = 10;

if (x >= 10) {
	console.log('x는 양수입니다');
}
// and조건(||)
x > 10 && console.log('x는 양수입니다!');

// 삼항 연산자와 단축평가
let y; // y에는 undefined
let z = y || 20; // y가 undefined이면 20을 할당해라
console.log(z); // 20
