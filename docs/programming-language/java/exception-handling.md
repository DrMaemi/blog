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

## 예외 처리 - try-catch문
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
        
        try { // 하나의 메서드 내에 여러 try-catch문을 사용할 수 있음
            
        } catch (Exception e) {
            
        }
    }
}
```
- catch 블럭 괄호 내에 선언된 변수는 catch 블럭 내에서만 유효함
  - catch 블럭 내에 또 다른 try-catch문이 포함된 경우 같은 이름의 참조변수를 사용해선 안됨

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
### 예외 객체를 throw하기
```java:no-line-numbers
public class ExceptionEx9 {
    public static void main(String[] args) {
        try {
            Exception e = new Exception("고의로 발생시킴");
            throw e;

            // throw new Exception("고의로 발생시킴 2"); 이렇게 한 줄로 할 수 있음
        } catch (Exception e) {
            System.out.println("에러 메시지 :" + e.getMessage());
            e.printStackTrace();
        }
        System.out.println("프로그램 정상 종료");
    }
}
```

실행 결과
```:no-line-numbers
에러 메시지 :고의로 발생시킴
프로그램 정상 종료
java.lang.Exception: 고의로 발생시킴
	at exception_handling.ExceptionEx9.main(ExceptionEx9.java:6)
```

#### 컴파일 오류
```java:no-line-numbers
public class ExceptionEx10 {
    public static void main(String[] args) {
        throw new Exception();
    }
}
```

실행 결과

```:no-line-numbers
java: unreported exception java.lang.Exception; must be caught or declared to be thrown
```

- 예외처리가 되어야 할 부분에 안되어있어 발생하는 컴파일 에러
- **RuntimeException을 제외한 Exception이 발생할 가능성이 있는 코드에 대해서는 반드시 예외처리를 해야 함**

### 메서드에 예외 선언
형식

```java:no-line-numbers
void method() throws Exception1, Exception2, ... {
    ...
}
```

- 메서드를 호출한 상위 메서드에 예외처리를 위임하는 방식
- 이렇게 예외를 선언하는 경우 해당 예외 뿐 아니라 자손 타입의 예외까지 발생할 수 있다는 점에 주의
- 오버라이딩 시 단순히 선언된 예외 개수 뿐 아니라 상속 관계까지 고려해야 함
- 자바에서 메서드를 작성할 때 메서드 내에서 발생할 가능성이 있는 옐외를 메서드 선언부에 명시하는 것
- 선언된 예외를 보고 처리 강요 → 견고한 프로그램 코드 작성을 도움

예제
```java:no-line-numbers
public class ExceptionEx12 {
    public static void main(String[] args) {
        try {
            method1();

        } catch (Exception e) {
            System.out.println("main 메서드에서 예외가 처리됐습니다.");
            e.printStackTrace();
        }
    }

    static void method1() throws Exception {
        throw new Exception();
    }
}
```

실행 결과
```:no-line-numbers
main 메서드에서 예외가 처리됐습니다.
java.lang.Exception
	at exception_handling.ExceptionEx12.method1(ExceptionEx12.java:15)
	at exception_handling.ExceptionEx12.main(ExceptionEx12.java:6)
```

## finally 블럭
```java:no-line-numbers
public class FinallyTest {
    public static void main(String[] args) {
        try {
            startInstall();
            copyFiles();
            return; // System.exit(0) 을 사용하면 finally 블럭이 실행되지 않음
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            deleteTempFiles();
        }
    }

    static void startInstall() {
        System.out.println("Program installing....");
    }
    static void copyFiles() {
        System.out.println("Files are copied");
    }

    static void deleteTempFiles() {
        System.out.println("Temp files are deleted");
    }
}
```

실행 결과

```:no-line-numbers
Program installing....
Files are copied
Temp files are deleted
```

- try/catch 블럭 내 return문이 실행되는 경우에도 finally 블럭이 실행됨
  - 에러 발생 여부와 상관 없이 반드시 실행되어야 하는 코드를 finally 블럭에 작성함
- `System.exit(0)`의 경우 finally 블럭이 실행되지 않음
- try/catch 블럭 앞에 선언된 return문이 있다면 try/catch/finally 블럭 코드가 실행되지 않음

## try-with-resources문
- JDK 1.7 버전 이상부터 사용 가능

```java:no-line-numbers
public class FinallyTest2 {
    public static void main(String[] args) {
        FileInputStream fis = null;
        DataInputStream dis = null;

        try {
            fis = new FileInputStream("score.dat");
            dis = new DataInputStream(fis);
        } catch (IOException ie) {
            ie.printStackTrace();
        } finally {
            try {
                if (dis != null)
                    dis.close();
            } catch (IOException ie) {
                ie.printStackTrace();
            }
        }
    }
}
```

- finally 블럭 안에 null처리 if문 없이 `dis.close()`를 작성할 경우 그것이 예외를 발생시킬 수 있다는 문제가 있음
- 그에 따라 위와 같이, finally 블럭 안에 try-catch 구문이 들어가있는 가독성 떨어지는 코드가 작성됨

위 코드를 try-with-resources 구문으로 바꾸면

```java:no-line-numbers
public class TryWithResources {
    public static void main(String[] args) {
        int sum = 0;

        try (
            FileInputStream fis = new FileInputStream("score.dat");
            DataInputStream dis = new DataInputStream(fis);
        ) {
            while (true) {
                int score = dis.readInt();
                System.out.println(score);
                sum += score;
            }
        } catch (EOFException eofException) {
            System.out.println("점수의 총합은 " + sum + "입니다.");
        } catch (IOException ie) {
            ie.printStackTrace();
        }
    }
}
```

- try-with-resources 구문은 try 괄호 () 안에 객체를 생성하는 문장을 넣는 것임
- 이 객체는 별도로 close()를 호출하지 않아도 try 블럭을 벗어나는 순간 자동으로 close()가 호출됨
- try-with-resources문에 의해 **자동으로 객체의 close()가 호출되려면 AutoCloseable 인터페이스를 구현해야 함**

### AutoCloseable
```java:no-line-numbers
public interface AutoCloseable {
    void close() throws Exception;
}
```

- AutoCloseable 인터페이스는 각 클래스에서 적절히 자원 반환 작업을 하도록 구현되어 있음
- **close()도 Exception을 발생시킬 수 있음**

예제 - TryWithResourceEx
```java:no-line-numbers
public class TryWithResourceEx {
    public static void main(String[] args) {
        try (CloseableResource cr = new CloseableResource()) {
            cr.exceptionWork(false); // 예외 발생 x
        } catch (WorkException e) {
            e.printStackTrace();
        } catch (CloseException e) {
            e.printStackTrace();
        }

        System.out.println();

        try (CloseableResource cr = new CloseableResource()) {
            cr.exceptionWork(true);
        } catch (WorkException e) {
            e.printStackTrace();
        } catch (CloseException e) {
            e.printStackTrace();
        }
    }
}
```

CloseableResource
```java:no-line-numbers
class CloseableResource implements AutoCloseable {
    public void exceptionWork(boolean exception) throws WorkException {
        System.out.println("exceptionWork(" + exception + ") called");

        if (exception) {
            throw new WorkException("WorkException occurred");
        }
    }

    @Override
    public void close() throws CloseException {
        System.out.println("close() called");
        throw new CloseException("CloseException occurred");
    }
}
```

WorkException
```java:no-line-numbers
class WorkException extends Exception {
    WorkException(String msg) { super(msg); }
}
```

CloseException
```java:no-line-numbers
class CloseException extends Exception {
    CloseException(String msg) { super(msg); }
}
```

실행 결과
```:no-line-numbers{12-14}
exceptionWork(false) called
close() called

exceptionWork(true) called
close() called
exception_handling.CloseException: CloseException occurred
	at exception_handling.CloseableResource.close(TryWithResourceEx.java:37)
	at exception_handling.TryWithResourceEx.main(TryWithResourceEx.java:7)
exception_handling.WorkException: WorkException occurred
	at exception_handling.CloseableResource.exceptionWork(TryWithResourceEx.java:30)
	at exception_handling.TryWithResourceEx.main(TryWithResourceEx.java:16)
	Suppressed: exception_handling.CloseException: CloseException occurred
		at exception_handling.CloseableResource.close(TryWithResourceEx.java:37)
		at exception_handling.TryWithResourceEx.main(TryWithResourceEx.java:17)
```

- main 메서드의 첫 번째 try-catch문에서는 CloseException 발생
- 두 번째 try-catch문에서는 WorkException, CloseException 발생
- 이 경우 WorkException 호출스택이 출력되고, CloseException 호출스택은 `Suppressed` 수식어와 함께 출력됨
- 두 개 이상의 예외가 동시에 발생할 수 없기 때문에 실제 발생 예외는 WorkException으로, CloseException은 억제된(suppressed) 예외로 다룸
- 억제된 예외에 대한 정보는 실제 발생한 예외에 함께 저장됨
- Throwable 클래스에는 억제된 예외와 관련된 메서드가 정의되어 있음

```java:no-line-numbers
void addSuppressed(Throwable exception) // 억제된 예외 추가
Throwable[] getSuppressed() // 억제된 예외들(배열) 반환
```

## 사용자 정의 예외 만들기
간단한 형태
```java:no-line-numbers
public class MyException extends Exception {
    MyException(String msg) {
        super(msg);
    }
}
```

필요하다면 멤버 변수나 메서드를 추가할 수 있습니다.
```java:no-line-numbers
public class MyException extends Exception {
    private final int ERR_CODE;

    MyException(String msg, int errCode) {
        super(msg);
        ERR_CODE = errCode;
    }

    public int getErrCode() {
        return ERR_CODE;
    }
}
```
- catch 블럭에서 getMessage(), getErrCode() 메서드를 이용해 메시지와 에러 코드를 확인할 수 있음

## 예외 되던지기(Exception re-throwing)
```java:no-line-numbers{15}
public class ExceptionEx17 {
    public static void main(String[] args) {
        try {
            method1();
        } catch (Exception e) {
            System.out.println("main에서 예외 처리");
        }
    }

    static void method1() throws Exception {
        try {
            throw new Exception();
        } catch (Exception e) {
            System.out.println("method1에서 예외 처리");
            throw e;
        }
    }
}
```

실행 결과
```:no-line-numbers
method1에서 예외 처리
main에서 예외 처리
```

### return문
반환값이 있는 메서드의 경우 catch블럭에도 return문이 있어야 합니다. 또는 Exception re-throwing을 해야합니다. 이 때문에 검증 시 assert문 대신 AssertError를 생성해 던집니다.

finally블럭에도 return문을 사용할 수 있는데, try블럭이나 catch블럭의 return문 다음에 수행되지만 최종적으로 fianlly 블럭 내 return문 값이 반환됩니다.

```java:no-line-numbers
...
    static int method2() throws Exception {
        try {
            return 0;
        } catch (Exception e) {
//            return 1;
            throw new Exception();
        }
    }
...
```

## 연결된 예외(Chained Exception)
한 예외가 다른 예외를 발생시킬 수도 있습니다. 예를 들어 예외 A가 예외 B를 발생시켰다면 A를 B의 '원인 예외(cause exception)'라고 합니다.

```java:no-line-numbers
try {
    startInstall();
    copyFiles();
} catch (SpaceException e) {
    InstallException ie = new InstallException("설치 중 예외 발생");
    ie.initCause(e);
    throw ie;
} catch (MemoryException me) {
    ...
}
```

- `InstallException`을 생성한 뒤 `initCause()`로 `SpaceException`을 `InstallException`의 원인 예외로 등록
    - `initCause()`는 `Exception` 클래스의 조상인 `Throwable` 클래스에 정의되어 있음
- 이후 `throw ie`로 예외 던짐

### 사용 이유
1. 여러가지 예외를 하나의 큰 분류의 예외로 묶어 다룰 때 편의를 위해 사용함
- ex. `SpaceException`과 `MemoryException`이 `InstallException`을 상속받을 때, catch 블럭으로 `InstallException`만을 다루면?
    - 세부 Exception 확인이 불가능함
    - `SpaceException`, `MemoryException`의 상속 관계 변경 필요 시 번거로움
- 위 문제를 해결하기 위해 예제와 같이 Chained Exception 기법(예외가 원인 예외를 포함할 수 있는)을 사용함

2. checked 예외를 unchecked 예외로 바꾸기 위함
```java:no-line-numbers
static void startInstall() throws SpaceException, MemoryException {
    if (!enoughSpace())
        throw new SpaceException("설치할 공간이 부족합니다");
    
    if (!enoughMemory())
        throw new MemoryException("메모리가 부족합니다");
}
```

```java:no-line-numbers
static void startInstall() throws SpaceException {
    if (!enoughSpace())
        throw new SpaceException("설치할 공간이 부족합니다");
    
    if (!enoughMemory())
        throw new RuntimeException(new MemoryException("메모리가 부족합니다."));
}
```

- `MemoryException`은 `Exception`의 자손으로 반드시 예외를 처리해야 하는데, `RuntimeException`으로 감쌈
  - unchecked가 됨
  - `startInstall()` 선언부에 `MemoryException`을 선언하지 않아도(`throws`에 명시하지 않아도) 됨

## A. 참조
S. Namgung, "8. 예외처리(exception handling)," in *Java의 정석*, Jung-gu, Korea: 도우출판, 2022, ch. 6, sec. 3, pp. 414-447.
