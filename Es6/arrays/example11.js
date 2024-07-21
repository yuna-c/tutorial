// concat : 여러개의 배열을 하나의 배열로 합쳐주는 역할, 새로운 배열에 담아서 새로 만듬, 기존의 배열을 건드리지 않음
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
// 스프레드 연산자
// const concated = [... arr1, ...arr2];
console.log(arr1);
console.log(arr2);
console.log(concated);
