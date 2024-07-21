// 연산자(+, -, *, /, %(나머지))

// 1. 더하기 연산자
console.log(1 + 1); // 2
console.log(1 + '1'); // 11 (+ => 문자열 우선)

// 2. 빼기 연산자
console.log(1 - '2'); // -1
console.log(1 - 2); // -1

// 3. 곱하기 연산자
console.log(2 * 3); // 6
console.log(2 * '3'); // 6

// 4. 나누기 연산자
console.log(4 / 2); // 2
console.log(4 / '2'); // 2

// 5. 나누기 연산자(/) vs 나머지 연산자 (%)
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1

// 6. 할당 연산자(assignment)
// 6-1. 등호 연산자(=)
let x = 10;
console.log(x); // 10

// 6-2. 더하기 등호 연산자(+=)
x += 5;
console.log(x); // 15

x += 5; // x = x + 5
console.log(x); // 20

// 6-3. 빼기 등호 연산자(-=)
x -= 5;
console.log(x); // 15

x -= 25;
console.log(x);

// 6-4. 곱하기 등호 연산자(*=)
let a = 10;
a *= 2;
console.log(a);

// 6-5. 나머지 등호 연산자(%=)
x = 10;
console.log(x); // 10

x %= 3;
console.log(x); // 1

// * 비교 연산자(--> true or false 반환하는 연산자)
// 1. 일치 연산자(===)
// 타입까지 일치해야 true를 반환함
console.log(2 === 2); // true
console.log(2 === '2'); // false
console.log('2' === 2); // false

// 2. 불일치 연산자(!==)
// 타입까지 일치해야 false를 반환함
// 숫자 2가 숫자 2와 다르니?
console.log(2 !== 2); // false
console.log(2 !== '2'); // true
console.log('2' !== 2); // true
console.log(`-------------------`);

// 3. 크다 연산자(>)
// 2가 3보다 크니?
console.log(2 > 3); // false

// 4. 작다 연산자(<), 작거나 같다 연산자(<=)
// 2가 3보다 작니?
console.log(2 < 3); // true
console.log(2 <= 3); // true
console.log(3 <= 3); // true
console.log(4 <= 3); // false
console.log(`-------------------`);

// 5. 논리 연산자
// Boollean의 true/false

// 5-1. 논리곱 연산자 : 모두 true일 때 true 반환
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(`-------------------`);

// 5-2. 논리합 연산자 : 두 값 중 하나라도 true 일 때 true 반환
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(`-------------------`);

// 5-3. *논리부정 연산자 : 값을 반대로 바꿈
console.log(!true); // false
let b = true;
console.log(!b); // false
console.log(1 === 1); // true

// 6. *삼항 연산자(중요!)
let y = 10;
let result = y > 5 ? '크다' : '작다'; // y가 10보다 크냐
console.log(result); // 크다
let result2 = y >= 10 ? (y == 10 ? '같다' : '크다') : '작다';
console.log(result2);

console.log(`-------------------`);
let z = 20;
let answer = z > 10 ? '크다' : '작다'; // y가 10보다 크냐
console.log(answer); // 크다

// 7. 타입연산자(typeof)
console.log(typeof '5');
