// block scope : if, for, switch문 같은 것을 작성할 때 중괄호 내부에서만 사용


const value = 'hello';

function myFunction() {

    const value = 'goodbye';
    if (true) {
        const value = 'world';
        console.log('block scope :');
        console.log(value);
    }
    console.log('function scope :');
    console.log(value);
}

myFunction();
console.log('global Scope :')
console.log(value);
// console.log(anotherValue);