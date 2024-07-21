//Truthy and Falsy
function print(person) {
    if (!person) { // null checking => person === undefined || person === Null
        return;
    }
    console.log(person.name);
};

const person = null;
// {
//     name : 'John'
// };

print(person);


// not a number 
const value = 1 / 'asda';
console.log(value);

// falsy
console.log(!undefined); //undefined, null => falsy한 값으로 간주
console.log(!null);
console.log(!0); // 0이 아닌 값
console.log(!''); // 빈문자
console.log(!NaN);  // not a number 
console.log(!false);


// truthy
console.log(!3);
console.log(!'hello');
console.log(!['array']); // 배열
console.log(![]); // 빈배열
console.log(!{}); // 객체

