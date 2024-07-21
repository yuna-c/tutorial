// 원하는 항목이 어디에 있는지 알려주는 함수들

// indexOf
// 특정 항목이 배열에서 어떤 원소인지 알고 싶다면 배열.indexOf
// -1은 없다는 소리
const superhroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superhroes.indexOf('닥터 스트레인지');
console.log(index);

const cats = ['천원','나나','데이비드','크리스'];
const idx = cats.indexOf('나나');
console.log(idx);



// 배열의 요소가 객체이거나, 조건으로 찾는다면 find.index
const todos = [
    {
        id : 1,
        text : '자바스크립트 입문',
        done : true,
    },
    {
        id : 2,
        text : '함수 배우기',
        done : true,
    },
    {
        id : 3,
        text : '객체와 배열 배우기',
        done : true,
    },
    {
        id : 4,
        text : '배열 내장함수 배우기',
        done : false,
    }
]

const fIdx = todos.findIndex(todo => todo.text === '함수 배우기');//파라미터 => 조건,함수
const fIdxB = todos.findIndex(todo => todo.done === false);
const fIdxId = todos.findIndex(todo => todo.id === 4);

// 특정 조건을 확인해서 일치한다면, 일치하는 원소가 몇번 째인지 알려주는 것
console.log(`text : ${fIdx} 번째, done : ${fIdxB}번째, ID : ${fIdxId}`, typeof todos );


//~이 들어가 있는 배열안의 객체의 값을 반환한다
const fIdxObj = todos.find(todo => todo.done === true); // 특정 조건
console.log(fIdxObj);


