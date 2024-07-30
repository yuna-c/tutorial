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
//console.log(time);

//특정 나라 표준시 구하는 방법
//우리나라시간대를 밀리세컨드로 반환후 - 밀리세컨드 시차
const timeGerman = time - 1000 * 60 * 60 * 8;

//해당 밀리세컨드값을 new Date()의 인수로 전달
//해당 밀리세컨드 시간값에 시간 인스턴스값이 수정되서 반환됨
const nowGerman = new Date(timeGerman);
console.log('한국시', now);
console.log('독일시', nowGerman);
