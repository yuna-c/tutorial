/*
ReactJS
*/

// 1. 공식홈페이지에서 소개하는 React.js
// 1-1. 웹과 네이티브 UI를 위한 라이브러리
// https://react.dev/

// 2. ‘라이브러리’인 React
// 2-1. 프레임워크와 라이브러리

// 프레임워크 : 개발자가 기능 구현에만 ‘딱’ 집중할 수 있도록 필요한 모든 프로그래밍적 재원을 지원하는 ‘기술의 조합’,프레임워크를 사용하는 경우 시키는대로 코드를 짜게 되면 프레임워크가 알아서 제어의 흐름을 가져가는 것

// Spring Framework : Java 기반의 웹(백엔드) 프레임워크
// - FE까지 가능한 full stack coverage framework
// - JSP, Thymeleaf

// Vue.js, Angular.js : Javascript 기반 웹 프론트엔드 SPA
// - Django, Flask : Python 기반의 웹 프레임워크
// - Ruby on Rails
// - .NET Framework
// - Express.js, NestJS : Javascript 기반 웹 백엔드 프레임워크

// 라이브러리 : 공통 기능의 모듈화가 이루어진 프로그램의 집합, 제어의 역전(IoC : Inversion Of Control)
// - React.js
// - react-router-dom
// - redux

// 2-2. React.js가 라이브러리인 이유
// 그 자체만으로 프레임웍이라고 불리기엔 제공해야 하는 기능이 부족
// 상태관리(Redux), 라우팅(React-router-dom), 스타일링 등의 기능이 합쳐져 있었다면 프레임워크
/*
1. **선택적 통합 (Selective Integration)**:
React는 사용자 인터페이스를 구성하는 데 집중된 라이브러리입니다. 웹 페이지나 앱의 특정 부분에 대해 뷰(view) 레이어만을 책임지며, 전체적인 애플리케이션 아키텍처를 제어하려고 하지 않습니다. 개발자는 필요한 곳에서 React를 사용하고, 나머지 부분에서는 다른 라이브러리나 프레임워크와 자유롭게 결합할 수 있습니다.

2. **제어의 유지 (Control Retained)**:
React를 사용할 때, 개발자는 애플리케이션의 흐름과 구조를 완전히 제어할 수 있습니다. React는 단지 UI를 렌더링하는 방법을 제공할 뿐, 어떻게 애플리케이션을 구성해야 할지 강제하지 않습니다. 예를 들어, 상태 관리나 라우팅은 React 자체의 일부가 아니며, Redux, MobX, React Router 같은 다른 라이브러리를 사용하여 처리할 수 있습니다.

3. **단순성과 집중성 (Simplicity and Focus)**:
React는 UI를 만드는 데 필요한 최소한의 API를 제공하며, 이는 학습 곡선을 낮추고 특정 문제에 집중할 수 있게 합니다. 그것은 "최소한의 라이브러리"라는 철학을 따르며, 개발자로 하여금 애플리케이션의 다른 부분을 다루기 위해 자신의 도구를 선택하게 합니다.

4. **커뮤니티와 생태계 (Community and Ecosystem)**:
React의 생태계는 매우 방대하며, 다양한 라이브러리와 툴을 제공합니다. 이러한 도구들은 React와 함께 사용될 수 있으나, React 자체의 일부는 아닙니다. 이는 React가 특정한 기능에 집중하면서도, 넓은 범위의 개발 요구를 충족할 수 있게 해주는 유연성을 제공합니다.
*/

// 3. 특징과 이점 이해하기

// 3-1. SPA
// SPA는 Single Page Application, 한 개의 페이지로 이루어진 애플리케이션

// 3-2. 인기가 많은 React(npm trends)
// npm trends에서 인기가 많다( SPA 아키텍쳐, react.js )

// 3-3. UI가 필요한 곳이면 어디든
// 웹 뿐 아니라 React Native를 활용한 모바일 애플리케이션에서도 활용이 가능해요. 뿐만 아니라, VR에서까지 활용

// 3-4. 커뮤니티가 막강해요(+ 채용공고)
