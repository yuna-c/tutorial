const array = [1,2,3,4,5,6,7,8];

// 1
// const squared = []; // 빈배열
// for(let i = 0; i < array.length; i++){
//     squared.push(array[i] * array[i]);
// }
// console.log(squared);

// 2
// const squared = []; // 빈배열
// array.forEach(n => {
//     squared.push(n * n);
// })
// console.log(squared);


// 3 map : 배열의 내용을 전체적으로 변환을 해주고 싶을 때, 사용 
// const square = n => n * n; //n을 파라미터로 받아와서 
// const squared = array.map(square);
// console.log(squared);


// 4 map2
const squared = array.map(n => n * n);
console.log(squared);


// 객체 배열들을 텍스트만 있는 문자열로 바꾸고 싶다면?
const items = [
    {
        id : 1,
        text : 'hello',
    },
    {
        id : 2,
        text : 'bye',
    }
];

const texts = items.map(item => item.text); //파라미터 => 아이템.text
console.log(texts);