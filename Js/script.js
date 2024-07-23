/*
객체(Object)
: 여러개의 값을 그룹화 (자료구조가 복잡할 때)
*/

const iphone1 = {
	price: 1000, //프로포티
	color: 'white', // key : value
	isSale: false,
};

// 객체 값 뽑을 때
console.log(iphone1.price); // 객체명. 프로포티
console.log(iphone1['color']);

console.log(iphone1);

iphone1.version = 'pro'; //버전 설정으로
console.log(iphone1); // getter(획득자)와 setter(설정자)의 프로퍼티에 객체 추가 못하게 하는 거
