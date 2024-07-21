// const number = document.getElementById('number');
// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');

// console.log(number.innerText);
// console.log(increase.offsetTop);
// console.log(decrease.id);

// //이벤트 설정하기
// increase.onclick = () => {
//     const current = parseInt(number.innerText, 10);
//     // parseInt 문자열을 숫자로 변환, 몇진수로 진행할 것인가
//     // console.log('increase가 클릭됨');
//     number.innerText = current + 1;
// }

// // increase.onchange = () => {} 인풋 값을 바꿀 때 사용

// decrease.onclick = () => {
//     // console.log('decrease가 클릭됨');
//     const current = parseInt(number.innerText, 10);
//     number.innerText = current - 1;
// }


const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

console.log(number);
console.log(increase);
console.log(decrease);

increase.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1; 
}