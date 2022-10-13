---
title: '[C++] 변수(Variables)'
icon: article
category: C++
date: 2022-05-12
order: 2
---

변수를 정의한다는 것은 자료형에 맞는 값을 저장할 수 있는 메모리 공간을 사용하는 것이다.

## 변수 명 제약
C++ 다음에 해당하는 변수 명을 이용해 변수를 정의하지 못한다.
- 프로그래밍 언어의 예약어(ex. int, auto, for, etc.)
- 숫자로 시작하는 변수 명
- 띄어쓰기가 있는 변수 명
- 밑줄(_)을 제외한 특수 문자를 포함한 변수 명

결과적으로 영문자, 숫자, 밑줄만을 이용하여 변수 명을 지정할 수 있다.

## 기본 자료형
기본 자료형 변수를 초기화 하는 방법으로 `=`, `( )`, `{ }`를 사용한다. 할당은 `=`를 사용한다. `=`와 `{ }`는 같이 사용할 수 있으나 `=`와 `( )`는 같이 사용할 수 없다.

::: details 기본 자료형 예제
```cpp
#include <iostream>
using namespace std;

int main() {
    char a = 'a';
    char b('b');
    char c{'c'};

    int n = 10;
    int m(10);
    int k{10};
    int w = {15}; // '='와 '{ }'를 같이 사용하는 경우 자료형 추론 예약어인 auto를 사용할 때 주의해야 한다.
    int x;
    x = 5;

    cout << a << b << c << n << m << k << w << x << endl;
    return 0;
}
```
:::

::: details 실행 결과
```:no-line-numbers
abc101010155
```
:::

## 구조체 `struct`
구조체 자료형을 선언할 때 멤버 변수들의 기본 값을 정의할 수 있다. 변수 선언 시 별도 값으로 초기화하지 않으면 기본 값이 사용된다.

::: details struct 예제 코드 1
```cpp
#include <iostream>
using namespace std;

struct MyStruct { // 자료형 선언
    int a = 10; // 기본 값
    int b = 20; // 기본 값

    int sum() {
        return a+b;
    }
};

int main() {
    MyStruct myStruct1{2, 5}, myStruct2(3, 6), myStruct3;
    printf("myStruct1.sum() is %d\n", myStruct1.sum());
    printf("myStruct2.sum() is %d\n", myStruct2.sum());
    return 0;
}
```
:::

::: details 실행 결과
```
myStruct1.sum() is 7
myStruct2.sum() is 30
```
:::

기본 자료형 변수를 초기화할 때처럼 `=`, `( )`, `{ }`를 사용할 수 있다. `( )`는 반드시 생성자 오버로딩을 하거나 같은 자료형의 구조체/클래스를 인자로 사용해야 한다. `{ }`의 경우 생성자 구현 여부에 따라 사용 가능 여부가 달라진다. C++ 11부터는 구조체가 함수(메서드)를 가질 수 있으며 후술할 클래스 자료형처럼 생성자 메서드 또한 가질 수 있다.

::: details struct 예제 코드 2
```cpp
#include <iostream>
#include <stdio.h>
using namespace std;

struct Person {
    double height;
    float weight;
    int age;
    string name;

    // Person() { } // 생성자 (1)

    // Person(double h, float w, int a, string n) { // 생성자 (2)
    //     height=h; weight=w; age=a; name=n;
    // }

    void info() {
        cout << "height : " << height << endl;
        cout << "weight : " << weight << endl;
        cout << "age : " << age << endl;
        cout << "name : " << name << endl;
        cout << endl;
    }
};

int main() {
    Person a; // 생성자 오버로딩이 하나 이상일 때 (1)이 구현되지 않은 경우 에러 - 이와 같은 초기화 방식이 구현되어 있지 않다는 오류 반환
    Person b = {1, 2, 3}; // '=' 생략 가능, 생성자 오버로딩이 하나 이상일 때 매개 변수 세 개를 가지는 생성자 오버로딩이 구현되어 있지 않으면 에러
    Person a1 = {175, 65, 20, "Jack"}; // '=' 생략 가능, 생성자 오버로딩이 하나 이상일 때 (2)가 구현되어 있지 않으면 에러
    Person b1 = {.height=165, .weight=55, .name="Amy"}; // '=' 생략 가능, 생성자 오버로딩이 하나 이상일 때 매개 변수 세 개를 가지는 생성자 오버로딩이 구현되어 있지 않으면 에러
    Person a2 = a1;
    Person b2(b1);
    Person a3{a2};
    // Person x(180, 70, 24, "Mr. New York"); // (2)가 구현되어 있지 않으면 에러
    Person y(); // c++에서 구조체, 클래스는 이러한 초기화 방식을 지원하지 않음
    Person* z = new Person();

    a2.height += 1;
    b2.height += 1;
    a3.age += 1;

    cout << "[Person a]" << endl;
    a.info();
    cout << "[Person b]" << endl;
    b.info();
    cout << "[Person a1]" << endl;
    a1.info();
    cout << "[Person b1]" << endl;
    b1.info();
    cout << "[Person a2]" << endl;
    a2.info();
    cout << "[Person b2]" << endl;
    b2.info();
    cout << "[Person a3]" << endl;
    a3.info();
    // cout << "[Person x]" << endl;
    // x.info();
    // cout << "[Person y]" << endl;
    // y.info(); // 에러(y의 메서드로 info가 존재하지 않는다는 오류 반환)
    cout << "[Person z]" << endl;
    z->info();

    return 0;
}
```
:::

::: details 실행 결과
```
[Person a]
height : 2.07565e-317
weight : 3.36312e-044
age : 0
name :

[Person b]
height : 1
weight : 2
age : 3
name :

[Person a1]
height : 175
weight : 65
age : 20
name : Jack

[Person b1]
height : 165
weight : 55
age : 0
name : Amy

[Person a2]
height : 176
weight : 65
age : 20
name : Jack

[Person b2]
height : 166
weight : 55
age : 0
name : Amy

[Person a3]
height : 175
weight : 65
age : 21
name : Jack

[Person z]
height : 0
weight : 0
age : 0
name :
```
:::

## 클래스 `class`
C++의 클래스는 구조체에 접근 지정자(public, private, protected) 개념을 사용한 것과 같고, 모든 접근 지정자가 public인 경우 구조체와 동작 로직이 같다.

::: details class 예제 코드 1
```cpp
#include <iostream>
using namespace std;

class Point {
public: // OOP 가법에 따라 private 사용 권장
    int x = 0, y = 0;

public:
    Point() { } // 생성자 (1)
    Point(int a, int b) { x = a; y = b; } // 생성자 (2)
    Point(int _1) { x = _1; } // 생성자 (3)
    void addPoint(int a, int b) { x += a; y += b; }
    int getX() { return x; }
    int getY() { return y; }
    void info() { printf("%d, %d\n", x, y); }
};

int main() {
    Point p1; // 생성자 오버로딩이 하나 이상일 때 (1)이 구현되지 않은 경우 에러 - 이와 같은 초기화 방식이 구현되어 있지 않다는 오류 반환
    Point p2(); // C++에서 구조체, 클래스는 이러한 초기화 방식을 지원하지 않음
    Point p3(5, 3); // (2)가 구현되어 있지 않으면 에러
    Point p4 = {2, 1}; // '=' 생략 가능, 생성자 오버로딩이 하나 이상일 때 (2)가 구현되어 있지 않으면 에러
    Point p5 = {.y=-1}; // '=' 생략 가능, 생성자 오버로딩이 하나 이상일 때 (3)과 같이 매개 변수 1개를 가지는 생성자 오버로딩이 구현되어 있지 않거나 생성자 오버로딩이 없을 때 멤버 변수의 접근 지정자가 private이면 에러, 접근 지정자가 public이면서 (3)이 구현된 경우 생성자가 우선 실행됨
    Point p6 = {.x=-11, .y=-11}; // '=' 생략 가능

    cout << "[p1] : ";
    p1.info();
    // cout << "[p2] : "; 
    // p2.info(); // 에러 - p2의 메서드로 info가 존재하지 않는다는 오류 반환
    cout << "[p3] : ";
    p3.info();
    cout << "[p4] : ";
    p4.info();
    cout << "[p5] : ";
    p5.info();
    cout << "[p6] : ";
    p6.info();

    p5.addPoint(1, 1);
    p6.addPoint(1, 1);

    cout << "[p5] : ";
    p5.info();
    cout << "[p6] : ";
    p6.info();
  
    return 0;
}
```
:::

::: details 실행 결과
```
[p1] : 0, 0
[p3] : 5, 3
[p4] : 2, 1
[p5] : -1, 0
[p6] : -11, -11
[p5] : 0, 1
[p6] : -10, -10
```
:::

## 열거 `enum`
열거 자료형 변수는 내부 멤버 변수들 중 하나를 멤버와 대응되는 정수 값으로 저장한다. 멤버 변수의 rvalue에 명시되는 값을 기준으로 1씩 증가하며 다음 멤버 변수 중 rvalue가 명시되지 않은 변수에 할당된다. 어느 변수에도 rvalue가 명시되지 않았다면 0을 기준으로 한다. 한 열거 자료형에 중복된 정수 값을 가질 수 있다.

::: details enum 예제 코드 1
```cpp::lineons
#include <iostream>
using namespace std;

enum Color1 {
    BLACK = -1,
    RED,
    BLUE,
    GREEN
};

enum Color2 {
    YELLOW = -4,
    PUPPLE = 11
    // RED // 주의 1. 열거 자료형 내부 멤버 변수들은 중복 선언할 수 없음, (주의 2) 참조
};

int main() {
    int colorId = BLUE; // 주의 2. BLUE는 Color1 자료형의 변수로서 선언된 스코프에서 유효하며 정수로 캐스팅 가능
    Color1 color1 = BLUE;
    Color2 color2 = (Color2)15; // 주의 3. 캐스팅 없이 rvalue에 정수를 사용하면 에러 / 주의 4. 열거 자료형 내부에 없는 변수도 할당 가능    

    cout << "color id : " << colorId << endl;
    cout << "color1 : " << color1 << endl;
    cout << "color2 : " << color2 << endl;

    Color1 inputColor;
    // cin >> inputColor; // 주의 4. 입력 스트림으로 직접 입력받을 수 없음

    return 0;
}
```
:::

::: details 실행 결과
```
color id : 1
color1 : 1
color2 : 15
```
:::

한 편, 서로 다른 열거 자료형에서 내부적으로 같은 정수 값을 가지는 경우 다음과 같이 `color`와 `fruit`을 구분하지 못하는 문제가 발생한다.

::: details enum 예제 코드 2
```cpp
#include <iostream>
using namespace std;

int main() {
	enum Color {
		RED,
		BLUE
	};

	enum Fruit {
		BANANA,
		APPLE,
	};

	Color color = RED;
	Fruit fruit = BANANA;

	if (color == fruit)
		cout << "Color is fruit ? " << endl;
	// 내부적으로 0으로 들어가기 때문에 같은 값으로 보임
}
```

::: details 실행 결과
```
Color is fruit ?
```
:::

C++ 11 버전 이상부터는 위 문제를 해결하기 위해 열거 클래스 자료형 `enum class`을 사용할 수 있다.

::: details enum class 예제 코드
```cpp
#include <iostream>
using namespace std;

int main() {
    enum class Color {
		RED,
		BLUE
	};

	enum class Fruit {
		BANANA,
		APPLE,
	};

	Color color = Color::RED;
	Fruit fruit = Fruit::BANANA;

    if ((int)color == (int)fruit) // 캐스팅 없이 == 연산 불가로 오류 반환
		cout << "Color is fruit ? " << endl;
}
```
:::

## 재정의 `typedef`, 별칭 선언(Alias Declaration) `using`

::: details typedef 사용법
```cpp:no-line-numbers
typedef <자료형> <별칭>;

typedef struct <구조체 명> {
    ...
} <별칭>;
```
:::

::: details using 사용법
```cpp:no-line-numbers
using <별칭> = <자료형>

using <별칭> = struct <구조체 명> {

}
```
:::

::: details typedef, using, class 예제 코드
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    typedef class MyClass1 {
    private:
        int a, b;

    public:
        void setA(int x) { a = x; }
        void setB(int x) { b = x; }
        void info() { printf("%d, %d\n", a, b); }
    } TypeDefMyClass;

    using UsingMyClass = class MyClass2 {
    private:
        int a, b;

    public:
        void setA(int x) { a = x; }
        void setB(int x) { b = x; }
        void info() { printf("%d, %d\n", a, b); }
    };

    TypeDefMyClass typeDefMyClass;
    UsingMyClass usingMyClass;

    typeDefMyClass.setA(1);
    usingMyClass.setA(2);

    typeDefMyClass.info();
    usingMyClass.info();

    return EXIT_SUCCESS;
}
```
:::

::: details 실행 결과
```
1, 0
2, 0
```
:::

::: details typedef, using, define 예제 코드
```cpp
#include <iostream>
#include <vector>
using namespace std;

#define TypeDefMyStruct MS

int main() {
    enum class Color {
		RED,
		BLUE
	};

	enum class Fruit {
		BANANA,
		APPLE,
	};

    typedef Color TypeDefColor;
    typedef Fruit TypeDefFruit;
    typedef struct MyStruct {
        int a, b;

        void info() { printf("%d, %d\n", a, b); }
    } TypeDefMyStruct;

    using UsingColor = Color;
    using UsingFruit = TypeDefFruit;
    using UsingMyStruct = TypeDefMyStruct;
    using UsingVectorInt = vector<int>;

	TypeDefColor typeDefColor = TypeDefColor::RED;
	TypeDefFruit typeDefFruit = TypeDefFruit::BANANA;
    TypeDefMyStruct typeDefMyStruct{1, 2};

    UsingMyStruct usingMyStruct{2, 4};
    MS ms{2, 4};
    UsingVectorInt v(5, 3);

    if ((int)typeDefColor == (int)typeDefFruit)
		cout << "Color is fruit ? " << endl;

    typeDefMyStruct.info();
    usingMyStruct.info();
    ms.info();
    for (auto it=v.begin(); it!=v.end(); it++)
        cout << *it << " ";

    return EXIT_SUCCESS;
}
```
:::

::: details 실행 결과
```
Color is fruit ? 
1, 2
2, 4
2, 4
3 3 3 3 3
```
:::

## A. 참조
::: left
SEADOG, "C++ 이야기 - 01.01.02. 변수(Variables)", *Wikidocs.net*, Feb. 18, 2022. [Online]. Available: [https://wikidocs.net/50831](https://wikidocs.net/50831) [Accessed May 12, 2022].

공부하는 식빵맘, "C++ Chapter 4.8 : 구조체", *Github.io*, Jun. 3, 2020. [Online]. Available: [https://ansohxxn.github.io/cpp/chapter4-8/](https://ansohxxn.github.io/cpp/chapter4-8/) [Accessed May 12, 2022].

TCP SCHOOL, "구조체의 기본", *tcpschool.com*, [Online]. Available: [http://www.tcpschool.com/c/c_struct_intro](http://www.tcpschool.com/c/c_struct_intro) [Accessed May 12, 2022].

민-Zero, "[C++ 기본 공부정리] 9. 구조체(struct)", *Tistory*, Dec. 1, 2019. [Online]. Available: [https://min-zero.tistory.com/21](https://min-zero.tistory.com/21) [Accessed May 12, 2022].

Taaewoo, "[C++] 구조체 생성자 오버로딩 Struct Constructor Overloading", *Tistory*, Jan. 10, 2021. [Online]. Available: [https://taaewoo.tistory.com/7](https://taaewoo.tistory.com/7) [Accessed May 12, 2022].

이웃집 J, "C/C++ 가이드 13. 사용자 정의 자료형 - ②공용체, 열거형", *Naver blog*, May 29, 2020. [Online]. [https://ansohxxn.github.io/cpp/chapter4-6/](https://ansohxxn.github.io/cpp/chapter4-6/) [Accessed May 12, 2022].

공부하는 식빵맘, "C++ Chapter 4.6 : 열거형과 열거형 클래스", *Github.io*, Jun. 3, 2020. [Online]. Available: [https://ansohxxn.github.io/cpp/chapter4-6/](https://ansohxxn.github.io/cpp/chapter4-6/) [Accessed May 12, 2022].

Unikys, "[모던C++] typedef vs using 키워드 차이점", *Tistory*, Jan. 16, 2017. [Online]. Available: [https://unikys.tistory.com/381](https://unikys.tistory.com/381) [Accessed May 12, 2022].
:::

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
