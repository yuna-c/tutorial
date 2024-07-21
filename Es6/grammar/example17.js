const animals = ['개', '고양이', '참새'];
const anotherAnimals = [ ...animals, '다람쥐'];
const autheorAnimals = anotherAnimals.concat('비둘기');

console.log(animals);
console.log(anotherAnimals);
console.log(autheorAnimals);
console.log(animals === anotherAnimals);


const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(numbers);
console.log(spreadNumbers);