// 문(if, else if, switch ~)
// 조건문 - if, else if, else, switch

// 1. if
// if(true 또는 false가 나올 수 있는 조건){}
let x = 10;

// 1-1
if (x > 0) {
	// x가 0보다 크니 true
	// main logic
	console.log('x는 양수입니다.'); // x
}
if (x < 0) {
	// x가 0보다 작니 false
	console.log('x는 양수입니다.');
}

let y = 'hello world';
// y의 길이가 5보다 크거나 같으면 길이를 출력
if (y.length >= 5) console.log(y.length);

// 1-2. if -else문
x = -3;
if (x > 0) {
	// main logic #1 : true
	console.log('x는 양수입니다.');
} else {
	// main logic #2 : false
	console.log('x는 음수입니다.'); // x
}

// 1-3. if -else if - else문
x = 5;
if (x <= 0) {
	// main logic #1
	console.log('1');
} else if (x >= 0 && x < 10) {
	// main logic #2
	console.log('2'); // x
} else {
	// main logic #3
	console.log('3');
}

// 2. switch
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = '사과2';

// 변수를 비교해 가면서 맞는 조건에서 빠져나오겠다.
switch (fruit) {
	case '사과':
		console.log('사과는 빨간색입니다.');
		break;
	case '바나나':
		console.log('바나나는 노란색입니다.');
		break;
	case '키위':
		console.log('키위는 초록색입니다.');
		break;
	default:
		console.log('아무것도 아닙니다.'); // fruit
		break;
}

// 3. 삼항 연산자
let age = 20;
let message = age >= 18 ? '성인입니다.' : '미성년자입니다.';
console.log(message); // "성인입니다."
