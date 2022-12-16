---
title: '[JAVA] CLASSPATH'
icon: article
category:
  - Java
date: 2022-11-15
---

## 들어가며
자바로 프로그래밍해야 하는 주제에 자바의 클래스 패스도 제대로 모르고 있었습니다. 모르고 있단 걸 알게 된 이 참에 정리해두려 합니다.

## What is CLASSPATH
먼저 자바 소스 파일을 컴파일하게 되면 클래스별로 바이트 코드로 작성된 클래스 파일(.class)이 생성됩니다.

그리고 JVM은 프로그램을 실행하기 위해 클래스 파일들을 찾아야 합니다(클래스 파일을 찾지 못하면 IDE에서 실행 버튼이 활성화되지 않음).

이 때 클래스 파일들의 경로를 지정해놓은 것이 CLASSPATH입니다.

JVM은 이 CLASSPATH에 지정된 경로를 모두 검색하면서 특정 클래스에 대한 코드가 포함된 .class 파일을 찾습니다. 클래스 코드가 포함된 첫 번째 .class 파일을 발견하면 그 파일을 사용합니다.

CLASSPATH를 별도로 지정하지 않으면 기본값(default)은 현재 위치에 대한 경로가 되고, 별도로 지정할 수도 있습니다.

CLASSPATH를 별도로 지정할 수 있는 두 가지 방법이 있는데, 하나는 환경 변수 CLASSPATH를 사용하는 방법이고, 또 하나는 Java Runtime에 -classpath 플래그를 사용하는 방법입니다.

## CLASSPATH에 지정할 수 있는 경로/파일 종류
CLASSPATH는 콜론(:)으로 구분된 디렉토리 및 파일 목록이 될 수 있습니다. 예를 들어 다음과 같이 세 가지 유형의 디렉토리 또는 파일을 조합하여 CLASSPATH에 지정할 수 있습니다.

- 디렉토리 → /export/home/username/java/classes
- zip파일 → myclasses.zip
- jar파일 → myclasses.jar

조합하면 다음과 같이 CLASSPATH를 지정할 수 있습니다.

/export/home/username/java/classes:/export/home/username/java/classes/util.zip:/e
xport/home/username/java/classes/checkers.jar

## CLASSPATH의 사용처
작성 중...

## 예제

```java:no-line-numbers
public class Item {
    public void print() {
        System.out.println("Hello world");
    }
}
```

```java:no-line-numbers
public class ClasspathDemo {
    public static void main(String[] args) {
        Item item = new Item();
        i.print();
    }
}
```

컴파일

```:no-line-numbers
javac ClasspathDemo.java
```

결과 다음 두 개의 클래스 파일이 생성됩니다.

- ClasspathDemo.class
- Item.class

현재 디렉토리 하위에 `classpath` 디렉토리를 만들고 `Item.class` 파일을 이동시킨 뒤 다음 java 명령어로 main 클래스를 실행하면

```:no-line-numbers
java ClasspathDemo
```

다음과 같이 `Item`에 대한 classpath를 찾을 수 없다는 오류가 발생합니다.

```:no-line-numbers
Exception in thread "main" java.lang.NoClassDefFoundError: Item
	at classpath.ClasspathDemo.main(ClasspathDemo.java:5)
Caused by: java.lang.ClassNotFoundException: classpath.Item
	at java.net.URLClassLoader.findClass(URLClassLoader.java:387)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:418)
	at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:352)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:351)
	... 1 more
```

이는 java 명령어에 `-classpath` 옵션을 추가하여 해결할 수 있습니다.

```:no-line-numbers
java -classpath ".:classpath" ClasspathDemo
```

(작성 중...)

## A. 참조
pengang1011, "JAVA CLASSPATH / Class loading," *blog.naver.com*, Jan. 3, 2021. [Online]. Available: [https://blog.naver.com/pengang1011/222194349710](https://blog.naver.com/pengang1011/222194349710) [Accessed Nov. 15, 2022].

코딩하는 오징어, "자바 클래스패스(classpath)란?," *Tistory*, Mar. 25, 2018. [Online]. Available: [https://effectivesquid.tistory.com/21](https://effectivesquid.tistory.com/21) [Accessed Nov. 15, 2022].

생활 코딩, "클래스 패스," *opentutorials.org*, Dec. 16, 2013. [Online]. Available: [https://opentutorials.org/course/1223/5527](https://opentutorials.org/course/1223/5527) [Accessed Dec. 16, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
