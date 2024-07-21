//splice = 배열에서 특정 항목을 제거할 때 사용(해당 원소가 몇번째인지 명시)
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
//console.log(index);
const spliced = numbers.splice(index, 1); // index부터 몇개를 지우겠다
numbers.splice(index, 2); //30번 인덱스 1부터 두개를 지우겠다
console.log(spliced); 
console.log(numbers);

