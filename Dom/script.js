const btns = document.querySelectorAll('.list1 li');
console.log(btns);

/*
  DOM (Document Object Model) : Web Api
  : 브라우저가 HTML태그를 해석해서 렌더링을 할때 자바스크립트로 하여금 제어할수 있도록 객체형태로 만들어주는 API (Application Programing Interface)
*/
/*
  btns[0].addEventListener('click', () => {
    console.log('button1');
  });
  btns[1].addEventListener('click', () => {
    console.log('button2');
  });
  btns[2].addEventListener('click', () => {
    console.log('button3');
});
*/

btns.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		console.log(`button${index + 1}`);
	});
});
