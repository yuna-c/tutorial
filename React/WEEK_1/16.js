/*
ES6 Modules 기본
*/
// 캡슐화 : 관련된 함수, 변수, 객체, 클래스 등을 하나의 파일로 그룹화(모듈)

// 1. 모듈의 기본 및 사용방법
// 1-1. 모듈이란? : export 키워드를 사용하여 모듈을 만들고, 다른 파일에서 사용
// math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const ONE = 1;
export const sample = {
	one: 1,
	two: 2,
};

// 1-2. 사용방법 : import 구문을 사용하여 다른 파일에서 함수를 불러와 사용
// app.js
import { add, multiply, ONE, sample } from './math.js';

console.log(add(2, 3)); //5
console.log(multiply(2, 3)); //6
console.log(ONE); //1
console.log(sample.two); //2

// 1-3. 모듈을 사용해야 하는 이유(중요! ⭐️)
// 1-3-1. 명확한 종속성 관리

/*
<script> 태그를 사용하여 자바스크립트 파일을 로드하는 방식은 스크립트 파일 간의 종속성과 로딩 순서를 수동으로 관리
// 실수로 인한 버그 발생 가능성 높음(종속성 추적 관리 난이도 올라감)

<!-- 전통적인 스크립트 로딩 방식 -->
<script src="jquery.js"></script>
<script src="plugin.js"></script> <!-- 이 스크립트는 jquery.js에 의존 -->
<script src="app.js"></script> <!-- 이 스크립트는 plugin.js와 jquery.js에 의존 -->
*/

// ES6 모듈 사용 예시
import $ from 'jquery';
import plugin from 'plugin'; // 자동으로 jQuery에 대한 의존성을 처리
import app from 'app'; // 모든 의존성이 충족되면 실행

// 1-3-2. 코드 캡슐화와 충돌
// 자체적인 스코프를 가지므로, 모듈 내부의 변수에 직접 접근X,
// module1.js
export function conflictFunction() {
	console.log('Module 1의 함수');
}

// module2.js
export function conflictFunction() {
	console.log('Module 2의 함수');
}

// app.js
import { conflictFunction as function1 } from './module1';
import { conflictFunction as function2 } from './module2';

function1(); // "Module 1의 함수"
function2(); // "Module 2의 함수"

// 1-3-3. 효율적인 코드 로딩
// 필요한 기능만을 선택적으로 불러옴
// 초기 로딩시간 단축
// 코드 스플리팅 : 사용시 필요한 코드만 동적을 로드
// 지연 로딩(lazy-loading) : 대규모 애플리케이션에서 성능과 자원 사용을 최적화하는 데 매우 효과적

// 동적으로 모듈 로드하기 (예: 사용자가 특정 기능을 활성화했을 때)
button.addEventListener('click', (event) => {
	import('./heavyModule.js')
		.then((module) => {
			module.heavyFunction();
		})
		.catch((err) => {
			console.error('모듈 로딩에 실패했습니다.', err);
		});
});

/*
고급 모듈 기능
*/
// 1. 이름 바꾸기와 기본 내보내기
// 1-1. 별칭 사용 : import 시 특정 요소에 별칭을 지정하여 충돌을 방지하거나 명확성 높임
import { square as sqr } from './utils.js';
console.log(sqr(4)); // 16

// 1-2. 기본 내보내기와 가져오기 : export default를 통해 내보내진 모듈은 import시 이름변경이 가능
// math.js
export default function multiply(x, y) {
	return x * y;
}

// app.js
import multiply from './math.js';
console.log(multiply(6, 7)); // 42

// export default 시 모듈이름 변경은 자유!
// utils.js
export default function square(x) {
  return x * x;
}

// main.js
import mySquare from './utils.js';
console.log(mySquare(4));  // 출력: 16

/*
전체 모듈 내용 가져오기
*/
// 1-1. 전체 내용 가져오기 : 모듈의 모든 내보내기를 한 번에 가져올 때 사용
// app.js
import * as MathFunctions from './math.js';

console.log(MathFunctions.add(10, 5));       // 15
console.log(MathFunctions.multiply(10, 5));  // 50