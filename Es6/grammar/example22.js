function max(...numbers){
    // return 0;
    // acc가 current보다 크면 그 결과값을 current로 하고 
    // 그렇지 않으면 acc가 결과값

    return numbers.reduce(
        //(acc, current) => (current < acc ? current : acc), //제일 작은 값일 때
        (acc, current) => (current > acc ? current : acc),
        numbers[0]
    );
}

const result = max(1, 2, 3, 4, 5, 6, 7, 8, 9, 20);
console.log(result);