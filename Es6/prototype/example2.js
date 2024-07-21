// 객체 생성자 상속 받는법
/*
상속 : 
*/
// function Dog(name, sound) {
//     this.type = '개';
//     this.name = name;
//     this.sound = sound;
// }

// function Cat(name, sound) {
//     this.type = '고양이';
//     this.name = name;
//     this.sound = sound;
// }

// Dog.prototype.say = function () {
//     console.log(this.sound);
// }

// Cat.prototype.say = function () {
//     console.log(this.sound);
// }
// const dog = new Dog('멍멍이', '멍멍'); // 객체생성자를 new 키워드를 통해 호출시 새로운 객체를 만들게 되고, 값을 넣거나, 프로토 타입으로 함수를 넣어서 기능구현 가능하게 하는것
// const cat = new Cat('냐옹이', '냐옹');


//두번이나 하게 되면 비효율적이니 상속을 활용
function Animal(name, type, sound){ // Ani 객체생성자
    this.name = name;
    this.type = type;
    this.sound = sound;
}

Animal.prototype.say = function () { // prototype say 함수 집어넣기
    console.log(this.sound);
}

// 최대한 재활용 call 
function Dog(name, sound) { //객체생성자 만들어서
    Animal.call(this, '개', name, sound); // call 은 첫번째 파라미터에서 자신의 객체생성자 this를 넣고, 그다음 들어오는 파라미터들을 넣어준다. Animal(name, type, sound)
}

function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype; //프로토타입 공유하게 함
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();
