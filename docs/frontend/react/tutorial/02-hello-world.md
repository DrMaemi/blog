---
title: '[React] 개발 환경 구성 - Hello World'
icon: article
category: React
date: 2022-11-27
order: 2
---

## Node.js 설치
[Node.js download link](https://nodejs.org/en/)

Node.js를 설치하면 npm(node package manager)도 설치됩니다. 리액트 개발에는 이 npm이 반드시 필요합니다.

## VS Code 설치
[VS Code download link](https://code.visualstudio.com/)

## HTML에 React를 바로 적용해보기
```html
<!DOCTYPE html>
<html>

<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>

<body>

  <div id="mydiv"></div>

  <script type="text/babel">
    function Hello() {
      return <h1>Hello World!</h1>;
    }

    ReactDOM.render(<Hello />, document.getElementById('mydiv'))
  </script>

</body>

</html>
```

::: details
![](https://drive.google.com/uc?export=view&id=1H_1e5DeHUk_1LRnqs2-yMs7K_6glyXC6)
&lt;화면 1. React Live Preview - Hello World&gt;
{ .align-center }
<!---->
:::

## react-create-app으로 개발 환경 구성
Node.js를 설치했다면 위 방법 말고 npx를 이용해 React 어플리케이션 개발 환경을 구성할 수 있습니다.

::: warning npx 버전 최신화
만약 본문을 읽기 전에 `create-react-app`을 globally 설치했다면 `npm uninstall -g create-react-app` 명령어를 통해 삭제하여 `create-react-app`의 버전이 최신화되도록 하는 것이 좋습니다.
:::

```:no-line-numbers
npx create-react-app my-react-app
```

![](https://drive.google.com/uc?export=view&id=1NUbN5iuesgqTLGmQX33LVAL7rZ2Siwjs)
&lt;화면 2. react-create-app으로 구동한 어플리케이션 화면&gt;
{ .align-center }

## 간단한 수정
::: details /src/App.js
```react:no-line-numbers
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World !</h1>
    </div>
  )
}

export default App;
```

![](https://drive.google.com/uc?export=view&id=1V7G84PwETW9Cfk__GGM2xPeIeWMJPaZq)
&lt;화면 3. create-react-app - Hello World&gt;
{ .align-center }
<!---->
:::

## A. 참조
Refsnes Data, "React Introduction," *w3schools.com*, [Online]. Available: [https://www.w3schools.com/REACT/react_getstarted.asp](https://www.w3schools.com/REACT/react_getstarted.asp) [Accessed Nov. 27, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
