// fillter : 특정 조건을 만족하는 원소들을 찾아서, 그 원소들을 가지고 새로운 배열을 만드는 것

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


const tesksNotDone = todos.filter(todo => !todo.done);//todo.done === false
//파라미터 => 조건 , 함수를 가진 새로운 배열을 만들어 낸다 
console.log(tesksNotDone);

//[ { id: 4, text: '배열 내장함수 배우기', done: false } ] 객체가 새로 만들어짐


const tesksDone = todos.filter(todo => todo.done === true);
console.log(tesksDone);
