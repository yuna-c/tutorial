const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

// for (const 변수명 of 변수.keys()) {console.log(변수명);}

console.log(myMap.keys()); // [Map Iterator] { 'one', 'two', 'three' }
for (const key of myMap.keys()) {
	console.log(key);
}

console.log(myMap.values()); // [Map Iterator] { 1, 2, 3 }
for (const value of myMap.values()) {
	console.log(value);
}

console.log(myMap.entries()); // [Map Entries] { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] }
for (const entry of myMap.entries()) {
	console.log(`${entry[0]}: ${entry[1]}`);
}

console.log(myMap.size); // Map의 사이즈 : 3
console.log(myMap.has('two')); // key 기반 검색 : true
