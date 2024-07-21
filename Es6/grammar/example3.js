const value = undefined/*{ a : 1 } , null*/;

// if (value) {
//     console.log('value가 Truthy하네요.');
// }

// const truthy = value ? true : false;
const truthy = !!value;
console.log(truthy);