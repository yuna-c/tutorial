// 자바스크립트 제어문 이해도 평가 항목

// [요구사항]
// 다음 배열에서 5보다 큰 숫자만 출력하세요. 그러나 8을 만났을 때 반복문을 종료하세요.

// [코드]
let numbers = [2, 4, 6, 8, 10, 12];

for (let i = 0; i < numbers.length; i++) {
	// console.log(`newArr=>`, numbers[i], i);
	if (numbers[i] > 5 && numbers[i] < 8) {
		console.log(numbers[i]);
	}
}

// [테스트]
// 출력: 6

// [요구사항]
// 1부터 100까지의 숫자 중에서 홀수만 출력하세요. 그러나 3의 배수인 홀수는 출력하지 마세요.

// [코드]
let i = 0;
for (let i = 0; i < 100; i++) {
	if (i % 2 === 0) {
		if (i % 3 === 0) {
			continue;
		}
		continue;
	}
	console.log(`100=>`, i);
}

// [테스트]
// 출력: 1, 5, 7, 11, 13, 17, ...

// [요구사항]
// 다음 문자열 배열에서 'stop' 문자를 만났을 때 반복을 중지하고, 'skip' 문자를 만났을 때 해당 반복을 건너뛰고 나머지 문자열들을 출력하세요.

// [코드]
let words = ['apple', 'banana', 'skip', 'cherry', 'stop', 'date', 'elephant'];
// 여기에 코드를 작성하세요.
for (let i = 0; i < words.length; i++) {
	if (words[i].includes('skip')) continue;
	if (words[i].includes('stop')) break;
	console.log(words[i]);
}
// [테스트]
// 출력: apple, banana, cherry
