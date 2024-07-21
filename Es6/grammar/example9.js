
/* 화살표 문법 */
const calculateCircleArea =  (r = 1) =>  Math.PI * r * r;

//area = calculateCircleArea(); 일때 기본값으로 사용 할 값 구하는 법
const area = calculateCircleArea(2);
console.log(area);

const calculateCircle = (r = 4) => Math.PI * r * r;
const cArea = calculateCircle(8);
console.log(cArea);