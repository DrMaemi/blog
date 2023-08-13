---
title: '아이템 1. 생성자 대신 정적 팩터리 메서드를 고려하라'
icon: article
category: Effective Java
date: 2023-08-13
---

- 클라이언트가 클래스의 인스턴스를 얻는 전통적 수단은 public 생성자다.
- 그러나 클래스는 생성자와 별도로 정적 팩터리 메서드(static factory method)를 제공할 수 있다.
  - 그 클래스의 인스턴스를 반환하는 단순 정적 메서드다.

```java:no-line-numbers:no-line-numbers
public static Boolean valueOf(boolean b) {
    return b ? Boolean.TRUE : Boolean.FALSE;
}
```

## 장점
1. 이름을 가질 수 있다.
    - 매개변수 및 생성자 자체만으로 반환될 객체의 특성을 제대로 설명하지 못하던 단점 보완
2. 인스턴스를 매번 생성하지 않아도 된다.
    - 비용 효율
    - 불변 객체 설계 가능
3. 반환 타입의 하위 타입 객체를 반환할 수 있다.
    - 반환할 객체의 클래스를 선택할 수 있는 엄청난 유연성을 선물한다.
4. 매번 다른 클래스의 객체를 반환할 수 있다.
    - 매개변수에 따라서 혹은 다른 로직을 통해. 3번과 비슷한 효과
5. 정적 팩토리 메서드를 작성하는 시점에 반환될 객체의 클래스가 존재하지 않아도 된다.
    - 프레임워크를 만드는 근간이 되는 유연성 제공

## 단점
1. 상속 시 public, protected 생성자가 필요한데 정적 팩토리 메서드만 존재하면 하위 클래스를 만들 수 없다.
    - 상속보다 컴포지션을 사용하도록 유도하거나(아이템 18), 불변 타입(아이템 17)으로 만드려면 이 제약을 지켜야 하는데 오히려 장점이 될 수 있다.
2. 프로그래머가 정적 팩토리 메서드를 찾기 어렵다.
    - 정적 팩토리 메서드 방식 인스턴스화 방법을 알아야 한다.
    - 생성자처럼 API 설명에 명확히 드러나지 않는다?

## 흔한 명명 방식
다음은 정적 팩토리 메서드의 흔한 이름들이다.

#### `from`
- 매개변수를 하나 받아 해당 타입의 인스턴스 반환
```java:no-line-numbers
Date d = Date.from(instant)
```
- instant는 `DateTime` 등의 타입이 될 수 있다.

#### of
- 여러 매개변수를 받아 적합한 타입의 인스턴스 반환
```java:no-line-numbers
Set<Rank> faceCards = EnumSet.of(JACK, QUEEN, KING);
```

#### valueOf
- `from`, `of`와 유사
```java:no-line-numbers
BigInterger prime = BigInteger.valueOf(Integer.MAX_VALUE);
```

#### instance / getInstance
- 매개변수를 받는다면 매개변수로 명시한 인스턴스 반환
- 같은 인스턴스임을 보장하진 않는다.
```java:no-line-numbers
StackWalker luke = StackWalker.getInstance(options);
```

#### create / newInstance
- 매번 새로운 인스턴스를 생성해 반환함을 보장한다.
```java:no-line-numbers
Object newArray = Array.newInstance(classObject, arrayLen);
```

#### getType
- getInstance와 유사하지만 다른 클래스의 팩토리 메서드를 정의할 때 사용한다.
- getType의 'Type'은 다른 클래스의 타입
```java:no-line-numbers
FileStore fs = Files.getFileStore(path);
```

#### newType
- newInstance와 유사하지만 다른 클래스의 팩토리 메서드를 정의할 때 사용한다.
- newType의 'Type'은 다른 클래스의 타입
```java:no-line-numbers
BufferedReader br = Files.newBufferedReader(path);
```

#### type
- `getType`, `newType`의 간결한 버전
```java:no-line-numbers
List<Complaint> litany = Collections.list(legacyLitany);
```

## 핵심 정리
- 정적 팩토리 메서드와 public 생성자는 장단이 있다.
- 정적 팩토리를 사용하는게 유리한 경우가 더 많으므로 고려하자.

## A. 참조
J. Bloch, trans. 이복연, "아이템 1. 생성자 대신 정적 팩터리 메서드를 고려하라," in *Effective Java,* 3rd ed. Yeonnam Mapo-gu, Korea: 인사이트, 2018, ch. 2, pp. 8-13.
