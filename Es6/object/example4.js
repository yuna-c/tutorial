const dog = {
    name : '멍멍이',
    sound : '멍멍!',
    say() { //: function say 생략가능
        console.log(this.sound); // this 자기가 속해지는 곳
    }
    /* 화살표 함수는 작동 안함 undefined
    say : () => { 
        console.log(this.sound);
    } 
    */
};

dog.say();


const cat = {
    name : '나나',
    sound : '야옹~',
    // say가 등록이되는거고 sound가 호출이 됨, this = cat
}

cat.say = dog.say;
cat.say();

//undefined( 매체 X )
const catSay = cat.say;
catSay();