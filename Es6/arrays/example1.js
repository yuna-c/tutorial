const superhroes = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지',
    '블랙 위도우'
]

// 1
// for(let i = 0; i < superhroes.length; i++){
//     console.log(superhroes[i]);
// }


// 2
// function print(hero) {
//     console.log(hero);
// }
// superhroes.forEach(print);


// 3
// superhroes.forEach(function(hero) {
//    console.log(hero);
// });


// 4 forEach
console.log(superhroes);
superhroes.push('헐크', '비전');
console.log(superhroes);

superhroes.forEach((hero) => {
    console.log(hero);
 });

 const dogs = [
     '강아지',
     '레베카',
     '멍멍이',
     '뭉뭉이'
 ]


//  for(let i = 0; i < dogs.length; i++){
//      console.log(dogs[i]);
//  }

dogs.forEach(dog => {
    console.log(dog);
})