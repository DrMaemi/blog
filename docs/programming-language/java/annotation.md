---
title: '** [JAVA] 12.3. 어노테이션(Annotation)'
icon: article
category:
  - Java
date: 2022-11-21
---

## 3. 메타 어노테이션
> 어노테이션을 위한 어노테이션

어노테이션의 적용 대상(Target), 유지 기간(Retention) 등을 지정하는데 사용됩니다.

::: details @SuppressWarnings 예제
```java:no-line-numbers
@Target({TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, LOCAL_VARIABLE})
@Retention(RetentionPolicy.SOURCE)
public @interface SupressWarnings {
    String[] value();
}
```
:::

## 4. 어노테이션 타입 정의
새로운 어노테이션을 정의하는 방법은, '@' 기호를 붙이는 것을 제외하면 인터페이스를 정의하는 것과 동일합니다.

```java:no-line-numbers
@interface 어노테이션이름 {
    타입 요소이름(); // 어노테이션 요소 선언
    ...
}
```

'@Override'는 어노테이션이고, 'Override'는 어노테이션 '타입'입니다.

### 어노테이션 요소
아래 선언된 @TestInfo는 5개의 요소를 가집니다.

```java:no-line-numbers
@interface TestInfo {
    int count();
    String testedBy();
    String[] testTools();
    TestType testType(); // enum TestType { FIRST, FINAL }
    DateTime testDate(); // 자신이 아닌 다른 어노테이션(@DateTime)을 포함할 수 있습니다.
}

@interface DateTime {
    String yymmdd();
    String hhmmss();
}
```

- 어노테이션 요소는 반환값이 있고 배개변수는 없는 추상 메서드의 형태를 가짐
- 그러나 상속을 통해 구현하지 않아도 됨
- 다만 어노테이션을 적용할 때 요소들의 값을 빠짐없이 지정해줘야 함
- 요소의 이름을 같이 적으므로 순서는 상관 없음

::: details @TestInfo 적용 예시
```java:no-line-numbers
@TestInfo(
    count = 3,
    testedBy = "Kim",
    testTools = {"JUnit", "AutoTester"},
    testType = TestType.FIRST,
    testDate = @DateTime(yymmdd="160101", hhmmss="235959")
)
public class NewClass {
    ...
}
```
:::

#### 기본값
- 어노테이션의 각 요소는 기본값(default)을 가질 수 있음
- 어노테이션을 적용할 때 값을 지정하지 않으면 기본값이 사용됨

::: details @TestInfo 기본값 예시
```java:no-line-numbers
@interface TestInfo {
    int count() default 1; // 기본값을 1로 지정
}

@TestInfo // TestInfo(count=1)과 동일
public class NewClass { ... }
```
:::

#### 단일 요소
- 어노테이션 요소가 오직 하나뿐이고 이름이 value이면 어노테이션 적용 시 요소 이름 생략 후 값만 기입 가능

```java:no-line-numbers
@interface TestInfo {
    String value();
}

@TestInfo("passed") // @TestInfo(value="passed")와 동일
class NewClass { ... }
```

#### 배열 타입 요소
- 요소 타입이 배열인 경우 괄호 {}를 사용해 여러 개의 값 지정 가능
- 기본값 지정 시 괄호 {} 사용 가능
- 요소 이름이 value인 경우 역시 요소 이름 생략 후 값만 기입 가능

```java:no-line-numbers
@interface TestInfo {
    String[] testTools();
}

@Test(testTools={"JUnit", "AutoTester"}) // 값이 여러 개인 경우
@Test(testTools="JUnit") // 값이 하나인 경우 괄호 생략 가능
@Test(testTools={}) // 값이 없을 때는 괄호 {} 반드시 필요
```

```java:no-line-numbers
@interface TestInfo {
    String[] info() default {"aaa", "bbb"} // 기본값이 여러 개인 경우 괄호 {} 사용
    String[] info2() default "ccc"; // 기본값이 하나인 경우 괄호 생략 가능
}
```

```java:no-line-numbers
@interface SuppressWarnings {
    String[] value();
}

@SuppressWarnings({"deprecation", "unchecked"})
class NewClass { ... }
```

### 모든 어노테이션의 조상 java.lang.annotation.Annotation
- 모든 어노테이션의 조상은 Annotation임
- 그러나 어노테이션은 **상속이 허용되지 않으므로 명시적으로 Annotation을 조상으로 지정할 수 없음**

```java:no-line-numbers
@interface TestInfo extends Annotation { // Error. 허용되지 않는 표현
    ...
}
```

(작성 중 ...)

## A. 참조
S. Namgung, "3. 애너테이션(annotation)," in *Java의 정석*, Jung-gu, Korea: 도우출판, 2022, ch. 12, sec. 3, pp. 702-720.

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>

