---
title: '[React] JSX'
icon: article
category: React
date: 2022-11-27
order: 4
---

## JSX란
JSX는 JavaScript XML의 약자입니다.

JSX는 React에서 HTML을 작성하기 쉽도록 도와줍니다.

## Coding JSX
JSX는 자바스크립트에서 HTML 요소를 작성하는데 `createElement()`, `appendChild()`와 같은 메서드 사용 없이 할 수 있도록 도와줍니다.

JSX는 HTML 태그를 React element로 변환해줍니다.

::: details JSX, without JSX 예제
with JSX
```js:no-line-numbers
const myElement = <h1>with JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

without JSX
```js:no-line-numbers
const myElement = React.createElement('h1', {}, 'without JSX');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

JSX를 사용하는 것이 코드 길이를 줄이고 가독성을 높입니다.
:::

## JSX 표현식(Expression)
### 중괄호 `{}`
예를 들어 5+5 연산 결과값을 렌더링하고 싶다면 JSX를 사용하여 다음과 같이 작성할 수 있습니다.

```js:no-line-numbers
const myElement = <h1>React is {5+5} times better with JSX</h1>;
```

![](https://drive.google.com/uc?export=view&id=1BSUqtABmbcPrCmktzGjzEYfEfEIrTs7H)
{ .align-center }

### Multi-line
JSX로 HTML 코드를 여러 개의 줄로 작성하기 위해선 소괄호`()`가 필요합니다.

```js:no-line-numbers
const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
```

#### One Top Level Element
리액트에서 HTML 코드는 반드시 하나의 최상위 계층 요소(One-top-level element)로 감싸져야(wrapped) 합니다.

```js:no-line-numbers
const myElement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);
```

::: warning Parent element로 감싸지 않으면 오류가 발생합니다.
:::

근데 이런 제약은 최종 렌더링된 html 문서에 추가적인 태그가 생길 수 있는 가능성을 내포합니다.

그래서 리액트에서는 `<Fragment></Fragment>` 태그를 지원합니다. 이 태그는 One-top-level element를 만족시키면서 최종 렌더링된 html 문서에는 태그가 사라집니다.

그러나 코드에 `<Fragment>` 태그를 써야하는 것 자체가 부담이 될 수 있습니다(코드 가독성을 해친다거나 하는 등). 이를 위해 리액트에서는 `<></>` 와 같이 빈 태그(Empty HTML tag)를 지원합니다.

```js:no-line-numbers
const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);
```

### Elements must be closed
JSX는 XML 규칙을 따르기 때문에 반드시 태그가 닫혀있어야(closed) 합니다.

```js:no-line-numbers
const myElement = <input type="text" />
```

### class 대신 className
JSX는 html attribute로 `className`을 렌더링 시 `class`로 변환합니다.

JSX는 자바스크립트로 작성되는데, class가 예약어이기 때문에 이런 방식을 택했습니다.

```js:no-line-numbers
const myElement = <h1 className="my-class">Hello World</h1>
```

### if 문은 JSX 밖에 사용해야 함
리액트는 조건 if문을 지원하지만 JSX 안에 사용할 수 없습니다.

조건문을 사용하고 싶다면 1. JSX 코드 밖에 사용하거나 2. 삼항 연산자 `?`를 사용해야 합니다.

::: details Option 1. JSX 코드 밖에 if문 사용
```js:no-line-numbers
const x = 5;
let text = "Goodbye";

if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>
```
:::

::: details Option 2. 삼항 연산자 <code>?</code> 사용
```js:no-line-numbers
const x = 5;

const myElement = <h1>{ x < 10? "Hello": "Goodbye" }</h1>;
```
:::

## A. 참조
Refsnes Data, "React JSX," *w3schools.com*, [Online]. Available: [https://www.w3schools.com/REACT/react_jsx.asp](https://www.w3schools.com/REACT/react_jsx.asp) [Accessed Nov. 27, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
