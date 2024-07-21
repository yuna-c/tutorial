// 파라미터에 넣어준 모든 값들을 합해주는 함수 만들기
// function sum(a, b, c, d, e, f, g){
function sum(...rest){ //모든 파라미터를 배열로 받아온다
    //return a + b + c + d + e + f + g;
    /*
    let result = 0;
    if(a){
        result += a;
    }
    if(b) result += b;
    if(c) result += c;
    if(d) result += d;
    if(e) result += e;
    if(f) result += f;
    if(g) result += g;
    return result;
    */
    // if(a){
    //     result += a;
    // }

    //이런식으로 파라미터를 받아 하나하나 인자를 더해줘야 하지만,
    //reduce를 통해 합산해준다
    return rest.reduce((acc, current) => acc + current, 0);
}

// 숫자 하나만 빠져도 연산이 안되기 때문에
console.log(sum(1,2,3,4,5,6,7,8,9,10));
