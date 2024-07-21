// async function에서 return 되는 값은 Promise.resolve 함수로 감싸서 리턴된다.

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('reason'));
        }, ms);
    })
}

// async 붙은 함수는 return 되는 값에 Promise.resolve가 감싸서 리턴된다
async function asyncP() {
    return 'Mark';// 문자열 리턴
}

(async function main() {
    try{
        //resolve
        const name = await asyncP(); // name으로 then이 넘어옴
        console.log(name);
    } catch { //async 상태니까 일로 가지도 않음
        //reject
        console.log(error, `${error} 실행실패★★`);
    }
})();

