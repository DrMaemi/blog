---
title: '[JAVA] 예외 처리(Exception Handling)'
icon: article
category:
  - Java
date: 2023-01-29
---

## 프로그램 오류
- 프로그래밍 실행 중 어떤 원인에 의해 오작동을 하거나 비정상적으로 종료되는 경우, 이러한 결과를 초래하는 원인을 프로그램 에러 또는 오류라고 함
- 발생 시점에 따라 컴파일 에러(compile-time error), 런타임 에러(runtime error)로 나눔
- 컴파일 에러는 컴파일할 때 발생하는 에러
- 런타임 에러는 프로그램 실행 도중 발생하는 에러

![](https://drive.google.com/uc?export=view&id=1ANHAD8ZWg1rjYOzWlh_Espvyva6SRV6q)
&lt;그림 1. 자바 Error, Exception 종류와 계층도 &gt;
{ .align-center }

- 컴파일 에러
  - 자바 소스코드를 컴파일하면 컴파일러가 소스코드(*.java)에 대해 오타나 잘못된 구문, 자료형 체크 등 기본적 검사를 수행해 오류가 있는지 알려줌
- 런타임 에러
  - 프로그램 실행 도중 발생하는 프로그램 오류
  - 에러(Error)와 예외(Exception)으로 구분
- 에러(Error)
  - 메모리 부족(OutOfMemoryError)나 스택오버플로우(StackOverflowError)와 같이 발생하면 복구할 수 없는 심각한 오류
- 예외(Exception)
  - 발생하더라도 프로그램 코드에 의해 수습될 수 있는 비교적 덜 심각한 오류
  - RuntimeException과 그 외 Exception들로 구분지음
- RuntimeException
  - 주로 프로그래머의 실수에 의해 발생될 수 있는 예외들
  - ex. 배열의 범위를 벗어나 접근 - ArrayIndexOutOfBoundsException
  - ex. 값이 null인 참조변수 호출 - NullPointerException
- 그 외 Exception
  - 주로 프로그램 사용자에 의해 발생하는 예외들
  - ex. 존재하지 않는 파일 입력 - ClassNotFoundException
  - ex. 입력한 데이터 형식이 잘못됨 - DataFormatException


## 예외 클래스의 계층 구조
![](https://drive.google.com/uc?export=view&id=1-4-PiowovXTF7W4qq_O5i60d4u1oloym)
&lt;그림 2. 예외 클래스 계층도&gt;
{ .align-center }

- 자바에서는 에러와 예외를 클래스로 정의하였음
- 자바의 모든 클래스의 조상은 Object이므로 에러와 예외 또한 Object의 자손 클래스임
- &lt;그림 1&gt;에서 확인할 수 있듯 모든 예외의 최고 조상은 Exception 클래스임

## 예외 처리 - try-catch 문
- 예외 처리
  - 정의
    - 프로그램 실행 시 발생할 수 있는 예외에 대비한 코드를 작성하는 것
  - 목적
    - 프로그램 비정상 종료를 막고 정상적인 실행 상태를 유지하는 것

try-catch문 예제

```java:no-line-numbers
public class ExceptionEx1 {
    public static void main(String[] args) {
        try {
            try { } catch (Exception e) { }
        } catch (Exception e) {
            try { } catch (Exception e) { } // 에러 - 변수 e가 중복 선언됨
        }
        
        try { // 하나의 메서드 내에 여러 try-catch 문을 사용할 수 있음
            
        } catch (Exception e) {
            
        }
    }
}
```
- catch 블럭 괄호 내에 선언된 변수는 catch 블럭 내에서만 유효함
  - catch 블럭 내에 또 다른 try-catch 문이 포함된 경우 같은 이름의 참조변수를 사용해선 안됨

## printStackTrace() & getMessage()
- 예외 클래스의 인스턴스에는 발생한 예외에 대한 정보가 있으며 printStackTrace()와 getMessage() 메서드로부터 얻을 수 있음
- printStackTrace()
  - 예외 발생 당시 호출 스택(Call Stack)에 있던 메서드 정보와 예외 메시지를 출력
```:no-line-numbers
java.lang.AritemeticException: / by zero
    at ExceptionEx.main(ExceptionEx.java:7)
```
- getMessage()
  - 발생한 예외 클래스의 인스턴스에 저장된 메시지를 얻을 수 있음
```:no-line-numbers
/ by zero
```

## 멀티 catch 블럭
- JDK1.7부터 여러 catch 블럭을 `|` 기호를 이용해 하나의 catch 블럭으로 합칠 수 있게 되었는데, 이를 멀티 catch 블럭이라 함
- 중복 코드를 줄일 수 있다는 장점이 있음

```java:no-line-numbers
// 아래 코드를
try {
    ...
} catch (ExceptionA e1) {
    e.printStackTrace();
} catch (ExceptionB e2) {
    e.printStackTrace();
}

// 다음과 같이 바꿈
try {
    ...
} catch (Exception A | Exception B e) {
    e.printStackTrace();
}
```

## 예외 발생시키기
작성 중...

## A. 참조
S. Namgung, "8. 예외처리(exception handling)," in *Java의 정석*, Jung-gu, Korea: 도우출판, 2022, ch. 6, sec. 3, pp. 414-424.
