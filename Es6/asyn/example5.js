// async
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    // (resolve, reject) => {
    //     setTimeout(resolve , ms);
    //     // 특정 ms 이후 resolve가 호출되어 끝나는 함수 
    // }
    // );
}

async function makeError() {
    console.log('빠빠이');
    await sleep(1000);
    const error = new Error();
    throw error; // throw 에러를 발생 시킬 때 
}

// promise 만드는 함수
async function process(){
    // console.log('안녕하세요!');
    // // promise 앞부분에 await
    // await sleep(1000); 
    // console.log('반갑습니다!');

    // return true;

    //에러를 잡아내고 싶을 때
    // try {} catch {}
    try {
        await makeError();
    } catch (e) {
        console.error(e);
    }
}

process()
// .then(value => {
//     console.log(value);
// });