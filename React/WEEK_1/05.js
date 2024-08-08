/*
주요 메서드----------------------
*/

// 2. 배열
// 2-1. push, pop
// push : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환
const fruits = ['Apple', 'Banana'];
fruits.push('Orange');
console.log(fruits); // ["Apple", "Banana", "Orange"]

// pop :  배열의 마지막 요소를 제거하고, 제거하고 난 나머지 요소를 반환
const lastFruit = fruits.pop();
console.log('----------');
console.log(lastFruit); // "Orange"
console.log(fruits); // ["Apple", "Banana"]

// 2-2. map : 원본 배열에서 각 요소를 가공한 새로운 배열을 리턴하는 함수(return)
// 1. 배열 내의 '모든 요소 각각'에 대해,
// 2. '주어진 함수를 호출한 결과'를 모아,
// 3. '새로운 배열'을 반환(push / pop / sort 등 기존 배열에 담겨있는 내용을 직접 수정하는 것 보다는 불변성을 유지하여 새로운 배열을 생성하여 사용)
const numbers1 = [1, 2, 3, 4, 5];
const squared = numbers1.map((num) => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

// 2-3. filter : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환(return)
const evenNumbers = numbers1.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// * map, filter 많이 쓰임

const 동영상리스트 = [
	{
		아이디: 1,
		제목: '동영상01',
		썸네일이미지: 'image01.jpg',
	},
	{
		아이디: 2,
		제목: '동영상02',
		썸네일이미지: 'image02.jpg',
	},
	{
		아이디: 3,
		제목: '동영상03',
		썸네일이미지: 'image03.jpg',
	},
	{
		아이디: 4,
		제목: '동영상02',
		썸네일이미지: 'image02.jpg',
	},
];

const 새로운_필터링_된_리스트 = 동영상리스트.filter(function (동영상) {
	// return 동영상.제목.includes('01');
	return 동영상.제목 === '동영상02';
});
console.log(새로운_필터링_된_리스트);

// 2-4. reduce : 배열의 각 요소에 대해 주어진 함수(리듀서 함수)를 실행하고, 결과물을 누적시켜 반환(누적값), (return)
// reduce((누적된값, 일반값),초기값);
const sum = numbers1.reduce((acc, num) => acc + num, 0);
const result = numbers1.reduce((누적된값, 일반값) => {
	console.log('---------------------------');
	console.log(누적된값); // 1
	console.log(일반값); // 2
	return 누적된값 + 일반값;
});

console.log(sum); // 15
/*
---------------------------
1 누적된값 + 
2 일반값
---------------------------
3 누적된값 + 일반값 + 
3 일반값
---------------------------
6
4
---------------------------
10
5
15
15
*/
console.log(`result => ${result}`); // 15
console.log('---------------------------');

// 2-5. sort : 메서드는 배열의 요소를 적절한 위치에 정렬하고, 배열을 반환(원본 배열이 변경됨), 문자(유니코드 순서대로), 숫자.sort((a, b) => b - a), (return)

// 기본 사용법
const fruits1 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
console.log(fruits1); // ["Apple", "Banana", "Mango", "Orange"]

// 숫자 배열 정렬 : ()안에 기본 옵션을 안 넣으면 기본적으로 문자로 가정(유니코드)하고 정렬
const numbers2 = [40, 100, 1, 5, 25];
numbers2.sort((a, b) => a - b);
console.log(numbers2); // [1, 5, 25, 40, 100]

// 내림차순 정렬
numbers2.sort((a, b) => b - a);
console.log(numbers2); // [100, 40, 25, 5, 1]
