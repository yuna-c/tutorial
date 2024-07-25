// Map
// JS -> 객체, 배열 : 많고, 다양하고, 복잡한 프로그램을 만들어 왔죠!
// 그럼에도, 현실세계 반영하기는 좀 많이 어려웠죠...
// Map, Set 추가적인 [자료구조]가 등장했습니다.

// 자료구조(Array, Object, data 형태)
// Map, Set의 목적 : 데이터의 구성, 검색, 사용을 효율적으로 처리 > 기존의 객체 또는 배열보다

// (1) Map
// ~ Key / Value
// - 대량 데이터 처리
// - Map는 Key에 어떤 데이터타입(유형)도 다 들어올 수 있다.
// - Map는 Key에 정렬된 순서로 저장되기 때문이다.
//  ! 객체는 Key에 무조건 문자열 형태가 들어옴(글자)
// - 기능
//  > 검색, 삭제, 제거, 여부 확인

// new Map()
// 변수를 선언하고나서 뉴맵으로 새로운 Map()을 생성
const myMap = new Map();
console.log(myMap); //Map(0) {}

// map.set(key, value)
// Key / Value값 추가 및 검색, 저장
myMap.set('key', 'value');
console.log(myMap); //Map(1) { 'key' => 'value' }
// key가 없으면 undefined

// map.get(key)
// key에 해당하는 값을 반환
myMap.get('key');
console.log(myMap.get('key')); // value

// map.has(key)
// key가 존재하면 true, 존재하지 않으면 false를 반환

// map.delete(key)
// key에 해당하는 값을 삭제

// map.clear()
// 맵 안의 모든 요소를 제거

// map.size
// 요소의 개수를 반환

// Map의 반복... !! => method : keys(), values(), entries()

// for …of 반복문
// [Symbol.iterator] : 반복자 속성을 가지고 있어야 함
// 요소를 반복할 수 있도록 배열 또는 객체와 비슷한 형태로 열거되어있는 자료구조
