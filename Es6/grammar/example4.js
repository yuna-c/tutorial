true && true // true and
true && false // false
true || false // true or
false || true // true

// 논리 연산자는 true/false만으로 나뉘지 않는다 !(not) false

const dog = {
    name : '멍멍이'
};

const cat = {
    name : '고양이'
}

function getName(animal) {
    // if(animal) {
    //     return animal.name;
    // }
    // return undefined;

    // 단축 방법
    return animal && animal.name; 
}

const name = getName(cat); //dog 값이 있을 때는 멍멍이가, 없을 때는 undefind가 나온다
console.log(name);


//example

console.log(true && 'hello'); // and 연산자의 앞에 나오는게 true라면 연산 결과는 뒤에오는 게 되는 것이다 (true X = hello Y)
console.log(false && 'hello'); // 앞에 오는게 false라면 뒤에오는걸 보지도 않고 false를 return 한다
console.log('hello' && 'bye'); //bye because hello = truthy한 값

// and 연산자는 앞에 있는 값이 truty한 값이나 true면 뒤에있는 값이오고, 앞에 있는 값이 falsy하면 어림도없다
// falsy한 값
console.log(null && 'hello'); // null 
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello');
console.log(0 && 'hello');

console.log(1 && 'hello');
console.log(1 && 1);

