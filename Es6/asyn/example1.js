function work(callback){
    //비동기화 형태로 바꾸기
    setTimeout(() => {
        //함수 내부에 코드를 삽입
        const start = Date.now(); //현재 날짜를 숫자 형태로 표시
        for(let i = 0; i < 1000000000; i++){
    
        } 
        const end = Date.now();
        console.log(end - start + 'ms'); // 4
        callback(end - start);
    }, 0); //4ms 후 호출 해준다
};

// 함수 내에서 하고자 하는 작업이 백그라운드에서 수행이 되기 때문에, 기존의 코드 흐름을 막지 않고, 동시에 다른 작업가능 
console.log('작업 시작!'); // 1
work((ms) => {
    console.log('작업이 끝났어요!');
    console.log(ms + 'ms 걸렸다고 해요!');
}); // 2 이 함수 도중에 작업 하고 싶은게 생긴다면, setTimeOut이라는 함수를 사용하면 됨(비동기화로 바꾸는 것)

console.log('다음 작업'); // 3

// work 함수가 끝난 후에, 어떤 작업 하고싶다면 callback함수를 파라미터 형태로 전달해주면 됨
// 함수 타입의 값을 파라미터로 넘겨주고나서, 파라미터로 받은 함수를 특정 작업이 끝나고나서 호출해주면 됨


/*
작업 시작!
다음 작업
470ms
작업이 끝났어요!
470ms 걸렸다고 해요!
*/