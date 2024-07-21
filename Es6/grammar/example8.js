/* 원의 너비 구하기 */
function calculateCircleArea(r = 1) { // 이퀄싸인을 사용할 때 기본값을 1을 사용한다
    //단축 평가 논리 계산법 => 만약에 파라미터가 없으면 1을 기본값으로 사용하겠다
    //const radius = r || 1;
    //return Math.PI * radius  * radius; // 3.14 파이
    return Math.PI * r  * r; 
}

//area = calculateCircleArea(); 일때 기본값으로 사용 할 값 구하는 법
const area = calculateCircleArea(2);
console.log(area);



function calculateCircle(r) {
    const radius = r || 2;
    return Math.PI * r * r;
}

const cArea = calculateCircle(4);
console.log(cArea);