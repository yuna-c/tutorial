/*
  배열 : 같은 성격의 여러개의 값들을 그룹화 할때 쓰는 자료형
  const 변수명 = [값1,값2,값3];
  배열값 뽑을 때는
  배열이 있는 변수명[순번]; //프로그래밍 언어에서는 첫번째 순번이 1이아닌 0
  배열을 쓰는 이유
  : 배열로 굳이 같은 성격의 데이터를 묶어두는 이유 (반복문을 써서 자동화 처리하기 위함)
  배열의 갯수를 구하는 방법
  :배열명.length;
*/

const colors = ['red', 'blue', 'green'];
console.log(colors[0]);
console.log(colors.length);
colors.push('pink');
console.log(colors.length);
console.log(colors[3]);

/*
  변수명 작성시 주의점
  1. 변수명 숫자로 시작 불가
  2. 변수명 가급적 영어로
  3. 변수명 대소문자 구분
  4. 변수명 특수문자 불가 (_,$ 가능)
*/
