---
title: '[운영체제] 04. 프로세스 개요'
icon: article
category: Operating System
date: 2022-07-15
order: 4
---

*본문은 2019년도 하반기 아주대학교의 컴퓨터공학과 교수로 재직하셨던 김상훈 교수님의 운영체제 과목 강의 자료를 기반으로 작성되었음을 알립니다.*

## 1. 프로세스(Process)란 무엇인가?
프로그램이 실행되어 메모리에 로드된 인스턴스(An instance of a program in execution)을 프로세스(Process)라 한다.

자바의 Class에 따른 Object가 생성되는 것처럼 Program에 따른 Process가 생성된다. 하나의 프로그램으로부터 여러 개의 프로세스가 생성될 수 있다. 각 프로세스는 Process ID(PID)로 고유하게 식별된다.

<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-16T07:33:47.447Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;sz4-A3yC2_Y2sq7a1J_J\&quot; version=\&quot;20.1.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;LG6QDIu25mH30WfcbB8O\&quot; name=\&quot;그림 1. Program to process\&quot;&gt;5VrbkqI6FP0aH8eCcBEfW+2ernNmqrrKmjrTjxGCZjoQJsQW5+tPIokCob30iH3RF5OdZBPWWuzsBHrOOCm+MpgtvtMIkR6woqLnTHoA2JYTiD9pWZcWP3BKw5zhSHXaGab4D9IjlXWJI5TXOnJKCcdZ3RjSNEUhr9kgY3RV7xZTUr9qBufIMExDSEzrfzjii9IagMHOfo/wfKGvbPvDsiWBurO6k3wBI7qqmJzbnjNmlPKylBRjRCR4Gpdy3N0LrduJMZTyYwaQYfA4+ed27bAfPvnFp0//WtkX5eUZkqW64QnOn9SE+VqjwFEhrjFa8IQIgy2KkOB5KsqhuDpiwvCMGMcCtxvVkOAoksNHDOX4D5xtXFminlGc8g0r3qjnTaSvJad5ybx0nXNGn9CYEir8TlKaSi8xJqRhMgHQdyOmgoqKSQHyFdEEcbYWXXRrAPpeOWitdafoWu3Y9pRpUSHaUTao9DXf+t5RIAqKhRMYAQYjBhslQFqOdp0YIbNM9kuKuXwi+zGhq3ABGe9HkMMZzCV0qwXmaJrBUPZciX7dIew28HVMfG3gmQDbnSHsGAhnjAqwEgNoRpdphCIl3DbQqsAbrDQfiRnlnCadQQ20dDXUgQm13yLlQVdAuwbQUoLnRrkKZg84cRyDMDTCiGiJ/Jnv+WfC2q5jva1XsHZbsAZdYe0ZWIdiLe4a6yBE7VjPAs/1rG6wtgPvbbH2D4fojxU5HNBAuC1It0FsD7vCeGBg/B0lVDm+htTE8Q4nJoNLJiaBwcj4s0QYQ//ukfrvDOzh4RCjE71wych6xGD4hPhhxHf0bNAmOLs/iovzCdsdgIPBBlw01uj1pYK2VVjqd0LAISjmHzXcuH7jEWgJN8NLPgG2uTW1ijv1u1JStnHqzUgxd6c3USQgzHvAJxLnGROluSzlmxh0Lcu1GzQ2BJaZpLYt125nVJm7r8ln2X0Z6/Xgrddr29x/3SOBXrdoRxAFcSvafhigWdwN2qBlabgw2uYObMpFAtQ13B4KIrcN7gDMHL8jcYO3F7eZ+htIozS6kcftu6DamnRKGlCB+U/VIsuPFfukqFbWupKK2/hZrTxWK7tBm5oeFcF8sc10ZeUBcrHCpBsLsMA+unK6ZCHag4l63jlkc8T39FPQoaj2msEk/8Bxs7YxRCDHz/WXE22Eqys8yCWyoq2Xjq20i/K+1ShQeZnQdNRMF/2GoxIYw9FGf9vb/otTcjNlv3pJukdKUmcG70ST2wxWa7J5bne0Jl/KCi6lSXPHcm5N2p9Wk9771uSr46Q37A+rv7dV6BEn19em0GMX8nceNe1XR83GSj7wLitJ86B/nyRDAvMch3tVmerPSJymdl5UyTsh1QmG/YFfjzzNrP5oXpshrHnS0DWxp20aTib2I3LZDPev5vLC2bZzWmZDM5QeT6So3WE5n/oKYddWiD7wDiwS710PbmD17XrI9l4pB9c/6KprQZjf0OgD4DyDaU0Z/u+l/MRtFNOUfykPZ29EBxtkxYY23a7PjXvAfRhrb2J2pUPd1lSdIPcbnCHS3ZmynPcdTDCRWH9bhjiCYg5jmuZ044HIy49g+DTfqPzg0fLeJ0x9xqgm1NvuhY4/PrL6juW558kxGqkAjeMcdaOn0xLTvwkwHyBOnGfRaL48Mhx1HSPaMrvzxYjpw9XFCP+TxghR3X0GXXbffUzu3P4P&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;그림 1. Program to process&gt;</div>

- 각 프로세스는 메모리 내에 자신만의 고유 주소 공간을 가진다
- 디스크에 저장된 프로그램은 Code, Data 영역의 데이터를 가지고 있고 이를 메모리에 적재해 프로세스로 실행하게 되면 Heap과 Stack 영역의 데이터들이 생성되어 메모리를 차지한다
- Data 영역은 전역 변수(Global variable)를 저장한다
- Stack 영역은 임시 데이터(Temporary data)를 저장한다
    - 함수 인자, 반환 주소, 지역 변수
    - SP(Stack Pointer) 레지스터에 의해 접근
- Heap 영역은 프로그램 런타임동안 동적으로 할당된 메모리를 말한다

## 2. 프로세스 상태 전환(State Transition)
프로세스는 실행된 뒤 다음과 같이 다양한 상태들 중 한 가지 상태를 가지게 된다.

- New - 프로세스 생성 직후
- Running - 프로세스의 instruction이 실행될 때
- Waiting - 특정 이벤트가 발생할 때까지 기다릴 때
- Ready - 프로세스가 프로세서에 할당되기를 기다릴 때
- Terminated - 프로세스 실행 종료됐을 때

이 때 특정 상태에서 다른 상태로 전환될 때 임의로 전환할 수는 없고 단계가 존재한다.

<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-15T13:47:36.700Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;j2bih2BNFrKfX9ekl6NP\&quot; version=\&quot;20.1.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;Xjg4jyPdli1pt31_T6CI\&quot; name=\&quot;그림 2. Process State Diagram\&quot;&gt;7Zpbc6M2FMc/jR/rQXfxuHH2kpm222na2Z196cgg25pi5AX5tp++wghsENk4rmM2Wecl6CAdQL+/DkcHD9BovnmficXsNx3LZACDeDNAtwMIQYC4/VdYtqWFclQappmKXae94V59k9VIZ12qWOaNjkbrxKhF0xjpNJWRadhElul1s9tEJ82rLsRUeob7SCS+9ZOKzay0csj29g9STWfVlQENyzNzUXV2T5LPRKzXByb0doBGmdamPJpvRjIpJq+al3LcuwfO1jeWydQcM+Dz7d3fI53efv7ny9e7Xxer/OPX6BfnZSWSpXvg3+Xa3a/ZVpNgHdn5to2b9UwZeb8QUXFmbZFb28zME9sC9nCiU/NOzFVS0P4gk5U0KhL2RG4y/W89g7uuKklGOtHZ7hJowiMZRc6FkwGg9ciDnmNOMAnsGXfrMjNy8+CcgHqmrUSlnkuTbW0XN4A7Nttmc70nHTrT7AAydTbhtDWt/e6n3x44Ak+gAT0af0oRb3vhMZH0OB4xC8fBmXjAoAkE9E0E+USWaarSaR9MYiH55CgmNOJyPDkPE4x+MCbYY/JJKNMTk8lkAo9cJ3RMCT0PEwRwgwkKemZCPCZ/yWyuUmFk3MtSIZLH+BgsHI4RPRMWQn6s9wn1qPgs0vhNkSbZVpSIPFfRkQjaE2sduWbRipbZSsbOR3lRGXuZVmte7Y3pZRbJx/MVI7KpNI+9SX1OByBIB4jKlslEGLVq3m4XHXeFP7SyD7JfnbApA4hagMvHdKMOU7a2I/ZA6K0clfPgOdqJpX7s0/XDXp1+0EvQD6BoCACAjAEUhiQIWVMFGA2xDRoUQ45gCDE/TV028Aw558zGKRoEOGy9U0BIh4ShEBEGKAsYgUdpz6pBbA+6LYoO+XcWC21pHDW2Mfag9HhWYfOfVti418DYimf13vjJ0sXhkBV/GDEEGIctt2TIOKUEMBAyzDh5FuXi1u4RgQsoN3x1yoVHKhf1qdw6b6skhk9ULg4eWQLPFFYhu4A4q6LdK1InfgkJQ10tbcF+esIJgyEMQs5DmxQQgltxlbEhCAinIaOE2MhLn0W69dq6ZFwFfiX0pUv32JSA9JoStF6i4OTAGn5PugCfJN2zqcuvI4p4rkxXdcTIjWnqSiRqmhaisxKQmTUURQqrrOSNOzFXcVwMv8lkrr6J8c5VUZJ1S836JTcDclv4WhqdOyl65ZBUp7JVS6lMLQU/KHX3nP+nigLau95q+3ygSN6hyPYu+2xllGpjdEBPFSSy5cJc8fm1ybCJj/aNzy9j5NFMxsvE0oBBrPKFMNHsStL7GsOaJOs044BkTfcyKP2N+5119NGadMFSruTunRDp+SKxM6HTK1UvvLZ2IF3fDkBXmfr5qPqb2k6qa6Gu8bbj+1z4OE98SZ7Q3wbKzRVdx/ei9ufujkynK/c+gZxt7n9qUqa1+x/soLf/AQ==&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;그림 2. Process State Diagram&gt;</div>

## 3. 프로세스 계층 구조(Hierarchy)
- 부모(Parent) 프로세스는 자식(Chlid) 프로세스를 생성할 수 있다
- Siblings는 자식 프로세스 중 같은 부모 프로세스를 가지는 프로세스를 말한다
- 이렇게 만들어진 프로세스 계층 구조는 트리 구조를 가진다

<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-15T13:52:45.660Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;DBPu-vt3Skyjv84CqSb0\&quot; version=\&quot;20.1.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;CWZHqasgO4EK4fMG2wdt\&quot; name=\&quot;그림 3. Process Hierarchy\&quot;&gt;5ZrBcuMoEIafxsdVAY0AHSfZSeawWztVOUzN3BQJW6pg4cLYTvbpF1tItkTkcTxbUTy+pEQLGsH/qdV0PIHb+fO9SRfF3zqXakJQ/jyBPyeECBa7v1vDS22IWVIbZqbMaxPeGx7Kf6U3Im9dlblcdjparZUtF11jpqtKZrZjS43Rm263qVbdWRfpTAaGhyxVofVbmdvCL4vwvf2LLGdFMzNu1jdPm85+JcsizfXmwASfJ3BrtLb11fz5Vqrt3jX7Uo+7G7jbPpiRlT1lwF+wvrdqJX788/3ry/3D011p6R/eyzpVK7/gsirthDDlfN48Gnc1214tdl5876V9abbHTeGUcI2bTVFa+bBIs+2djWPB2Qo7V7thcDPVlb1L56XacvBFqrW0ZZa6G0tr9FO7t7uupVK3WmmzmwLyVIpp5l14QDBrRx70ZJmQj1N3xy9KGiufB3cLtxo4dqWeS2teXBc/ADCth3huE6/iZg9BYyoO9GfelnrsZq3jvTLuwovzBqFIIJTSs7IaUkpQHF+PWAShjliYj6wWBGo92cLINM+HBCPXo1b/1RpdLRqotVwWg0oBIuJ6xKLwwV6tOBDrMV0WR+Igux6xcNwVq1VhLLFYGAcLqRbSDOl1RWK1u/5RxOKBWIt8qlbDL1f72b0GuYB/MLlEIFcoRpV/2p6BXKvSlTxRgP62Oi++uW1lK7OWufdRzyjz4AzV21X3VHplMvnzBNemZibtkX4DKh2oEL+iQmMzUqW2XHcf9zVp/AxfdekWsv8a9hJNwnvq1sv0ow4PY31H/UhNeo7qfQgc7Uhpl30+PMnvBQ9cAjxEsAgx541RwjlrKiNNYiVERBJgHBHEscsxxXlkAYgIuWk4JRgEcN5LtmMccZokAhDiAgDeFbumqvO7cEcvgrvkKHfJ/8QdPc4dG5W7sM510dzFJ3JHxuWu942jZ34sgeIoocAZ54I5SEmXYIIgojEDTIRjCxAl78sWCdhaLIdS5oQkV1Q86AEAdOSUGYd1OTlPsyNqIXo9arX/c/kwcoWFuYuO2k2k+GnYjscM2/2oLc6M2hi7Lz5BhFGWEOr8kq5fYFHCkBCUJowg9s4JQVhGvGy0Tj0BjYoWJr0Ig85lix5nKx6VrbDqedFssRPRgjHRgl5BpW2//fyMI0AAhCPGgPJurgmYRSQGLjiLKXXnHfq+aIU12otGi18CWkHR7+xzjDiGlotTo6J1QknQ6FWV7zhAv5D+vp7UDqXDnuFu5uuNk19PekVXWxGmvDF7BS2Atye9rrn/tU8t2/4nU/D5Pw==&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;그림 3. Process Hierarchy&gt;</div>

## 4. 프로세스 생성(Creation)
프로세스는 `fork()` 시스템 콜 API를 호출하여 생성할 수 있다.

- `fork()`를 호출하면 현재 프로세스를 복제(clone)하여 새로운 프로세스를 생성한다
    - 부모 프로세스는 자식 프로세스에게 자원과 권한의 대부분을 상속시킨다(open files, UID, etc)
    - 자식 프로세스는 부모 프로세스의 주소 공간을 복제하고 **자신만의 공간**을 갖는다
        - 기존 주소 공간을 복제하기 위해 `exec()` family API를 사용한다
            - `exec()`은 현재 Process image를 새로운 Process image로 대체(Replace)한다
- 부모와 자식 프로세스는 **병렬 처리**되지만 부모는 `wait()`를 이용하여 자식 프로세스가 종료되길 기다릴 수 있다

우리가 흔히 쉘 프로그램을 실행시키면 실행되고 있던 상위 프로세스가 쉘 프로세스를 생성하여 동작한다.

<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-16T07:36:31.865Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;SWfO_VB6nq8rRCUKshjG\&quot; version=\&quot;20.1.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;M1x_cmze01WdUT2nbSCs\&quot; name=\&quot;그림 4. 프로세스 동작\&quot;&gt;5Vhbb5swFP41kbaHTYCBhMeGNu0mtVrVXbS9TC6Y4NXgzJhc+utrisPFJk1asdEqeYjw5+Njc77PxwePgJ+szxlcxJc0RGRkGeF6BE5HluUZQPwXwKYEHM8ugTnDYQmZNXCD75EEDYnmOERZy5BTSjhetMGApikKeAuDjNFV2yyipD3rAs6RBtwEkOjoDxzyuEQn1rjGLxCex9uZTdcrexK4NZZvksUwpKsGBM5GwGeU8vIpWfuIFLHbxqUcN9vRWy2MoZQfMuD79fQ0ul7kd58u/7oki86zn/4H6WUJSS5fOKLs7t17uWS+2cZB+BIhF43pKsYc3SxgUPSsBOkCi3lCRMsUjxFN+QwmmBSEXyCyRBwHUHRknNG7KoiPppgQnxLKHqcAvj+bnbnShVSC6VYjG5ZuMEG3keiRq0eMo/XOsJhVsIVIEU0QZxthIgdMJD1Sn+ZYtlc1256E4gbRrsSg1Ne8clxTIB4kC89gxNIYWUHMj4kR21YoMQamBGiUoDUKjokSy2lTUrWHosTuoOS4d8nglDgaJToZaXhSnMmiFRCYZThocxDkbIlC2ShHo1A7n5UIiRlozgK0/5TjkM0R35d79Yg3Iup0RHSLMUQgx8v2crvCLGf4QrF4kXqPeUramyhMla8pRzUPesURUPMnUByVcdAcCWrgpmG2KAyyJxZsKvO0CxDxUHqsJVXF9OUqc9++ysCQKgPmjrTxbJW5iiPj36jMVAo0a/wfVDZ+vSoDB6rMHlRlu+qF56rMNl6msr6EMNGEIDlT5SAOct4WACR4nhbqEOZIFADT4rgXJQU5kR0JDsNi+JShDN/D20dXhmjLLSH8OtORc1r4yjnNZGWhFRYpTZFSlUho1EPlB5Qkb+plhtshJPXM6a3M8DRGghiLj/pjIcS0ne6ttWdn90EIucq/fQWfr6z0158Ld/Y78hLYcYXwanKlfWCuHLTuc9QT2XxhrnRN46NR/xzvabf9Zc5OWej3GK9GFoPS7Rp7qvOD6VYz84Flfl8E67ciIm3mCcreRire+b1fdDS+2cvN1E/udrSbLUfL3eN+crdo1lfLJeX1/Tw4ewA=&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;그림 4. 프로세스 동작&gt;</div>

## 5. 프로세스 종료(Termination)
프로세스 종료 방식에는 자발적(Voluntary), 비자발적(Involuntary) 방식이 있다.

- Voluntary
    - Normal exit
    - Error exit
- Involuntary
    - Fatal error   
        - Segmentation fault - Illegal memory access
        - Protection fault
        - Exceed allocated resources, etc.
    - Killed by another process
        - By receiving a **signal**

프로세스는 OS에게 `exit()` 시스템 콜 API를 호출하여 자체적으로 종료될 수 있다.

부모 프로세스는 `abort()` 또는 `kill()` 시스템 콜 API를 호출하여 자식 프로세스를 종료시킬 수 있다. 이는 signal을 발생시켜 대상 프로세스에게 전달되며, 프로세스간 비동기 통신 방식으로 signal이 처리된다. `abort()`는 자식 프로세스를 종료시킬 뿐 아니라 부모 프로세스 또한 종료된다.

부모 프로세스는 `wait()` 또는 `waitpid()` 시스템 콜 API를 이용해 자식 프로세스가 종료되길 기다릴 수 있다. `wait()`, `waitpid()`는 종료된 자식 프로세스의 PID와 상태 정보를 반환한다.

OS는 종료된 자식 프로세스의 부모 프로세스가 `wait()`을 호출했을 때 자원들을 모두 회수한다.

```c:no-line-numbers
pid_t wait(&status)
```

```c:no-line-numbers
pid = waitpid(-1, &status, 0);
pid = waitpid(childpid, &status, 0);
```

시스템 콜 API에 대한 자세한 내용은 man page를 통해 확인할 수 있다.

### 5.1. Zombie process
- 프로세스가 종료됐지만 부모 프로세스에 의해 `wait()`이 호출되지 않은 프로세스를 말한다
- 종료된 자식 프로세스의 실행 결과가 남게 되며 종료된 프로세스의 자원이 회수되지 않는다

### 5.2. Orphan process
- 부모 프로세스가 `wait()`를 호출하지 않은 채 자식 프로세스보다 먼저 종료된 경우의 자식 프로세스를 말한다
- `wait()`을 호출해줄 부모 프로세스가 없기 때문에 자원이 회수되지 않는다.
- 몇몇 OS는 Orphan을 만들지 않기 위해 연속적 종료(Cascading termination)을 수행한다
    - 부모 프로세스가 종료될 때 하위 모든 자식 프로세스를 재귀적으로 종료시킴
- UNIX, Linux는 루트 프로세스인 init이 Orphan process들을 입양(adopt)하고 `wait()`를 주기적으로 호출하여 자원을 회수한다.
    - 부모 프로세스만을 종료시키고 자식 프로세스는 Orphan이 되지 않도록 하기 위함

## 6. 프로세스 구성과 구현
프로세스가 메모리 상에서 동작하기 위한 데이터 외에 프로세스를 관리하고 제어하기 위한 메타 데이터가 필요하다. 프로세스의 메타 데이터들은 OS 커널의 주소 공간에서 Data 영역에 존재하게 된다. 또한 각 프로세스가 사용했던 OS 커널의 시스템 콜 API 호출 스택은 커널 주소 공간의 Stack 영역에 존재한다.

<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-16T07:35:15.699Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;75_k_Sl3bcg89pzDZ3cs\&quot; version=\&quot;20.1.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;bC01p8hBXcWOYnp50EYU\&quot; name=\&quot;그림 5. Kernel address space\&quot;&gt;7Vpbd5s4EP41fsw5XAzGjzaOm223aTbetmlf9sggg04AOULEl1+/EghjkJLQFuKmCQ+JNOj6fTOj0eCB6cbbdwSsw4/Yh9HA0PztwJwNDMOxLfaXC3aFwLLHhSAgyC9EeiVYoD0UQk1IM+TDtNaQYhxRtK4LPZwk0KM1GSAEb+rNVjiqz7oGAZQECw9EsvQr8mkotmWMKvkFREFYzqyX+4tB2VjsJA2BjzdHIvN8YLoEY1qU4q0LI45diUvRb/7A28PCCExomw7nZO+8+7IwvpkXH4xrtHasZXYmRrkHUSY2LBZLdyUCBGeJD/kg2sCcbkJE4WINPP52wyhnspDGEavprJhSgm8PSHHJPSQUMTwnEQoSJltiSnHMXqxQFLk4woQJE5yw8aZiMawH3D64S/2AHdM5iGNIyY41KTuMBNxC38rqpiJPHwpZeEScqQkhEAoTHIauMGUFAesPQGxIEF+Fu5RDwrUExljMcYw52z+tAwsEfB7DARIFrjHyfd59SmCK9mCZD8UZW2OU0HxT1nRgzfhYGcVpYWkVZw0qemLHsWrsDBXs6Ep2eiLHlMkh2INpyoR616ZwjOnAMG0NjPWRRAB7Y8xGtsanwGx0RDlYFq+ucEKPmmn504/dOK3tpidmLIkZbauJ5wfshRRLfZnm4tQ5UVjL+DkpsRWUzMXzSikxFefLs3LiPOLAOj/LGw5M0xyQ+x/JgWmaNTqxA9NN68QebPwINWbP1OhLoENDTY19PpmflpqTHy5G13Gvwtk0AC0eFSN2/vQDtWG3hPoQdnWPtRwAf05ZCGvYET8FlrwU8BLwfZJbR/NFmsP+WmJk52k/NlIQaHfAX+ZeJtN1eDH/9P7mfnJ3+c/liijuLxIV7Gq75kUvI9FuSoB3C+nTNlMZmMKBue58ft6VUQzrkCrObENlEk5fkA7/OEhVfkaJaRduRompfF/4AEnCk1FvfqaNnzGc5/Mzdwuoxevx+Ha8B/8Zy7tl8HXaJhUFE3/Cc3oVDkrd50jDLaI34g0vfzsqz7ZHjWY7UfFBGh5Mh1euAGX0JrmEB9OsfcI2elN25pXDsLxSjZvXyoGLbUBfSjQ2mGJbxRnxYIu4hQISQPoImI6a+iNuLQW3pYzACFB0X1+vinAxwxVX60qzzKZqjRs6U+xT9DKOUpaNgYYNL2NajYEKHKSBcv07bPvnVbLF0feLKqn1o5Lab6iS9m+lkuV3iV9VSelA61kl5YSlpJIv8uIi4Wq0vLgcsmKdH0hylBYxO28fHrzoPNdQa/ChyXz0dWVXsiHHdyGb9bXQYY6bJ6EcrancZ290yLngMp720X2NEvsu4584p7VSHm+fsXZlkK552IflEGxF+ShFs58b+NOCA0xwQEAcoyRoTFFF/V1NWvZgt4hE2WXJLnFB7pzPvEJBJhzlBFEEogf3sdilFMZ89SCK2KWF0aX9tbg+WnUx4eOb6TXZuHI86HnqZKPIIpZGGMFVtaDTHBi9XWBGkklw/mrfE908asv/mfydO1VcQ3kv9+pz0eyj+EDMyzOU3rJ/PqAgp5NkHs2Y1+qb3tXKOD29bXPGvdErf2l5iF7ttnRqKWU23zc/vgUdf3hifg53vKf4GXXAz27z78X3/Wj/PZr4X26uh9gy/lZc1tzc37+EdE6PH1+sFvnkviIHJU/yDWaWO7Q3nuo8jU/Mk3z9WXBv9kZU8ycAuuz5OiKKVavfBxYZhOpHlub5/w==&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;그림 5. Kernel address space&gt;</div>

### 6.1. PCB(Process Control Block)
PCB는 OS가 프로세스에 대한 중요한 정보를 저장해 놓는 곳이다. Process descriptor, Task control block라고도 한다. OS가 다중 프로세스, 다중 스레드 실행 환경에서 일부 중요한 정보를 참조/공유할 때, 단일 프로세스 내 다중 스레드가 프로세스의 필요 정보를 공유할 때 PCB를 이용한다.

<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-16T07:37:03.849Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;ylyQOnGVKI4LCez5HesM\&quot; version=\&quot;20.1.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;WWk5zXOLU_ihv7RstOQS\&quot; name=\&quot;그림 6. PCB\&quot;&gt;7Vtdd5s4EP01Pmf3ITkY/PlYk6Tpttm6Sbqb7EuPAjLWiUBEiNjur98RXzZIrh034NR1HhwxCIHuvRrNCNGybH/+nqNwesVcTFum4c5b1lnLNNuGNYB/0rJILb2BlRo8Ttys0tJwQ77j/MrMGhMXR6WKgjEqSFg2OiwIsCNKNsQ5m5WrTRgt3zVEHlYMNw6iqvVf4oppah2Y/aX9EhNvmt+53RumZ3yUV856Ek2Ry2YrJuu8ZdmcMZGW/LmNqQQvxyW97mLN2eLBOA7ENhd87nf88NPHad/3rpzL+X/kZLQ4yVp5RjTOOpw9rFjkCHAWBy6WjRgtazSbEoFvQuTIszPgHGxT4VM4akMxEpw9FkhJy4RQajPKOBwHLMBFpdzYMi0j+YMziBIvAJsDfcJwcpQ9HuYCz9f2u12gCTLEzMeCL6BKfkEvIyBTYDsnZLbks93JbNMVLgsNokxDXtH2EmYoZEjrUb+3jMv7y8fLSISz89veX6NO39sGdVBLKItOzOlixJHziMVm+JdcVaEHlG374uK890qgWptBNRvF1FQw/Yh5IL1Rj0rkHjiUPFlCrstxFKknogTXKhMAkiijrKhUQknAZ7zLTvjEdeXlI7gP+Y4ekqakvkNGApH0vDtqdc9kW7FgUer12srQyMaLZgi9AoX9CoPDrsJgX8Ngry4CLYVAG2aTozvKgbfqAr6jAH+GBKoTeMB4MpmYjrN/9Lv7Rr+roH8jwNsfvO7hbs0hP44+UXfRuYvb+B8bG/7HpztTMwtTiM+2d/88fcZf0/sXbiejY6iy0SgZ6vQ9hbv+Nmy0K4PDUuno1kTH+5POzRcPt58+jKe338ZfSfjN2iZCxYH7TiZYSyC0gaiEGs+JuMvOyPL9SvlsvlLpbJEduCiaFnEsgMgXd3k1eXC/embZQnKUN6H6QNnoGAlwaUFiMQ2zoA+7Sh5YIQ86z2Lu4M0zqUDcw+IH6Fp6MWwgO7dxTJEgz+XH1Skgu8NYCn2pNauqtX5FRGk3s6tWE8pqQ1WPXg0NUxyUhhJBFt3eXaOqy3hzGjXenkatX1GjStaxq0aLaa8hjapJTZ2B3f7iagXnzpbRXRGAv/oUpqY1Yxu6arRrZwD3fiUGaosh1MwmJaD+IfA2COjvm4C+QsAV9lnyzG6S4QMHPHZEzGtdZgHgXYQHk/1TYnbVNa7aKAmuhP14+zD+8vT1vHtCH41r7mvianv89fflo8m1Ly0fW8zPPxlDFmHj5hiy3mhw/SS5ryivW32J0Nkxyus2F+VpVaSGGm9KRbvlz7VrL/PFq5mIFt3uXjVaeU2iuKJdNWpVG6pZo2o0dphh2FpfsHmOqWuSUeOwMWdO8goS4Efi8F5y/QQJNXEw+AEHQew/QM8PnoQm33VpSRjqSPA48ltyA0+cdP3gWRjsm4V8bW2FhmvskQi6HB08/MUGlP3Br+aANw6EbzElgScvDibs8GlocnVKT4Op0FCsjvgoQB72cRaJHTQRTa5S6YnYKXsqpTwrkKtZi6UQIfOYCQuEDnMn5s9Fu60tk519JSc9yzg1uiU+O9Uodtv8pGcOT/vGcPlXatYaVJqtOVtpq+kKj4Mg8ZC2xBcRURxg4Zwqklm/U4DiyX42CqzTnLRfIJ9QCfYt8bEMSv/GM/i9ZuCLXmfk941OORDRxeRWoyO/p5A8/nCWcjpeloo43QPnG+ZGwjgRi/To9PTI/8v516QDRXTUDP/axDjLB+w0H/hjNsVyOdwg0lcRiQyeYyeWo//PI+kvJl2TfTRMupqJp69A+Noc5MjqBlZ1Sc2wUVLVzD4lNY4gmEp8tE2Z3NVqCABFDmKKwuScEZFA7rqXK2FcpHVv0zqU+ATYOs7xOwtDt8nWanS450FGKbpPP7yIQuj2Kp+9p1h+DDUqlZIvM945yfLQaoKctgHPlDaT1lMUstd0rcT5JabPWIqxnjyu0e3UeqZ1e0ZfzPQHuPfn1BuIODqyvYZtzf7ghtlWl09y6lz8TJzEvyEKTh+JxM0LJnucx/LSpX+C6R7+sYn8CbFUCDCAj/P/y928Rg7FlsmflAMcLr9RTdP75Ze+1vn/&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;그림 6. PCB&gt;</div>

<script setup lang="ts">
import UmlScript from "@UmlScript";
</script>

<UmlScript/>
