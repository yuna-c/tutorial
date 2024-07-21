//setter
const dog = {
    _name: '멍멍이', //setter함수와 겹치지 않게 만들기 위해
    get name() {
        console.log('_name을 조회합니다');
        return this._name;
    },
    set name(value) { //파라미터를 무조건 설정해 줘야함
        console.log('이름이 바뀝니다.' + value);
        this._name = value;
    }
};

// console.log(dog._name);
// dog._name = '냐옹이';
// console.log(dog._name);

console.log(dog.name);
dog.name = '냐옹이';
console.log(dog.name);