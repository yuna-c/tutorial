// reduce 알파벳 몇개 있는지 세서 객체에 넣어주는 작업
const alphabets = ['a', 'a', 'a', 'b', 'c', 'd', 'e'];
const count = alphabets.reduce((acc, current) => { //코드 블럭
    // 첫번째 파라미터 : 각 원소들에 대하여 루프를 돌려서 누적된 값을 연산하는 함수 생성
    if(acc[current]){ //acc['a'] => acc.a
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
}, {});// 비어있는 객체

console.log(count);