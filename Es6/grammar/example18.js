// rest

const purpleCuteSlime = {
    name : 'slime',
    attribute : 'cute',
    color : 'purple'
};

const { color, ...cuteSlime/*rest*/ } = purpleCuteSlime;
console.log(color);

//rest 를 사용할때 이름을 다르게 해도된다 ex cuteSlime
// console.log(rest);
console.log(cuteSlime);

const { attribute, ...slime} = cuteSlime;
console.log(cuteSlime);
console.log(slime);

// spread : 객체나 배열 안에 다른 객체를 퍼뜨리는 역할
// rest : 퍼져있는 것들을 다시 모아오는 역할