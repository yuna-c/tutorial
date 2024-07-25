// Set
// 고유한 값을 저장하는 자료구조
// 값만 저장(집합)
// 키를 저장하지 않음
// 값이 중복되지 않는 유일한 요소로만 구성
// - 값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

// - `Set` 크기 및 존재 여부 확인

const mySet = new Set();

// add : 값추가
mySet.add('value1');
mySet.add('value2');

// has : 값 검색
console.log(mySet.has('value1')); // true 출력

// Set의 반복
const mySet1 = new Set();
mySet1.add('value1');
mySet1.add('value2');
mySet1.add('value3');
mySet1.add('value4');
mySet1.add('value5');
mySet1.add('value6');

for (const value of mySet1.values()) {
	console.log(value);
}

// Set의 크기 및 존재 여부 확인
console.log(mySet1.size); // 3 출력
console.log(mySet1.has('value1')); // true 출력
console.log(mySet1.has('value2')); // true 출력
console.log(mySet1.has('value3')); // true 출력
console.log(mySet1.has('value4')); // false

for (const value of mySet1.values()) {
	console.log(value);
}
