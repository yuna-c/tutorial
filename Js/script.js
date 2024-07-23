//오늘 수업내용에서 무조건 이해해야 되는 내용

//1.함수에 인수 전달하고 내부의 값 리턴으로 내보내기
function plus(num1, num2) {
	return num1 + num2;
}
const result = plus(2, 3);
console.log(result);

//2.함수안쪽에서 조건문과 return을 활용해 함수 강제종료
function introduce(name) {
	if (!name) return;
	console.log(name + '님 반갑습니다.');
}
introduce('홍길동');
introduce();
