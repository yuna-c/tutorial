// 형 변환
// 형태 -> 바꾼다
// 명시적 형 변환(의도적), 암시적 형 변환(비의도적)

// 1. 암시적 형 변환
// 1-1. 문자열
let result1 = 1 + '2'; // string
console.log(result1);
console.log(typeof result1);

let result2 = '1' + true; // string
console.log(result2);
console.log(typeof result2);

// {}, null, undefined + '1' => 문자열

// 1-2. 숫자열
let result3 = 1 - '2'; // number
console.log(result3);
console.log(typeof result3);

let result4 = '2' * '5'; // number
console.log(result4);
console.log(typeof result4);

let result5 = '2' / '5'; // number
console.log(result5);
console.log(typeof result5);

// 1. 명시적 형 변환
// 어떤 타입으로 변환하겠다고 선언해야 함
// 2-1. Boolean
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(`-------------------`);
console.log(Boolean(1)); // true
console.log(Boolean('false')); // true
console.log(Boolean({})); // true

// 2-2. 문자열
let result6 = String(123); // string
console.log(typeof result6);
console.log(result6);

let result7 = String(true); // string
console.log(typeof result7);
console.log(result7);

let result8 = String(false); // string
console.log(typeof result8);
console.log(result8);

let result9 = String(null); // string
console.log(typeof result9);
console.log(result9);

let result10 = String(undefined); // string
console.log(typeof result10);
console.log(result10);

// 1-3. Number
let result11 = Number('123'); // number
console.log(typeof result11);
console.log(result11);

let result12 = Number('dsf'); // NaN
console.log(typeof result12);
console.log(result12);
