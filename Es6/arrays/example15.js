// function countBiggerThanTen(numbers) {
//     /* 구현해보세요 */
//     let count = 0;
//     numbers.forEach(n => {
//         if (n > 10) {
//         count++;
//         }
//     });
//     return count;
// }


// function countBiggerThanTen(numbers) {
//     return numbers.filter(n => n > 10).length;
// }


// function countBiggerThanTen(numbers) {
//     return numbers.reduce((acc, current) => {
//         if (current > 10) {
//         return acc + 1;
//         } else {
//         return acc;
//         }
//     }, 0);
// }

// const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
// console.log(count); // 5

function countBiggerThanTen(numbers){
    // let count = 0;
    // numbers.forEach(n => {
    //     if (n > 10){
    //         count++;
    //     }
    // });
    // return count;

    // return numbers.reduce((acc, current) => {
    //     if (current > 10){
    //         return acc + 1;
    //     } else {
    //         return acc;
    //     }
    // }, 0);

    return numbers.filter(n => n > 10).length;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5