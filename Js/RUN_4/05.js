//this 바인딩 대장 : 화살표 함수
const obj = {
	name: 'yuna',
	arrayFuntion() {
		// this 는 호출시점에서 받는 값을 받지만
		// 화살표 함수는 상위 스코프 : 정적 바인딩
		setTimeout(() => {
			console.log(`1`, this.name);
		}, 3000);
	},
	normalFunction() {
		//명시적 바인딩
		setTimeout(function () {
			console.log(`2`, this.name);
		}, 100);
	},
};
obj.arrayFuntion(); // 2 undefined
console.log(`-----------------------`);
obj.normalFunction(); // 1 yuna
