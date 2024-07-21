//호이스팅 : 아직 선언되지 않은 함수, 변수를 끌어올려서 사용할 수 있는 작동 방식


myFunction(); // 선언이 되기 전에 호출 ~웬만하면 피해라

function myFunction() {
    console.log('hello world');
};


// 변수의(var) 호이스팅 , const,let은 호이스팅 X
var number;
console.log(number);
number = 2;
console.log(number);


function fn(){
    console.log(a);
    let a = 2;
}
fn();

// 호이스팅을 피하는 방법 = 함수를 특정 변수에다가 넣어 사용해라
const myFunctions = function myFunctions(){
    console.log('hello world');
}
myFunctions();