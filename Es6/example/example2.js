const number = document.getElementById('number');
const buttons = document.querySelectorAll('button'); //태그이름 찾기
const [increase, decrease] = buttons; //추출하기

console.log(number.innerText);
console.log(buttons);

//이벤트 설정하기
increase.onclick = () => {
    const current = parseInt(number.innerText, 10);
    // parseInt 문자열을 숫자로 변환, 몇진수로 진행할 것인가
    // console.log('increase가 클릭됨');
    number.innerText = current + 1;
}

// increase.onchange = () => {} 인풋 값을 바꿀 때 사용

decrease.onclick = () => {
    // console.log('decrease가 클릭됨');
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
}