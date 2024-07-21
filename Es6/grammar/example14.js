/* 배열 비구조화 문법 */

//const array = [1, 2]; //객체 비구조화 문법과 같이, 기본값을 넣어 줄 수 있다
const array = [];
// const one = array[0];
// const two = array[1];
// 대괄호에 넣어줌
const [one = 5, two = 2, three = 44] = array;

console.log(one);
console.log(two);
console.log(three);