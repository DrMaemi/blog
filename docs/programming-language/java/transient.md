---
title: '[JAVA] transient'
icon: article
category:
  - Java
date: 2023-02-12
---

## Java transient란
- `transient`는 serialize하는 과정에 제외하고 싶은 경우 선언하는 키워드
- 패스워드와 같은 보안정보가 직렬화(serialize)되는 과정에서 제외하고 싶은 경우 적용함
- 다양한 이유로 데이터를 전송을 하고 싶지 않을 때 선언함

## 예제
```java:no-line-numbers{2}
public class Member implements Serializable {
    private transient String name;
    private String email;
    private int age;
    ...
}
```

- 위 Member 객체를 serialize 시 `name` 필드에 null 값이 세팅됨

## A. 참조
Nesoy, "Java transient이란?," *github.io*, Jun. 10, 2018. [Online]. Available: [https://nesoy.github.io/articles/2018-06/Java-transient](https://nesoy.github.io/articles/2018-06/Java-transient) [Accessed Feb. 12, 2023].
