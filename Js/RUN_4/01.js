// 함수 스코프
function func() {
	var any = 1;
}
console.log(any); // undefined
// if 는 호이스팅 되서 undefined
// for 은 안됌(함수 스코프 가짐)
const array = [1, 2, 3];

for (let i = 0; i < array.length < i++; ) {
	// var any = 1;
	if (true) {
		for (let i = 0; i < array.length < i++; ) {
			var any = 1;
		}
	}
}
// console.log(any); // undefined

if (true) {
	var any = 1;
}
console.log(any); // 2
// 나옴

// 블록 스코프
{
	let some = 1;
	{
		console.log(some);
	}
}
// console.log(some); // some is not defined

// 스코프 체이닝
let a = 'global';

function other(params) {
	let a = 'hihi'; // 새로 선언
	let b = 'outer';

	function inner(params) {
		let c = 'inner';
		console.log(a); // glo
		console.log(b); // out
		console.log(c); // inn
		// inner함수 앞에서 앞에 global 스코프를 호츨 가능
	}
	inner();
}

function outer2() {
	let a = '김준현';
	let b = '김또깡';
	function inner() {
		console.log(`outer2 ` + a); // global 스코프에서 찾음( 위-> 아래 접근 안됌)
		console.log(`outer2`, b); // 못찾음
	}
	inner();
}

other();
outer2();
