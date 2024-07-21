// const a = 1;
// const b = 2;
// const sum = a + b;

function add(a, b){ //파라미터 설정(인풋 값) = 인자
 return a + b;
}

const sum = add(1, 2);
console.log(sum);

//function 으로 선언, 함수이름은 키워드 뒤에 (파라미터, 인자) = 함수에서 받아오는 값 return으로 반환


function hello(name) {
    console.log('Hello ' + name + ' ❤');
}

hello('Yuna');