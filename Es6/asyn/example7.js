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
    // 여러개의 promise 처리하는 방법 3초 
    // const results = await Promise.all([getDog(), getRabbit(), getCat(), getTurtle()]);
    // console.log(results);

    // const dog = results[0];
    // const rabbit = results[1];
    // const cat = results[2];
    // const turtle = results[3];


    try { // 하나라도 에러가나면 다음으로 못넘어감
        // 배열 비구조화 문법
        const [dog, rabbit, cat, turtle] = await Promise.all([getDog(), getRabbit(), getCat(), getTurtle()]);
        console.log(dog);
        console.log(rabbit);
        console.log(cat);
        console.log(turtle);
    } catch (e){
        console.log(e);
    }

    // try { // 하나라도 에러가나면 다음으로 못넘어감
    //     // 배열 비구조화 문법
    //     const rabbit = await Promise.race([getDog(), getRabbit(), getCat(), getTurtle()]);
    //     console.log(dog);
    //     console.log(rabbit);
    //     console.log(cat);
    //     console.log(turtle);
    // } catch (e){
    //     console.log(e);
    // }
}

process();