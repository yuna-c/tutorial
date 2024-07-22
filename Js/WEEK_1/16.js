// 배열

// 1. 생성
// 1-1. 기본생성
let fruits = ['사과', '바나나', '오렌지'];

// 1-2. 크기 지정
let numbers = new Array(5);

console.log(numbers); // [ <5 empty items> ]
console.log(fruits.length);
console.log(numbers.length);

// for, while + 배열 에서 배열의 길이를 가지고 연산
// 각각의 요소에 대해서 처리해야 하는 로직들을 정해서 처리

// 1-3. 요소 접근
console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나
console.log(fruits[2]); // for문 안에서 idx 부분을 변수로 변경해서 동적으로 처리하는 로직

// 3. 배열 메소드
// 3-1. push
fruits = ['사과', '바나나', '오렌지'];
console.log('1 => ', fruits);
fruits.push('포도');
console.log('2 => ', fruits); // 2 =>  [ '사과', '바나나', '오렌지', '포도' ]

// 3-2. pop : 마지막 메서드 삭제
console.log('1 => ', fruits);
fruits.pop();
console.log('2 => ', fruits); // 2 =>  [ '사과', '바나나', '오렌지' ]

// 3-3. shift : 첫번째 메서드 삭제
console.log('1 => ', fruits);
fruits.shift();
console.log('2 => ', fruits); // 2 =>  [ '바나나', '오렌지' ]

// 3-4. unshift : 맨 앞의 요소 추가
console.log('1 => ', fruits);
fruits.unshift('망고');
console.log('2 => ', fruits); // 2 =>  [ '망고', '바나나', '오렌지' ]

// 3-5. splice : 시작하는 위치, 지우는 갯수, '추가할 항목'
console.log('1 => ', fruits);
fruits.splice(1, 1, '복숭아');
console.log('2 => ', fruits); // 2 =>  [ '망고', '복숭아', '오렌지' ]

// 3-6. slice : 시작하는 위치, 끝나는 위치까지 배열로 반환해줘
fruits = ['사과', '바나나', '오렌지'];
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // [ '바나나' , '오렌지']
