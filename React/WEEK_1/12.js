// 2. 연습하기
// 2-1.
const person = { name: 'Young', age: 35, job: 'developer', password: '1234' };

const { password, ...rest } = person;
let sampleObj = rest;
console.log(sampleObj); // => { name: 'Young', age: 35, job: "developer" }
