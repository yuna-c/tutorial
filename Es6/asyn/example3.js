//promise
const myPromise = new Promise((resolve, reject) => {
    // 1초 뒤에 구현
    setTimeout(() => {
        // 성공 상황
        // resolve('result');

        // 실패 상황
        reject(new Error());
    }, 1000);
});

// promise가 끝나고 할 작업.then
myPromise.then(result => {
    console.log(result + '!');
}).catch(e => {
    console.error(e);
})