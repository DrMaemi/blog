---
title: '** [자바 병렬 프로그래밍] 01. 개요'
icon: article
category: 자바 병렬 프로그래밍
date: 2022-11-08
order: 1
---

프로그램을 제대로 돌아가게 작성하는 일은 어렵습니다. 그러나 여러 작업을 동시에 실행하는 프로그램을 제대로 돌아가게 작성하기는 훨씬 더 어렵습니다.

스레드는 자바 언어에서 피할 수 없는 특성이고, 복잡한 비동기 코드를 더 단순한 순차적 코드로 바꿔 복잡한 시스템을 단순하게 개발할 수 있게 해줍니다.

## 1. 작업을 동시에 실행하는 일에 대한 (아주) 간략한 역사
초창기에는 컴퓨터에 운영체제 자체가 없었습니다. 그러다 운영체제가 등장했고, 여러 개의 프로그램을 각자의 프로세스 내에서 동시에 실행할 수 있도록 발전했습니다.

운영체제를 개발하게 된 몇 가지 요인
- 자원 활용 - 입출력 동작을 기다리면서 다른 프로세스가 자원을 활용할 수 있도록 함
- 공정성 - 여러 사용자와 프로그램이 컴퓨터 내 자원에 대해 동일한 권한을 갖도록 함
- 편의성 - 여러 작업을 전부 처리하는 하나의 프로그램보다 각기 일을 하나씩 처리하는 여러 개의 프로그램을 원함(더 쉽기 때문)

현대 운영체제의 대부분은 프로세스가 아니라 스레드를 기본 단위로 CPU 자원의 스케줄을 정합니다.

스레드는 자신이 포함된 프로세스의 메모리 주소 공간을 공유하기 때문에 한 프로세스 내 모든 스레드는 같은 변수에 접근하고 같은 힙~heap~에 객체를 할당합니다. 이 때문에 프로세스보다 더 세밀한 단위로 데이터를 공유할 수 있습니다.

그러나 공유된 데이터에 접근하는 과정을 동기화하지 않으면 다른 스레드가 사용 중인 변수를 중간에 수정해서 예상치 못한 결과를 얻을 수 있습니다.

## 2. 스레드의 이점
스레드를 제대로만 사용하면 다음과 같은 이점을 가집니다.

- 쉽고 명료한 코드 생성 → 개발•유지보수 비용 감소
- 복잡한 어플리케이션의 성능 향상
- 비동기적 실행 흐름을 순차적으로 바꿀 수 있음 → 사람의 사고 방식 적용 가능
- GUI 반응 속도 향상
- 가비지 컬렉터 사용(자바 시스템의 하나 또는 두 개 이상의 전용 스레드에서 실행)

### 2.1. 멀티프로세서 활용
프로세서 스케줄링의 기본 단위는 스레드이기 때문에 스레드 하나로 동작하는 프로그램은 한 번에 최대 하나의 프로세서만 사용합니다.

- 프로세서가 여러 개라면 자원 낭비
- 동기 I/O 작업이 완료될 때까지 기다리는 동안(대기 상태) 프로세서 낭비

이 때 여러 개의 스레드를 사용하면 프로세서가 하나라도 처리 속도를 높일 수 있습니다.

### 2.2. 단순한 모델링
여러 개의 일을 처리해야 하는 SW에서, 한 가지 일을 처리하는 스레드 여러 개로 구성되는 프로그램이 작성하기 더 쉽고 오류도 적게 발생합니다.

여러 개로 이루어진 복잡한 비동기적 작업 흐름을 각기 별도 스레드에서 수행되는 단순하고 동기적 작업 흐름 몇 개로 나눌 수 있습니다.

이런 장점은 서블릿~servlet~이나 RMI~Remote Method Invocation~와 같은 프레임워크에서도 활용되고 있습니다.

### 2.3. 단순한 비동기 이벤트 처리
여러 소켓 연결이 필요한 서버 앱의 경우 연결마다 스레드를 할당하고 동기 I/O를 사용하도록 하면 개발이 쉬워집니다.

하지만 스레드가 하나뿐이라면 I/O 대기 때문에 다른 모든 요청을 처라히지 못하고 멈추게 됩니다. 이런 문제를 피하려면 복잡한 넌블로킹 I/O 기능을 써야 합니다.

지금까지의 OS는 하나의 프로세스가 가지는 스레드 개수가 많지 않아 대책이 필요했습니다.
- 유닉스의 select, poll 시스템 콜처럼 효율적인 다중 I/O 수단 개발
- 표준 자바 API의, 대기 상태가 없는 I/O 라이브러리 java.nio

시가닝 지나면서 OS에서 더 많은 스레드를 지원할 수 있게 됨에 따라 클라이언트 별 스레드 생성을 하는 경우가 많아졌습니다.

### 2.4. 더 빨리 반응하는 UI
UI 상 이벤트를 처리하는 메인 이벤트 스레드 하나만 있다면 장시간 작업 시 반응 속도가 떨어집니다.

이를 해결하기 위해 AWT, Swing과 같은 GUI 프레임워크는 메인 이벤트 루프를 이벤트 전달 스레드~event dispatch thread, EDT~로 대체하고 이벤트 처리는 별도 스레드에서 실행합니다.

## 3. 스레드 사용의 위험성
스레드 기능은 양날의 검입니다. 개발자라면 스레드 안정성~thread safety~에 대해 잘 알아야 합니다.

### 3.1. 안정성 위해 요소
동기화를 하지 않으면 여러 스레드에서 실행되는 연산 순서를 예측하기 어려워집니다.

다음 UnsafeSequence는 경쟁 조건~race condition~ 위험성을 보여주는 좋은 예제입니다. 실행 과정에서 연산이 어떻게 서로를 간섭하는가에 따라 결과가 달라집니다.

:::details 예제 1.1. 스레드 불안전한 일련번호 생성 프로그램
▼ UnsafeSequence
```java:no-line-numbers
@NotThreadSafe
public class UnsafeSequence {
    private int value;

    public int getNext() {
        return value++;
    }
}
```

▼ NotThreadSafe
```java:no-line-numbers
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface NotThreadSafe {
}
```

▼ Main
```java:no-line-numbers
public class Main {
    public static void main(String[] args) {
        UnsafeSequence unsafeSequence = new UnsafeSequence();

        Thread t1 = new Thread() {
            public void run() {
                for (int i=0; i<10; i++) {
                    System.out.println(currentThread().getName()+" : "+unsafeSequence.getNext());
                }
            }
        };

        Thread t2 = new Thread() {
            public void run() {
                for (int i=0; i<10; i++) {
                    System.out.println(currentThread().getName()+" : "+unsafeSequence.getNext());
                }
            }
        };

        t1.start();
        t2.start();

        System.out.println("Main thread terminated successfully");
    }
}
```

결과

```:no-line-numbers
Main thread terminated successfully
Thread-1 : 1
Thread-1 : 2
Thread-1 : 3
Thread-1 : 4
Thread-1 : 5
Thread-0 : 0
Thread-0 : 7
Thread-0 : 8
Thread-0 : 9
Thread-0 : 10
Thread-0 : 11
Thread-1 : 6
Thread-1 : 13
Thread-1 : 14
Thread-1 : 15
Thread-1 : 16
Thread-0 : 12
Thread-0 : 17
Thread-0 : 18
Thread-0 : 19
```

![](https://drive.google.com/uc?export=view&id=1QQwAWQMhoVdFalAvBWTGQZMrEx2saFzj)
&lt;그림 1. 스레드 불안전한 일련번호 생성 - 두 스레드&gt;
{ .align-center }

서로 다른 스레드가 각각 getNext()를 호출했더라도 양 쪽이 같은 값을 얻을 수 있습니다.
:::

## A. 참조
B. Goetz, T. Peierls & 4 more, trans. C. G. Kang, "1장 개요," in *자바 병렬 프로그래밍* 1st ed. Seoul Yangcheon-gu, Korea: 에이콘, 2008, ch. 1

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
