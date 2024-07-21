// promise 만드는 함수 작성
function increaseAndPrint(n) {
    //새로운 promise 만들어서 반환
    return new Promise ((resolve, reject) => {
        //값이 5가되면 에러처리
        setTimeout(() => {
            const value = n + 1;

            if(value === 5){
                //실패 상황
                const error = new Error();
                //에러 이름 정하기
                error.name = 'ValueIsFiveError';
                reject(error);
                return; //이 다음엔 아무 작업도 하지 않겠다.
            }

            //성공 상황
            console.log(value);
            resolve(value);
        }, 1000);
    });
};

// 이렇게도 되지만
// increaseAndPrint(0).then(n => {
//     //console.log('result : ', n);

//     // 또다른 promise return 시
//     return increaseAndPrint(n);
// }).then(n => {
//     return increaseAndPrint(n);
// }).then(n => {
//     return increaseAndPrint(n);
// }).then(n => {
//     console.log('result : ', n);
//     return increaseAndPrint(n);
// }).then(n => {
//     return increaseAndPrint(n);
// }).catch(e => {
//     console.error(e);
// });

increaseAndPrint(0).then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e => {
    console.error(e);
});