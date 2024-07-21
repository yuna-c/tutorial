const doggy = { 
    name : '멍멍이',
    sound : '멍멍',
    age : 2
}

for (let key in doggy){
    console.log(key); // keys값이 나타남, Object.keys(doggy)
    console.log(`${key}: ${doggy[key]}`);
}