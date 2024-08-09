/*
리액트 프로젝트 생성 방법

CRA(Create React App)
한 줄의 명령어 입력으로 React 프로젝트 개발에 필수요소를 자동으로 구성하는 방법

Vite
CRA와 같이 리액트 프로젝트를 풀 세팅해주는 빌드 도구

특징 :  
빠른 콜드 스타트와 HMR(Hot Module Replacement)
CRA는 기본적으로 설정을 숨기지만, Vite는 사용자가 필요에 따라 설정을 더 쉽게 조정
*/

/*

doskey ls = dir (ls 명령어로 바꾸기)
: https://mdpapa.tistory.com/96
: https://somjang.tistory.com/entry/Windows-%EB%AA%85%EB%A0%B9-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8cmd%EC%97%90%EC%84%9C-ls-clear-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95

vite로 리액트 프로젝트 셋업하기(cmd에서)
yarn create vite my-react-app --template react
yarn create vite [프로젝트명] --template react

접근 및 실행
cd my-react-app
yarn
yarn dev
*/

/*
A-Z 혼자 하기(처음부터 끝까지 혼자 설정하는 것)

1. 프로젝트 초기화
mkdir my-react-app
cd my-react-app
npm init -y

2. 리액트 및 웹팩 설치
yarn add react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin

3. 바벨 설치 및 설정
- 바벨 관련 패키지 설정
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

- 바벨 설정 파일 생성(.babelrc)
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

4. 웹팩 설정
- 웹팩 설정 파일 생성(webpack.config.js)
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
};

5. HTML 및 리액트 소스 파일 작성
- public > index.html 파일 생성
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

- src > index.js 파일 생성
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

- src > App.js 파일 생성
import React from 'react';

function App() {
  return <h1>Hello, React!</h1>;
}

export default App;

6. 스크립트 추가
- package.json 파일에 스크립트 추가
"scripts": {
  "start": "webpack serve --open",
  "build": "webpack --mode production"
}
*/
/*
경로별칭(path alias) 지정하기
- vite.config.js 파일 수정
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
    ],
  },
});

- jsconfig.json 파일 생성 후 작성
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
*/
