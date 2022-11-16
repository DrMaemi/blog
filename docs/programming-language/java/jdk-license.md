---
title: '[JAVA] Java 라이선스 무료 유료 - Oracle JDK & OpenJDK의 차이'
icon: article
category:
  - Java
date: 2022-11-16
---

## JDK 종류 - Oracle JDK & OpenJDK
- Java 어플리케이션을 실행하기 위해서는 JVM이 필요하고, 컴파일하기 위해 JDK가 필요함
보통 JDK를 설치하면 JVM(Hotspot이라고도 함, Java 기술의 핵심)도 함께 설치됨
JDK는 2개 버전으로 나뉨
- 폐쇄적 상업 코드 기반 Oracle JDK
- 오픈소스 기반 OpenJDK
- Oracle JDK는 OpenJDK에 없는, 재산권이 걸린 플러그인 제공
- 예를 들면 글꼴 라이브러리, Java Web Start
- 사용자의 웹 브라우저에서 자바 애플릿을 실행하려면 필요한 기능
- 서버 개발에는 쓰이지 않는 기능들임
- 자바 초기 Java 6 시대에 OpenJDK가 Oracle JDK보다 성능, 안정성이 크게 떨어졌었음
- 오늘날에는 Oracle JDK만 제공하는 일부 라이브러리를 제외하고 차이가 거의 없음

## Oracle JDK와 Java의 유-무료 논쟁
- Java의 무료 논쟁은 2011년 오라클이 소유권을 가지며 시작됨
- 일단 명확히 해야할 점으로, Java라는 프로그래밍 언어 자체는 GPL 라이선스로 무료임
- 그렇지 않다면 오늘날 Java가 시장 지배적 언어가 되지 못했을 것
- 중요한 부분은 Java로 작성한 프로그램을 컴파일(with JDK)하고 실행(with JVM)시키는 데 있음
- JDK와 JVM을 제공하는 OpenJDK는 'GPL v2 with the Classpath Exception 라이선스'로 무료임
- 문제는 Oracle JDK인데, 사용 목적에 따라 무료-유료가 될 수 있음

### Oracle JDK 구성 요소
> 1. JDK 2. JRE(JVM) 3. JavaFX SDK 4. JavaFX Runtime 5. JRockit JDK

- Oracle JDK는 BCL(Oracle Binary Code License) 라이선스로 위 기능을 일반 목적의 컴퓨팅(General Purpose Computing)에 사용시에만 무료라고 밝힘
    - https://www.linkedin.com/pulse/oracle-java-licensing-free-charge-vs-commercial-use-richard-spithoven

(작성 중...)

## A. 참조
지단로보트, "Java 유료 논쟁, Oracle JDK와 OpenJDK의 차이 정리," *Tistory*, Sep. 26, 2017. [Online]. Available: [https://jsonobject.tistory.com/395](https://jsonobject.tistory.com/395) [Accessed Nov. 16, 2022].
