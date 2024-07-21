// global scope 전역

const value = 'hello'; // global scope

function myFunction () {
    console.log('myFunction: ');
    console.log(value);
}

function otherFunction () { //함수형 스코프
    console.log('otherFunction: ');
    const value = 'bye!';
    console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);