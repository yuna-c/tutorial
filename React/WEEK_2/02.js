/*
SPA의 개념
*/

// SPA : Single Page Application, 하나의 페이지
// 1.  SPA에 들어가기 전, MPA와 SSR에 대해

// MPA(Multi Page Application) : 2개 이상의 html page
// 1. **요청** : 클라이언트(브라우저)에서 네모를 눌러 서버에 응답을 요청합니다.
// 2. **생성** : 서버(웹서버)에서는 요청에 따라 `새로운 html 파일`을 만듭니다.
// 3. **응답** : 새로 만든 html 파일을 클라이언트(브라우저)에게 보내줍니다.

// SSR(Server Side Rendering) : 초기 화면 로딩 시 서버에서 완성된 HTML 페이지를 만들어 브라우저에 전송하는 방식 (랜더링)

// * SPA(Single Page Application) : 하나의 html
/*
1. **요청**
    - 클라이언트가 특정 UI 요소(우리 그림에서는 파란색 네모!)를 클릭할 때, 서버에 데이터를 요청합니다.
    - 이 요청은 전통적인 웹 애플리케이션에서처럼 페이지 전체를 새로 불러오는 요청과 달리, 필요한 데이터만을 요청하는 API 호출 형태입니다(예: REST API, GraphQL 등)
2. **응답**
    - 서버는 클라이언트의 요청을 처리한 후 필요한 데이터를 JSON 형태로 클라이언트에게 전송합니다. 클라이언트에서는 이 데이터를 받아 처리하기 전까지 UI(사용자 인터페이스)에는 변화가 없습니다.
3. **렌더링**
    - 응답 받은 JSON 데이터는 클라이언트의 JavaScript가 처리하고, 이를 기반으로 DOM을 업데이트하여 사용자 인터페이스(UI)에 반영합니다. 우리 그림에서는 빨간색으로 변경하는 과정이 되겠죠!
    - 이 과정에서 JavaScript 프레임워크 또는 라이브러리(예: React, Angular, Vue 등)가 DOM을 조작하여 실제로 화면에 보이는 요소들을 변경합니다.
*/

// CSR(=Client Side Rendering)
// 서버 측이 아닌 클라이언트(브라우저)에서 데이터를 기반으로 렌더링
