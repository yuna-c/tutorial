const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');
console.log(boxs.length);
console.log(btns.length);

//미션 아래 구문에서 e.currentTarget을 활용해서
//각각의 버튼 클릭시 클릭한 li의 글자값을 콘솔로 출력
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		//클릭시 해당 li의 글자 확인
		console.log(e.currentTarget.innerText);

		//클릭한 li의 글자값을 순번으로 변경 (innerText객체의 key이기 때문에 대입연산자로 값 변경가능)
		//e.currentTarget.innerText = idx;

		//클릭한 li의 글자값을 가져와서 <span>으로 감싼다음에 li에 innerHTML로 등록
		e.currentTarget.innerHTML = `<span>${e.currentTarget.innerText}</span>`;

		btns.forEach((el) => el.classList.remove('on'));
		btns[idx].classList.add('on');

		boxs.forEach((el) => el.classList.remove('on'));
		boxs[idx].classList.add('on');
	});
});

console.dir(btns[0]);
//DOM안에서 자주 쓰이는 유용한 property
//DOM.innerText : 해당 돔에 연결되어 있는 text값을 확인가능
//DOM.innerHTML : 해당 돔에 연결되어 있는 자식 tag구조를 확인가능
//DOM.className : 해당 돔에 연결되어 있는 모든 클래스명을 문자열로 확인가능
