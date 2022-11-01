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

::: info 매개변수가 하나뿐인 경우 괄호 `()`를 생략할 수 있습니다.
```java:no-line-numbers
(a) -> a*a;
a -> a*a;
```

단, 매개변수의 타입이 있으면 생략할 수 없습니다.
```java:no-line-numbers
(int a) -> a*a // OK
int a -> a*a // Error
```
:::

::: info 중괄호 `{}` 안의 문장이 하나일 때 중괄호를 생략할 수 있습니다.
```java:no-line-numbers
(String name, int i) -> {
    System.out.println(name+"="+i);
}

(String name, int i) ->
    System.out.println(name+"="+i);
```
:::

::: details 메서드 - 람다 변환 예제
```java:no-line-numbers
int sum(int[] arr) {
    int sum = 0;
    for (int i: arr)
        sum += i;
    return sum;
}

(int[] arr) -> {
    int sum = 0;
    for (int i: arr)
        sum += i;
    return sum;
}
```
:::

## 1.3. 함수형 인터페이스(Functional Interface)
자바에서 모든 메서드는 클래스 내에 포함되어야 합니다. 그럼 람다식은 어떤 클래스에 포함되는 것일까요?

지금까지 람다식이 메서드와 동등한 것처럼 설명해왔으나, 사실 람다식은 익명 클래스 객체와 동등합니다.

람다식
```java:no-line-numbers
(a, b) -> a > b? a: b
```

익명 클래스 객체
```java:no-line-numbers
new Object() {
    int max(int a, int b) {
        return a > b? a: b;
    }
}
```

람다식으로 정의된 익명 객체의 메서드는 어떻게 호출할 수 있을까요? 이미 알고 있는 것처럼, 참조변수가 있어야 객체의 메서드를 호출할 수 있으니 참조변수 `f`에 람다식을 바인딩해봅시다.

```java:no-line-numbers
타입 f = (a, b) -> a > b? a: b
```

이 때 참조변수 `f`의 타입은 무엇일까요? 참조형이니 클래스 또는 인터페이스가 가능합니다. 그리고 그 클래스나 인터페이스 내부에는 람다식에 대응되는 메서드가 정의되어 있어야 합니다.

```java:no-line-numbers
interface MyFunction {
    public abstract int max(int a, int b);
}
```

그러면 이 인터페이스를 구현한 익명 클래스의 객체를 다음과 같이 생성할 수 있습니다.

```java:no-line-numbers
MyFunction f = new MyFunction() {
    public int max(int a, int b) {
        return a > b? a: b;
    }
};

int big = f.max(5, 3); // 익명 객체 메서드 호출
```

그리고 위 코드는 다시 람다식으로 다음과 같이 대체할 수 있습니다.

```java:no-line-numbers
MyFunction f = (a, b) -> a > b? a: b;
int big = f.max(5, 3);
```

이처럼 MyFunction 인터페이스를 구현한 익명 객체를 람다식으로 대체 가능한 이유는, **람다식도 실제로는 익명 개체이며 MyFunction 인터페이스를 구현한 익명 객체의 메서드 max()와 람다식의 매개변수 타입, 개수, 반환값이 일치하기 때문**입니다.

그리고 위에서 살펴본 것처럼, 하나의 메서드가 선언된 인터페이스를 정의해서 람다식을 다루는 것은 기존 자바 규칙들을 어기지 않으면서 자연스럽습니다. 그 결과 자바 진영에서는 인터페이스를 통해 람다식을 다루기로 결정했고, 하나의 메서드가 선언된 인터페이스를 **함수형 인터페이스(functional interface)**라 부르기로 했습니다.

:::: info 함수형 인터페이스에는 오직 하나의 추상 메서드만 정의되어야 한다는 제약이 있습니다.
그래야만 람다식과 인터페이스의 메서드가 1:1로 연결될 수 있기 때문입니다.

반면에 static 메서드와 default 메서드의 개수에는 제약이 없습니다.

::: tip @FunctionalInterface 어노테이션
`@FunctionalInterface`를 클래스 레벨에 사용하면 컴파일러가 함수형 인터페이스를 올바르게 정의했는지 확인해주므로 유용하게 사용할 수 있습니다.
:::
::::

::: details Collections.sort() 람다식 예제
기존에는 아래와 같이 인터페이스의 메서드 하나를 구현하는데도 복잡하게 해야 했는데,
```java:no-line-numbers
List<String> list = Arrays.asList("abc", "aaa", "bbb", "ddd", "aaa");

Collections.sort(list, new Comparator<>() {
    public int compare(String s1, String s2) {
        return s2.compareTo(s1);
    }
});
```

이제 람다식으로 아래와 같이 간단히 처리할 수 있게 됐습니다.
```java:no-line-numbers
List<String> list = Arrays.asList("abc", "aaa", "bbb", "ddd", "aaa");
Collections.sort(list, (s1, s2) -> s2.compareTo(s1));
```
:::

#### 함수형 인터페이스 타입의 매개변수와 반환 타입
Collections.sort() 람다식 예제에서 익명 클래스 객체나 람다식을 인자로 받는 것, 즉 함수형 인터페이스 타입의 매개변수를 볼 수 있습니다.

함수형 인터페이스 MyFunction이 아래와 같이 정의되어 있을 때,

```java:no-line-numbers
@FunctionalInterface
interface MyFunction {
    void myMethod(); // 추상 메서드
}
```

어떤 메서드의 매개변수가 MyFunction 타입이라면, 해당 메서드를 호출할 때 **람다식을 참조하는 참조변수**를 매개변수에 전달해야 합니다.

```java:no-line-numbers
void aMethod(MyFunction f) {
    f.myMethod();
}

MyFunction f = () -> System.out.println("myMethod()");
aMethod(f);

// 또는 참조변수 없이 직접 람다식을 매개변수에 작성 가능
// aMethod(() -> System.out.println("myMethod()"));
```

또한 람다식을 가리키는 참조변수를 반환하거나 람다식을 바인딩한 참조변수를 반환하거나 람다식을 직접 반환할 수 있습니다.

```java:no-line-numebrs
MyFunction myMethod() {
    MyFunction f = () -> {};
    return f;

    // 한 줄로 줄이면 다음과 같이 작성 가능
    // return () -> {};
}
```

메서드가 아니라 객체를 주고 받는 것이므로 근본적으로 달라진 것은 없으나 예전보다 코드가 더 간결하고 이해하기 쉬워졌습니다.

#### 람다식의 타입과 형변환
**함수형 인터페이스로 람다식을 참조할 수 있는 것일 뿐, 람다식의 타입이 함수형 인터페이스의 타입과 일치하는 것은 아닙니다.**

근본적으로 람다식은 익명 객체이고, 익명 객체는 타입이 없습니다(정확히는 타입이 있으나 컴파일러가 임의로 이름을 정한 것입니다).

따라서 본래 대입 연산자 `=`를 이용해 참조변수에 람다식을 바인딩할 때 형변환이 필요합니다.

```java:no-line-numbers
MyFunction f = (MyFunction)(() -> {});
```

람다식은 MyFunction 인터페이스를 직접 구현하진 않았으나 인터페이스를 구현한 클래스의 객체와 완전히 동일하기 때문에 위와 같은 형변환을 허용합니다. 그리고 이 형변환은 생략 가능합니다.

:::: warning 람다식은 이름이 없을 뿐 분명히 객체인데도 Object 타입으로 형변환할 수 없습니다.
```java:no-line-numebers
Object obj = (Object)(() -> {}); // Error. 함수형 인터페이스로만 형변환 가능
```

굳이 Object 타입으로 형변환하려면 먼저 함수형 인터페이스로 변환해야 합니다.

```java:no-line-numbers
Object obj = (Object)(MyFunction)(() -> {});
String str = ((Object)(Myfunction)(() -> {})).toString();
```

::: details 예제
```java:no-line-numbers
@FunctionalInterface
interface MyFunction {
    void myMethod();
}

public class LambdaEx2 {
    public static void main(String[] args) {
        MyFunction f = () -> {}; // MyFunction f = (MyFunction)(() -> {});
        Object obj = (MyFunction)(() -> {}); // Object 타입 형변환 생략 가능
        String str = ((MyFunction)(() -> {})).toString();

        System.out.println(f);
        System.out.println(obj);
        System.out.println(str);
        System.out.println((MyFunction)(() -> {}));
        System.out.println(((MyFunction)(() -> {})).toString());

        System.out.println(() -> {}); // Error. 람다식은 Object 타입으로 형변환 불가능
    }
}
```
:::
::::

#### 외부 변수를 참조하는 람다식
::: details 예제 3
MyFunction 함수형 인터페이스

```java
@FunctionalInterface
public interface MyFunction { 
    void myMethod();
}
```

Outer, Inner 클래스
```java {9,12}
class Outer {
    int val = 10; // Outer.this.val

    class Inner {
        int val = 20; // this.val

        void method(int i) {
            int val = 30; // val
//          i = 10;

            MyFunction f = () -> {
                System.out.printf("%16s : %d\n", "i", i);
                System.out.printf("%16s : %d\n", "val", val);
                System.out.printf("%16s : %d\n", "this.val", ++this.val);
                System.out.printf("%16s : %d\n", "Outer.this.val", ++Outer.this.val);
            };

            f.myMethod();
        }
    }
}
```

LambdaEx3 - main
```java
public class LambdaEx3 {
    public static void main(String[] args) {
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();
        inner.method(100);
    }
}
```

실행 결과
```:no-line-numbers
               i : 100
             val : 30
        this.val : 21
  Outer.this.val : 11
```
:::

(작성 중)

## A. 참조
S. Namgung, "람다식(Lambda expression)," in *Java의 정석*, Jung-gu, Korea: 도우출판, 2022, ch. 14, sec. 1, pp. 794-796.

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
