console.log(`동기 &비동기`);
// 동기 : 엄청 큰 요청을 한번에 한다
// 비동기 : 요청을 하고 결과가 동시에 일어나지 않을 거라는 약속

// const promise = new Promise((resolve, reject) => {
// 	const success = true; // 작업 성공 여부를 나타내는 예시 변수

// 	if (success) {
// 		// resolve('아메리카노');
// 		setTimeout(() => resolve('에스프레소 뽑기'), 1000);
// 	} else {
// 		reject('헉 원두가 없어요!');
// 	}
// });
// console.log('주문?');
// promise
// 	.then((result) => {
// 		console.log(result); // "작업 완료"
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => resolve('두 번째 작업 완료' + `${result} + 우유`), 1000);
// 		});
// 	})
// 	.then((result) => {
// 		console.log(result); // "작업 완료"
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => resolve('두 번째 작업 완료' + `${result} + 얼음`), 1000);
// 		});
// 	})
// 	.then((result) => {
// 		console.log(result); // "작업 완료"
// 		return result;
// 	})
// 	.catch((error) => {
// 		console.error(error); // "작업 실패"
// 	})
// 	.finally(() => {
// 		console.error('어쨋던 주문 종료');
// 	});
// const makeCoffee = async () => {
// 	return Promise((resolve) => {
// 		setTimeout(() => resolve('첫 번째 작업 완료' + `${result} + 커피`), 1000);
// 	});
// };

// const makeMilk = async () => {
// 	return Promise((resolve) => {
// 		setTimeout(() => resolve('두 번째 작업 완료' + `${result} + 우유`), 1000);
// 	});
// };

// const makeIce = async () => {
// 	return Promise((resolve) => {
// 		setTimeout(() => resolve('세 번째 작업 완료' + `${result} + 얼음`), 1000);
// 	});
// };

const asyncTest = async () => {
	setTimeout((resolve) => {
		return resolve('hello World1'), 1000;
	});
};

const asyncTest2 = async () => {
	setTimeout((resolve) => {
		return resolve('hello World2'), 1000;
	});
};

const promiseAll = async () => {
	const result = await Promise.all([asyncTest(), asyncTest2()]);
	console.log(result);
};
promiseAll();
// myAsyncFunction().then((result) => {
// 	console.log(result); // "Hello, Async!"
// });

// async function myAsyncFunction() {
// 	try {
// 		// return 'Hello, Async!';
// 		const coffee = await makeCoffee();
// 		console.log(coffee);
// 		const milk = await makeMilk();
// 		console.log(milk);
// 		const ice = await makeIce();
// 		console.log(ice);
// 		console.log(`${coffee + milk + ice}`);
// 	} catch (error) {
// 		console.log(error);
// 	} finally {
// 		console.log(`응 나 실행`);
// 	}
// }
// myAsyncFunction();
// // myAsyncFunction().then((result) => {
// // 	console.log(result); // "Hello, Async!"
// // });
