// 3. 연습하기
// 3-1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combineArray = [...array1, ...array2];
console.log(combineArray);

// 3-2
const obj1 = { name: '르탄이', age: 25 };
const obj2 = { name: '르순이', email: 'rsoony@sparta.com' };

const mergedObj = { ...obj1, ...obj2 }; // { name: '르순이', age: 25, email: 'rsoony@sparta.com' }
console.log(`mergedObj =>`, mergedObj);

mergedObj.name = '원장님'; // 직접 지정해 줘야한다
console.log(`mergedObj =>`, mergedObj);

// 불변성 성공
console.log(`obj1 =>`, obj1);
console.log(`obj2 =>`, obj2);
