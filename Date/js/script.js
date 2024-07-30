const now = new Date(); //현재 시간 인스턴스객체 반환
const year = now.getFullYear(); //시간인스턴스에서 메서드로 년도 반환
const month = now.getMonth(); //월의 값이 아닌 순서
const monthName = ['January', 'Feburuary', 'March', 'April', 'May', 'June', 'July', 'August', 'Septmember', 'October', 'November', 'December'];
const date = now.getDate(); //일 반환
const day = now.getDay(); //순서가 반환 일:0, 월:1
const hour = now.getHours(); //시간반환
const min = now.getMinutes(); //분 반환
const sec = now.getSeconds(); //초 반환
const time = now.getTime(); //표준시가 지정된 시점으로부터의 밀리세컨드값이 반환
console.log(time);
