function solution(strings, n) {
	let answer = [];
	console.log(n);

	console.log(`초기 값`, ['sun', 'bed', 'car']);
	console.log(`정렬`, strings.sort());
	let add = strings.sort((a, b) => {
		// // a[n]이 b[n]보다 크면 1을 반환하고 // 내림차순
		// if (a[n] > b[n]) return 1;
		// // a[n]이 b[n]보다 작으면 -1을 반환하고 // 오름차순
		// else if (a[n] < b[n]) return -1;
		// // a[n]이 b[n]과 같으면 사전순으로 정렬한다.
		// else return a > b ? 1 : -1;
		if (a[n] > b[n]) return 1;
		else if (a[n] < b[n]) return -1;
	});
	console.log(`완료`, add);

	return strings.sort((a, b) => {
		// a[n]이 b[n]보다 크면 1을 반환하고 // 내림차순
		if (a[n] > b[n]) return 1;
		// a[n]이 b[n]보다 작으면 -1을 반환하고 // 오름차순
		else if (a[n] < b[n]) return -1;
		// a[n]이 b[n]과 같으면 사전순으로 정렬한다.
		else return a > b ? 1 : -1;
	});
	/*
	// 1. 문자열의 가장 앞 글자를 붙인 배열 만들기
	for (let i = 0; i < strings.length; i++) {
		strings[i] = strings[i][n] + strings[i];
	}
	console.log(strings);

	// 2. 해당 배열을 사전순으로 정렬(sort)
	strings.sort();
	console.log(strings);

	// 3. 앞 글자를 제거 후 리턴
	for (let j = 0; j < strings.length; j++) {
		// console.log(strings[j]);
		strings[j] = strings[j].replace(strings[j][0], '');
		// 바꿀요소, 어떻게 바꿀 것인가
		// console.log(strings[j]);
		answer.push(strings[j]);
	}
	console.log(answer);
  */
	// return answer;
}

function solution(strings, n) {
	let answer = [];

	for (let i = 0; i < strings.length; i++) {
		strings[i] = strings[i][n] + strings[i];
	}

	strings.sort();

	for (let j = 0; j < strings.length; j++) {
		strings[j] = strings[j].replace(strings[j][0], '');
		answer.push(strings[j]);
	}
	return answer;
}

solution(['sun', 'bed', 'car'], 1);
// solution(['abce', 'abcd', 'cdx'], 2);
// 홑 따옴표 일 때 [ 'usun', 'ebed', 'acar' ]
// 쌍 따옴표 일 때 [ 'undefinedsun', 'undefinedbed', 'undefinedcar' ] <== 위에서 replace에 ''로 했으니까
function solution2(strings, n) {
	let arr = [2, 4, 1, 5, 3];
	console.log(n);
	console.log(`정렬`, arr.sort());
	let newArr = arr.sort((a, b) => b - a);
	console.log(`새정렬`, newArr);

	console.log(`원본`, strings);

	console.log(`정렬`, strings.sort());
	let newArrStr = strings.sort((a, b) => {
		if (a[n] > b[n]) return 1;
		else if (a[n] < b[n]) return -1;
		else a < b ? -1 : 1;
	});
	console.log(`새정렬`, newArrStr);
}
solution2(['blue', 'dead', 'acc', 'css'], 2);
