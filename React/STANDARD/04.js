// 자바스크립트 비동기 처리 이해도 평가 항목

// [요구사항]
// 아래의 함수를 async/await를 사용하여 비동기로 작동하게 만드세요.

// [코드]
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Data fetched!');
      resolve(`Data fetched!`);
    }, 1000);
  });
}

// 여기에 코드를 작성하세요.
const func = async () => {
  await fetchData();
};
func();

// [테스트]
// fetchData 함수를 호출하여 "Data fetched!" 문자열이 정상적으로 반환되는지 확인하세요.

// [요구사항]
// 아래의 함수에서 then, catch, finally를 사용하여 비동기 처리를 하고,
// 성공적으로 데이터를 가져오면 "Data: [데이터]", 에러가 발생하면 "Error: [에러 메시지]",
// 그리고 작업이 끝났을 때 "Process completed"를 출력하세요.

[코드];
function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Network Error');
    }, 1000);
  });
}

// 여기에 코드를 작성하세요.

// [테스트]
// fetchDataWithError 함수를 호출하여 적절한 메시지들이 출력되는지 확인하세요.

// [요구사항]
// 아래의 async/await 함수를 then ~ catch로 변환하세요.

// [코드]
// async function getData() {
//   let response = await fetch('https://api.example.com/data');
//   let data = await response.json();
//   return data;
// }

// 여기에 코드를 작성하세요.

// [테스트]
// 변환된 함수를 호출하여 동일하게 데이터를 반환하는지 확인하세요.

// [요구사항]
// setTimeout을 사용하여 2초 후에 "Hello after 2 seconds"를 출력하는 함수를 작성하세요.

// [코드]
// 여기에 코드를 작성하세요.

// [테스트]
// 해당 함수를 호출하여 2초 뒤에 정해진 메시지가 출력되는지 확인하세요.
