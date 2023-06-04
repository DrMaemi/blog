---
title: '[C] Keyword & Identifier'
icon: article
category: C
date: 2023-06-04
order: 1
---

- C 프로그래밍은 **Keyword**와 **Identifier를** 통해 이루어짐
- Keyword와 Identifier는 **Character Set**을 통해 정의함

## Character Set
- Alphabets, Digits, Special Characters로 이루어짐
    - **Alphabets**
        - Uppercase - `A B C ... X Y Z`(알파벳 대문자) 
        - Lowercase - `a b c ... x y z`(알파벳 소문자)
    - **Digits**
        - `0 1 2 ...`(한 자리 숫자)
    - **Special Characters**

        <table>
            <tr align="center">
                <td><code>,</code></td>
                <td><code>&lt;</code></td>
                <td><code>&gt;</code></td>
                <td><code>.</code></td>
                <td><code>_</code></td>
                <td><code>(</code></td>
                <td><code>)</code></td>
                <td><code>;</code></td>
                <td><code>$</code></td>
                <td><code>:</code></td>
            </tr>
            <tr align="center">
                <td><code>%</code></td>
                <td><code>[</code></td>
                <td><code>]</code></td>
                <td><code>#</code></td>
                <td><code>?</code></td>
                <td><code>`</code></td>
                <td><code>&</code></td>
                <td><code>{</code></td>
                <td><code>}</code></td>
                <td><code>"</code></td>
            </tr>
            <tr align="center">
                <td><code>^</code></td>
                <td><code>!</code></td>
                <td><code>*</code></td>
                <td><code>/</code></td>
                <td><code>|</code></td>
                <td><code>-</code></td>
                <td><code>\</code></td>
                <td><code>~</code></td>
                <td><code>+</code></td>
            </tr>
        </table>

        - **White Space Characters**
            - Blank Space - ` `
            - New Line - `\n`
            - Horizontal Tab - `\t`
            - Carriage Return - `\r`
                - 행의 처음으로 커서 이동
            - Form Feed - `\f`
                - 프린트 출력 시 현재 페이지를 마침

## Keyword
- 사전에 정의된 예약어(predefined, reserved words)를 Keyword라 함
- 컴파일러에게 특별한 의미를 가짐
- 프로그래밍 언어의 Syntax(문법)을 구성함
- **Keyword는 Identifier로 사용될 수 없음**

예시

```c:no-line-numbers
int money;
```

- `int`라는 keyword는 `money`가 `int` 타입의 변수(variable)임을 나타냄

### Keywords in C
|     |     |     |     |     |     |
| :-: | :-: | :-: | :-: | :-: | :-: |
`auto` | `double` | `int` | `struct` | `break` | `else`
`long` | `switch` | `case` | `enum` | `register` | `typedef`
`char` | `extern` | `return` | `union` | `continue` | `for`
`signed` | `void` | `do` | `if` | `static` | `while`
`default` | `goto` | `sizeof` | `volatile` | `const` | `float`
`short` | `unsigned`

- auto
    ```c:no-line-numbers
    auto int var1;
    ```
    - `var1` 변수가 storage class `auto`이며 type이 `int`임
    - function 내부에 선언된 변수들은 기본적으로(default) storage class `auto`임
        - function이 호출될 때마다 변수가 재생성됨
        - function에 local하기 때문에 지역 변수(local variable)라고도 함

나머지 모든 키워드들도 이후 포스트에서 다뤄나갈 예정입니다.

## Identifier
- C 프로그램 내에서 사용되는 variable, function, structure 등을 가리켜 entity라 하는데, 이 entity에 부여된 이름을 Identifier라고 함.
- Identifier는 프로그램 내에서 고유(unique)해야 함

예시

```c:no-line-numbers
int money;
double accountBalance;
```

- `money`, `accountBalance`를 Identifier라 함
- **위에서 설명한 Keyword는 Identifier가 될 수 없음**

### Rules for naming Identifiers
1. Identifier는 Letters(uppercase or lowercase characters), Digits, Underscores(`_`)로 작성되야 함
2. Identifier의 첫 번째 문자는 반드시 letter 또는 underscore이어야 함
3. Keyword가 Identifier로 사용될 수 없음
4. Identifier의 길이에 대한 제약은 없으나, 31개의 문자보다 더 긴 Identifier를 작성하면 일부 컴파일러가 오류를 발생시킬 수 있음

## A. 참조
Parewa Labs Pvt. Ltd., "C Keywords and Identifiers," *programiz.com*, [Online]. Available: [https://www.programiz.com/c-programming/c-keywords-identifier](https://www.programiz.com/c-programming/c-keywords-identifier) [Accessed Jun. 4, 2023].

미니, "[C] new line, carriage return, form feed의 차이점," *blog.naver.com*, Jul. 13, 2009. [Online]. Available: [https://blog.naver.com/mtjeaids/70053523593](https://blog.naver.com/mtjeaids/70053523593) [Accessed Jun. 4, 2023].
