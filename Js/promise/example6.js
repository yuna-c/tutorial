/*
executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected(거부) 상태가 됩니다.
*/

new Promise((resolve,reject) => {//대기, 거부 
    reject(); // rejected 상태
});

new Promise((resolve,reject)=>{
    reject();
})