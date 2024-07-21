function hello(name) { //파라미터
    // console.log(`hello ${name} ❤`);
    return `hello ${name} ❤`;
    // retrun 이 사용되는 순간 종료됨
}

// hello('nana');
const result = hello('nana');
console.log(result);