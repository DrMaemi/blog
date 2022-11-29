---
title: '[React] Component'
icon: article
category: React
date: 2022-11-27
order: 5
---

## React Component
리액트에서 컴포넌트(Component)란 독립적이고 재사용 가능한 코드를 말합니다. 컴포넌트는 자바스크립트 함수처럼 작성되지만 HTML을 반환합니다.

컴포넌트는 클래스(Class) 컴포넌트, 함수(Function) 컴포넌트 두 가지 종류로 나뉩니다.

::: info Function 컴포넌트 사용을 권장합니다.
본문에서는 Reference를 위해 클래스 컴포넌트에 대한 설명을 하지만, 최근에는 리액트 Hooks(리액트 16.8 버전 이후)를 이용한 함수 컴포넌트를 사용할 것을 권장합니다.
:::

## Class Component
클래스 컴포넌트는 반드시 `extends React.Component` 구문을 같이 사용해야 합니다.

HTML 코드를 반환하고 싶다면 `render()` 메서드를 사용합니다.

```js:no-line-numbers
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a car from class component</h2>
  }
}
```

어떻게 Car 컴포넌트를 렌더링하는지는 [Rendering a Component](#rendering-a-component)에서 설명합니다.

## Function Component
함수 컴포넌트는 클래스 컴포넌트와 동일하게 동작하지만 훨씬 적은 코드로 더 직관적이게 작성할 수 있습니다.

```js:no-line-numbers
function Car() {
  return <h2>I am a car from function component.</h2>;
}
```

## Rendering a Component
작성한 컴포넌트를 렌더링할 때는 HTML 태그처럼 사용합니다.

```js:no-line-numbers
function Car() {
  return <h2>I am a car from function component.</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

## Props
Props는 리액트 컴포넌트의 인자와 같은 개념입니다.

```js:no-line-numbers
function Car(props) {
  return <h2>I am a {props.color} car</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);
```

## Nested Components
```js:no-line-numbers
function Car() {
  return <h2>I am a car</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

## Import Components
::: details /src/components/car.js
```js:no-line-numbers
function Car() {
    return <h2>I am a car</h2>;
}

export default Car;
```

`export default` 구문을 사용해서 컴포넌트를 export 합니다.
:::

::: details /src/index.js
```js:no-line-numbers
import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './components/car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

import 문을 사용합니다.
:::

## A. 참조
Refsnes Data, "React Components," *w3schools.com*, [Online]. Available: [https://www.w3schools.com/REACT/react_components.asp](https://www.w3schools.com/REACT/react_components.asp) [Accessed Nov. 27, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
