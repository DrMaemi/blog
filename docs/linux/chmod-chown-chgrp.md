---
title: '[Linux] 리눅스 권한 관리 명령어 - chmod, chown, chgrp'
icon: article
category:
  - Linux
date: 2023-01-08
---

리눅스(Linux)는 하나의 컴퓨터를 여러 사람이 사용할 수 있는 멀티유저 OS이기 때문에 권한 관리가 매우 중요합니다.

## 리눅스 파일, 디렉토리 권한 확인
`ls -l` 명령어를 사용하면 파일과 디렉토리 리스트를 출력하며 권한을 확인할 수 있습니다.

```:no-line-numbers
$ ls -l
lrwxrwxrwx 1 leesh users  15 Jan  8 13:35 assignment#1-link -> assignment#1.sh
-rw-r--r-- 1 leesh users 108 Jan  8 13:34 assignment#1.sh
-rw-r--r-- 1 leesh users   0 Jan  8 13:59 io
-rw-r--r-- 1 leesh users   0 Jan  8 13:59 variable
```

출력 결과 각 파일의 종류, 권한, 링크 개수, 사용자(소유자), 그룹, 수정 시간, 파일 이름을 나타냅니다.

위의 `-rwxr-xr-x`는 파일의 종류와 권한을 나타낸 부분이며, 이는 다시 4부분으로 나눌 수 있습니다.

1. '-'
  - 일반 파일(-), 디렉토리(d), 링크(l) 인지 구분
  - 리눅스에서는 위 세 가지 모두 '파일' 이라고 명명하며, 리눅스의 모든 것은 파일임(하드웨어든, 기타 무엇이든 모두 파일로 간주하여 처리)
2. 'rwx'
  - 사용자 권한
  - 읽거나(r, read), 쓰거나(w, write), 실행(x, execute)할 수 있는 권한을 가지고 있음
3. 'r-x'
  - 그룹 권한
  - 읽거나 실행할 수 있는 권한을 가지고 있음
4. 'r-x'
  - 다른 사용자 권한

## 파일 권한 변경 - chmod
### 개별적으로 변경
```:no-line-numbers
$ ls -l test.c
-rw-r--r-- 1 leesh users 0 Jan  8 14:58 test.c
$ chmod u+x test.c
$ ls -l test.c
-rwxr--r-- 1 leesh users 0 Jan  8 14:58 test.c
$ chmod g+w test.c
$ ls -l test.c
-rwxrw-r-- 1 leesh users 0 Jan  8 14:58 test.c
$ chmod o-r test.c
$ ls -l test.c
-rwxrw---- 1 leesh users 0 Jan  8 14:58 test.c
```

아래와 같은 사용도 가능합니다.

```:no-line-numbers
$ chmod og+rwx-w test.c
$ ls -l test.c
-rwxr-xr-x 1 leesh users 0 Jan  8 14:58 test.c
```

### 숫자로 한 번에 권한 변경
사용자, 그룹, 다른 사용자에 대해 3자리 r,w,x로 권한을 표기할 때 이를 3자리 2진수로 보고 1은 권한을 가지며 0은 권한을 가지지 않는 것으로 표현하는 것을 이용한 방법입니다.

예를 들어 `-rwxr--r-- 1 leesh users 0 Jan  8 14:58 test.c`의 경우 사용자, 그룹, 다른 사용자 권한은 `rwx`/`r--`/`r--`이며, 이는 `111`/`100`/`100` 의 세 부분의 2진수로 표현하고 다시 10진수로 표현하면 `7`/`4`/`4`가 됩니다.

이 10진수를 이용하여 `chmod` 명령어로 해당 파일의 사용자, 그룹, 다른 사용자에 대한 권한을 설정할 수 있습니다.

```:no-line-numbers
$ chmod 744 test.c
$ ls -l test.c
-rwxr--r-- 1 leesh users 0 Jan  8 14:58 test.c
$ chmod 000 test.c
$ ls -l test.c
---------- 1 leesh users 0 Jan  8 14:58 test.c
$ chmod 600 test.c
$ ls -l test.c
-rw------- 1 leesh users 0 Jan  8 14:58 test.c
```

## 파일 소유권 변경 - chown (root 사용자만 가능)
리눅스 chown 명령은 파일/디렉토리의 사용자(소유자)를 변경할 수 있습니다.

chown 명령은 리눅스 시스템의 최상위 권한을 가진 root 사용자만 사용할 수 있습니다.

```:no-line-numbers
sudo chown user01 a.out
```

- a.out 파일의 사용자(소유자)를 user01로 변경

## 파일 그룹 변경 - chgrp
리눅스 chgrp 명령은 파일/디렉토리의 그룹을 변경할 수 있습니다.

일반 사용자는 자신이 속한 그룹으로만 변경할 수 있습니다.

```:no-line-numbers
sudo chgrp user01 a.out
```

- a.out 파일의 그룹을 user01로 변경

::: note 리눅스에서 사용자를 생성하면 같은 이름의 그룹이 자동 생성됩니다.
생성된 사용자는 자동으로 자신의 이름과 같은 그룹에 속하게 됩니다.
:::

## A. 참조
빌노트, "리눅스 권한 관리 명령어 사용법 정리 (chmod, chown, chgrp 명령어)," *withcoding.com*, Aug. 18, 2017. [Online]. Available: [https://withcoding.com/103](https://withcoding.com/103) [Accessed Dec. 23, 2022].
