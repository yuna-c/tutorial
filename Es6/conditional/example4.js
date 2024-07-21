const device = 'galaxy note';

switch (device) {
    case 'iphone':
        console.log('아이폰');
        break;
    case 'ipad':
        console.log('아이패드');
        break;
    case 'galaxy note':
        console.log('갤럭시 노트');
        break;
    default: //아무것도 해당하지 않을때
        console('모르겠네요');
}