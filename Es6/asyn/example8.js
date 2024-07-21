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

    // 배열 비구조화 문법
    // 가장 빨리 끝난거 하나만 나타나게 된다.
    const first = await Promise.race([getDog(), getRabbit(), getCat(), getTurtle()]);
    console.log(first);
}

process();