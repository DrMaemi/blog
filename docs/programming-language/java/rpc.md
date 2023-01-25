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
- RmiInterface
```java:no-line-numbers
package rmi;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface RmiInterface extends Remote {
    public String sayHello(String name) throws RemoteException;
}
```

- Client
```java:no-line-numbers
package rmi;

import java.rmi.Naming;

public class Client {
    public static void main(String[] args) throws Exception {
        Server server = (Server) Naming.lookup("rmi:127.0.0.1:1234/test");
        String result = server.sayHello("Dr.Maemi");
        System.out.println(result);
    }
}
```

- Server
```java:no-line-numbers
package rmi;

import java.rmi.RemoteException;

public class Server implements RmiInterface {

    public Server() throws RemoteException {
        super();
    }

    @Override
    public String sayHello(String name) throws RemoteException {
        System.out.println("Server working");
        return name + " Welcome My Server";
    }
}
```

(작성 중)

## A. 참조
빅데이터맨, "Java의 RPC - RMI," *blog.naver.com*, Jul. 13, 2017. [Online]. Available: [https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=lhgdeveloper&logNo=221050648248](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=lhgdeveloper&logNo=221050648248) [Accessed Jan. 25, 2023].
