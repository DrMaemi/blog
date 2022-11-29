---
title: '[React] Event'
icon: article
category: React
date: 2022-11-27
order: 7
---

## React Event
HTML DOM의 event처럼 리액트로 사용자 이벤트에 기반한 action을 지원합니다.

리액트는 HTML의 이벤트와 동일한 이벤트 종류들을 가집니다.

ex. click, change, mouseover, etc.

## Add Event
리액트의 이벤트는 카멜 케이스(camelCase)로 코딩합니다.

리액트의 이벤트 핸들러(Event handler)는 HTML의 이벤트 핸들러 함수명을 사용하되 소괄호`()`를 제거하고 중괄호`{}`안에 기입합니다.

```js:no-line-numbers
function Football() {
  const shoot = () => {
    alert("Great shot !");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);
```

![](https://drive.google.com/uc?export=view&id=1d-S0nf_IuapyKVA-tugyO68l5O87wdE2)
{ .align-center }

## Passing Argument
이벤트 핸들러에 인자를 전달하기 위해선 단순히 중괄호`{}` 안에 핸들러 함수명을 작성하지 않고 화살표 함수(Arrow-function)를 사용하여 핸들러에 인자를 넘깁니다.

```js:no-line-numbers
function Football() {
  const shoot = (arg) => {
    alert(arg);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  )
}
```

![](https://drive.google.com/uc?export=view&id=16aLvDY0UlvtlAUCBt_PJPTb-Y3NwYNpA)
{ .align-center }

## React Event Object
이벤트 속성(Attribute)에 작성하는 화살표 함수에 이벤트 객체(Event object)명을 작성하여 이벤트 핸들러 내에서 이벤트 객체에 접근할 수 있습니다.

```js:no-line-numbers
function Football() {
  const shoot = (arg, eventObject) => {
    alert(eventObject.type);
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  )
}
```

![](https://drive.google.com/uc?export=view&id=1M0Q37Q7MfweUDyXiF0RhZ7XWtus6MYAt)
{ .align-center }

## A. 참조
Refsnes Data, "React Events," *w3schools.com*, [Online]. Available: [https://www.w3schools.com/REACT/react_events.asp](https://www.w3schools.com/REACT/react_events.asp) [Accessed Nov. 27, 2022].
