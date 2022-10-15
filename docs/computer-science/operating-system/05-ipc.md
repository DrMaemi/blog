---
title: '[운영체제] 05. 프로세스 간 통신(IPC)'
icon: article
category: Operating System
date: 2022-07-19
order: 5
---

*본문은 2019년도 하반기 아주대학교의 컴퓨터공학과 교수로 재직하셨던 김상훈 교수님의 운영체제 과목 강의 자료를 기반으로 작성되었음을 알립니다.*

## 1. IPC(Inter-Process Communication)이 필요한 이유
IPC는 모듈 간 통신 방식을 구현하기 위해 사용되는 프로그래밍 인터페이스 집합이다. 

앞서 프로세스가 어떤 개념인지 설명했었다. 하나의 시스템 안에는 여러 프로세스가 존재할 수 있으며 이들은 서로 독립적일수도, 필요에 따라 프로세스 간 통신(IPC) 또는 협업을 해야 할 수도 있다. 또 다른 시스템 간 서로 다른 프로세스가 서로 통신해야 하는 상황도 있다.

프로세스 간 협업이 필요한 이유는 다음과 같은 것들이 있을 수 있다.

- Information sharing
- Computation speedup
- Modularity
- Convenience

### 1.1. 멀티프로세스 아키텍처 - 크롬 브라우저
구글의 크롬 브라우저는 3가지 형식의 프로세스가 서로 협업하는 구조로 동작하는 멀티프로세스 아키텍처를 따라 설계됐다.

- Browser process - 사용자 인터페이스, Disk 및 네트워크 I/O 관리
- Renderer process - HTML, Javascript를 이용한 웹 페이지 렌더링
    - 새 웹 페이지를 열 때마다 새로운 Renderer 생성
    - Sandbox에서 Disk, Netowrk I/O 동작하도록 제약해 보안 문제 최소화
- Plug-in process - 각 Plug-in에 맞게 동작

## 2. IPC 메소드
IPC 메소드는 Shared memory, Socket, Semaphores, Pipes & Named pipes, Message passing 크게 5가지가 있다. 본문에서는 이 중 Shared memory와 Message passing에 대해 다룬다.

![](https://drive.google.com/uc?export=view&id=1IiW7k1p-kyTXssBhPb05QHAkLf8yeZZn)
&lt;그림 1. IPC 모델 Shared memory & Message passing&gt;
{ .align-center }

### 2.1. Shared memory
- 사용자 프로세스들이 명시적으로(**explicitly**) 프로세스 간 공유 메모리 영역을 생성/연결(Create/Join)함
- OS가 IPC에 관여하지 않고 프로세스들이 직접 IPC에 관여하고 제어함
- 프로세스 간 동시성 제어 관련 문제를 해결하는 것이 주된 이슈
    - 동시성 제어는 이후 강의에서 더 자세히 다룰 예정

```c:no-line-numbers
// 1. 프로세스가 Shared memory segment를 생성, 
// 또는 기존에 존재하는 segment에 접근
shm_fd = shm_open(name, O CREATE | O RDWR, 0666);

// 2. Segment의 크기 지정
ftruncate(shm_fd, 4096);

// 3. 이후 프로세스는 해당 Shared memory에 데이터를 쓸 수 있다(Write)
sprintf(shm_fd, "Writing to shared memory");
```

### 2.2. Message passing
오늘날 IPC 서비스의 대부분은 이 Message passing 방식을 사용한다. 메시지 큐와 브로커 패턴을 사용한 Message passing 방식의 IPC 서비스는 마이크로 아키텍처를 따르기 때문에 유지보수가 쉽고 시스템 내구성이 높기 때문이다. 메시지 큐를 이용하기 때문에 통신에 약간의 오버헤드가 존재한다는 단점이 있지만 장점으로 인한 이득이 더 많기 때문에 많이 사용한다.

- 사용자 프로세스들이 OS가 제공하는 IPC facility에 관한 2가지 기능을 활용하여 서로 통신
    - send(message)
    - receive(message)
- 메시지 크기는 불변(fixed) 또는 가변(variable)
- 분산된 환경에서 효율적
    - 마이크로 아키텍처
- 메시지를 동기/비동기(Synchronous/Asynchronous) 방식으로 처리 가능

#### 2.2.1. Signals
Message passing 모델을 따르는 IPC 기능 중 하나로, 특정 이벤트(Particular event)를 프로세스에게 알리기 위한(to notify) IPC 기능이다.

- Signal은 특정 이벤트에 의해 생성됨
- 목적한 프로세스에게 Signal이 전달되면 적절한 Signal handler가 처리함
    - 모든 Signal의 Default handler는 OS kernel에 구현되어 있음
    - 사용자 정의(User-defined) Signal handler를 override할 수 있음

전에 설명했던 부모-자식 프로세스 관계에서 부모 프로세스가 `kill()` 시스템 콜 API를 호출하여 자식 프로세스를 종료시켰던 경우가 Signal 통신을 사용하는 경우다.

**Software interrupt**라고 생각할 수 있다.

::: details 다른 프로세스에게 signal을 보내는 시스템 콜 API
```c:no-line-numbers
int kill(pid_t pid, int sig);
```
:::

::: details 사용자 정의 Signal handler
```c:no-line-numbers
#include <signal.h>

void signal_handler(int signal_number) {
    printf("%d signaled !\n", signal_number);
}

struct sigaction sa = {
    .sa_handler = signal_handler,
    .sa_flags = 0,
}, old_sa;

sigaction(SIGALRM, &sa, &old_sa); // SIGALRM을 처리하는 Signal handler override
```
:::

## 3. RPC(Remote Procedure Call)
인터넷 등의 네트워크를 통해 원격에 있는 서버의 함수(프로시저, Procedure)를 클라이언트가 호출하여 사용하는 것을 RPC라 한다.

클라이언트 측에서 원격 서버의 함수를 추상화한 모듈(Client-side proxy procedure)을 **Stub**이라 하며, Stub은 다음 기능을 가지고 있다.

- 네트워크 상 원격 서버에 접속할 수 있는 기능
- 호출할 함수의 인자들을 정해진 방식으로 패키징하는 Marshall 기능

서버 측에서 RPC 요청을 받으면 Marshalled 인자들을 꺼내는(unpack) Unmarshalling을 수행하고, 함수의 처리 로직에 따라 얻은 결과를 클라이언트에게 반환한다. 서버 측에서 RPC 요청을 처리하는 모듈 또한 Stub이라 한다.

![](https://drive.google.com/uc?export=view&id=1G5jGrDKSDP2TzrosgtAieU8WK52SdZCs)
&lt;그림 2. RPC 예제&gt;
{ .align-center }

## 4. XDR(External Data Representation)
서로 다른 Machine architecture에서 IPC를 할 수 있도록 데이터 표현 형식을 정의한 프로토콜을 XDR이라 한다.

XDR은 다음과 같은 기능을 수행한다.

- 서로 다른 Machine architecture에서 데이터를 통신할 때 데이터 표현 형식을 통일하여 통신을 가능하게 함
    - E.g., Big-endian machine vs Little-endian machine
- 신뢰성 있는 통신을 위한 네트워크 프로토콜 기능 수행
    - E.g., 서버의 Acknowledgement
- 데이터 전송 실패 등 통신 실패 감지
    - 실패 감지 시 메시지 재전송(Retransmission)과 같은 대처 가능

![](https://drive.google.com/uc?export=view&id=1ppGAUVBGJ7-vRl_5Ljsj6AG0jF5wVPrU)
&lt;그림 3. Big-endian vs Little-endian. 같은 데이터지만 메모리 저장 방식이 다름&gt;
{ .align-center }

또한 운영체제는 프로세스 간 통신에서 클라이언트와 서버 간 연결을 위해 Rendezvous daemon(or Matchmaker) 서비스를 제공해준다.

## 5. Pipe
프로세스 간 통신에 사용되는 메시지 큐 자료구조를 Pipe라 한다.

Pipe를 구현하고 사용할 때 다음 사항들을 고려해야 한다.

- 통신 방향이 단방향인가, 양방향인가
- 양방향 통신의 경우 Half/Full-duplex 어느 특성을 가져야 하는가
    - Half-duplex - 한 쪽에서 데이터를 쓰고 있으면 동시에 다른 쪽에서 데이터를 쓸 수 없음(읽는 건 자유?)
    - Full-duplex - 동시에 데이터를 쓰면서 읽을 수 있음
- 통신 시 통신에 참여하는 프로세스 간 관계(i.e., parent-child)가 정의되어야 하는가
- Pipe가 네트워크 상에서 동작해야 하는가

Pipe는 크게 Ordinary Pipes, Named Pipes 두 가지로 분류할 수 있다.

Ordinary Pipe는 일반적인 Producer-consumer 프로세스 관계에서 사용될 수 있으며 Producer 프로세스는 Pipe의 한 쪽에서 데이터를 쓰고, Consumer 프로세스는 Pipe의 다른 쪽에서 데이터를 읽는다. 이 때 Producer-consumer 관계의 두 프로세스는 Parent-child 관계이어야 한다.

Named Pipe는 양방향 통신에 사용되며 Parent-child와 같은 관계가 필요하지 않다. 여러 프로세스가 하나의 Named Pipe를 사용할 수 있으며, 해당 Pipe를 사용하는 모든 프로세스가 종료되어도 해당 Pipe는 메모리에 남는다. UNIX와 Window 계열 OS 모두 Named Pipe를 지원한다.

![](https://drive.google.com/uc?export=view&id=10DBL76RekIGQKc9wsc8aqYY749iBZoaC)
&lt;그림 4. Ordinary Pipe 그림&gt;
{ .align-center }

:::details Ordinary Pipe 사용 예제 코드(Linux)
```c
#include <sys/types.h>
#include <sys/wait.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

int main(int argc, char* argv[]) {
    int pipefd[2]; /* pipefd[0] for read, pipefd[1] for write */
    pid_t cpid;
    char buf;

    if (pipe(pipefd) == -1) {
        perror("pipe");
        exit(EXIT_FAILURE);
    }

    cpid = fork();

    if (cpid == 0) { /* Child process reads from pipe */
        close(pipefd[1]); /* Close unused write end */

        while (0 < read(pipefd[0], &buf, 1))
            write(STDOUT_FILENO, &buf, 1);
        
        write(STDOUT_FILENO, "\n", 1);
        close(pipefd[0]);
        exit(EXIT_SUCCESS);

    } else { /* Parent process writes argv[1] to pipe */
        close(pipefd[0]);

        write(pipefd[1], argv[1], strlen(argv[1]));
        close(pipefd[1]);
        wait(NULL);
        exit(EXIT_SUCCESS);
    }

    return 0;
}
```
:::

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
