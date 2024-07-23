/*
  함수의 종류
  -익명함수: 함수에 이름이 없는 형태 (변수에 익명함수를 대입해서 주로 호출)
  -기명함수: 함수에 이름이 있는 형태 (function 키워드로 선언하고 호출)
  
    -선언적함수: function 키워드로 이름을 붙여서 선언하는 형태
    -선언적함수: 함수의 호출위치가 자유로움 (함수 선언이전에 호출가능)
    -선언적함수가 선언되기 전에 호출가능한 이유
    -자바스크립트 파일을 실행하기 이전에 판단단계에서 미리 변수와 선언적함수를 우선적으로 해석하기 때문 호출 가능

    -대입형함수: 일반 변수에 일반함수를 대입하는 형태
    -대입형함수: 함수가 변수에 대입되는 형태이기 때문에 함수가 대입된 이후에만 호출가능

    -즉시실행함수: 익명함수 형태로 함수를 정의하자마자 자기자신을 즉시 호출하는 함수형태

  화살표함수 ES6
  - 익명함수를 간소화처리 (내부적으로 this객체를 생성하지 않는 함수)
*/

console.log('plus', plus(2, 3));

//선언적 함수 (호출위치 자유로움)
function plus(num1, num2) {
	return num1 + num2;
}

//대입형 함수 (대입이후에만 호출가능)
let minus = function (num1, num2) {
	return num1 - num2;
};
console.log('minus', minus(5, 2));

//화살표 함수 (대입형 함수를 축약한 형태)
const multiply = (num1, num2) => {
	return num1 * num2;
};
const result = multiply(2, 3);
console.log('multiply', result);

//화살표함수에서 return문 생략한 형태
//화살표뒤에 중괄호 return문 없이 바로 연산식이 있으면 해당값 자체가 리턴되는 형태
//위의 리턴함수와 동일한 구문
const multiply2 = (num1, num2) => num1 * num2;
console.log('multiply2', multiply2(3, 5));

//굳이 리턴할 필요가 없는 함수라도 코드의 간결화를 위해 축약하는 경우도 있음
const introduce3 = (name) => name && console.log(name + '님 반갑습니다.');
introduce3('홍길동');
