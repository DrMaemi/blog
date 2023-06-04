---
title: '[C] Variables, Constants, & Literals'
icon: article
category: C
date: 2023-06-04
order: 2
---

## Variables
- 프로그래밍에서 변수(variable)란 data를 저장하기 위한 공간임
- 특정 data를 저장해놓은 공간을 가리키기 위해 각 변수는 고유한 이름 identifier로 식별됨
- 변수 이름은 단지 data를 저장해놓은 공간 memory location을 가리키는 상징적 표현(symbolic representation)임

예시

```c:no-line-numbers
int playerScore = 95;
char ch = 'a';
ch = '1';
```

- `playerScore`란 identifier를 가진 변수는 `int` type이며, `95`란 값(data)가 저장됨
- 변수의 값은 중간에 바뀔 수 있음

### C is a strongly typed language
- 변수 타입은 변수가 선언됐을 때 정해지며 변할 수 없음을 *strongly typed language*라 함

예시

```c:no-line-numbers
int number = 5; // integer variable
number = 5.5;   // error
double number;  // error
```

## Literals
- 정해진 값(fixed values)을 표현하는 것을 *Literal*이라 함
- ex. `1`, `2.5`, `'c'`
    - 위 표현된 문자들은 다른 값으로 표현될 수 없기 때문에 Literal임

### Integers
- 숫자(Numeric) 중 정수 값을 나타내는 Literal을 의미
- Deciaml(10진수), Octal(8진수), Hexadecimal(16진수)가 있음

Integer 종류 | 예시
----------- | ----
Decimal | `0`, `-9`, `22`
Octal | `021`, `077`, `033`
Hexadecimal | `0x7f`, `0x2a`, `0x521`

- `0`으로 시작하는 수는 8진수로 인식
- `0x`으로 시작하는 수는 16진수로 인식

### Floating-point
- 숫자 중 정수가 아닌 실수 값을 나타내는 Literal을 의미
- ex. `-2.0`, `0.000234`, `-0.22E-5`
    - `-0.22E-5`는 $-0.22\times10^{-5}$와 같음

### Characters
- 작은따옴표(single quotation)로 감싸진 1개의 문자를 의미
- ex. `'a'`, `'m'`, `'F'`, `'2'`, `'}'`

### Escape Sequences
- C 프로그래밍에서 특별한 의미를 갖는 문자열
- 확장열, 또는 제어 시퀀스(Control Sequence)라고도 함

Escape Sequence | 뜻
--------------- | --
`\b` | Backspace
`\f` | Form feed
`\n` | New line
`\r` | Carriage return
`\t` | Horizontal tab
`\v` | Vertical tab
`\\` | Backslash
`\'` | Single quotation mark
`\"` | Double quotation mark
`\?` | Question mark
`\0` | Null character

- Backslash `\`는 compiler가 소스 코드를 제어하는 규칙에서 탈출시키는 문자로, Escape Sequence의 가장 앞에 등장함

### String
- 큰따옴표(double quotations)로 감싸진 문자열(sequence of characters)를 의미함
- ex. `"good"`, `""`, `"   "`, `"x"`, `"Earth is round\n`

## Constants
- `const` keyword를 사용해 고정된 값을 가진 변수를 선언하면 그것을 상수(Constant)라 함
- 또는 전처리기(preprocessor) `#define` 구문을 이용해 상수를 선언할 수 있음.

예시 - `const`

```c:no-line-numbers
const double PI = 3.14;
PI = 2.9; // Error - cannot be changed.
```

예시 - `#define`

```c:no-line-numbers
#define PI 3.14
```

## A. 참조
Parewa Labs Pvt. Ltd., "C Variables, Constants and Literals," *programiz.com*, [Online]. Available: [https://www.programiz.com/c-programming/c-variables-constants](https://www.programiz.com/c-programming/c-variables-constants) [Accessed Jun. 4, 2023].
