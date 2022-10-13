---
title: '[C++] STL - <unordered_map>'
icon: article
category: C++
date: 2022-05-27
order: 10
---

## 비정렬 맵(unordered_map) 컨테이너
```cpp:no-line-numbers
template<class Key, // unordered_map::key_type
    class T, // unordered_map::mapped_type
    class Hash = hash<Key>, // unordered_map::hasher
    class Pred = equal_to<Key>, // unordered_map::key_equal
    class Alloc = allocator< pair<const Key,T>> // unordered_map::allocator_type
> class unordered_map;
```

맵(map)은 키(key)-값(value) 쌍의 데이터를 특정 순서에 따라 저장하는 연관 컨테이너다. 맵에서 키(key)는 내부 요소를 고유하게 식별하고 정렬하는데 사용되며, 값(value)은 키에 대응하는 실제 값을 저장한다. 키와 값은 자료형이 서로 다를 수 있지만  맵 객체의 멤버 자료형 `value_type`으로 통일되며, `value_type`은 `pair` 자료형을 재정의한 것이다.

`typedef pair<const Key, T> value_type;`

맵(`map`)은 비정렬 맵(`unordered_map`)보다 요소 접근에 더 큰 시간복잡도를 가지지만(맵은 Binary Search Tree를 사용하여 탐색 시간복잡도가 *O(log n)*, 비정렬 맵은 해쉬 테이블을 사용하여 *O(1)*) 대신 정렬 순서에 따른 순회를 할 수 있다.


비정렬 맵 컨테이너를 이용하려면 다음 코드를 추가해야 한다.

```cpp:no-line-numbers
#include <unordered_map>
```

## 멤버 함수
각 멤버함수의 예제 코드를 작성하기엔 양이 매우 많기 때문에 [cplusplus.com](https://cplusplus.com/reference/unordered_map/unordered_map/)에서 각 멤버 함수 링크를 클릭하여 예제를 확인하자.

## 예제
### 선언
```cpp:no-line-numbers
unordered_map<string, string> first; // empty
unordered_map<string, string> second({{"apple", "red"}, {"lemon", "yellow"}}); // init list
unordered_map<string, string> third(second); // copy
unordered_map<string, string> fourth(third.begin(), third.end()); // range
```

### 선언 with 구조체
::: details 방법 1. std 네임스페이스 hash&lt;Type&gt; 정의
```cpp:no-line-numbers
struct Student {
    long long id;
    string name;

    bool operator==(const Student& rhs) const {
        return id == rhs.id && name == rhs.name;
    }
};

namespace std {
    template<>
    struct hash<Student> {
        size_t operator()(const Student& arg) const {
            hash<long long> hll;
            hash<string> hs;

            return hll(arg.id)^hs(arg.name);
        }
    };
}

unordered_map<Student, vector<string>> fifth; // empty
unordered_map<Student, vector<string>> sixth({
    {{1, "student 1"}, {"Math", "English"}},
    {{2, "student 2"}, {"French", "English"}},
}); // init list
// copy 생성자 가능
// range 생성자 가능
```
:::

::: details 방법 2. 해시 함수를 가진 자료형 정의
```cpp:no-line-numbers
struct Student {
    long long id;
    string name;

    bool operator==(const Student& rhs) const {
        return id == rhs.id && name == rhs.name;
    }
};

struct HashStudent {
    size_t operator()(const Student& arg) {
        hash<long long> hll;
        hash<string> hs;

        return hll(arg.id)^hs(arg.name);
    }
};

unordered_map<Student, vector<string>, HashStudent> seventh;
```
:::

### []연산자
::: details 요소 삽입/수정
```cpp:no-line-numbers
fifth[{3, "student 3"}] = {"Math", "English", "French"};
```
:::

::: details 요소 접근
요소가 존재하지 않는 경우 기본값(default value)이 반환됩니다.
```cpp:no-line-numbers
second["apple"];            // red
second["grape"];            // "", 빈 문자열(기본값)
fifth[{3, "student 3"}];    // {"Math", "English", "French"};
fifth[{4, "student 4"}];    // {}, 빈 vector<string> 컨테이너(기본값)
```
따라서 후술할 find 메서드를 이용해 요소가 존재하는지 확인하고 접근하는 것이 좋습니다.
:::

### insert
```cpp:no-line-numbers
pair<string, string> p = make_pair("grape", "violet");
fourth.insert(p); // copy
fourth.insert(make_pair<string, string>("grape", "violet")); // move
fourth.insert(second.begin(), second.end()); // range
```

### find
```cpp:no-line-numbers
unordered_map<Student, vector<string>>::iterator fifthIt = fifth.find({2, "student 2"}); // fifthIt == fifth.end(), 존재하지 않음
unordered_map<Student, vector<string>>::iterator sixthIt = sixth.find({2, "student 2"});
```

### erase
```cpp:no-line-numbers
sixth.erase(sixthIt);
```

### 순회 & 요소 접근
::: details iterator
```cpp:no-line-numbers
for (unordered_map<Student, vector<string>>::iterator it=sixth.begin(); it!=sixth.end(); it++) {
    Student student = it->first;        // key
    vector<string> vStr = it->second;   // value
}
```
:::

::: details enhanced-for - pair
```cpp:no-line-numbers
for (pair<Student, vector<string>> p: sixth) {
    Student student = p.first;
    vector<string> vStr = p.second;
}
```
:::

## A. 참조
::: left
cplusplus.com, "std::unordered_map", *cplusplus.com*, [Online]. Available: [https://m.cplusplus.com/reference/unordered_map/unordered_map/](https://m.cplusplus.com/reference/unordered_map/unordered_map/) [Accessed May 26, 2022].

BlockDMask, "[C++] map container 정리 및 사용법", *Tistory*, Jul. 28, 2017. [Online]. Available: [https://blockdmask.tistory.com/87](https://blockdmask.tistory.com/87) [Accessed May 27, 2022].
:::

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
