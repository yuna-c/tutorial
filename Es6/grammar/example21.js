function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

const number = [1,2,3,4,5,6,7,8,9];
console.log(sum(...number));

function substact(x, y) { //x,y는 파라미터 : 함수에서 받아오는 값
    return x - y;
}

const numbers = [1, 2];
const result = substact(...numbers); //1,3 인자 : 함수를 사용할 떄 넣어주는 값
//const result = substact(numbers[0], numbers[1]) =  ...number ( spread )
console.log(result);