function getSound(animal) {
    // if문이 한줄이면 블록을 생략 가능
    // if (animal === '개') return '멍멍'; 
    // if (animal === '고양이') return '야옹'; 
    // if (animal === '참새') return '짹짹'; 
    // if (animal === '비둘기') return '구구구구'; 
    // return '...?';

    //switch case
    // switch (animal){
    //     case '개' :
    //         return '멍멍!'; // switch case 안에 바로 return을하면 구지 break할 필요가 없다
    //     case '고양이' :
    //         return '야옹!';
    //     case '참새' :
    //         return '짹짹!';
    //     case '사람' :
    //         return '아 하기싫다!';  
    //     default :
    //         return '...? 알 수 없어';  
    // }

    //if 더 깔끔하게 = 객체 사용
    const sounds = {
        개 : '멍멍😊',
        고양이 : '야옹😊',
        참새 : '짹짹😊',
        비둘기 : '구구구구😊'
    };
44
    return sounds[animal] || '...?😊😊';

    //함수 넣어서 필요할 때 호출

}

console.log(getSound('개'));
console.log(getSound('고양이'));
console.log(getSound('인간'));


function makeSound(animal) {
    const tasks = { // 객체 활용코드
        개 : () => {
            console.log('멍멍!');
        },
        고양이() { //함수를 객체 안에다가 선언하는게 더 낫다
            console.log('야옹!');
        },
        비둘기(){ 
            console.log('구구!');
        },
        듀공 : ()=> {
            console.log('우오오오오');
        }, 
        참새 () {
            console.log('짹짹');
        }
    }

    const task = tasks[animal];
    if(!task){
        console.log('...?');
        return;
    }
    task();
}

makeSound('개');
makeSound('고양이');
makeSound('인간');