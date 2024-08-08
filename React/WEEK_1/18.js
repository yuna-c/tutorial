/*
Async/Await 기본
*/

// 2. Async 함수의 정의
// 2-1. Async 함수 정의 방법 : async 함수는 async 키워드를 함수 선언 앞에 붙여 정의, 항상 promise 반환
async function fetchData() {
	return 'Data loaded';
}

// 아래 코드와 같아요.
// async function fetchData() {
// 	return Promise.resolve('Data loaded');
// }

fetchData().then(console.log); // 'Data loaded'

// 3. Await
// 3-1. await 사용
// 프로미스의 완료(정상, 실패)를 기다리는 동안 '함수의 실행을 일시적으로 중단'
// 프로미스가 해결되면 자동으로 함수의 실행을 재개
async function fetchData2() {
	try {
		const data = await fetch('https://jsonplaceholder.typicode.com/posts');
		const json = await data.json();
		console.log(json);
	} catch (error) {
		console.error('Data loading failed', error);
	}
}

fetchData2();

// 3-2. await를 사용하지 않았을 때의 문제
//await를 사용하지 않고 프로미스를 처리하면, .then()과 .catch() 메서드를 사용하여 프로미스 체인을 구성 = 콜백지옥
function fetchData3() {
	return fetch('https://api.thecatapi.com/v1/images/search')
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.error('Data loading failed', error));
}

fetchData3();
