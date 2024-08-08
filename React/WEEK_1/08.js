// 3. 연습하기
// 3-1
const person = {
	named: '르탄이',
	age: 25,
	job: '개발자',
};

const { named, age } = person;
console.log(`name => ${named}, age => ${age}`);

// 3-2
const movie = {
	title: 'Inception',
	director: 'Christopher Nolan',
	release: {
		year: 2010,
		month: 'July',
	},
};

const {
	title,
	release: { year },
} = movie;
// release: year, release: { ...year }, [object Object]
console.log(`title => ${title}, year => ${year}`);

// 3-3
const numbers = [10, 20, 30, 40, 50];
const [first, , third, , ,] = numbers;
// 배열 : 위치(index)중요
// 객체 : key 중요
console.log(`first => ${first}, third => ${third}`);

// 3-4
function confirmReservation(user /* 인자: 매개변수 */) {
	// 여기에 user 객체를 구조 분해 할당 하세요.
	const { name, roomType, date: firstDate } = userInfo;
	// James 고객님의 Deluxe룸 입실날짜는 [firstDate만 있으면 undefined] 입니다.
	return `${name} 고객님의 ${roomType}룸 입실날짜는 ${firstDate} 입니다.`;
}

const userInfo = {
	name: 'James',
	roomType: 'Deluxe',
	date: '2023-05-30',
};
const result = confirmReservation(userInfo);
console.log(result);
