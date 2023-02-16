---
title: '[JAVA] Object.wait(), notify(), notifyAll()'
icon: article
category:
  - Java
date: 2023-02-16
---

## Object.wait(), notify(), notifyAll()
자바의 최상위 클래스 `Object`에는 `toString()`, `hashCode()` 외에 쓰레드 관련 메서드가 있습니다.

<div class="align-center">

메서드 | 기능
:---: | :---:
wait() | 갖고 있던 고유 락 해제 & 쓰레드를 잠들게 함
notify() | 잠들어 있던 쓰레드 중 임의로 하나를 깨움
notifyAll() | 잠들어 있던 모든 쓰레드를 깨움

</div>

위 메서드들이 사용되기 위한 조건으로, **메서드를 호출한 쓰레드가 반드시 대상 객체의 고유 락을 갖고 있어야 합니다**.

고유 락을 획득하지 않은 상태에서 위 메서드들 중 하나를 호출하면 `IllegalMonitorStateException`이 발생합니다.

## 동작 설명
- `wait()`을 호출하면 lock을 release하고 쓰레드가 blocking됨
    - 다른 쓰레드가 해당 쓰레드를 깨우기 전까지 `wait()`은 return되지 않음
- `notify()`는 blocking된 임의의 쓰레드를 깨움
    - 어떤 쓰레드를 깨울지 알 수 없기 때문에 제어하기 어려움
- `notifyAll()`은 blocking된 모든 쓰레드를 깨움
    - `wait()`으로 blocking된 쓰레드들은 `synchronized` 블럭 안에 있으므로, `notifyAll()`로 꺠어난 모든 쓰레드들은 lock을 획득하기 위해 경쟁함
    - lock을 획득한 쓰레드만이 `wait()`을 return하고 다음 로직을 실행함

## BlockingQueue 예제
BlockingQueue는 다음과 같은 요구사항을 가집니다.

- 생성 시점에 용량(Capacity)가 결정됨
- 큐가 비어있을 때 요소를 빼내려 하면 빼낼 요소가 들어올 때까지 쓰레드가 blocking됨
- 큐가 꽉 찼을 때 요소를 추가하려 하면 빈 공간이 생길 때까지 쓰레드가 blocking됨

(작성 중...)

## A. 참조
HAPPINESS ON CODE, "Java Object 클래스의 wait과 notify의 사용법," *happinessoncode.com*, Oct. 5, 2017. [Online]. Available: [http://happinessoncode.com/2017/10/05/java-object-wait-and-notify/](http://happinessoncode.com/2017/10/05/java-object-wait-and-notify/) [Accessed Feb. 15, 2023].
