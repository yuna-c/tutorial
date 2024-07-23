/*
  기존 참조형자료는 (배열, 객체)의 변수로 복사시 원본복사가 안됨 (Shallow Copy: 얕은복사, 불변성유지 안됨)
  - 기존배열을 단순히 변수에 옮겨담을시 
*/
const colors = ['red', 'green', 'blue'];
const newColors = colors;
newColors[0] = 'hotpink';

//아래 콘솔 확인시 두개의 배열값 모두 변경된것을 확인
console.log('colors', colors);
console.log('newColors', newColors);

/*
  전개연산자 (Spread Operator)
  - 참조형자료를 완전복사 (Deep Copy, 불변성 유지됨)
  - heap memory에 있는 값을 물리적으로 복사
*/
const interests = ['game', 'movie', 'cartoon'];
console.log(...interests);
const newInterests = [...interests];
newInterests[2] = 'reading';

console.log('interests', interests);
console.log('newInterests', newInterests);

const person1 = {
	name: 'Andy',
	age: 20,
	address: 'seoul',
};

const person2 = { ...person1 };
person2.age = 21;
person2.address = 'Busan';

console.log('person1', person1);
console.log('person2', person2);

//작년 회원가입정보
const student1 = {
	name: 'Michael',
	age: 20,
};
//올해 회원가입 정보
const extraInfo = {
	name: 'Michael',
	age: 21,
	hobby: 'game',
};

//작년회원가입 정보값을 유지하면서 올해회원가입 정보값을 업데이트한 새로운 데이터 추가
//전개연산자를 이용하면 원본을 유지하면서 기존 2개의 객체값을 합칠때 유용
const newStudent = { ...student1, ...extraInfo };
