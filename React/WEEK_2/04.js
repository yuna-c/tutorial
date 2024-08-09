/*
개발환경 세팅

크롬브라우저 : https://www.google.co.kr/chrome/
VScode : https://code.visualstudio.com/
git 설치하기 : https://git-scm.com/downloads

Node 설치하기(LTS) : https://nodejs.org/en/
node 설치 확인하기 : node -v, npm -v

yarn 설치하기 : npm install -g yarn, yarn -v
yarn으로 패키지 설치하는 방법 : yarn add [설치할 패키지 이름]
// 예시: yarn add react-router-dom

NPM : 
node.js를 설치할 때 자동으로 설치
Node Package Manager
JavaScript 프로그래밍 언어를 위한 패키지 관리자로, 수많은 JavaScript 라이브러리와 애플리케이션을 호스팅하는 레지스트리 역할

YARN : 
2016년에 Facebook, Exponent, Google, Tilde와 같은 회사에서 공동 작업으로 개발한 패키지 관리자

npm과의 호환성이 좋고, 속도나 안정성 측면에서 npm보다 좋음
-병렬로 패키지를 다운로드하여 속도를 향상시키고, 더 정확한 버전 관리를 위해 yarn.lock 파일을 사용
- 관련해서는, npm도 버전 5 이후로 많은 성능 개선이 이루어져서 현재는 성능 차이가 많이 줄음

Javascript 런타임 환경
프로그래밍 언어가 구동(running)되는 환경(environment)
자바스크립트의 대표적 런타임 환경은 2가지
1. 브라우저(ex : Chrome, Microsoft Edge, Firefox)
2. node환경
*/

// 아래 파일을 node 환경에서 실행하면 오류가 발생해요!

// test.js
function printAlert() {
	alert('이 함수는 브라우저 환경에서만 실행됩니다.');
}

printAlert();
