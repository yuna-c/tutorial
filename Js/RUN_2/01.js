/*
import { *asNameModule } from 'name.js';
참조형 타입 : 저장된 메모리 주소값 가르킴(reperence)
- Object
- Array
- function

메모리 저장 영역 
1.콜스택 (가벼움) 원시 값 및 참조, 불변값
2.휩메모리 (무거움) 객체 및 함수
*/

// 배열/ 객체
// 콜스택 : arr : 주소
// 휩 메모리 []

// 할당 :  새로운 주소와 새로운 값이 생기고 콜스택에 바뀌어 짐
let arr = [];
arr = [1, 2, 3];

// 변경 : 휩 메모리만 바뀌게 됨
let arr1 = [1, 2, 3];
arr1[0] = 3; // 323

// 참조 : 두 값이 동일한 휩메모리를 공유
let arr2 = arr1;

// 변경

arr2.push(4);
console.log(arr1);
console.log(arr2);

// 얕은 복사(주소) 콜스택 shallow copy
let arr3 = arr1;
arr2[0] = 3; // 323 : 원본 배열 수정
console.log(arr1);

// 깊은 복사(값) 휩메모리 deep copy
// 값만 다 똑같고 주소가 다름

// 1. 재귀적 복제

// 2. JSON.parse[배열로 넣음], JSON.stringify[문자열로 만든다음]
// json 형태는 메소드가 없기 때문에
// console.time(label);
const a = JSON.stringify([1, 2, 3]); // 함수일 때는 파괴됨(메소드 복사 안됌)
console.log(a);

const b = JSON.parse(a);
console.log(b);
// console.timeEnd(label);

// 원본 배열을 수정하지 않고 불변성을 해치지 않기 위해 deep카피 필요
// 배열 = 객체

// 얕은 복사 왜쓰냐?
// 1. 메모리 용량
// 2.

// 깊은 복사
// https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
// structuredClone()
// JSON.parse[배열로 넣음], JSON.stringify[문자열로 만든다음]

// Timer 시작
console.time('계산시간은 얼마나 걸릴까?');
let sum = 0;
for (let i = 1; i <= 1e8; i++) {
	sum += i;
}
console.log(`결과: ${sum} \n\n`);

// Timer 종료
console.timeEnd('계산시간은 얼마나 걸릴까?');
