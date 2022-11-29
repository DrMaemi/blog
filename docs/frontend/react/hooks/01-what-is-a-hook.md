---
title: '[React] Hooks'
icon: article
category: React
date: 2022-11-27
order: 1
---

## React Hook이란?
React Hook은 리액트 컴포넌트가 상태(state)와 다른 리액트 특성들(other React features)에 접근할 수 있도록 하는 기능입니다.

React Hook 때문에 더 이상 클래스 컴포넌트가 리액트에서 필요하지 않게 됐습니다.

::: info 그래도 클래스 컴포넌트를 삭제하진 않았습니다.
아직까진 리액트 진영에서 클래스 컴포넌트를 삭제할 계획은 없습니다.
:::

React Hook은 React 16.8 버전 이후부터 지원하는 기능입니다.

::: details Hook example
```js:no-line-numbers
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function FavoriteColor() {
  const [color, setColor] = useState('red');

  return (
    <>
      <h1>My favorite color is {color}.</h1>
      <button
        type="button"
        onClick={() => setColor('blue')}
      >Blue
      </button>
      <button
        type="button"
        onClick={() => setColor('red')}
      >Red
      </button>
      <button
        type="button"
        onClick={() => setColor('pink')}
      >Pink
      </button>
      <button
        type="button"
        onClick={() => setColor('green')}
      >Green
      </button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
```
:::

## Hook Rules
- Hook은 리액트 함수 컴포넌트 내에서만 호출될 수 있음(can only be called inside React function components)
- Hook은 컴포넌트에서 반환할 HTML 코드의 최상위 요소에서 호출될 수 있음(can only be called at the top level of a component)
- Hook은 조건문 안에 선언될 수 없음(cannot be conditional)

## A. 참조
Refsnes Data, "React Hooks," *w3schools.com*, [Online]. Available: [https://www.w3schools.com/REACT/react_hooks.asp](https://www.w3schools.com/REACT/react_hooks.asp) [Accessed Nov. 27, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
