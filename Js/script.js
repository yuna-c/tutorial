//변수 선언
// let abc;
// abc = 'test';
// undifined가 있을 거라고 예상하지만 (참조형 자료가) 있을 수 있으니 쓰레기 자료가 초기화 안되니까 처음에서는 null값을 줘서 초기화 해서 실행

// 메모리 선언 => undifined => 값 할당(reset : undifined)
let abc = null; // 초기화
let num = 0; // 변수의 값이 숫자일 때 0으로 초기화 하면 좋음
let txt = ''; // 문자열일 때
let isTrue = true; // Boolean

// 고차함수 ?
abc = 'test';
num = 3;
txt = 'text';
isTrue = false;

console.log(abc);
