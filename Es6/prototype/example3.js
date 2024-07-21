// class : 반복되는 문장들을 간략한 문장으로 알기 쉽게 쓸 수 있게 해줌, 상속을 훨씬 더 쉽게 할 수 있게 해줌

class Animal {
    //객체 생성자 비슷한 것 = 생성자
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    // say라는 함수를 class안에 구현 = 자동으로 프로토타입으로 등록이 됨
    say() {
        console.log(this.sound);

    }
}

// extend : 특정 키워드 상속 
class Dog extends Animal {
    constructor(name, sound){
        super('개', name, sound); //자기가 상속받은 클래스의 constroctor을 상속해줌
    }
}

class Cat extends Animal {
    constructor(name, sound){
        super('고양이', name, sound);
    }
}

console.log(Animal.prototype.say); // 자동 생성

const dog = new Dog('멍멍이', '멍');
const cat = new Cat('고양이', '야옹');
const fly = new Cat('fly', 'fly to the moon');

dog.say();
cat.say();
fly.say();