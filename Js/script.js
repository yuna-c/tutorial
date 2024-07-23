/*
  함수 (funtion)
  : 자주쓰느 여러개의 코드들을 패키징해서 재활용 하기 위함
  : 함수를 먼저 정의한 이후 호출 기능
  : 함수 정의시 이름을 안붙인 함수 

    => 익명함수 function(){}
  : 이름을 붙인 함수 

    => 기명함수 function name(){}

  매개변수(parameter), 인수(argument)
  : 매개변수 - 외부의 같은 함수내부로 전달하기 위한 통로명
  : 인수 - 함수의 매개변수를 통해서 전달되는 값 자체 
  
  반환값 (return)
  : 함수 내부에서 만들어진 값을 함수외부로 물리적으로 내보냄
  : 함수 코드블록안에서 만들어진 값은 외부에서 접근 불가 (지역스코프)
  
  반환값이 필요한 이유
  : 함수내부에서 만들어진 값이 1회성으로 소비되는 것이 아닌
  : 추후 다른 형태로 재사용이 되야될때 함수외부로 값을 내보냄

  return의 다른 쓰임
  : 함수내부에서 return문을 만나면 그 즉시 함수실행 종료
  : 함수내부로직에서 에러가 발생될만한 상황이면 불필요하게 다음 코드들을 실행하지 않고 
  : 해당 함수를 강제 종료해야 될때
*/

// 함수의 정의 (name이라는 [매개변수]가 연결되어 있는 함수)
function inform(name) {
	console.log(name + '님 하이');
}

// 함수호출 (inform함수 호출시 '홍길동'이라는 [인수] 전달)
inform('홍길동');

// 미션1 : 두개 숫자를 파라미터를 통해 인수로 전달 받아서 두개 더한 값을 콘솔로 출력하는 함수
// typeof 변수값 : 자료형을 문자로 변환
// 미션2 : 만약 파라미터로 전달되는 두개의 값중에 2개의 값중 하나라도 숫자가 아니면 더한 값이 아닌 숫자만 입력하세요라는 에러문구 출력 (typeof, if 활용)

function plus(num1, num2) {
	//파라미터, 매개변수
	const plus = num1 + num2;

	// 첫번째, 두번째 파라미터로 전달되는 값의 자료형을 문자열로 변수에 저장
	const typeNum1 = typeof num1;
	const typeNum2 = typeof num2;

	console.log(typeNum1);
	console.log(typeNum2);

	// 두변수의 타입 문자값이 모두 number(숫자) 이면 두개 값을 더해서 console출력
	if (typeNum1 === 'number' && typeNum2 === 'number') {
		console.log(plus);
	} else {
		//만약 그렇지 않은 경우 에러문구 출력
		console.log('두개의 인수를 숫자로 입력하세요');
	}
}

plus(2, 3);

//함수 호출
console.log(plus(2, 3));

function returnPlus(num1, num2) {
	const result = num1 + num2;
	return result;
}

//리턴값이 있는 함수 호출
console.log(returnPlus(2, 3));

//2,3을 더한값과 4,5를 더한값을 다시 더해주세요.
const result1 = returnPlus(2, 3);
const result2 = returnPlus(4, 5);
console.log(result1 + result2);
console.log(returnPlus(2, 3) + returnPlus(4, 5));
