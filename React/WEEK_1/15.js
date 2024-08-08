/*
Short Circuit Evaluation(단축 평가)
: 논리 연산자를 사용하여 조건문을 처리할 때, 전체 표현식을 평가하지 않고 최소한의 평가로 결과를 도출하는 방식
:&& (논리곱), || (논리합), ?, (null 병합 연산자)를 사용할 때 발생
*/

// 1. 논리합 (||) 연산자
// falsy : false, 0, "", null, undefined, NaN
// 좌변의 피연산자가 falsy 값일 때만 우변의 피연산자를 평가, 좌변의 피연산자가 truthy 값일 경우, 그 값이 바로 결과값으로 반환되며, 우변은 평가되지 않음
// 유저 정보가 제공되지 않았을 때 기본 이름 제공
const getUserinfo = (user) => {
	if (!user.name) {
		// 1. user.name === undefined
		// 2. !user.name 값이 들어오지 않았다면
		return '이름없어';
	}
	return user.name;
};
const person = {
	// name: '띠로리',
};
console.log(getUserinfo(person)); // 이름 없으면 undefined

const getUsername = (user) => user.name || '신원미상'; // 이름 없으면 신원미상
// user.name(좌변) || '신원미상'(우변)
console.log(getUsername({ name: '르탄이' })); //르탄이
console.log(getUsername({})); //신원미상

// 2. 논리곱 (&&) 연산자
// 좌변이 truthy일 때만 우변을 평가, 조건에 따라 특정 코드를 실행하고자 할 때 유용
// 사용자가 로그인 상태이면 환영 메시지를 출력
let loggedIn = true;
let username = '르탄이';
// loggedIn(좌변) && console.log(우변 실행)
loggedIn && console.log(`환영합니다! ${username}`); //환영합니다! 르탄이(로그인 상태에 따라)
loggedIn = false;
loggedIn && console.log('환영합니다! ' + username); //아무것도 출력되지 않음

// 3. Optional Chaining(?.)
// 객체의 속성에 접근할 때 해당 경로에 속성이 존재하지 않아도 에러를 발생시키지 않고, 대신 undefined를 반환, 오류를 발생시키지 않기 때문에, 객체의 중첩된 속성에 안전하게 접근
const user = {
	profile: {
		// Cannot read properties of undefined (reading 'details') : profile2일때
		name: '르탄이',
		details: {
			age: 30,
			location: '서울시 강남구',
		},
	},
	printHello: () => console.log('Hello!'),
};
// 함수에 옵셔널 체이닝 걸어주기
const result2 = user.printHello1?.(); // 없으면 user.printHello1 is not a function 에러 뜨니까 함수를 실행하는 부분에 ?. 걸어주기
console.log(result2);
// 사용자 나이 구하기
console.log(user.profile.details.age); // 출력: 30

// profile 또는 details가 undefined 또는 null일 경우 이 코드는 에러를 발생
console.log(user.profile2?.details?.age); // 출력: undefined

// profile이나 details 중 하나라도 undefined나 null이면, ?. 연산자는 그 시점에서 평가를 멈추고 undefined
const user1 = {};
console.log(user1.profile?.details?.age); // 출력: undefined

// Optional chaining은 객체의 속성뿐만 아니라, 메소드 호출에도 사용, 객체가 메소드를 가지고 있지 않은 경우에도 안전하게 메소드를 호출
const result = user.profile?.getDetails?.(); // user.profile.getDetails가 존재하지 않으면 undefined 반환

// * 중첩된 객체 구조에서 안전하게 값을 읽거나 메소드를 호출할 때 유용하게 사용되며, 코드의 안정성을 높이고 간결하게 만드는 데 도움

// 4. Null 병합 연산자 (??)
// ?? 연산자는 좌변이 null이나 undefined일 경우에만 우변을 평가,  null 또는 undefined가 아닌 falsy 값들을 유효한 값으로 처리하고 싶을 때 사용

// 사용자의 위치 설정이 없으면 기본 위치를 제공
let userLocation = null;
console.log(userLocation ? userLocation : 'Unknown location'); // 이뜻인데
console.log(userLocation ?? 'Unknown location'); // 출력: Unknown location
// userLocation 존재하면 보여주고 ?? 존재 안하면 Unknown location

userLocation = 'Seoul';
console.log(userLocation ?? 'Unknown location'); // 출력: Seoul

// 사용자 입력이 0인 경우에도 0을 유효한 값으로 취급
const temperature = 0;
console.log(temperature ?? 25); // 출력: 0

// ||(논리 OR) 와 ??(null 병합 연산자)의 차이
// truthy한 값이냐 아니냐 vs null이나 undefined이냐 아니냐
function displayPreferences(preferences) {
	// `||` 연산자 사용 예 :  트루시한 값이 아니라면 우측을 내보낸다
	const textLength = preferences.textLength || 50; // textLength가 0일 경우 50이 할당됨
	console.log(`Text Length1 : ${textLength}`);

	// `??` 연산자 사용 예 : null, undefined
	const itemsPerPage = preferences.itemsPerPage ?? 10; // itemsPerPage가 null 또는 undefined일 때만 10이 할당됨
	console.log(`Items Per Page: ${itemsPerPage}`);
}

// 테스트 케이스
const userPreferences = {
	textLength: 0, // 0이 유효한 값이지만 || 연산자로 인해 50이 출력됨
	itemsPerPage: null, // null 값에 대해 ?? 연산자로 인해 10이 출력됨
};

displayPreferences(userPreferences);
