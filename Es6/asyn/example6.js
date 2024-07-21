function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 화살표 함수 async
const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getCat = async () => {
    await sleep(2000);
    return '고양이';
}

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
};

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
}

async function process() {
    // const dog = await getDog();
    // console.log(dog);

    // const rabbit = await getRabbit();
    // console.log(rabbit);

    // const cat = await getCat();
    // console.log(cat);

    // const turtle = await getTurtle();
    // console.log(turtle);

    const start = Date.now();
    // 여러개의 promise 처리하는 방법 3초 
    const results = await Promise.all([getDog(), getRabbit(), getCat(), getTurtle()]);
    console.log(Date.now() - start);
    console.log(results);
}

process();