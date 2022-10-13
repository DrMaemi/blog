---
title: '[C++] 입출력(I/O)'
icon: article
category: C++
date: 2022-04-24
order: 3
---

C++은 기본적으로 `#include <iostream>`과 같이 iostream 헤더 파일을 이용해 입출력을 수행할 수 있다.

## 두 개의 정수를 입력받고 합을 출력
::: details 예제 코드
```cpp
#include <iostream>

int main() {
    int a, b;
    std::cout << "첫 번째 숫자 입력:";
    std::cin >> a;

    std::cout << "두 번째 숫자 입력:";
    std::cin >> b;

    std::cout << "합:" << a+b << std::endl;

    return 0;
}
```
:::

::: details 실행 결과
```
첫 번째 숫자 입력:3
두 번째 숫자 입력:5
합:8
```
:::

`using namespace std` 코드를 추가해서 네임스페이스 `std::`를 생략할 수 있다.

## 공백으로 구분된 2차원 배열 입력 후 그대로 출력
::: details 예제 코드
```cpp
#include <iostream>
using namespace std;

int main() {
    int rows, cols, matrix[10][10];

    cout << "행 개수 입력:";
    cin >> rows;
    cout << "열 개수 입력:";
    cin >> cols;

    cout << "행렬 입력 시작" << endl;
    for (int i=0; i<rows; i++)
        for (int j=0; j<cols; j++)
            cin >> matrix[i][j];

    cout << "입력받은 행렬:" << endl;
    for (int i=0; i<rows; i++) {
        for (int j=0; j<cols; j++)
            cout << matrix[i][j] << " ";
        cout << endl;
    }
    
    return 0;
}
```
:::

::: details 실행 결과
```
행 개수 입력:2
열 개수 입력:3
행렬 입력 시작
1 2 3
4 5 6
입력받은 행렬:
1 2 3 
4 5 6
```
:::

## 문자열 입력받기 - cin
::: details 예제 코드
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cout << "What's your name?" << endl;
    cin >> s;
    cout << "Hello, " << s << endl;

    return 0;
}
```
:::

::: details 실행 결과
```
What's your name?
Lee Sang Hyun
Hello, Lee
```
:::

`cin`을 이용해 문자열을 입력받으면 공백 문자를 입력 종료로 받아들여 원하는 대로 동작하지 않는다.

## 문자열 입력받기 - getline
::: details 예제 코드
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cout << "What's your name?" << endl;
    getline(cin, s);
    cout << "Hello, " << s << endl;

    return 0;
}
```
:::

::: details 실행 결과
```
What's your name?
Lee Sang Hyun
Hello, Lee Sang Hyun
```
:::

## 자료형 확인
::: details 예제 코드 1
```cpp
#include <iostream>
#include <string>
#include <typeinfo>
#include <queue>
using namespace std;

typedef struct {} st;
class Cl {};

int main() {
    string txt;
    int i;
    st s;
    Cl c;
    queue<int> q;

    cout << "string 데이터 타입:" << typeid(txt).name() << endl;
    cout << "int 데이터 타입:" << typeid(i).name() << endl;
    cout << "struct 데이터 타입:" << typeid(s).name() << endl;
    cout << "class 데이터 타입:" << typeid(c).name() << endl;
    cout << "queue 데이터 타입:" << typeid(q).name() << endl;

    if (typeid(i) == typeid(1))
        cout << "i는 1과 같은 int 타입" << endl;

    if (typeid(txt) == typeid(string))
        cout << "txt는 string 타입" << endl;
}
```
:::

::: details 실행 결과
```
string 데이터 타입:NSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE
int 데이터 타입:i
struct 데이터 타입:2st
class 데이터 타입:2Cl
queue 데이터 타입:St5queueIiSt5dequeIiSaIiEEE
i는 1과 같은 int 타입
txt는 string 타입
```
:::

`i`의 데이터 타입이 `int`일 것으로 기대했으나 그대로 `i`가 나온다. 이는 컴파일러의 종류에 따라 자료형 표현 구현이 다르게 되어있기 때문이다.

::: details 예제 코드 2
```cpp
#include <string>
#include <iostream>
 
struct A {};
class B {};
 
namespace ns {
    struct X {};
}
 
int main() {
    std::cout << typeid(A).name() << ", " << typeid(B).name() << ", " << typeid(ns::X).name() << ", " << typeid(std::string).name() << std::endl;
    return 0;
}
```
:::

- MSVC: `struct A, class B, struct ns::X, class std::basic_string<char, struct std::char_traits<char>, class std::allocator<char>>`
- GCC: `1A, 1B, N2ns1XE, NSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE`
- CLang: `1A, 1B, N2ns1XE, NSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE`

필자는 GCC를 컴파일러로 사용했기 때문에 위와 같은 결과를 얻었다.

## 참조
::: left
dmitriano, The string representation of a type is implementation defined in C++, *DeveloperNote.com*, Jun. 19, 2018. [Online]. Available: [https://developernote.com/2019/06/the-string-representation-of-a-type-is-implementation-defined-in-cpp/](https://developernote.com/2019/06/the-string-representation-of-a-type-is-implementation-defined-in-cpp/) [Accessed Nov. 29, 2021].

쿼츠의 세계공방, 컴파일러와 IDE, *Naver blog*, Nov. 5, 2019. [Online]. Available: [https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=yong030389&logNo=221698524595](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=yong030389&logNo=221698524595) [Accessed Nov. 29, 2021].
:::

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
