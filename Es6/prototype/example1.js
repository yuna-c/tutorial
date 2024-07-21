/*
객체 생성자 :
함수를 통해 새로운 객체를 만들고,
그 안에 넣고싶은 값, 또는 함수를 구현할 수 있게 해줍니다.
*/
// 객체 생성자를 만들때는 함수이름을 대문자로 한다
function Animal(type, name, sound, gender) { //파라미터
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.gender = gender;
    // 새로운 객체를 만들고, 함수를 호출 할 때마다가 아니라 재사용 할 수 있게 만들어주기위해 prototype 써보기
    // this.say = function() { //익명함수
    //     console.log(this.sound);
    // }
}

Animal.prototype.say = function(){
    console.log(this.sound);
}

Animal.prototype.symbol = function(){
    console.log(this.gender);
}

Animal.prototype.shareValue = 1;

//객체 생성자를 통해 새로운 객체를 만들 때는 new라는 키워드로 만든다.
const dog = new Animal('개', '멍멍이', '멍멍', '여자');
const cat = new Animal('고양이', '냐옹이', '냐옹', '남자');
const chipmunk = new Animal('다람쥐', '다람이', '찍찍', '여자');

//모든 Animal에게 이 함수를 사용하게 하자
/*
function say() {
    console.log(this.sound);
}

dog.say = say;
cat.say = say;
*/
dog.say();
cat.say();
cat.shareValue;
chipmunk.symbol();