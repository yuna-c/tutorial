//spread : 펼치다, 퍼뜨리다

// 방법1 spread 연산자 : 기존 객체를 복사하고 속성을 추가할 떄 사용
const slime = {
    name : '슬라임',
};

const cuteSlime = {
    // name : '슬라임',
    ...slime,
    attribute : 'cute'
};

const purpleCuteSlime = {
    // name : '슬라임',
    // attribute : 'cute',
    ...cuteSlime,
    color : 'purple'
};

const greenCuteSlime = {
    color : 'green',
    ...purpleCuteSlime,
    color : 'green'
}

// 방법2
// const slime = {
//     name : '슬라임',
// };

// const cuteSlime = slime;
// cuteSlime.attribute = 'cute';

// const purpleCuteSlime = cuteSlime;
// purpleCuteSlime.color = 'purple';

const { name , attribute , color } = purpleCuteSlime;


const extracted = {
    name,
    attribute,
    color
}
console.log(extracted);



console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);

console.log(slime === cuteSlime);




const deepObject = {
    state : {
        information : {
            mama : 'yuna',
            length : [1, 2, 3, 4, 5],
        }
    },
    value : 5
}

const {
    state : {
        information : {
            mama, length: [first, second, third]
        }
    },
    value
} = deepObject;

const extract = {
    mama,
    //length,
    first, second, third,
    value
}
console.log(extract);
