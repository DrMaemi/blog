---
title: '[C++] 자료형(Types)'
icon: article
category: C++
date: 2022-05-11
order: 2
---

자료형(Types)은 **기본 자료형**과 **사용자 정의 자료형**으로 구분한다.

표준 라이브러리(STL)로 제공되는 사용자 정의 자료형은 컴파일러에 의해 최적화되며 사용하기 편하다.

사용자 정의 자료형은 기본 자료형처럼 사용할 수 있다.

예를 들어 복소수를 처리하기 위한 자료형 `std::complex`, 문자열을 처리하기 위한 `std::string` 등 다양한 연산자와 입출력이 가능하므로 기본 자료형처럼 사용하는데 문제 없다.

다음은 자료형에 대한 설명을 위해 필요한 몇 가지 용어를 정리한 내용이다.
- 수(수치, 값)
    - 양을 뜻하며, 숫자는 수를 나타내는 기호
- 리터럴(literal)
    - 순서가 표현된 문자
    - `x = 12.345'678`의 `12.345'678`을 숫자 리터럴이라 함
    - `constexpr` 변수로, `constexpr` 함수에서 반환되는 값의 자료형임

## 기본 자료형(Primitive Data Types)
하드웨어의 자원(Resource)이 유한하고, C/C++은 하드웨어를 다루는 데 특화되어 있어 자료형으로 표현 가능한 수치 또한 유한하다.

C++의 기본 자료형은 다음과 같다.

### 문자
자료형 | 크기(Bytes) | 범위
----- | :---------: | --------
char<br>signed char | 1 | $[-2^7, 2^7-1]$<br>(-128 ~ 127)
unsigned char | 1 | $[0, 2^8-1]$<br>(0 ~ 255)
wchar_t | 2 | $[0, 2^{15}-1]$<br>(0 ~ 65,535)

### 정수
자료형 | 크기(Bytes) | 범위
----- | :---------: | --------
short<br>short int | 2 | $[-2^{15}, 2^{15}-1]$<br>(-32,768 ~ 32,767)
unsigned short<br>unsigned short int | 2 | $[0, 2^{16}-1]$<br>(0 ~ 65,535)
int<br>signed int | 4 | $[-2^{31}, 2^{31}-1]$<br>(-2,147,483,648 ~ 2,147,483,647)
unsigned<br>unsigned int | 4 | $[0, 2^{32}-1]$<br>(0 ~ 4,294,967,295)
long<br>long int<br>signed long<br>signed long int | 4 | $[-2^{31}, 2^{31}-1]$<br>(-2,147,483,648 ~ 2,147,483,647)
unsigned long<br>unsigned long int | 4 | $[0, 2^{32}-1]$<br>(0 ~ 4,294,967,295)
long long<br>long long int<br>signed long long<br>signed long long int | 8 | $[-2^{63}, 2^{63}-1]$<br>(-9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807)
unsigned long long<br>unsigned long long int | 8 | $[0, 2^{64}-1]$<br>(0 ~ 18,446,744,073,709,551,615)

### 실수
자료형 | 크기(Bytes) | 범위
----- | :---------: | --------
float | 4 | 3.4E +/- 38 (7 digits)
double<br>long double | 8 | 1.7E +/- 308 (15 digits)

### 논리
자료형 | 크기(Bytes) | 범위
----- | :---------: | --------
bool | 1 | false / true

## 사용자 정의 자료형(User Defined Data Types)
C++의 사용자 정의 자료형은 구조체 `struct`, 클래스 `class`, 공용체 `union`, 열거형 `enum`, 가 있다.

자료형 | 크기(Bytes)
----- | :---------:
struct | 멤버변수 중 최대 크기x멤버 변수 개수
union | 멤버변수 중 최대 크기
enum | 4

사용자 정의 자료형과 관련된 키워드로 `typedef`, `using`이 있다. 이 키워드들은 미리 정의된 자료형에 별칭을 부여하는 기능을 가진다.

## 자료형 추론
C++11부터 `auto`, `decltype()` 키워드를 이용하면 컴파일 때 객체의 자료형을 결정할 수 있다.

`auto y = x;`는 초기화하는 자료 `x`에 의해 `y`의 자료형이 결정된다.

`decltype(x) y;`는 `x`의 자료형에 의해 `y`의 자료형이 결정된다.

## 자료형 확인
`<typeinfo>` 헤더에 있는 `typeid()` 함수를 이용하면 자료형 id를 얻을 수 있고, 자료형에 따라 동적으로 처리하는 RTTI(Runtime Type Information) 기법에 활용할 수 있다.

::: details 예제 코드
```cpp
#include <iostream>
#include <cstdlib>
#include <typeinfo>
#include <string>
using namespace std;

int fun1() { return 10; }
char fun2() { return 'g'; }

// A generic function which finds minimum of two values
// return type is type of variable which is minimum
template <class A, class B>
auto findMin(A a, B b) -> decltype(a < b ? a : b) {
    return (a < b) ? a : b;
}

// driver function to test various inference
int main()
{
    auto a = 4;
    auto b = 3.37;
    auto pa = &a;
    cout << "a is " << typeid(a).name() << endl
         << "b is " << typeid(b).name() << endl
         << "pa is " << typeid(pa).name() << endl;

    // Data type of x is same as return type of fun1()
    // and type of y is same as return type of fun2()
    decltype(fun1()) c;
    decltype(fun2()) d;
    cout << "c is " << typeid(c).name() << endl;
    cout << "d is " << typeid(d).name() << endl;

    int e = 5;
     // f will be of type int : data type of e
    decltype(e) f = e + 5;
    cout << "e is " << typeid(e).name() << endl;
    cout << "f is " << typeid(f).name() << endl;

    // This call returns 3.44 of doubale type
    auto g = findMin(4, 3.44);
    // This call returns 3 of double type
    auto h = findMin(5.4, 3);
    cout << "g is " << typeid(g).name() << " and value is " << g << endl;
    cout << "h is " << typeid(h).name() << " and value is " << h << endl;

    // definite i to const char* type
    auto i = "Hello";
    cout << "i is " << typeid(i).name() << " and value is " << i << endl;
    if (typeid(i).name() == typeid(const char*).name()) {
        cout << "i is same with const char* type" << endl;
    }

    cout << "Are char* and char[] type same? ";
    // comparison char* and char[]
    if (typeid(char*).name() == typeid(char[]).name()) {
        cout << "Yes, they are same." << endl;
    }
    else {
        cout << "Nop, char* is " << typeid(char*).name() << " and char[] is " << typeid(char[]).name() << endl;
    }

    string j = "Hello";
    cout << "j is " << typeid(j).name() << " and value is " << j << endl;

    return EXIT_SUCCESS;
}
```
:::

::: details 실행 결과
```:no-line-numbers
a is i
b is d
pa is Pi
c is i
d is c
e is i
f is i
g is d and value is 3.44
h is d and value is 3
i is PKc and value is Hello
i is same with const char* type
Are char* and char[] type same? Nop, char* is Pc and char[] is A_c
j is NSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEE and value is Hello
```
:::

## A. 참조
::: left
SEADOG, "C++ 이야기 - 01.01.01. 자료형(Types)", *Wikidocs.net*, Feb. 3, 2022. [Online]. Available: [https://wikidocs.net/50830](https://wikidocs.net/50830) [Accessed May 11, 2022].

melonicedlatte, "C/C++ 에 존재하는 모든 자료형 개념 총 정리", *melonicedlatte.com*, Mar. 4, 2018. [Online]. Available: [http://melonicedlatte.com/algorithm/2018/03/04/022437.html](http://melonicedlatte.com/algorithm/2018/03/04/022437.html) [Accessed May 11, 2022].
:::

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
