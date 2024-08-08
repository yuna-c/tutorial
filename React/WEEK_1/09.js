/*
Spread Operator
*/
// 배열 등의 요소를 개별 요소로 확장
// 객체 또는 배열이 가지고 있는 bracket을 찢고, ‘쫙 펼치는’ 느낌

// 1. 객체에서의 사용
// 1-1. 객체 복사 및 확장
// 객체의 속성을 쉽게 다른 객체로 복사하거나 확장할 때 사용
const originalUser = { name: '르탄이', age: 28 };

// 불변성 확인(깨짐)
// const DeupdatedUser = originalUser; // 참조 위치를 복사했기 때문에
// DeupdatedUser.name = '김또깡'; // 허걱 원본도 바꼈어
// console.log(`원본 =>`, originalUser); // 원본 => { name: '김또깡', age: 28 }
// console.log(`복사본 =>`, DeupdatedUser); // 복사본 => { name: '김또깡', age: 28 }

// 불변성 지키기 : 중괄호를 벗기고 다시 씌우기(바람직)
const updatedUser = { ...originalUser, location: '한국' };
console.log(`원본 =>`, originalUser); // 원본 => { name: '르탄이', age: 28 }
console.log(`복사본 =>`, updatedUser); // { name: "르탄이", age: 28, location: "한국" }

// 배열에서의 사용
// 2-1. 배열 합치기
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];
const combined2 = first.concat(10, second); // 원본은 변하지 않음
console.log(combined); // [1, 2, 3, 4, 5, 6]
console.log(`새로 반환된 배열 =>`, combined2, `배열 길이 =>`, combined2.length);
// [
//   1, 2, 3, 10,
//   4, 5, 6
// ] 7
