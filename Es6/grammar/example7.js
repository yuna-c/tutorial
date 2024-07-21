// or
console.log(false || 'hello'); // falsy하거나 false이면 뒤의 값을 추출
console.log('' || '이름없다');
console.log(null || '널이다');
console.log(undefined || 'defined 되지 않았다');
console.log(0 || '영은 false');
console.log(NaN || 'not a number');


console.log(1 || '음?'); //1 
console.log(true || '여기 안본다');
console.log('와아' || '여기 안본다');
console.log([] || '배열');