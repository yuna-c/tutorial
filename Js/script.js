/*
  반복문 - 여러번 반복되는 특정코드를 자동반복처리
  내장함수 - 이미 시스템에 정의되어 있는 함수
  for(자바스크립트 기본내장함수), forEach, map(배열전용 내장함수)
*/

//for문 패턴 :  for(초기값; 반복범위; 반복방식){반복될코드}
/*
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
*/

//for문으로 배열 반복처리
/*
  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  }
*/

const colors = ['red', 'green', 'blue'];
//forEach로 반복처리
//forEach안쪽에 함수를 인수로 전달
//forEach안쪽에 인수로 전달되는 매개변수로는 다음의 값들이 자동 전달됨

//첫번째 인수(현재 반복도는 배열의 각 데이터 값)
//두번째 인수(현재 반복도는 순번)
//세번째 인수(반복도는 원본 배열값 전체)
/*
  colors.forEach(function (data, index, arr) {
    console.log('data', data);
    console.log('index', index);
    //console.log('arr', arr);
  });
*/

const names = ['홍길동', '김판섭', '박영철'];
//배열값을 인수로 받아서 누구님 반갑습니다 라는 콘솔문을 자동 반복해주는 함수 생성

function intro(arr) {
	arr.forEach(function (data) {
		console.log(data + '님 반갑습니다.');
	});
}

intro(names);
