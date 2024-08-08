/*
Promise.then
*/

// 1. Promise : 서버로부터 데이터를 요청하고 받아오는 HTTP 요청 처리에 사용되며, 파일 시스템 작업을 비롯한 다양한 비동기 작업에 활용

// Promise의 세 가지 상태
// - **Pending (대기중)**: 초기 상태로, 아직 성공 또는 실패가 결정되지 않은 상태
// - **Fulfilled (이행됨)**: 연산이 성공적으로 완료되어 프로미스가 결과 값을 반환한 상태
// - **Rejected (거부됨)**: 연산이 실패하거나 오류가 발생한 상태
// 비동기 작업의 결과에 따라 콜백 함수를 연결할 수 있으며, .then(), .catch(), 그리고 .finally() 메소드를 이용해 연속적으로 결과를 처리

const myPromise = new Promise(function (resolve, reject) {
	// 비동기 작업을 수행하고
	if (true) {
		/* 작업 성공 */
		resolve('Success!');
	} else {
		reject('Error!');
	}
});

myPromise
	// 프로미스 반환
	.then(function (value) {
		// 성공(resolve)한 경우 수행
		console.log(value); // 'Success!'
	})
	.catch(function (error) {
		// 실패(reject)한 경우 수행
		// Data loading failed TypeError: fetch failed
		console.error(error); // 'Error!'
	});
