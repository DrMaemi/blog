---
title: '[JAVA] System property'
icon: article
category:
  - Java
date: 2022-12-18
---

자바의 System Property는 자바 런타임 정보나 OS 정보가 필요할 때 사용합니다. 즉, 시스템 또는 사용자 정보를 System property에 담아놓고 사용합니다.

예를 들어 실행 위치에 있는 파일을 읽어야 할 때 현재 위치에 대한 정보 등의 시스템 정보를 가져올 때 `System.getProperty()`를 사용합니다.

```java:no-line-numbers
public class CheckUserHome {
    public static void main(String[] args) {
        String dir = System.getProperty("user.home");
        System.out.println(dir);
    }
}
```

```java:no-line-numbers
public class CheckAllProperties {
    public static void main(String[] args) {
        Properties props = System.getProperties();

        for (Enumeration e = props.propertyNames(); e.hasMoreElements();) {
            String key = (String)e.nextElement();
            String value = props.getProperty(key);
            System.out.println(key + "=" + value);
        }
    }
}
```

## 기본 System Property

Property 키 | 설명
----------- | ----
java.version | Java 버전
java.vendor | Java 공급자
java.vendor.url | Java 공급자 주소
java.home	Java를 | 설치한 디렉토리
java.class.version | Java 클래스 버전
java.class.path	| Java 클래스 경로
java.ext.dir | 확장기능의 클래스 경로
os.name | 운영체제 이름
os.arch	| 운영체제 아키텍처
os.version | 운영체제 버전 정보
file.separator | 파일 구분 문자
path.separator | 경로 구분 문자
line.separator | 행 구분 문자
user.name | 사용자 계정
user.home | 사용자 홈 디렉토리
user.dir | 현재 디렉토리

## 임의 Property 저장하기
JVM의 VM arguments는 JVM을 구동할 때 필요한 값들을 세팅하는데, -D 옵션 바로 뒤에 '키=값'을 기입하면 자바 프로그램 내에서 `System.getProperty()`를 통해 값을 가져올 수 있습니다.

예를 들어 `file.location.env`라는 키에 값을 세팅하여 사용하고 싶다면 `-Dfile.location.env="./fileUploads/"`와 같이 VM arguments를 설정하고 `System.getProperty("file.location.env")` 코드를 통해 값에 접근할 수 있습니다.

혹은 프로그램 내부에서 `System.setProperty()`를 통해 값을 세팅할 수 있습니다.

```java:no-line-numbers
public class SetFileLocationEnv {
    public static void main(String[] args) {
        System.setProperty("file.location.env", "./fileUploads/");
        System.out.println(System.getProperty("file.location.env"));
    }
}
```

위처럼 세팅 과정을 거치지 않고 없는 키에 접근하면 null을 반환받습니다.

## A. 참조
lifeinprogram, "System.getProperty() 사용법," *tistory.com*, Mar. 18, 2020. [Online]. Available: [https://lifeinprogram.tistory.com/19](https://lifeinprogram.tistory.com/19) [Accessed Dec. 18, 2022].
