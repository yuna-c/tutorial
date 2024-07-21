const numbers = [0, 1, 2, 3, 4, 5, 6];

// 비구조화 할당
const [one, two, ...Arest] = numbers; 
console.log(one);
console.log(two);
console.log(Arest);

// const [...rest, last] = numbers; 이렇게는 못씀
// 배열에서의 rest는 맨 마지막에 쓰임