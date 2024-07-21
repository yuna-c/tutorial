/* 객체 깊숙한 곳에 있는 값 꺼내는 법 */

const deepObject = {
    state : {
        infomation : {
            name: 'yuna',
            languages: ['korean', 'english', 'chinese'],
        }
    },
    value : 5
}

// 1. 비구조화 할당 문법 두번사용
// const { name, languages } = deepObject.state.infomation;
// const { value } = deepObject;

// 2. 비구조화 할당을 한번 하면서 여러가지 정보를 다 빼오는 것
const {
    state: {
        infomation : {
            name, languages: [firstLang, secondLang]
        }
    },
    value
} = deepObject;

const extracted = {
    name,
    //languages,
    firstLang, secondLang,
    value
}

console.log(extracted);