// 2. 문자 : string(문자열)
// '' = ""
let str = 'Hello, World!';
// console.log(str);
// console.log(typeof str);

// 2-1. 문자열 길이 확인하기
console.log(str.length);

// 2-2. 문자열 결합하기(concatenation)
let str1 = 'Hello, ';
let str2 = 'World!';
let result = str1.concat(str2);
console.log(result);

// 2-3. 문자열 자르기(substring)
let str3 = 'Hello, World!';
console.log(str3.substr(7, 5)); // World : 어디서부터, 몇개까지
console.log(str3.slice(7, 12)); // World : 7부터 12까지

// 2-4. 문자열 검색
let str4 = 'Hello, World!';
console.log(str4.search('World')); // World : 가 시작되는 지점

// 2-5. 문자열 대체
let str5 = 'Hello, World!';
let result1 = str5.replace('World', 'Javascript');
console.log(result1); // Hello, Javascript!

// 2-6. 문자열 분할
let str6 = 'apple, banana, kiwi';
let result2 = str6.split(',');
console.log(result2); // [ 'apple', ' banana', ' kiwi' ] : 분할 되어서 배열로
