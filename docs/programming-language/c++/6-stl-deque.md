---
title: '[C++] STL - <deque>'
icon: article
category: C++
date: 2022-05-27
order: 6
---

```cpp:no-line-numbers
template<class T, class Alloc = allocator<T>> class deque;
```

덱(deque)은 Double-ended queue의 약자로 양쪽 끝에서 확장 가능한 순차 컨테이너(Sequence Container)이다.

덱은 다양한 방법으로 구현할 수 있지만 결론적으로 임의의 요소에 직접 접근할 수 있는 random access iterators와, 필요에 따른 자료구조 확장과 축소를 위한 저장 공간 관리 기능을 제공한다.

덱은 벡터(vector)와 유사한 기능을 가지지만 서로 다른 방식으로 동작한다. 벡터는 연속적인 메모리 공간에 데이터를 저장하지만 덱은 산재한 메모리 공간에 데이터를 저장하며, 임의의 요소에 직접 접근을 위해 필요한 논리 정보를 내부에 저장해둔다. 이 때문에 연속 공간을 사용하지 않더라도 임의 접근(random access)에 *O(1)*의 시간복잡도를 가진다. 따라서 덱은 벡터보다 내부적으로 더 복잡하게 구현되어 있다.

그러나 덱은 기본적으로 컨테이너의 첫 요소와 끝 요소에 대한 접근/수정 연산에 특화되어 있으며, 그 외 연산의 경우 벡터나 리스트(list)에 비해 성능이 좋지 않고 반복자 및 참조의 일관성이 떨어진다.

덱 컨테이너를 이용하려면 다음 코드를 추가해야 한다.

```cpp:no-line-numbers
#include <deque>
```

## 멤버 함수
각 멤버함수의 예제 코드를 작성하기엔 양이 매우 많기 때문에 [cplusplus.com](https://m.cplusplus.com/reference/deque/deque/)에서 각 멤버 함수 링크를 클릭하여 예제를 확인하자.

### 생성자(Constructor)
- *empty container constructor*
- *fill constructor*
- *range constructor*
- *copy constructor (and copying with allocator)*
- *move constructor (and moving with allocator)*
- *initializer list constructor*

### 반복자(Iterator)
- begin
- end
- rbegin
- rend
- cbegin

### 용량(Capacity)
- size
- max_size
- resize
- empty
- shrink_to_fit

### 요소 접근(Element access)
- operator[]
- at
- front
- back

### 수정자(Modifier)
- assign
- push_back
- push_front
- pop_back
- pop_front
- insert
- erase
- swap
- clear
- emplace
- emplace_front
- emplace_back

### 할당자
- get_allocator

## 예제
### 생성자와 요소 삽입/삭제
```cpp
#include <iostream>
#include <deque>

using namespace std;

int main() {
    deque<int> first; // empty constructor
    deque<int> second(4, 100); // fill constructor - int 자료형 값 100이 4개
    deque<int> third(second.begin(), second.end()); // range constructor
    deque<int> fourth(third); // copy constructor

    int myArr[] = {16, 2, 77, 29};
    deque<int> fifth(myArr, myArr+sizeof(myArr)/sizeof(int)); // 다른 배열의 포인터로도 생성 가능

    cout << "The contents of fifth are:";
    for (deque<int>::iterator it=fifth.begin(); it!=fifth.end(); ++it)
        cout << ' ' << *it;
    cout << '\n';

    fifth.push_back(5);
    cout << "after .push_back(5), fifth:";
    for (size_t i=0; i<fifth.size(); ++i)
        cout << ' ' << fifth[i];
    cout << '\n';

    fifth.pop_back();
    cout << "after .pop_back(), fifth:";
    for (auto it=fifth.begin(); it!=fifth.end(); ++it)
        cout << ' ' << *it;
    cout << '\n';

    fifth.swap(second);
    cout << "after fifth.swap(second),\nfifth:";
    for (auto it=fifth.begin(); it!=fifth.end(); ++it)
        cout << ' ' << *it;
    cout << '\n';
    cout << "second:";
    for (auto it=second.begin(); it!=second.end(); ++it)
        cout << ' ' << *it;

    return 0;
}
```

::: details 실행 결과
```:no-line-numbers
The contents of fifth are: 16 2 77 29
after .push_back(5), fifth: 16 2 77 29 5
after .pop_back(), fifth: 16 2 77 29
after fifth.swap(second),
fifth: 100 100 100 100
second: 16 2 77 29
```
:::

## A. 참조
::: left
cplusplus.com, "std::deque", *cplusplus.com*, [Online]. Available: [https://m.cplusplus.com/reference/deque/deque/](https://m.cplusplus.com/reference/deque/deque/) [Accessed May 26, 2022].
:::

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
