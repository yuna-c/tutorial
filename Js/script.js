const hour = new Date().getHours();
console.log(hour);
console.log(11 > hour); //false 크니까 hour이 11보다 작으면
console.log(11 >= hour);
// 현재 시간이 5보다 같거나 크고 그와 동시에 12보다 작을 때 true (둘다)
console.log(hour >= 5 && hour < 12); //  hour이 5보다 같거나 크고 hour이 12보다 작으면
// 현재 시간이 5보다 같거나 크거나 혹은 12보다 작을 때 ture (하나만)
console.log(hour >= 5 || hour < 12);

// 바디 요소의 스타일 값 중 배경색의 해당하는 값을 aqua로 대입
document.body.style.backgroundColor = 'blue';
// document.getElementById('myDiv').style.backgroundColor = 'lightblue';

//미션
// - 현재 시간이 5~11시 사이면 body 배경색 orange 변경
// - 현재 시간이 11~15시 사이면 body lightblue
// - 현재 시간이 15~19시 사이면 body pink
// - 현재 시간이 19보다 크고 5보다 작으면 사이면 body black

// if (hour >= 5 && hour < 11) {
// }

//미션
// - 현재 시간이 5~11시 사이면 body 배경색 orange 변경
// - 현재 시간이 11~15시 사이면 body lightblue
// - 현재 시간이 15~19시 사이면 body pink
// - 현재 시간이 19보다 크고 5보다 작으면 사이면 body black

// if (hour >= 5 && hour < 12) {
//   document.body.style.backgroundColor = "orange";
// }

// else if (hour >= 12 && hour < 15) {
//   document.body.style.backgroundColor = "lightblue";
// }
// else if (hour >= 15 && hour < 20) {
//   document.body.style.backgroundColor = "pink";
// }
// else if (hour >= 15 || hour < 5) {
//   document.body.style.backgroundColor = "black";
// }

// else {document.body.style.backgroundColor = "black";}

if (hour >= 5 && hour < 12) document.body.style.backgroundColor = 'orange';
if (hour >= 12 && hour < 15) document.body.style.backgroundColor = 'lightblue';
if (hour >= 15 && hour < 20) document.body.style.backgroundColor = 'pink';
if (hour >= 15 || hour < 5) document.body.style.backgroundColor = 'black';
