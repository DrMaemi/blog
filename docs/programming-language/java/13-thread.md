---
title: '[JAVA] 쓰레드(Thread) 프로그래밍'
icon: article
category: Java
date: 2022-10-02
order: 8
---

## 1. 프로세스와 쓰레드
프로세스(process)란 간단히 말해 '실행 중인 프로그램(program)' 입니다. 프로그램을 실행하면 OS로부터 실행에 필요한 자원(CPU, 메모리 등)을 할당받아 프로세스가 됩니다.

프로세스는 프로그램을 수행하는 데 필요한 데이터, 자원, 그리고 쓰레드(thread)로 구성되어 있으며 프로세스의 자원을 이용해 실제로 작업을 수행하는 것이 바로 쓰레드입니다.

하나의 프로세스가 가질 수 있는 쓰레드의 개수는 제한되어 있지 않습니다. 그러나 각 쓰레드는 작업 수행을 위한 개별적인 메모리 공간(호출 스택, Call stack)을 필요로 하기 때문에 프로세스의 메모리 한계에 따라 생성할 수 있는 쓰레드 수가 결정되며, 실제로는 한계에 다다를 정도의 쓰레드를 생성하는 일은 없습니다.

### 멀티태스킹과 멀티쓰레딩
윈도우나 유닉스를 포함한 대부분의 OS는 멀티태스킹(multi-tasking, 다중작업)을 지원합니다. 다중작업은 여러 개의 프로세스가 동시에 실행되는 것을 말합니다.

멀티쓰레딩은 하나의 프로세스 내에서 여러 쓰레드가 동시에 작업을 수행하는 것입니다. 이 때 CPU의 코어(core)가 한 번에 단 하나의 작업만 수행할 수 있으므로, **실제로 동시에 처리되는 작업의 개수는 코어의 개수와 일치**합니다.

그러나 쓰레드의 수는 언제나 코어의 개수보다 훨씬 많기 때문에 짧은 시간 동안 여러 작업을 번갈아 가며 수행함(context-switching, 문맥교환)으로써 여러 작업들이 모두 동시에 수행되는 것처럼 보이도록 합니다.

### 멀티쓰레딩의 장단점
- 장점
    - CPU 상용률 향상
    - 보다 더 효율적인 자원 사용
    - 사용자에 대한 응답성 향상
    - 작업 분리를 통한 코드 가독성 향상
- 단점
    - 동기화(synchronization), 교착상태(deadlock)과 같은 문제들을 고려하여 프로그래밍해야 하므로 복잡함

## 2. 쓰레드 구현과 실행
자바에서 쓰레드를 구현하는 방법은 다음 두 가지입니다.
- Thread 클래스 상속받기
- Runnable 인터페이스 구현
- Callable 인터페이스 구현

Thread 클래스를 상속받으면 다른 클래스를 상속받을 수 없기 때문에 일반적으로 Runnable 또는 Callable 인터페이스를 구현하는 방법을 사용합니다.

::: details Thread 클래스 상속
```java:no-line-numbers
class MyThread extends Thread {
    public void run() {
        /* 쓰레드 프로그래밍 */
    }
}
```
:::

::: details Runnable 인터페이스 구현
```java:no-line-numbers
class MyThread implements Runnable {
    public void run() {
        /* 쓰레드 프로그래밍 */
    }
}
```
:::

#### 예제 1 - Thread와 Runnable

```java:no-line-numbers
/**
 * Thread 상속
 */
public class ThreadEx1_1 extends Thread {
    public void run() {
        for (int i=0; i<5; i++) {
            System.out.println(getName());
        }
    }
}

/**
 * Runnable 인터페이스 상속
 */
public class ThreadEx1_2 implements Runnable {
    public void run() {
        for (int i=0; i<5; i++) {
            System.out.println(Thread.currentThread().getName());
        }
    }
}

public class ThreadEx1 {
    public static void main(String[] args) {
        ThreadEx1_1 t1 = new ThreadEx1_1();

        /* Runnable 구현체는 Thread() 생성자에 인자로 넘겨줘야 합니다 */
        Runnable r = new ThreadEx1_2();
        Thread t2 = new Thread(r);

        t1.start();
        t2.start();
    }
}
```

실행 결과
```:no-line-numbers
Thread-0
Thread-0
Thread-0
Thread-0
Thread-0
Thread-1
Thread-1
Thread-1
Thread-1
Thread-1
```

### Thread 클래스와 Runnable 인터페이스
Runnable 인터페이스를 구현한 경우 구현체 인스턴스를 생성한 다음 Thread 클래스의 생성자의 매개변수로 제공해야 합니다.

아래는 실제 Thread 클래스의 소스코드(Thread.java)입니다.
```java:no-line-numbers
public class Thread {
    private Runnable r; // Runnable을 구현한 클래스의 인스턴스를 참조하기 위한 변수

    public Thread(Runnable r) {
        this.r = r;
    }

    public void run() {
        if (r != null) {
            r.run(); // Runnable 인터페이스를 구현한 인스턴스의 run() 호출
        }
    }
}
```

### Thread 클래스의 하위 메서드

Thread 클래스를 상속받으면 자손 클래스에서 조상인 Thread 클래스의 메서드를 직접 호출할 수 있지만, Runnable을 구현하면 Thread 클래스의 static 메서드인 <code>currentThread()</code>를 호출하여 쓰레드에 대한 참조를 얻어 와야 합니다.

```java:no-line-numbers
static Thread currentThread()   // 현재 실행중인 쓰레드에 대한 참조 반환
String getName()                // 쓰레드 이름 반환
```

또한 다음 생성자나 메서드를 통해 쓰레드 이름 지정 또는 변경이 가능합니다.

```java:no-line-numbers
Thread(Runnable target, String name)
Thread(String name)
void setName(String name)
```

## 3. 쓰레드의 실행 - start()와 run()
start()를 호출하면 다음과 같은 일이 벌어집니다.

1. 현재 메서드에서 쓰레드의 start()를 호출
2. start()는 새로운 쓰레드 생성, 생성된 쓰레드에 호출 스택이 생성됨
3. 생성된 호출 스택에 run()이 호출되고, 쓰레드가 독립된 호출 스택 공간에서 작업 수행
4. 스케줄러가 정한 순서에 의해 호출 스택 2개가 번갈아 가며 실행됨
5. 스케줄러는 쓰레드 간 우선순위를 고려하여 실행순서 및 실행시간을 결정함
6. 실행중인 사용자 쓰레드가 하나도 없을 때 프로그램이 종료됨

main 메서드를 수행하는 쓰레드가 종료됐더라도 다른 쓰레드가 아직 작업을 마치지 않은 상태라면 프로그램이 종료되지 않습니다.

#### 예제 2 - start()로 쓰레드 생성, main 쓰레드 종료 후에도 프로그램 실행
```java:no-line-numbers
public class ThreadEx2_1 extends Thread{
    public void run() {
        throwException();
    }

    public void throwException() {
        try {
            throw new Exception();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

public class ThreadEx2 {
    public static void main(String[] args) {
        ThreadEx2_1 t1 = new ThreadEx2_1();
        t1.start();
        System.out.println("Main thread terminated");
    }
}
```

실행 결과
```:no-line-numbers
Main thread terminated
java.lang.Exception
	at multithreading.ex2.ThreadEx2_1.throwException(ThreadEx2_1.java:10)
	at multithreading.ex2.ThreadEx2_1.run(ThreadEx2_1.java:5)
```

#### 예제 3 - start() 호출 없이 run()만 호출
```java:no-line-numbers
public class ThreadEx3_1 extends Thread {
    public void run() {
        throwException();
    }

    public void throwException() {
        try {
            throw new Exception();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

public class ThreadEx3 {
    public static void main(String[] args) {
        ThreadEx3_1 t1 = new ThreadEx3_1();
        t1.run();
        System.out.println("Main thread terminated");
    }
}
```

실행 결과
```:no-line-numbers
java.lang.Exception
	at multithreading.ex3.ThreadEx3_1.throwException(ThreadEx3_1.java:10)
	at multithreading.ex3.ThreadEx3_1.run(ThreadEx3_1.java:5)
	at multithreading.ex3.ThreadEx3.main(ThreadEx3.java:6)
Main thread terminated
```

start()를 호출하지 않으면 새로운 쓰레드가 생성되지 않습니다.

## 4. 싱글쓰레드 vs 멀티쓰레드

#### 예제 4 - 싱글쓰레드
```java:no-line-numbers
public class ThreadEx4 {
    static long startTime;

    public static void main(String[] args) {
        startTime = System.currentTimeMillis();
        job1();
        job2();
        System.out.println("Main thread terminated");
    }

    static void job1() {
        for (int i=0; i<300; i++) {
            System.out.printf("%s", new String("+"));
        }

        System.out.print("소요시간1:"+(System.currentTimeMillis()-startTime));
    }

    static void job2() {
        for (int i=0; i<300; i++) {
            System.out.printf("%s", new String("-"));
        }

        System.out.print("소요시간2:"+(System.currentTimeMillis()-startTime));
    }
}
```

실행 결과
```:no-line-numbers
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++소요시간1:5------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------소요시간2:13Main thread terminated

```

#### 예제 5 - 멀티쓰레드
```java:no-line-numbers
public class ThreadEx5 {
    static long startTime;

    public static void main(String[] args) {
        ThreadEx5_1 t1 = new ThreadEx5_1();
        t1.start();
        startTime = System.currentTimeMillis();
        job1();
        System.out.println("Main thread terminated");
    }

    static void job1() {
        for (int i=0; i<300; i++) {
            System.out.printf("%s", new String("+"));
        }

        System.out.print("소요시간1:"+(System.currentTimeMillis()-startTime));
    }
}

public class ThreadEx5_1 extends Thread {
    public void run() {
        for (int i=0; i<300; i++) {
            System.out.printf("%s", new String("-"));
        }

        System.out.print("소요시간2:"+(System.currentTimeMillis()-ThreadEx5.startTime));
    }
}
```

실행 결과
```:no-line-numbers
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-------------------+++---------------++++++---------------------------------------------------------------------------------------+++++++++++++++--+----------++++++++++++++++++++++++++++++++++++++++-----------------------------------------------------------------------------------------------------------------------------------------------------------------------소요시간1:9Main thread terminated
소요시간2:10
```

신기하게도, 두 쓰레드가 거의 동시에 종료됩니다. 몇 번 반복해서 실행해봤는데 결과가 같았습니다.

일반적으로 싱글코어 환경에서 멀티쓰레드는 Context switch 비용 때문에 싱글쓰레드보다 성능이 더 하락하지만, 저는 멀티코어 환경에서 실행했기 때문에 멀티쓰레드의 성능이 더 향상된 것으로 보입니다.

그러나 멀티코어에서 성능이 극적으로 향상되지 않는 이유는, 각 쓰레드가 출력을 위해 화면이라는 자원을 두고 경쟁하기 때문입니다. 이 때문에 실행 결과가 항상 같게 나오지 않으며, 동시성 제어를 해줘야 합니다.

::: info
자바가 OS(플랫폼) 독립적이라고 하지만 실제로는 OS 종속적인 부분이 몇 가지 있는데 쓰레드가 그 중 하나입니다.
:::

쓰레드가 서로 다른 자원을 사용하는 경우 멀티쓰레드 프로그래밍을 할 때 성능이 많이 향상됩니다.

#### 예제 6 - 싱글쓰레드 I/O
```java:no-line-numbers
import javax.swing.JOptionPane;

public class ThreadEx6 {
    public static void main(String[] args) throws Exception {
        String input = JOptionPane.showInputDialog("아무 값이나 입력하세요.");
        System.out.println("입력하신 값은 "+input+"입니다.");

        for (int i=5; 0<i; i--) {
            System.out.println(i);
            try {
                Thread.sleep(1000); // 1초간 시간 지연
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        System.out.println("Main thread terminated");
    }
}
```

실행 결과
```:no-line-numbers
입력하신 값은 asdasdasd입니다.
5
4
3
2
1
Main thread terminated
```

#### 예제 7 - 멀티쓰레드 I/O
```java:no-line-numbers
import javax.swing.JOptionPane;

public class ThreadEx7 {
    public static void main(String[] args) {
        ThreadEx7_1 t1 = new ThreadEx7_1();
        t1.start();

        String input = JOptionPane.showInputDialog("아무 값이나 입력하세요.");
        System.out.println("입력하신 값은 "+input+" 입니다.");
        System.out.println("Main thread terminated");
    }
}

public class ThreadEx7_1 extends Thread {
    public void run() {
        for (int i=5; 0<i; i--) {
            System.out.println(i);
            try {
                sleep(1000);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```

실행 결과
```:no-line-numbers
5
4
3
입력하신 값은 asdasd 입니다.
Main thread terminated
2
1
```

## A. 참조
S. Namgung, "2. 쓰레드의 구현과 실행," in *Java의 정석*, Jung-gu, Korea: 도우출판, 2022, ch. 13, sec. 2, pp. 724-792.

GeeksforGeeks, "Difference Between Callable and Runnable in Java," Aug. 16, 2022. [Online]. Available: [https://www.geeksforgeeks.org/difference-between-callable-and-runnable-in-java/](https://www.geeksforgeeks.org/difference-between-callable-and-runnable-in-java/) [Accessed Sep. 21, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
