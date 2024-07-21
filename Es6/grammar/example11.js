/* 화살표 함수 */
const isAnimal = (text) => ['개', '고양이', '거북이', '너구리'].includes(text);

console.log(isAnimal('개'));
console.log(isAnimal('노트북')); //아니면 false

const isFood = (text) =>[ '짜장면', '탕수육', '팔보채', '짬뽕'].includes(text);

console.log(isFood('짜장면'));