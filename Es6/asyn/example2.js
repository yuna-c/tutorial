function increaseAndPrint(n, callback){
    // n을 파라미터로 받아와서, 다섯번에 걸쳐 1초만에 1씩 더해서 출력하는 과정
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);

        if (callback){
            callback(increased);
        }
    }, 1000);
};

// callback지옥
increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log('작업 끝!');
                })
            });
        });
    });
});