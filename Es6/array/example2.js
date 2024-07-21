//객체로 이루어진 배열
const objects = [
    {name : '나나', age : '5', animal : 'cat' },
    {name : '야옹이',}
];

console.log(objects);
console.log(objects[0]);
console.log(objects[1]);

//배열 내장함수 push
objects.push({
    name : '멍뭉이'
}, 'aaa');

console.log(objects);