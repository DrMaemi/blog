---
title: '[MacOS] JDK 버전 인식과 변경'
icon: article
category:
  - Others
  - MacOS
date: 2023-01-15
---

## MacOS JDK 경로 확인
```:no-line-numbers
$ /usr/libexec/java_home -V
Matching Java Virtual Machines (3):
    17.0.5 (arm64) "Oracle Corporation" - "Java SE 17.0.5" /Library/Java/JavaVirtualMachines/jdk-17.0.5.jdk/Contents/Home
    11.0.11 (x86_64) "AdoptOpenJDK" - "AdoptOpenJDK 11" /Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home
    1.8.0_352 (arm64) "Amazon" - "Amazon Corretto 8" /Users/user/Library/Java/JavaVirtualMachines/corretto-1.8.0_352/Contents/Home
/Library/Java/JavaVirtualMachines/jdk-17.0.5.jdk/Contents/Home
```
- JDK 17, 8, 11 버전 순으로 다운받았을 때 위와 같이 표시됨
- 가장 높은 버전이 제일 위에 위치하고, 가장 위에 있는 JDK를 default로 사용하는 것으로 보임

위 상황에서 JDK 8 버전을 default로 사용하고 싶을 때, 해결 방법으로 다음 두 가지를 생각했습니다.

1. `export JAVA_HOME` 명령어로 환경 변수 설정
2. JDK 17, 11 제거

## 방법 1. export JAVA_HOME
터미널에서 다음과 같이 export 명령어를 실행합니다.

```:no-line-numbers
$ export JAVA_HOME=$(/usr/libexec/java_home -v1.8)
$ java -version
openjdk version "1.8.0_352"
OpenJDK Runtime Environment Corretto-8.352.08.1 (build 1.8.0_352-b08)
OpenJDK 64-Bit Server VM Corretto-8.352.08.1 (build 25.352-b08, mixed mode)
```

## 방법 2. JDK 제거
`rm -rf` 명령어로 JDK를 제거해줍니다.

```:no-line-numbers
# 전체 JDK 제거
$ rm -rf /Library/Java

# 또는, 특정 버전의 JDK 제거
$ rm -rf /Library/Java/JavaVirtualMachines/jdk-17.0.5.jdk/
```

## `java_home` 파일에 대한 궁금증
본문의 내용을 조사하면서 위에서 설명한 `/usr/libexec/java_home` 파일이 만들어지는 경위나 그 파일이 어떻게 동작하는지에 대해 궁금해졌습니다.

관련 내용을 찾다가 정확히 관련 내용에 대해 자세히 설명하고 있는 포스트를 찾았습니다. 다음 내용은 [Ross Kendle, "java_home and JAVA_HOME on macOS"](https://medium.com/notes-for-geeks/java-home-and-java-home-on-macos-f246cab643bd) 포스트를 참고한 뒤 제가 짐작하여 작성한 내용입니다.

### 자바 JDK 설치 시 발생하는 일들
- `/Library/Java/JavaVirtualMachines/[jdk-version]/`(자바 JDK) 경로 하위에 자바 관련 파일들 다운로드
- `/System/Libarary/Frameworks/JavaVM.framework/Versions/[jdk-version]/Commands` 경로 하위에 `java`, `java_home`과 같은 명령어 실행 파일 생성
- `java` 명령어는 자바 JDK 경로의 실행 파일을 참조
- `java_home`은 시스템에 설치된 자바 JDK 경로 정보 추가

### `java`, `java_home`의 실체 - symbolic link
```:no-line-numbers
$ which java
/usr/bin/java
```

```:no-line-numbers
$ ls -l /usr/bin/java
/usr/bin/java -> /System/Library/Frameworks/JavaVM.framework/Versions/Current/Commands/java
```

- `/System/Library/...` 하위의 `java`는 실제로 설치된 JDK 경로 하위의 `java` 실행 파일을 참조하는 것으로 추측(확인 필요)

```:no-line-numbers
$ ls -l /usr/libexec/java_home
/usr/libexec/java_home -> /System/Library/Frameworks/JavaVM.framework/Versions/Current/Commands/java_home
```

### `man java_home`
```:no-line-numbers
java_home(1)                                                                                                                                                                              
NAME
       java_home - return a value for $JAVA_HOME

-v or --version  version
              Filters the returned JVMs by the major platform version in "JVMVersion" form.
				Example versions: "1.5+", or "1.6*".

-V or --verbose
              Prints the matching list of JVMs and architectures to stderr.

--exec  command ...
              Executes the command at $JAVA_HOME/bin/<command> and passes the remaining arguments. 
				Any arguments to select which $JAVA_HOME to use must precede the --exec option.
```

### 하지만 `JAVA_HOME`은 `java_home`에 의존적이진 않음
```:no-line-numbers
# Set JAVA_HOME to JDK version 1.7
export JAVA_HOME=`/usr/libexec/java_home -v 1.7`

# Set JAVA_HOME to the default JDK
export JAVA_HOME=`/usr/libexec/java_home`
```

## 결론
- 시스템에 JDK를 설치할 때 이에 대한 경로가 `java_home`에 등록되고 관리되는 것으로 추측
- 시스템은 기본적으론 `java_home`에 기록된 JDK 경로를 이용해 default `JAVA_HOME` 환경 변수를 설정해둠
- 위에서 설정된 `JAVA_HOME`을 이용해 시스템은 자바 프로그램을 실행할 수 있게 됨(`/usr/bin/java` → `/System/Library/.../java` → `$JAVA_HOME/bin/java`)
- `JAVA_HOME`은 `java_home`에 의존적이진 않음

## A. 참조
Ross Kendle, "java_home and JAVA_HOME on macOS," *medium.com*, Jun. 1, 2017. [Online]. Available: [https://medium.com/notes-for-geeks/java-home-and-java-home-on-macos-f246cab643bd](https://medium.com/notes-for-geeks/java-home-and-java-home-on-macos-f246cab643bd) [Accessed Jan. 14, 2023].
