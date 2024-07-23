// 3. 반복문 조건문

// 조건문
// if
let age = 18;
if (age >= 19) {
	console.log('으른');
}

// if else
if (age >= 19) {
	console.log('으른');
} else {
	console.log('민짜');
}

// if else if else = switch
let score = 85;
if (score >= 90) {
	console.log('A');
} else if (score >= 80) {
	console.log('B');
} else {
	console.log('자살');
}

// switch
let fruit = 'apple';
switch (fruit) {
	case 'apple':
		console.log('사과');
		break;
	case 'banana':
		console.log('바나나');
		break;
}

// 반복문(배열)
// 어떤값부터 시작할래? 0
// 어떤 값이면 멈출래? arr.length보다 i가 커지면
// 다음번에 이 값을 어떻게 할래? ++
// let arr = [1, 2, 3, 4, 5];
let arr = Array.from({ length: 5 }, (v, i) => i); // 빈 배열 만들기
for (let i = 0; i < arr.length; i++) {
	console.log('sdfds' + arr[i]);
}

console.log(false || 'something'); // ?? false 뒤 값 반환
console.log(true || 'something'); // true 앞 값 반환 trusy
console.log(false && 'something');
/*
|| 연산자는 앞에 조건이 참일 경우 참을 반환합니다! 20대 30대는 모조리 환영하는 모임이 있다고 하면 20대임을 확인했을때 30대인지 여부를 물어볼 필요가 없겠죠? 그런데 20대가 아니면 30대인지를 한번 더 확인한다고 그런느낌으로 보시면돼요!
*/
