// new 바인딩
// function username(params) {
// 	this.params = name;
// }

class User {
	constructor(name) {
		this.name = name;
	}
}

// Promise.then()
// await.async 문법설탕

const user1 = new User('yuna');
console.log(user1.name);
