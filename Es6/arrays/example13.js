// reduce : 배열이 주워졌을 때, 배열안의 모든 값들을 사용하여 어떤 값들을 연산해야될 때 사용
const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// numbers.forEach(n =>{ 
//     sum += n;
// });
// console.log(sum);


// 합 구하기
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); //파라미터(0, 배열의 값) => 함수, 초기 값
//accumulator 누적된 값
console.log(sum);

// 평균 구하기
const avg = numbers.reduce((accumulator, current, index, array) => {
    if(index === array.length -1) { // 배열 원소가 맨 마지막 것 이라면
        return (accumulator + current) / array.length;
    } else {
        return accumulator + current;
    }
}, 0);

console.log(avg);
// index : 각 원소가 몇번째 아이템인지 알려줌 (0,1,2,3)
// array : 자기 자신