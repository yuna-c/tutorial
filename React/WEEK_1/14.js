/*
Conditional Operator(조건 연산자 = 삼항연산자)
*/
// 1-1. 조건 연산자의 예
const score = 85;
const grade = score > 70 ? '합격' : '불합격';
console.log(grade); // '합격'

// 1-2. 조건 연산자 미사용 시의 코드
let grade1;
grade1 = '';
if (score > 70) {
	grade1 = '합격';
} else {
	grade1 = '불합격';
}
console.log(grade1); // '합격'
