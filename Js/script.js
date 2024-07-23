// 자료형확인
/*
  let txt = 'hello';
  let num = 3;
  let isFemale = false;
  let error;
  let colors = ['red', 'green', 'blue'];
  let student = {
    name: 'ddd',
    age: 20,
    isFemale: false,
  };
  let data = null;
  console.log(typeof data);
  //const 참조형 자료는 값 바꿀 수이짜나
*/

/*
  원시형 자료 vs 참조형 자료

  원시형 자료 : 
  - 메모리에 물리적으로 해당 값이 담기는 자료형
  - 메모리에 값만 담김
  - 값의 크기가 비교적 명확
  - 메모리 선언과 원시형 자료 값 할당이 모두 call stack에서 이루어짐
  - string, number, boolean, undefined
  - call Stack

  참조형 자료 : 
  - 메모리에 해당 값 자체가 아닌 해당 값의 위치 값이 참조되는 자료형
  - 메모리에 해당값의 위치값만 참조되는 것이 아닌 해당 값으로 활용할 수 있는 함수(메서드)들도 같이 참조
  - 값의 크기를 구체적으로 산정 어려움
  - 메모리 선언은 call stack 에서 일어나지만 실제 값은 heap memory에 저장됨로 휘메모리에 있는 위치값만 콜스택 변수에 참조됨
  - array, object
  - memory heap(위치값을 call stack에 저장)

  const 재할당 불가능
*/

// 아래의 경우는 실제로 data메모리 공간에 game이라는 원시형 자료값이 물리적으로 들어있기 때문에
// 새로운 원시형 자료값 대입시 값이 변경되는 재할당이 일어나면 에러남

const data = 'game'; //값 변수 콜스택
// data = 3;
// console.log(data);

// colors라는 메모리에는 callstack에 배열값 자체가 담기는게 아닌 heap memory에 있는 해당값의 위치값만 참조됨
const colors = ['red', 'green', 'blue'];
// 해당 참조링크는 동일한 상태에서 참조링크가 가리키고 있는 첫번째 값을 변경하는 것이기 때문에
// callstack에 있는 colors변수에 참조링크가 변경되는 것은 아니므로 참조형 자료의 값들은 const 선언방식이라도 기본 구조를 유지하고 있으면 값의 추가나 제거, 변경은 가능
colors[0] = 'hotpink';
console.log(colors); //값에 위치값만 가지고 있기 때문에 , 실제로는 휩메로리에 데이터가 있음 그러니까 재할당 가능

// 하지만 아래처럼 아래에 새로운값을 재할당 하려고 하면 변수에는 새로운 참조링크가 할당되므로
// callstack에 있는 변수에 새로운 참조링크가 재할당 되므로 에러발생
colors[0] = '가가';
console.log(colors);
// colors = ['1', '2', '3'];
// console.log(colors); 링크값이 바뀌어 재할당이 일어나니까 안대 참조형 자료 구조는 유지해야대
