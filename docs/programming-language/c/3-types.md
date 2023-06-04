---
title: '[C] Types'
icon: article
category: C
date: 2023-06-05
order: 3
---

## Basic Types
Type | Size(bytes) | Format Specifier
---- | ----------- | ----------------
`int` | 2 ~ 4(usually 4) | `%d`, `%i`
`char`, `signed char`, `unsigned char` | 1 | `%c`
`float` | 4 | `%f`
`double` | 8 | `%lf`
`short int` | 2 | `%hd`
`unsigned int` | 2 ~ 4(usually 4) | `%u`
`long int` | 4 ~ 8(usually 8) | `%ld`, `%li`
`long long int` | 8 ~ | `%lld`, `%lli`
`unsigned long int` | 4 ~ | `%lu`
`unsigned long long int` | 8 ~ | `%llu`
`long double` | 10 ~ 16(usaully 12, 16) | `%Lf`

- `signed` - 양수(positive), 음수(nagative) 값 저장 가능
- `unsigned` - 양수 값만 저장 가능

예시

```c:no-line-numbers
int id, age;
float salary;
double price;
float normalizationFactor = 22.442e2
char test = 'h';
short a; // short int
long b; // long int
long long c; // long long int
long double d;
```

### Check size with `sizeof()`
```c:no-line-numbers
#include <stdio.h>

int main() {
    short a;
    long b;
    long long c;
    long double d;

    printf("size of short = %d bytes\n", sizeof(a));
    printf("size of long = %d bytes\n", sizeof(b));
    printf("size of long long = %d bytes\n", sizeof(c));
    printf("size of long double= %d bytes\n", sizeof(d));
    return 0;
}
```
```:no-line-numbers
size of short = 2 bytes
size of long = 4 bytes
size of long long = 8 bytes
size of long double= 16 bytes
```

## Derived Types
- Basic Type으로부터 파생된 타입
- ex. `bool`, `enum`, `complex`, `struct`, `union`, etc.
- 이후 포스트에서 자세히 다룰 예정

## A. 참조
Parewa Labs Pvt. Ltd., "C Data Types," *programiz.com*, [Online]. Available: [https://www.programiz.com/c-programming/c-data-types](https://www.programiz.com/c-programming/c-data-types) [Accessed Jun. 5, 2023].
