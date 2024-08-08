/*
Template Literals
*/
//  변수와 표현식을 문자열 안에 쉽게 삽입할 수 있게 해주는 문법

// 1. 간단한 문자열 삽입
// 1-1. 사용 방법 : 백틱(`)을 사용하여 문자열을 구성하고, ${expression}을 통해 변수나 표현식을 삽입
// 1-2. 예제
let customer = { name: '르탄이' };
let item = { name: '커피', price: 4000 };
console.log('감사합니다, ' + customer.name + '님. ' + item.name + '을(를) ' + item.price + '(원)에 구매하셨습니다.');
// 출력: 감사합니다, 르탄이님. 커피을(를) 4000(원)에 구매하셨습니다.

let customer1 = { name: '르탄이' };
let item1 = { name: '커피', price: 4000 };
console.log(`감사합니다, ${customer1.name}님. ${item1.name}을(를) ${item1.price}(원)에 구매하셨습니다.`);
// 출력: 감사합니다, 르탄이님. 커피을(를) 4000(원)에 구매하셨습니다.

// 2. 여러 줄 문자열
let orderDetails = '고객: ' + customer.name + '\n' + '상품: ' + item.name + '\n' + '가격: $' + item.price;
console.log(orderDetails);
// 출력:
// 고객: 르탄이
// 상품: 커피
// 가격: 4000

let orderDetails1 = `고객: ${customer1.name}
상품: ${item1.name}
가격: ${item1.price}`;
console.log(orderDetails1);
// 출력:
// 고객: 르탄이
// 상품: 커피
// 가격: 4000
