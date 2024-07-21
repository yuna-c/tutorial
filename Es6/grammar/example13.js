/* 객체 비구조화 문법 */
// const object = { a : 1, b : 2 };

// 1,2가 밖으로 추출
// const { a, b } = object;
// console.log(a);
// console.log(b);

//비구조화 할당 문법은 함수의 파라미터에서도 사용할 수 있다.
/*
function print({ a, b }){
   console.log(a);
   console.log(b); 
}

print(object);
*/

// 만약 b값이 없다면 비구조화 할당을 통해, 기본 값을 정할 수 있다

const object = { a : 1 };
const { a, b = 2 } = object;
console.log(a);
console.log(b);
//console.log(b || 2); //undefind


// 비구조화 할당을 할 때 이름을 바꾸는 법
const animal = { 
    name : '멍멍이',
    type : '개'
};

//const nickname = animal.name;
const {name : nickname} = animal; //{ 원래있던이름 : 내가 바꿀 이름}
console.log(nickname);
console.log(animal);

// 연습
function biggerThanThree(numbers){
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