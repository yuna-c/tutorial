//condition ? true : false
//condition ? hello : bye


const array = [1, 2, 3, 4];
let test = '';
// if(array.length === 0){
//     text = '배열이 비어있습니다.';
// } else {
//     text = '배열이 비어있지 않습니다.';
// }

let text = array.length === 0 
    ? '배열이 비어있습니다!' 
    : '배열이 비어있지 않습니다!'
console.log(text);


// 비추천
const condition1 = false;
const condition2 = false;

const value = condition1
    ? '와우!'
    : condition2 
    ? 'blabla'
    : 'foo'

console.log(value);

const array1 = [];
let test1 = '';

let text1 = array1.length === 0 
    ? '비었다'
    : '안비었다'
console.log(text1);