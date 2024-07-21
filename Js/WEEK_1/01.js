// 변수, 상수
// 메모리에 저장한다. 읽어들여서 재사용한다. 변수.

// 변수의 5가지 주요 개념

// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어오는 것

// var 변수 이름(선언) = 변수 값(할당);
var a = 20;
var b = 10;
var c = a + b; // 변수 참조

// 변수를 선언할 수 있는 3가지 방법 : var, let, const\
// 1. var
var myVar = 'hello Wolrd';
var myVar = 'Test 1'; // 재선언 가능
myVar = 'GoodBye'; // 재할당 가능
console.log(myVar);

var myVar1; // 선언
myVar1 = 3; // 할당
console.log(myVar1); //참조

// 2. let : 변수
let myLet = 'hello Wolrd1';
// var myLet = 'Test 2';
myLet = 'GoodBye2'; // 재할당 가능
console.log(myLet);

// 3. const : 상수
const myConst = 'hello Wolrd2';
console.log(myConst);
