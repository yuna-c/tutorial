const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨',
}

const captainAmerica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카',
}

const blackWidow = {
    name : '나탈리야 알리야노브나 로마노바',
    actor : '스칼렛 요한슨',
    alias : '블랙 위도우'
}

console.log(ironMan);
console.log(captainAmerica);


// 함수의 파라미터에서도 객체를 받아와 사용 할 수 있다.

function print(hero) { //파라미터 = 히어로
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.` ;
    //const text = `${hero.arias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다❤`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);
print(blackWidow);