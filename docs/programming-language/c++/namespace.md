---
title: '[C++] 네임스페이스'
icon: article
category: C++
date: 2022-11-02
---

## 네임스페이스, namespace
두 개 이상의 식별자가 같은 스코프에 있는 경우 컴파일러가 어느 식별자를 사용해야 하는지 명확하게 알 수 없을 때 이름 충돌이 발생합니다.

이름 충돌 시 컴파일러나 링커가 모호함을 해결하기에 충분한 정보가 없어 오류가 발생합니다.

이런 문제는 프로그램의 규모가 점점 더 커질수록 발생할 확률이 더 증가합니다.

::: details 예제 - 네임스페이스 사용 X
foo.h
```cpp:no-line-numbers
int doSomething(int x, int y) {
    return x+y;
}
```

bar.h
```cpp:no-line-numbers
int doSomething(int x, int y) {
    return x-y;
}
```

main.cpp
```cpp:no-line-numbers
#include <iostream>
#include "foo.h"
#include "bar.h"

using namespace std;

int main() {
    cout << "Program terminated successfully\n";
    return 0;
}
```

실행 결과
```:no-line-numbers
In file included from c:\dev\home\temp\연습장\main.cpp:3:
c:\dev\home\temp\연습장\bar.h:1:5: error: redefinition of 'int doSomething(int, int)'
 int doSomething(int x, int y) {
     ^~~~~~~~~~~
In file included from c:\dev\home\temp\연습장\main.cpp:2:
c:\dev\home\temp\연습장\foo.h:1:5: note: 'int doSomething(int, int)' previously defined here
 int doSomething(int x, int y) {
```
:::

이러한 이름 충돌 문제를 해결하기 위해 네임스페이스(namespace) 개념이 도입됐습니다.

## A. 참조
소년코딩, "C++ 04.07 - 네임스페이스, std (namespace)," *Tistory*, Jun. 29, 2018. [Online]. Available: [https://boycoding.tistory.com/171](https://boycoding.tistory.com/171) [Accessed Nov. 2, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
