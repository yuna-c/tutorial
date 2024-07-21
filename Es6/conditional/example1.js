// 조건문 (if문)
const a = 1;
if( a + 1 === 2 ) {// true
    //console.log('a + 1이 2입니다.');
    //console.log('fsdaffsfasdfaff')
    const a = 2;
    console.log('if문 안의 a값은 '+ a);
}
console.log('if문 밖의 a값은 '+ a);


//var 쓰면 안되는 이유
var b = 1;
if( b + 1 === 2 ) {// true
    //console.log('a + 1이 2입니다.');
    //console.log('fsdaffsfasdfaff')
    var b = 2;
    console.log('if문 안의 b값은 '+ b);
}
console.log('if문 밖의 b값은 '+ b);