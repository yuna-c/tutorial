function sumOf(numbers) { // 파라미터로 숫자 배열 가져옴
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);



// 배열을 만들어서 3보다 큰 숫자를 넣어라
// function biggerThanThree(numbers) {
//     const array = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 3) {
//         array.push(numbers[i]);
//         }
//     }
//     return array;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

function biggerThanThree(numbers) {
    const array = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 3){
            array.push(numbers[i]);
        }
    }
    return array;
}
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers));
