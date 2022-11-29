---
title: '[React] 리액트의 HTML 변환 방법'
icon: article
category: React
date: 2022-11-27
order: 3
---

## 들어가며
React의 목표는 HTML을 웹페이지 안에 렌더링하는 것입니다.

React는 HTML 렌더링 기능을 `const elementSelector = ReactDOM.createElemenet()`, `elementSelector.render()` 함수를 통해 제공합니다.

::: warning <code>ReactDOM.render()</code>는 React 18버전 이후부터 더 이상 지원하지 않습니다.
이후 버전에서너는 `ReactDOM.render()` 대신 `elementSelector.render()`를 사용해야 합니다.
:::

## The Render Function
`const elementSelector = ReactDOM.createElemenet()`는 HTML element를 인자로 가지며, `elementSelector.render()` 함수는 HTML code를 인자로 갖습니다.

작성한 HTML code를 명시한 HTML element 안에 넣어 렌더링합니다.

그러나 어디에 렌더링될까요?

리액트는 작성한 코드를 자동으로 `/public/index.html`에 적용해줍니다.

::: details 예제
단락(`<p>`)을 `root`라는 id를 가진 요소 안에 넣어 렌더링하기 위해선 다음과 같이 작성합니다.

```js;no-line-numbers
import React from 'react';
import ReactDOM from 'react-dom/client';
...

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<p>Hello World !</p>);
```

이 결과는 `/public/index.html`에 작성된, `root` id를 가지는 요소 안에 생성됩니다.

```html:no-line-numbers
<body>
  <div id="root"></div>
</body>
```
:::

## JSX 렌더링하기
리액트에서 JSX 문법을 활용해 다음과 같이 HTML로 렌더링할 수 있습니다.

```js:no-line-numbers
const myElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

root.render(myElement);
```

JSX는 다음 포스트에서 자세히 작성할 예정입니다.

## A. 참조
Refsnes Data, "React Render HTML," *w3schools.com*, [Online]. Available: [https://www.w3schools.com/REACT/react_render.asp](https://www.w3schools.com/REACT/react_render.asp) [Accessed Nov. 27, 2022].

Peter Mortesen, "Deprecation notice: ReactDOM.render is no longer supported in React 18," *stackoverflow.com*, Mar. 29, 2022. [Online]. Available: [https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18](https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18) [Accessed Nov. 27, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
