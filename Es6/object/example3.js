const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨',
    age : '36',
}

//비구조화 할당
const { name } = ironMan;
console.log(name);

const captainAmerica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카',
    age : '36',
}

const blackWidow = {
    name : '나탈리야 알리야노브나 로마노바',
    actor : '스칼렛 요한슨',
    alias : '블랙 위도우',
    age : '36',
}

// 객체 비구조화 문법 
// 객체에서 특정 값들을 추출해 내는 것

function print(/*hero*/ {alias, name, actor, age}) { //파라미터 = 히어로
    //const { alias, name, actor, age } = hero;
        const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다❤ 나이는 ${age}살 입니다❤` ;
    console.log(text);
}

print(ironMan);
print(captainAmerica);
print(blackWidow);