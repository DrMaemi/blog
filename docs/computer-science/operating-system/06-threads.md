---
title: '[운영체제] 06. 스레드'
icon: article
category: Operating System
date: 2022-07-29
order: 6
---

*본문은 2019년도 하반기 아주대학교의 컴퓨터공학과 교수로 재직하셨던 김상훈 교수님의 운영체제 과목 강의 자료를 기반으로 작성되었음을 알립니다.*

## 1. 스레드 등장 배경

기존 프로세스 개념을 이용해 프로그래밍을 하면 다음과 같은 많은 문제가 발생했습니다.

- 다중 코어(Multi-cores) 환경에서 단일 프로세스로 실행하는 것은 컴퓨터 자원을 충분히 활용하지 못함
- 다른 여러 프로세스와 협업하는 프로그램을 작성하는 것은 매우 힘듬
- 새로운 프로세스를 생성하는 데 고비용
    - fork()를 통해 프로세스를 생성하면 기존 메모리 공간을 통째로 복사해야 함
- 프로세스 간 통신 시 많은 오버헤드 발생

그 결과 프로세스 내에서 저비용으로 동시성(Concurrency)를 향상시킬 수 있는 방법을 고민하다가 스레드(Thread) 개념이 등장했습니다.

## 2. 스레드(Thread)란?
스레드는 **프로세스의 실행 제어 정보(Execution state)**를 의미합니다. Thread, A thread of control, A lightweight process(LWP)라고도 합니다.

프로세스의 구성 요소

- 주소 공간(Address space)
- 자원(Resources)
- 사용자ID, 권한(Previleges)
- 실행 제어 정보(Execution state)
    - PC(Program Counter), SP(Stack Point), Registers, etc.

## 3. 다중 스레드 프로세스(Multi-threaded Process)
단일 프로세스에서 다중 스레딩을 통해 프로세스를 병렬 처리하여 동시성을 향상시킬 수 있습니다.

다중 스레드 프로세스는 다음과 같은 특징을 가집니다.

- Thread는 프로세스의 주소 공간 일부를 공유함
    - Code, Data, Heap 메모리 영역
    - PCB 일부(I/O status, Opened files)
- Thread는 다음과 같은 것들을 독립적으로 가짐
    - PC, SP를 포함한 레지스터 집합
    - Stack 메모리 영역
    - Thread ID

![](https://drive.google.com/uc?export=view&id=1geXPwVUfEQlqrECOyUhJ_xDp5kfAPdoC)
&lt;그림 1. 다중 스레드 프로세스&gt;
{ .align-center }

## 3. 다중 스레드의 장점
- 다중 코어 아키텍처의 성능(Throughput)을 최대로 끌어올릴 수 있음
- 프로그래밍 관점에서 자원 공유를 논리적으로 명시 가능
- 프로그램 복잡성을 낮춤
    - 규모가 큰 Task를 여러 개의 작은 Task로 나누고, 각 Task를 수행하는 스레드에 바인딩
- 소프트웨어의 반응성(Responsiveness) 향상
    - 여러 개의 동시 이벤트를 처리하는 웹 서버 등을 구현하는데 필수임

## 4. 프로세스 vs 스레드
프로세스와 스레드의 관계는 하나의 프로세스가 하나 이상의 스레드를 포함하는 관계로 다음과 같은 성질을 만족합니다.

- 하나의 단일 프로세스에 최소 1개 이상의 스레드가 존재
- 단일 프로세스 내 존재하는 모든 스레드는 동일한 프로세스 주소 공간 참조
- CPU 스케줄링의 기본 단위는 프로세스가 아니라 스레드임
- 프로세스는 정적(static), 스레드는 동적(dynamic) 특징을 가짐

## 5. 동시성(Concurrency) vs 병행성(Parallelism)
동시성(Concurrency)은 단일 코어 자원을 특정 기준에 따라 분할하여 다중 Task에 할당하며 처리하는 특성을 의미합니다. 반면 병행성(Parallelism)은 다중 코어 자원을 다중 Task에 할당하여 동시(simultaneously)에 처리하는 특성을 의미합니다.

동시성을 가진 환경에서 실행되는 Task는 병렬적으로 동시에 처리되지 않지만 동시에 처리되는 것처럼 보이게 됩니다.

![](https://drive.google.com/uc?export=view&id=1Xyl45sMJDEs9tOYfH_oRLyH5L1CG-oX2)
&lt;그림 2. Concurrency&gt;
{ .align-center }

![](https://drive.google.com/uc?export=view&id=1wJk7DJwpekRwVeHlntktPIqRFh6AVf5x)
&lt;그림 3. Parallelism&gt;
{ .align-center }

### 5.1. 병행성 종류
#### 5.1.1. Data parallelism
- 처리가 필요한 데이터 영역을 여러 개의 부분 집합으로 나누고 각 집합을 다중 코어에 할당하는 방식
- 다중 코어가 같은 연산을 동시에 수행
- E.g., 배열의 합 처리 시 색인 집합을 나누어 각 부분 집합의 합을 병렬 처리

#### 5.1.2. Task parallelism
- 서로 다른 기능을 수행중인 여러 스레드를 다중 코어에 할당하는 방식
- 다중 코어가 서로 다른 연산을 동시에 수행
- E.g., 데이터의 합과 표준 편차를 구하는 연산을 수행하는 두 스레드를 각 코어에 할당하여 처리

### 5.2. 암달의 법칙(Amdahl's Law)
프로그램 작성 시 Serial한 부분과 Parallel한 부분으로 나눌 수 있는데, 전체 프로그램 동작이 전부 Serial 할 때 성능을 1이라 했을 때 Parallel 처리를 적용함으로써 최대 얼마나 성능 향상이 가능할지 계산하는 수식을 암달의 법칙(Amdahl's Law)라 합니다.

$$speedup \le \frac{1}{S+\frac{(1-S)}{N}}$$
&lt;수식 1. 암달의 법칙(Amdahl's Law)&gt;
{ .align-center }

프로그램의 전체를 1이라 하면 그 중 Serial한 부분의 비율을 $S$, Parallel한 부분의 비율은 $1-S$, 시스템의 코어 수를 $N$이라 했을 때 위 수식을 통해서 최대 얼마나 성능 향상이 기대되는지 계산할 수 있습니다.

## 6. 스레드 구현
### 6.1. 스레드 라이브러리
다중 스레드 프로그래밍은 보통 OS나 프로그래밍 언어가 지원하는 라이브러리를 사용하여 진행합니다. 스레드 라이브러리는 프로그래머가 스레드를 생성하거나 관리할 수 있도록 하는 API를 제공합니다.

스레드 라이브러리는 유닉스 계열 운영체제가 사용하는 Pthreads(POSIX Threads) 뿐 아니라 윈도우 계열 운영체제, 자바와 같은 프로그래밍 언어에서 지원합니다.

### 6.2. 사용자 스레드 vs 커널 스레드
개발자가 스레드 라이브러리를 통해 직접 생성하고 관리하는 스레드를 사용자 스레드(User Thread), 운영체제에 의해 생성되고 관리되는 스레드를 커널 스레드(Kernel Thread)라 합니다.

<div class="align-center">

관점 | 사용자 스레드 | 커널 스레드
:--: | :---------: | :----------:
구현 주체 | 개발자(사용자) | 운영체제
인식 | OS는 사용자 스레드의 존재를 모름 | OS 커널 스레드를 생성 및 관리
구현 난이도 | 쉬움 | 어려움
Context switch 성능 | 빠름 | 느림
하드웨어 지원 필요 유무 | 필요 없음 | 필요
Blocking | 스레드 중 하나라도 Blocking되면 시스템 전체가 Block됨(Many-to-One 모델) | 스레드 중 하나가 Block되더라도 나머지 스레드는 실행 가능
다중 스레딩 | 커널 스레드의 지원 없이는 멀티프로세싱의 이점을 가질 수 없음 | 멀티프로세싱 이점을 가짐(실제 OS의 스케줄링 단위)
OS 의존 | 어떤 OS 환경에서라도 동작 가능 | 구현된 스레드는 OS에 종속적으로 동작
제어 | 스레드 라이브러리가 스레드 생성, 메시지 패싱, 스케줄링 등을 모두 구현 | 어플리케이션은 커널 스레드를 직접 제어하지 못하고 API를 통해 기능 호출
종류 | Java thread, POSIX thread | Window Solaris

</div>

OS에 따라 사용자 스레드를 지원하기 위한 커널 스레드 생성 및 관리 정책이 모두 다릅니다. 스레드 생성 및 관리 정책은 사용자 스레드-커널 스레드 간 연관 관계에 따라 One-to-One, Many-to-One, Many-to-Many, 여러 정책을 혼용해서 사용하는 Two-level Model로 분류할 수 있습니다.

오늘날 대부분의 OS는 하나의 사용자 스레드 생성에 하나의 커널 스레드가 생성되어 매핑되는 One-to-One 모델을 사용합니다. One-to-One 모델은 사용자 스레드 수 증가에 따라 커널 스레드도 증가하여 오버헤드가 발생하는 것을 방지하고자 일정 수 이상 스레드 생성을 제한합니다.

### 6.3. 암묵적 스레딩(Implicit Threading)
Implicit Threading은 스레드의 생성과 관리 책임을 개발자가 갖는 것이 아니라 컴파일러와 런타임 라이브러리가 갖는 것을 의미합니다. 개발자는 병렬로 실행할 수 있는 작업만 식별해서 작업을 함수로 작성하면 런타임 라이브러리를 통해 가용 스레드에 매핑되는 방식으로 동작합니다.

다중 스레드 프로그래밍 시 명시적 스레딩(Explicit Threading) 기법을 통해 개발자가 직접 스레드를 생성하고 관리하자 스레드 수 증가에 따라 프로그램의 복잡도가 증가하면서 프로그래밍에 많은 어려움이 생기는데 이를 암묵적 스레딩을 통해 해결할 수 있습니다.

결과적으로 스레드 생성과 관리를 시스템에 위임하고 어플리케이션은 필요 작업을 라이브러리를 통해 스레드에 매핑만 하면 됩니다.

#### 6.3.1. Thread Pool
웹 서버에서 모든 요 청마다 새로운 스레드를 만들어 서비스를 제공한다면 시스템에 무한한 스레드가 생성되면서 많은 오버헤드가 발생하는데, 이런 문제를 해결하는 방법이 Thread Pool입니다. Thread Pool은 프로세스를 시작할 때 일정 수의 스레드를 미리 생성해두는 방식으로, 스레드가 많이 담긴 수영장이라고 쉽게 생각할 수 있습니다.

![](https://drive.google.com/uc?export=view&id=1dAObUS4hfpTXC1rmPAD2Gfrea0l-7F4k)
&lt;그림 4. Thread Pool&gt;
{ .align-center }

Thread Pool은 다음과 같은 특징을 가집니다.

- 시스템은 요청을 받으면 새로운 스레드를 생성하는 것이 아니라 사용중이지 않은 스레드에 요청을 바인딩함
- 모든 스레드가 사용중이라면 사용 가능한 스레드가 생길 때까지 작업을 대기함
- 새로운 스레드를 생성하는 방식에 비해 일반적으로 요청 처리 성능이 향상됨

프로그래밍할 때 스레드의 생성, 삭제가 잦거나 얼마나 많은 스레드가 필요할지 예측하기 힘들 때 Thread Pool 기법을 사용하면 좋습니다.

#### 6.3.2. Fork Join
부모 스레드(메인 스레드) 하나 이상의 자식 스레드를 fork한 뒤 종료를 기다린 후 join하는 시점에 자식 스레드의 처리 결과를 확인하고 결합하는 방식을 Fork Join이라 합니다. 프로그램 런타임은 생성되는 스레드 수를 관리하고 작업을 배정합니다. 쉽게 생각해서 Fork Join은 런타임 라이브러리가 생성할 실제 스레드 수를 프로그램 상황에 따라 동기적으로 결정하는 Thread Pool입니다.

![](https://drive.google.com/uc?export=view&id=1mj1feiH9FUb5yF3dE-ArHlOl2NJYXxN3)
&lt;그림 5. Fork Join&gt;
{ .align-center }

이전 pThread의 Fork-join과 같은 모델이기 때문에 명시적 스레딩으로 착각할 수 있으나 이 Fork Join 기법은 Fork와 Join 시점을 런타임 라이브러리가 제어하므로 엄연히 암묵적 스레딩에 해당됩니다.

#### 6.3.3. OpenMP
OpenMP는 공유 메모리 환경에서 코드 블럭의 병렬 실행을 가능하게 하는 기법으로, `#pragma omp parallel`과 같은 컴파일러 지시문(Compiler Directives)을 사용합니다.

::: details OpenMP 예제

::: code-tabs
@tab C++
```cpp
#include <iostream>
#include <omp.h>

void foo(int& loopNum) {
    for (int i=0; i<3; i++) {
        printf("loopNum: %d, TID: %d\n", loopNum, omp_get_thread_num());
    }
}

int main() {
    #pragma omp parallel for
    for (int i=0; i<5; i++)
        foo(i);

    return 0;
}
```
:::

:::

PC(Program Counter)가 OpenMP 지시문 `#pragma omp parallel for`를 만나면 시스템 코어 수만큼 스레드를 생성하고 해당 블럭을 병렬로 실행합니다. `i`번 째 반복문의 코드 블럭이 임의의 스레드에 할당되어 출력문이 생성됩니다.

#### 6.3.4. 그 외 종류
- Grand Central Dispatch(GCD)
    - Apple 사에서 MacOS , iOS를 위해 개발한 스레딩 기술
    - 개발자가 병렬로 실행할 코드 블럭을 식별해서 라이브러리에 전달
    - Serial Queue, Concurrent Queue 자료구조 사용

- Intel Thread Building Blocks(TBB)
    - C++에서 병렬 프로그램 설계를 지원하는 템플릿 라이브러리
    - 특별한 컴파일러나 언어 지원이 필요하지 않음

## 7. 스레드 이슈(Issues in Threading)
다중 스레드 프로그램에서 발생하는 이슈들 몇 가지에 대해서 생각해봅시다.

### 7.1. fork() & exec()
exec()은 기존 프로세스 메모리 영역이 새로운 프로세스에 의해 완전히 덮어씌워지는 반면 fork()는 새로운 프로세스가 복제되므로 이 때 생성된 프로세스가 기존 프로세스의 모든 스레드를 복제할 것인지, 아니면 fork()를 호출한 스레드 하나만 복제할 것인지 고민할 수 있습니다. 이런 이슈를 해결하기 위해 일부 UNIX 시스템은 각 경우에 해당하는 fork() API를 제공합니다.

- fork() - 부모 프로세스의 모든 스레드 복제
- fork1() - 호출한 스레드만 복제

### 7.2. Signal Handling
특정 프로세스로 Signal을 전달할 때 어떤 스레드로 전달해야 하는지 고민할 수 있습니다. 정답이 있는 것은 아니지만 대표적으로 다음과 같은 처리 방식을 따를 수 있습니다.

- 프로세스 내 아무 스레드가 처리(신경 안씀)
- 프로세스 내 시그널 핸들링 로직을 구현해서 어떤 스레드가 어떤 시그널을 담당할지 명시
- 프로세스 내 모든 스레드에 시그널 전파

### 7.3. 스레드 중지(Thread Cancellation)
스레드가 동작을 완료하기 전에 스레드를 중지시키는 방법에 대한 고민이 있을 수 있습니다. 크게 두 가지 방식으로 구현합니다.

- 비동기적 중지(Asynchronous cancellation)
    - 즉시(Immediategly) 대상 스레드를 중지시킴
    - 중지된 스레드가 점유/공유하고 있던 자원에 대한 처리를 구현해야 함
- 중지 연기(Deferred Cancellation)
    - 특정 중지 시점(Cancellation Point)에서 대상 스레드를 중지시킴
    - 주기적으로 스레드 자신이 종료되어야 하는지 확인

### 7.4. 스레드 로컬 스토리지(Thread Local Storage, TLS)
프로세스의 전역 변수는 Data 메모리 영역으로 프로세스 내 모든 스레드가 공유하게 되는데, 이 때 각 스레드 별로 고유 전역 변수를 사용하기 어렵다는 문제를 해결하기 위해 TLS 개념이 필요합니다. TLS는 스레드 고유 전역 변수 공간이라고 생각할 수 있습니다.

```c
...
int global_var = 0; // 전역 변수(Data 영역) - 공유됨
__thread int TLS_var = 0; // 스레드 고유 전역 변수(TLS) - 공유되지 않음

thread_A() {
    int var_stack = 10; // 스레드 A의 지역 변수(Stack 영역) - 공유되지 않음
    global_var = 11; // 전역 변수 조작
    TLS_var = 12; // 스레드 고유 전역 변수 조작

    printf("In thread A, values: %d %d %d", var_stack, global_var, TLS_var);
}

thread_B() {
    int var_stack = 20; // 스레드 B의 지역 변수(Stack 영역) - 공유되지 않음
    global_var = 21; // 전역 변수 조작
    TLS_var = 22; // 스레드 고유 전역 변수 조작

    printf("In thread B, values: %d %d %d", var_stack, global_var, TLS_var);
}
```

TLS 구현 방법에 대해 조사하다 보니 Private 힙도 아니고 Stack도 아니고 별도의 저장 공간에 각 스레드가 고유하게 사용할 수 있는 배열 자료구조를 구현하여 사용하는 것으로 이해했습니다(자세한 설명은 [MS 스레드 로컬 스토리지](https://docs.microsoft.com/ko-kr/windows/win32/procthread/thread-local-storage?redirectedfrom=MSDN) 문서 참조).

## A. 참조
::: left
lcy960729, "Implicit Threading (암묵적 스레딩)," *Velog.io*, Aug. 4, 2021. [Online]. Available: [https://velog.io/@lcy960729/Implicit-Threading-암묵적-스레딩](https://velog.io/@lcy960729/Implicit-Threading-암묵적-스레딩) [Accessed Jul. 29, 2022].

GeeksforGeeks, "Difference between User Level thread and Kernel Level thread," *geeksforgeeks.org*, Jul. 1, 2022. [Online]. Available: [https://www.geeksforgeeks.org/difference-between-user-level-thread-and-kernel-level-thread/](https://www.geeksforgeeks.org/difference-between-user-level-thread-and-kernel-level-thread/) [Accessed Jul. 29, 2022].

Microsoft, "스레드 로컬 스토리지," *docs.microsoft.com*, Jun. 22, 2022. [Online]. Available: [https://docs.microsoft.com/ko-kr/windows/win32/procthread/thread-local-storage?redirectedfrom=MSDN](https://docs.microsoft.com/ko-kr/windows/win32/procthread/thread-local-storage?redirectedfrom=MSDN) [Accessed Jul. 29, 2022].
:::

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
