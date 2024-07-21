/*
특정 값이 어떤 값인지 확인해야 할 때 조건문을 쓰는데
스마트하게 쓸 수 있는 방법 배우기
*/

function isAnimal(text) {
    // return (
    //     text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
    // ); //이면 return true

    const animal = ['개', '고양이', '거북이', '너구리']; //배열안에 text 존재하면 true
    return animal.includes(text);
}

console.log(isAnimal('개'));
console.log(isAnimal('노트북')); //아니면 false


function isFood(text) {
    // return (
    //     text === '짬뽕' || text === '탕수육' || text === '짜장면' || text === '팔보채'
    // )
    const food = ['짜장면', '짬뽕', '탕수육', '팔보채'];
    return food.includes(text);
}

console.log(isFood('짜장면'));
console.log(isFood('강아지'));