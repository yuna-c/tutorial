// 논리 연산자
//let value = true;
//value = false;

// 1.NOT !
let a = !true;
console.log(a);

// 2.AND && 둘 다 참일때
a = true && true;
console.log(a);

// 3.OR || 둘중 하나 트루
a = true || false;
console.log(a);

const value = !((true && false) || (true && false) || !false);
console.log(value);
