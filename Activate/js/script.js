const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');
console.log(boxs.length);
console.log(btns.length);

//버튼 클릭 이벤트문
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		//e.currentTarget : js이벤트 구문에 연결되어 있는 선택
		//e.target : 실제 화면상에서 이벤트가 발생한 대상선택
		//만약 연결되어있는 선택자가 a의 링크이동처럼 특정 기능이 있는 요소면 해당기능 막아야될 필요있음
		e.preventDefault();
		e.currentTarget.innerHTML = `<span>${e.currentTarget.innerText}</span>`;

		if (e.currentTarget.classList.contains('on')) return;
		[btns, boxs].forEach((el) => activation(el, idx));
	});
});

//인수로 그룹 선택자와, 순번을 받아서
//순번의 요소만 활성화시키는 함수
function activation(arr, index) {
	console.log('activation');
	arr.forEach((el) => el.classList.remove('on'));
	arr[index].classList.add('on');
}
