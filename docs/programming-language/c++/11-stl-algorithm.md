---
title: '[C++] STL - <algorithm>'
icon: article
category: C++
date: 2022-05-27
order: 11
---

## `<algorithm>` 헤더
`<algorithm>` 헤더는 요소들(elements)의 범위(range)에 대해 사용되는 함수들을 모아놓은 라이브러리다. 여기서 범위란 반복자(iterator)와 포인터(pointer)를 통해 명시될 수 있으며 이는 배열이나 STL 컨테이너의 범위가 될 수 있다는 뜻이다. 유의할 점은 `<algorithm>` 헤더에 있는 함수들은 이러한 반복자와 포인터를 통해 자료구조에 접근하기 때문에 실제 값을 변경할 수 있다는 것과, 자료구조의 크기나 저장 공간 할당 등의 연산은 수행하지 못한다는 점이다.

&lt;algorithm&gt; 헤더 하위의 함수들을 이용하려면 다음 코드를 추가해야 한다.

```cpp:no-line-numbers
#include <algorithm>
```

## `<algorihtm>`의 함수들
`<algorithm>` 헤더에서 제공하는 함수들 종류가 너무 많아 깜짝 놀랐다. 본문에서는 이들을 모두 나열하기 보단 자주 사용되는 몇 가지 함수들에 대해서만 종류 별로 나열하고자 한다. 모든 함수들에 대한 자세한 내용과 예제 코드는 [cplusplus.com](https://m.cplusplus.com/reference/algorithm/)에서 참고하자.

### 비수정 연산(Non-modifying sequence operation)
- all_of
- any_of
- none_of
- for_each
- find
- find_if
- count
- count_if
...

### 수정 연산(Modifying sequence operation)
- copy
- copy_n
- copy_if
- swap
- swap_ranges
- transform
- replace
- fill
- fill_n
- remove
- remove_if
- reverse
- rotate
...

### 분할(Partition)
- partition
...

### 정렬(Sorting)
- sort
...

### 이분 탐색(Binary search)
operating on partitioned/sorted ranges
- lower_bound
- upper_bound
- binary_search
...

### 병합(Merge)
operation on sorted ranges
...

### 힙(Heap)
...

### 최소/최대(Min/max)
- min
- min_element
- max
- max_element
...

## 예제
### 정렬 sort
```cpp
vector<int> v = {3, 2, 1};

sort(v.begin(), v.end()); // {1, 2, 3}
```

### 정렬 sort with 구조체, 다중정렬조건
::: details 방법 1. <code>&lt;</code>연산자 오버로딩
```cpp:no-line-numbers
struct Student {
    long long id;
    string name;

    bool operator<(const Student& rhs) const {
        if (id != rhs.id) return id < rhs.id;
        return name < rhs.name;
    }
};

vector<Student> vs = {{1, "c"}, {2, "b"}, {1, "a"}};
sort(vs.begin(), vs.end()); // (1, a) (1, c) (2, b)
```
:::

::: details 방법 2. Compare 함수 또는 구조체 사용
```cpp:no-line-numbers
struct Student {
    long long id;
    string name;

    bool operator<(const Student& rhs) const {
        if (id != rhs.id) return id < rhs.id; // 오름차순
        return name < rhs.name; // 오름차순
    }
};

bool fnComp(const Student& lhs, const Student& rhs) {
    if (lhs.id != rhs.id) return lhs.id > rhs.id; // 내림차순
    return lhs.name > rhs.name; // 내림차순
}

struct stComp {
    bool operator()(const Student& lhs, const Student& rhs) const {
        if (lhs.id != rhs.id) return lhs.id > rhs.id; // 내림차순
        return lhs.name < rhs.name; // 오름차순
    }
};

vector<Student> vs = {{1, "c"}, {2, "b"}, {1, "a"}, {2, "d"}};
sort(vs.begin(), vs.end());           // (1, a) (1, c) (2, b) (2, d)
sort(vs.begin(), vs.end(), fnComp);   // (2, d) (2, b) (1, c) (1, a)
sort(vs.begin(), vs.end(), stComp()); // (2, b) (2, d) (1, a) (1, c)
```
:::

### 조건 검사 all_of
::: details 1차원 vector
```cpp:no-line-numbers
struct stPred {
    bool operator()(const int& arg) const {
        return arg%2;
    }
};

bool fnPred(const int& arg) {
    return arg%2;
}

vector<int> v1 = {1, 3, 5, 7, 9, 11};

if (all_of(v1.begin(), v1.end(), fnPred)) {
    cout << "v1's elements are odd.\n";
}

if (all_of(v1.begin(), v1.end(), stPred())) {
    cout << "v1's elements are odd.\n";
}
```
:::

::: details 2차원 vector (제대로 동작 안함)
```cpp:no-line-numbers
vector<vector<int>> v2 = {
    {1, 3, 5},
    {7, 9, 11},
};
/* 포인터가 연속적이지 않음 */
all_of(v2.begin()->begin(), v2.end()->end(), fnPred);
```
:::

::: details 2차원 배열
```cpp:no-line-numbers
int v3[2][3] = {
    {1, 3, 5},
    {7, 9, 11},
};
all_of(&v3[0][0], &v3[1][3], fnPred);
```
:::

### 각 요소에 함수 적용 for_each
```cpp:no-line-numbers
struct Increase {
    int operator()(int& arg) {
        return ++arg;
    }
};

bool increase(int& arg) {
    return ++arg;
}

for_each(v.begin(), v.end(), increase);
for_each(v.begin(), v.end(), Increase());
```
:::

### range 기반 복사 copy
```cpp:no-line-numbers
struct Student {
    long long id;
    string name;
};

vector<Student> vs1 = {{1, "a"}, {2, "b"}};
/**
 * 꼭 메모리 크기를 확보해야 함
 * 그렇지 않으면 에러
 */
vector<Student> vs2(vs1.size());

copy(v.begin(), v.begin()+2, w.begin());
```

### max_element
::: details vector&lt;int&gt;
```cpp:no-line-numbers
vector<int> v = {1, 2, 3, 4, 5};
vector<int>::iterator vIt = max_element(v.begin(), v.end());
cout << *vIt; // 5
```
:::

::: details unordered_map&lt;string, int&gt;
비교 함수 또는 구조체를 사용해야 하는데, 구조체의 경우 제대로 동작하지 않았다.
```cpp:no-line-numbers
struct stComp {
    /* 함수 인자에 auto를 사용하면 에러 발생 */
    bool operator()(const pair<string, int>& lhs, const pair<string, int>& rhs) const {
        return lhs.second < lhs.second;
    }
};

bool fnComp(const pair<string, int>& lhs, const pair<string, int>& rhs) {
    return lhs.second < rhs.second;
}

unordered_map<string, int> um = {
    {"student 1", 2},
    {"student 2", 4},
    {"student 3", 1},
};

/* 비교 함수 */
unordered_map<string, int>::iterator it1 = max_element(um.begin(), um.end(), fnComp);
/* 비교 구조체를 사용하면 원하는 대로 동작하지 않는데 이유는 모르겠음 */
unordered_map<string, int>::iterator it2 = max_element(um.begin(), um.end(), stComp());
/* 비교 함수(람다) */
unordered_map<string, int>::iterator it3 = max_element(um.begin(), um.end(), [](const auto& lhs, const auto& rhs) {
    return lhs.second < rhs.second;
});
```
:::

### 이분 탐색 lower_bound, upper_bound
```cpp:no-line-numbers
vector<int> v = {1, 1, 1, 2, 2, 2, 2, 3, 3};

vector<int>::iterator lowIt = lower_bound(v.begin(), v.end(), 2);
vector<int>::iterator UppIt = upper_bound(v.begin(), v.end(), 2);
printf("Lowerbound index: %d\n", lowIt-v.begin()); // 3
printf("Upperbound index: %d\n", UppIt-v.begin()); // 7 유의
```

### 이분 탐색 with 구조체
::: details <code>&lt;</code>연산자 오버로딩
```cpp:no-line-numbers
struct Student {
    long long id;
    string name;

    bool operator<(const Student& rhs) const {
        if (id != rhs.id) return id > rhs.id; // 오름차순
        return name < rhs.name; // 내림차순
    }
};

vector<Student> vs = {
    {1, "c"}, {1, "e"}, {1, "c"},
    {2, "a"}, {2, "d"}, {2, "d"},
    {3, "b"}, {3, "b"}, {3, "a"},
};

sort(vs.begin(), vs.end()); // (3, a) (3, b) (3, b) (2, a) (2, d) (2, d) (1, c) (1, c) (1, e)

/* bound 함수에 init list로 구조체를 전달할 수 없어 이렇게 초기화해야 함 */
Student s = {2, "d"};
vector<Student>::iterator lowIt = lower_bound(vs.begin(), vs.end(), s);
vector<Student>::iterator UppIt = upper_bound(vs.begin(), vs.end(), s);
printf("Lowerbound index: %d\n", lowIt-vs.begin()); // 4
printf("Upperbound index: %d\n", UppIt-vs.begin()); // 6 유의
```
:::

::: details 비교 함수 사용
비교 구조체를 사용해도 된다.
```cpp:no-line-numbers
bool fnComp(const Student& lhs, const Student& rhs) {
    if (lhs.id != rhs.id) return lhs.id > rhs.id;
    return lhs.name < rhs.name;
}

sort(vs.begin(), vs.end(), fnComp); // (3, a) (3, b) (3, b) (2, a) (2, d) (2, d) (1, c) (1, c) (1, e)

/* bound 함수에 init list로 구조체를 전달할 수 없어 이렇게 초기화해야 함 */
Student s = {2, "d"};
vector<Student>::iterator lowIt = lower_bound(vs.begin(), vs.end(), s, fnComp);
vector<Student>::iterator UppIt = upper_bound(vs.begin(), vs.end(), s, fnComp);
printf("Lowerbound index: %d\n", lowIt-vs.begin()); // 4
printf("Upperbound index: %d\n", UppIt-vs.begin()); // 6 유의
```
:::

구조체 같은 사용자 정의 자료형이 아니라면 bound 함수에 직접 값을 기입해도 된다.

## A. 참조
::: left
cplusplus.com, "&lt;algorithm&gt;", *cplusplus.com*, [Online]. Available: [https://m.cplusplus.com/reference/algorithm/](https://m.cplusplus.com/reference/algorithm/) [Accessed May 26, 2022].

juwon9733, "구조체(struct)와 연산자 오버로딩을 통한 sort in C++", *Velog.io*, Sep. 7, 2021. [Online]. Available: [https://velog.io/@juwon9733/구조체struct와-연산자-오버로딩을-통한-sort-in-C](https://velog.io/@juwon9733/구조체struct와-연산자-오버로딩을-통한-sort-in-C) [Accessed May 27, 2022].
:::

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
