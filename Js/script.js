/*
  const colors = ['red', 'green', 'blue'];
  const color1 = colors[0];
  const color2 = colors[1];
  const color3 = colors[2];
*/

const [color1, color2, color3] = ['red', 'green', 'blue'];
console.log(color1);
console.log(color2);
console.log(color3);

const student1 = {
	name: 'David',
	age: 20,
	isFemale: false,
};
/*
  const name = student1.name;
  const age = student1.age;
  const isFemale = student1.isFemale;
  console.log(age);
*/

const name = '홍길동';
//뽑아낼때에는 key값으로 뽑아야 되지만 다시 다른값으로 변경처리 가능
const { name: name1, age, isFemale } = student1;
console.log(name1);
console.log(age);
console.log(isFemale);

/*
  비구조화할당, 구조분해할당 (Destructuring Assignment)
  - 객체나 배열의 기존 구조를 분해해서 각각의 값으로 재할당
  - 배열은 비구조화할당시 변수망 임의로 지정가능
  - 객체는 무조건 property key값으로만 변수명 지정
*/
