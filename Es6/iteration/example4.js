// 배열 반복문
const nums = [5, 10, 15, 20];
const numbers = [10, 20, 30, 40, 50];

for (let number of numbers){
    console.log(number);
}

for (let num of nums){ //num일 필요는 없다
    console.log(num);
}

// for... of 는 배열안에 있는 것들을 사용해서 어떠한 작업을 해야할 때 쓴다

for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}