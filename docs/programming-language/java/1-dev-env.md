---
title: '[JAVA] 자바 개발 환경 구성'
icon: article
category: Java
date: 2022-04-08
order: 1
---

자바 개발 환경 구성을 위해서는 1. JDK 설치 2. IDE 설치 두 가지를 진행해야 한다.

## 1. JDK 설치
자바 프로그래밍을 하기 위해서는 자바 개발 키트(Java Developement Kit, JDK)를 반드시 설치해야 한다. JDK는 개발자가 자바 기반 어플리케이션 개발을 위해 사용하는 소프트웨어 패키지다. JDK는 JRE(Java Runtime Environment)과 자바 컴파일러를 포함한다. 컴파일러는 자바 소스(`.java`)를 실행 가능한 클래스 파일(`.class`)로 컴파일하는 역할을 수행한다.

자바 프로그램의 동작과 JDK의 역할에 대해 더 자세히 알고 싶다면 [점프 투 자바: 01-03. 안녕 세상!](https://wikidocs.net/887)을 참조하자.

[Oracle JDK Downlaod](https://www.oracle.com/java/technologies/downloads/) 링크에서 자신의 운영체제에 맞는 Java JDK를 다운받는다.

이후 JDK를 설치한 경로를 시스템의 환경 변수에 추가해준다. 필자는 윈도우를 사용하고, JDK가 `C:\dev\Java\jdk-18`에 설치되어 있다.

![](https://drive.google.com/uc?export=view&id=1KBc8n78tdiGq9bBd2x6A4gpvkHCDa7Vm)
<그림 1. 시스템에 `JAVA_HOME` 변수 등록>
{ .align-center }

![](https://drive.google.com/uc?export=view&id=1387h6_BayjW89xNNAWI_bszAkUDkeDBu)
<그림 2. 시스템 환경 변수에 JDK의 `java.exe`, `javac.exe` 경로 등록>
{ .align-center }

이후 CMD 등에서 `java --version`, `javac`을 입력해 잘 동작하는지 확인한다.

## 2. IDE 설치
자바 개발을 위한 IDE는 이클립스(Eclipse), VS Code, IntelliJ 등 여러 가지가 있는데 본문에서는 Spring Tools 4 for Ecplise 그리고 IntelliJ 두 가지에 대해서 다룬다.

Eclipse와 IntelliJ는 자바 프로그래밍을 위해 가장 많이 사용되는 IDE인데, 두 개를 비교한 [포스트](https://velog.io/@composite/Eclipse-VS-Intellij-IDEA-논란-종결)를 참조하여 자신에게 어떤 환경이 더 유리할지 고민하고 선택해도 좋다.


### 2.1. Spring Tools 4 for Eclipse
[Spring 공식 웹사이트](https://spring.io/tools)에서 Spring Tools 4 for Ecplise 항목에 자신의 운영체제에 맞는 설치 파일을 다운받는다.

설치 파일을 실행하고, 작업 폴더까지 설정하고 나면 STS 4 Ecplise를 실행하여 자바 프로젝트를 생성할 수 있다.

![](https://drive.google.com/uc?export=view&id=1KBiw73ItuerTu4slhVyMWMQcb-SbLUlg)
<그림 3. STS 4 Ecplise 프로젝트 생성>
{ .align-center }

![](https://drive.google.com/uc?export=view&id=19kXMUnh93ghvzyouv_c6MtCT0F47xmdR)
<그림 4. Hello World 출력>
{ .align-center }

#### 2.1.A. `java.lang.module.findexception` 에러
<그림 3>에서 Create module-info.java file 항목의 체크 박스를 해제하지 않으면 프로젝트 루트 경로 밑에 `module-info.java` 파일이 생성된다. 이 경우 에러가 발생하기 때문에 생성된 `module-info.java` 파일을 삭제해야 한다.

### 2.2. IntelliJ
[IntelliJ 공식 웹사이트](https://www.jetbrains.com/ko-kr/idea/download/#section=windows)에서 자신의 운영체제에 맞는 설치 파일을 다운받는다.

Ultimate 에디션을 설치하려면 비용을 지불해야 하고, Community 에디션은 무료로 이용할 수 있다.

설치 파일을 실행하고, 작업 폴더까지 설정하고 나면 IntelliJ를 실행하여 자바 프로젝트를 생성할 수 있다.

![](https://drive.google.com/uc?export=view&id=1WeXmpirMS2UOoEfUHO0vY-bF8RsS-hK9)
<그림 5. IntelliJ 프로젝트 생성>
{ .align-center }

![](https://drive.google.com/uc?export=view&id=1HSN7aVR7yJk1JlUsR0CnedMjVPLuEOOg)
<그림 6. SDK로 설치한 JDK 설정>
{ .align-center }

이후 프로젝트 이름을 설정하여 생성을 완료하고, Eclipse의 <그림 4>처럼 `src` 폴더 밑에 패키지와 `.java` 파일을 만들고 `main` 메서드를 생성하여 Hello World를 출력해보자.

## A. 참조
::: left
박응용, "01-03 안녕 세상 !" in *점프 투 자바*, Mar. 25, 2022. [Online]. Available: [https://wikidocs.net/887](https://wikidocs.net/887) [Accessed Apr. 8, 2022].

IT tech develop, "java.lang.module.findexception 에러 해결법", *Tistory*, Apr. 26, 2021. [Online]. Available: [https://engpro.tistory.com/14](https://engpro.tistory.com/14) [Accessed Apr. 8, 2022].

composite.log, "Eclipse VS Intellij IDEA 논란 종결", *velog*, Oct. 7, 2021. [Online]. Available: [https://velog.io/@composite/Eclipse-VS-Intellij-IDEA-논란-종결]((https://velog.io/@composite/Eclipse-VS-Intellij-IDEA-논란-종결) [Accessed Apr. 8, 2022].
:::
