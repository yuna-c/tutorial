// or 연산자 : 어떤 값이 falsy하다면 대체로 사용할 값을 지정해 줄 때,
// const namelessDog = {
//     name : '',
// }

// function getName(animal) {
//     const name = animal && animal.name;
//     // if(!name) {
//     //     return '이름이 없는 동물입니다.';
//     // }
//     // return name;
//     return name || '이름이 없는 동물입니다.';

// }

// const name = getName(namelessDog)
// console.log(name);

const namelessDog = {
    name : '뭉뭉이',
}

function getName(animal){
    const name = animal && animal.name;
    if(!name ){ 
        return '이름이 없는 동물입니다';
    }
    return name;
}

const name = getName(namelessDog);
console.log(name);