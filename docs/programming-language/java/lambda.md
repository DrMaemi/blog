---
title: '[JAVA] 람다식(Lambda Expression)'
icon: article
category:
  - Java
date: 2022-10-25
---

자바가 처음 등장한 이후로 두 번의 큰 변화가 있었는데, 한 번은 JDK 1.5에 추가된 지네릭스(Generics)의 등장이고 또 한 번은 JDK 1.8에 추가된 람다식(Lambda expression)의 등장이었습니다.

람다식의 도입으로 인해 자바는 객체지향언어인 동시에 함수형 언어가 되었습니다. 기존의 자바를 거의 변경하지 않고도 함수형 언어의 장점을 잘 접목시켜, 덕분에 저희는 큰 혼란없이 함수형 언어의 장점들을 자바에서도 누릴 수 있게 되었습니다.

## 1. 람다식이란?
람다식은 간단히 말해 **메서드를 하나의 식(Expression)으로 표현한 것**입니다.

::: details 람다식 예시
```java:no-line-numbers
int[] arr = new int[5];
Arrays.setAll(arr, (i) -> (int)(Math.random()*5)+1);
```
:::

람다식은 함수를 간략하면서 명확한 식으로 표현할 수 있게 해줍니다.

메서드를 람다식으로 표현하면 메서드의 이름과 반환문 `return`이 없어지는데, 이러한 특성때문에 람다식을 '익명 함수(Anonymous function)'라고도 합니다.

(작성 중)

## A. 참조
S. Namgung, "람다식(Lambda expression)," in *Java의 정석*, Jung-gu, Korea: 도우출판, 2022, ch. 14, sec. 1, pp. 794-794.
