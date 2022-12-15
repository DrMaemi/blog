---
title: '[JAVA] 직렬화(Serialization) & 역직렬화(Deserialization)'
icon: article
category:
  - Java
date: 2022-12-14
---

## 데이터 직렬화와 역직렬화
- 데이터 직렬화
    - 메모리를 디스크에 저장하거나 네트워크 통신에 사용하기 위한 형식으로 변환하는 것
- 데이터 역직렬화
    - 디스크에 저장한 데이터를 읽거나 네트워크 통신으로 받은 데이터를 메모리에 쓸 수 있도록 변환하는 것

## 직렬화가 필요한 이유
개발 언어를 무엇을 선택하든 데이터(변수)를 메모리 구조 상 다룰 때 다음 2가지 형식으로만 사용합니다.

- 값 형식 데이터
    - int, float, char 등 값 데이터는 스택에 메모리가 쌓이고 직접 접근 가능
- 참조 형식 데이터
    - 객체와 같은 참조 형식 변수를 선언하면 힙에 메모리가 할당되고 스택에서 이 힙 메모리를 참조

위 2가지 형식 중 디스크에 저장하거나 통신할 때는 값 형식 데이터만 사용할 수 있습니다.

예를 들어 객체 A를 만들고, 그 객체의 데이터가 저장된 주소 값이 0x00012345라고 한다면, 이 주소를 파일로서 저장해둬도(디스크에 저장해둬도) 그 프로세스가 종료되면 힙 메모리에 있던 실제 객체 데이터는 전부 할당 해제됩니다.

## 직렬화가 데이터를 변환하는 법
직렬화를 하게 되면 참조 주소가 가진 데이터를 텍스트 또는 바이너리 등의 형태로

(작성 중...)

## 직렬화 - 역직렬화 과정
(작성 중...)

## 예제 코드 - 직렬화
::: details Member 클래스
```java:no-line-numbers
public class Member implements Serializable {
    private String name;
    private String email;
    private int age;

    public Member(String name, String email, int age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    @Override
    public String toString() {
        return String.format("Member", name, email, age);
    }
}
```
:::

::: details Main 클래스
```java:no-line-numbers
public class Main {
    public static void main(String[] args) {
        Member member = new Member("김아무개", "example123@example.com", 25);
        byte[] serializedMember;

        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ObjectOutputStream oos = new ObjectOutputStream(baos);
            oos.writeObject(member);
            serializedMember = baos.toByteArray();
            System.out.println(Base64.getEncoder().encodeToString(serializedMember));

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

결과
```:no-line-numbers
rO0ABXNyACBzZXJpYWxpemVfZGVzZXJpYWxpemF0aW9uLk1lbWJlcgjzyhlZxOpNAgADSQADYWdlTAAFZW1haWx0ABJMamF2YS9sYW5nL1N0cmluZztMAARuYW1lcQB+AAF4cAAAABl0ABZleGFtcGxlMTIzQGV4YW1wbGUuY29tdAAM6rmA7JWE66y06rCc
```
:::

## A. 참조
제이온(Jayon), "[Java] 직렬화와 역직렬화," *tistory.com*, Jan. 15, 2022. [Online]. Available: [https://steady-coding.tistory.com/576](https://steady-coding.tistory.com/576) [Accessed Dec. 14, 2022].

JiwonDev, "자바의 직렬화(Serialization)란?," *tistory.com*, Aug. 4, 2021. [Online]. Available: [https://jiwondev.tistory.com/134?category=882002](https://jiwondev.tistory.com/134?category=882002) [Accessed Dec. 14, 2022].

이수홍, "자바 직렬화, 그것이 알고싶다. 훑어보기편," *woowahan.com*, Oct. 17, 2017. [Online]. Available: [https://techblog.woowahan.com/2550/](https://techblog.woowahan.com/2550/) [Accessed Dec. 14, 2022].

이수홍, "자바 직렬화, 그것이 알고싶다. 실무편," *woowahan.com*, Oct. 17, 2017. [Online]. Available: [https://techblog.woowahan.com/2551/](https://techblog.woowahan.com/2551/) [Accessed Dec. 14, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
