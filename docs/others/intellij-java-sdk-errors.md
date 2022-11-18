---
title: '[IntelliJ] Java SDK 인식 불가 오류 해결'
icon: article
category:
  - Others
  - IntelliJ
date: 2022-11-17
---

MacOS에서 IntelliJ, Java, Spring 개발 환경을 구축하고 실행할 때 겪었던 오류 중 SDK 경로를 제대로 인식하지 못해 발생했던 문제에 대한 내용입니다.

## 문제 상황 1 - 인텔리제이 실행 버튼 비활성화
스프링 프로젝트를 git clone 받아서 인텔리제이로 열었을 때, 실행 버튼이 비활성화되어 있었습니다.

이 문제는 인텔리제이에서 New project > Java로 간단한 자바 프로젝트를 작성하면 해당 어플리케이션의 main 메서드를 가진 클래스 위치에서 실행 버튼이 활성화되어 있고, 이를 실행시킨 뒤 다시 스프링 프로젝트를 열면 해결됐었습니다.

그러나 이 부분도 후술할 [프로젝트 SDK 설정](#-문제-1-2-해결-방법---프로젝트-SDK-설정) 방법으로 해결할 수 있으며, 돌이켜 생각해보니 인텔리제이가 자바 프로젝트를 생성하면서 SDK 설정을 자동으로 했기 때문이 아닌가 추측하고 있습니다.

## 문제 상황 2 - 스프링 Maven 빌드 시 Java version error 발생
Maven 기반 스프링 서버를 구동시켰는데 이번엔 Java version error를 만났습니다.

```:no-line-numbers
java: error: release version 5 not supported
 
Module springframework-quickstart SDK 17 does not support source version 1.5.
Possible solutions:
- Downgrade Project SDK in settings to 1.5 or compatible. Open project settings.
- Upgrade language version in Maven build file to 17. Update pom.xml and reload the project.
```

Upgrade language version in Maven build file to 17. Update pom.xmland reload the project. 라인을 클릭하니 pom.xml에 다음 코드가 추가됐습니다.

::: details pom.xml
```xml:no-line-numbers
...
    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
    </properties>
```
:::

이후 다시 스프링 서버를 구동시켰으나 여전히 같은 오류가 떴습니다.

## 문제 1, 2 해결 방법 - 프로젝트 SDK 설정
문제 2에서 오류 메시지의 Downgrade Project SDK ... 라인을 클릭하거나 File > Project Settings > Project에서 Java SDK를 설정해주면 문제가 해결됐습니다. 결과적으로 문제 1, 2 모두 인텔리제이가 Java SDK를 인식하지 못해 발생한 문제였습니다.

다음 &lt;화면 1&gt;처럼 SDK를 적절히 선택해주면 됩니다. 문제 상황의 경우 No SDK 상태였습니다.

![](https://drive.google.com/uc?export=view&id=1lBW-dGAD4j8Fhu86s-0DLkEaZVNebfcy)
&lt;화면 1. IntelliJ File > Project Settings > Project - SDK 설정&gt;
{ .align-center }

문제 2의 경우 Add SDK > Download JDK를 선택하여 JDK 1.8을 다운받아 선택해주어 해결했습니다.

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
