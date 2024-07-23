// 1. while : ~동안
// while (조건) {// 메인로직 증감}
let i = 0;

// while (i < 10) {
// 	console.log('while문 => ' + i);
// 	i++;
// 	// while문 => 0
// 	// while문 => 1
// 	// while문 => 2
// 	// while문 => 3
// 	// while문 => 4
// 	// while문 => 5
// 	// while문 => 6
// 	// while문 => 7
// 	// while문 => 8
// 	// while문 => 9
// }
i = 3;
while (i < 100) {
	if (i % 5 === 0 && i >= 5) {
		console.log(i, '는 5 배수입니다.');
	}
	i++; // 무한루프 탈출 조건
}

// 2. do while : 최초의 한번은 실행하고 조건에 따라 종료를 함
i = 0;
do {
	console.log(i);
	i++;
	// i가 10보다 작을 때도 do while은 한번은 찍힌다
} while (i > 10);

// 3. break : 그 조건에서 종료한다
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		break; // 종료해라
	}
	console.log(i); // 0,1,2,3,4
}

// 4. continue 그 조건만 빼고 다시 돌린다
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		continue; // 5만 빼고 다음 for로 넘어가라
	}
	console.log(i); // 0,1,2,3,4,6,7,8,9
}
