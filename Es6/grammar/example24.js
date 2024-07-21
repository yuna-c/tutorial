// function scope : 특정 함수 범위내에서만 사용이 가능하다
const value = 'hello';

function myFunction() {
    const value = 'bye';
    const anotherValue = 'world';

    function functionInside() {
        console.log('function Inside :');
        console.log(value);
        console.log(anotherValue);
    }
    functionInside();
}

myFunction();
console.log('global Scope :')
console.log(value);
// console.log(anotherValue);