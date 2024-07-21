const numbers = [10, 20, 30, 40];

// shift : 배열의 첫번째 원소를 추출 => 비워져 있을 때까지 빠짐
const value = numbers.shift();
numbers.shift()
numbers.shift()
numbers.shift()
console.log(value);
console.log(numbers);