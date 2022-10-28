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

```java:no-line-numbers
int[] arr = new int[5];
Arrays.setAll(arr, (i) -> (int)(Math.random()*5)+1);
```

위 코드에서 `(i) -> (int)(Math.random()*5)+1` 부분이 바로 람다식입니다. 이를 메서드로 표현하면 다음과 같습니다.

```java:no-line-numbers
int method() {
    return (int)(Math.random()*5)+1;
}
```

람다식은 함수를 간략하면서 명확한 식으로 표현할 수 있게 해줍니다.

메서드를 람다식으로 표현하면 메서드의 이름과 반환문 `return`이 없어지는데, 이러한 특성때문에 람다식을 '익명 함수(Anonymous function)'라고도 합니다.

::: info 메서드와 함수의 차이
전통적으로 프로그래밍에서 함수라는 이름은 수학에서 따온 것입니다. 수학의 함수와 개념이 유사하기 때문이죠. 그러나 객체지향개념에서는 함수(function) 대신 객체의 행위나 동작을 의미하는 메서드(method)라는 용어를 사용합니다.

메서드는 함수와 같은 의미이지만, 특정 클래스에 반드시 속해야 한다는 제약이 있기 때문에 다른 용어를 선택해 사용한 것입니다. 그러나 이제 다시 람다식을 통해 메서드가 하나의 독립적 기능을 하기 때문에 함수라는 용어를 사용하게 됐습니다.
:::

## 1.2. 람다식 작성 방법
::: details int max(int a, int b)
메서드
```java:no-line-numbers
int max(int a, int b) {
    return a > b? a: b;
}
```

람다식
```java:no-line-numbers
(a, b) -> a > b? a: b
```
:::

::: info 람다는 문장(statement)이 아니라 식(expression)입니다.
식은 `return`문이 생략되고, 식의 연산 결과가 자동으로 반환값이 됩니다. 또한 끝에 `;`을 붙이지 않습니다.
:::

:::: info 람다식에 선언된 매개변수 타입은 추론 가능한 경우 생략할 수 있습니다.
람다식의 대부분의 경우 매개변수 타입이 생략 가능하며, 람다식에 반환타입이 없는 이유도 항상 추론이 가능하기 때문입니다.

::: warning 주의 - 매개변수들 중 일부의 타입만 생략하는 것은 허용되지 않습니다.
예를 들어 `(int a, b) -> a > b? a: b`와 같은 문법은 불가능합니다.
:::
::::

(작성 중)

## A. 참조
S. Namgung, "람다식(Lambda expression)," in *Java의 정석*, Jung-gu, Korea: 도우출판, 2022, ch. 14, sec. 1, pp. 794-796.

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
