// 자바스크립트 함수 이해도 평가 항목
// [요구사항]
// 아래 함수 multiply는 두 인자를 받아 곱한 값을 반환합니다. 해당 함수를 완성하십시오.

// [코드]
const multiply = (a, b) => a * b;

// [테스트]
console.log(multiply(2, 3)); // 6을 반환해야 합니다.

// [요구사항]
// 주어진 숫자 배열의 모든 요소를 더하는 함수 sumArray를 작성하세요.

// [코드]
function sumArray(arr) {
	return arr.reduce((acc, cur) => acc + cur, 0);
}

// [테스트]
console.log(sumArray([1, 2, 3, 4, 5])); // 15를 반환해야 합니다.

// [요구사항]
// 문자열 배열을 받아 모든 문자열을 대문자로 변환하고, 새로운 배열로 반환하는 함수 toUpperCaseArray를 작성하세요.

// [코드]
function toUpperCaseArray(strings) {
	return strings.map((str) => str.toUpperCase());
}

// [테스트]
console.log(toUpperCaseArray(['apple', 'banana']));
//는 ['APPLE', 'BANANA']를 반환해야 합니다
