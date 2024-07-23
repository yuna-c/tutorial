//문자열에 변수를 쉽게 삽입하는 법 'Template literal';

intro('김영희', 20, '부산');

function intro(name, age, address) {
	console.log('제이름은 ' + name + '이고 나이는 ' + age + '살이며 사는 곳은 ' + address + '입니다.');
}

intro2('홍길동', 30, '서울');
function intro2(name, age, address) {
	console.log(`제 이름은 ${name}이고 나이는 ${age + 1}살이며 사는곳은 ${address}입니다.`);
}
