const object = { name : 'dfdfd' }; // { name : 1 } null
// 객체일수도 객체가 아닐 수도 있는 상황이라면
const name = object && object.name; //에러 안나고 실행이됨
console.log(name);


// null and ㅇㄹㄴ아릴
