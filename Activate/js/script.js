const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');
console.log(boxs.length);
console.log(btns.length);

//버튼 클릭 이벤트문
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		// console.log(e.currentTarget.innerText);
		e.currentTarget.innerHTML = `<span>${e.currentTarget.innerText}</span>`;
		//만약 클릭한 버튼에 on있다면 return으로 함수실행중지
		//만약 클릭한 버튼에 on없다면 해당 조건문이 무시되면서 activation함수 호출
		if (btns[idx].classList.contains('on')) return;
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
