---
title: '[JAVA] RMI'
icon: article
category:
  - Java
date: 2023-01-25
---

## RMI이란
- Remote Method Invocation의 약자
- RPC(Remote Procedure Call, 원격 프로시저 호출)와 같은 개념
- 원격 컴퓨터의 리소스를 사용해서 일련의 기능 수행
- 웹 서버 프로그래밍, 클라우드 컴퓨팅이 대표적인 RMI 기술임

## 사용법
**1. 코드 작성**

![](https://drive.google.com/uc?export=view&id=12qoOHcO2h9pHpLSvwCbl5ZBtfWrqslV-)
&lt;그림 1. 예제 코드 구조&gt;
{ .align-center }

- RmiInterface
```java:no-line-numbers
import java.rmi.Remote;
import java.rmi.RemoteException;

public interface RmiInterface extends Remote {
    public String sayHello(String name) throws RemoteException;
}
```

- RmiImpl
```java:no-line-numbers
import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class RmiImpl extends UnicastRemoteObject implements RmiInterface {
    public RmiImpl() throws RemoteException {
        super();
        // TODO Auto-generated constructor stub
    }

    @Override
    public String sayHello(String name) throws RemoteException {
        System.out.println("Server working...");

        return name+ " Welcome My Server";
    }
}
```

- Client
```java:no-line-numbers
import java.rmi.Naming;

public class Client {
    public static void main(String[] args) throws Exception {
        RmiInterface server = (RmiInterface) Naming.lookup("rmi:127.0.0.1:1234/test");
        String result = server.sayHello("Dr.Maemi");
        System.out.println(result);
    }
}
```

- Server
```java:no-line-numbers
import java.rmi.Naming;

public class Server {
    public static void main(String[] args) throws Exception {
        RmiImpl rmiImpl = new RmiImpl();

        // rmi binding
        Naming.rebind("rmi://127.0.0.1:1234/test", rmiImpl);

        System.out.println("Server started...");
    }
}
```

**2. 자바 파일들을 전부 컴파일**
- 터미널 창에서 javac 명령어를 사용하거나 IDE에서 컴파일

**3. 실행할 메서드를 구현한 클래스의 stub 클래스 생성**
- 다음 명령어를 통해 stub 클래스 생성
```:no-line-numbers
rmic RmiImpl
```

**4. 서버 측에서 rmiregistry 시작**
- 클라이언트 측으로부터 rmi 요청을 받으면 서비스를 수행하도록 함
- 다음 명령어를 통해 rmi 서비스 시작
```:no-line-numbers
start rmiregistry
```

**5. 서버 구동**
- 서버 측 main 메서드 실행
```
java Server
```

**6. 클라이언트 구동**
- 클라이언트 측 main 메서드 실행
```:no-line-numbers
java Client
```

## 첨언
- RMI를 직접 구현하는 것은 어려워서 현업에서는 프레임워크(ex. Spring)를 이용하거나 웹 서버를 이용하는 방향으로 많이 사용함

## A. 참조
빅데이터맨, "Java의 RPC - RMI," *blog.naver.com*, Jul. 13, 2017. [Online]. Available: [https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=lhgdeveloper&logNo=221050648248](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=lhgdeveloper&logNo=221050648248) [Accessed Jan. 25, 2023].

<script setup lang="ts">
import UmlScript from "@UmlScript";
</script>

<UmlScript/>
