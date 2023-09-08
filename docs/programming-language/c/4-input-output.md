---
title: '[C] Input Output (I/O)'
icon: article
category: C
date: 2023-06-05
order: 4
---

## Output
- `stdio.h` 헤더 파일에 정의된 `printf()` 함수를 사용해 출력하는 방법을 많이 사용함
    - Literal이 아닌 경우 서식 지정자(Format Specifier)를 이용함

### Literal
```c:no-line-numbers
#include <stdio.h>

int main() {
    printf("C Programming");
    return 0;
}
```

결과

```:no-line-numbers
C Programming
```

### Integer
```c:no-line-numbers
#include <stdio.h>

int main() {
    int number = 5;
    printf("Number = %d", number);
    return 0;
}
```

결과

```:no-line-numbers
Number = 5
```

### Float, Double
```c:no-line-numbers
#include <stdio.h>

int main() {
    float number1 = 13.5;
    double number2 = 12.4;

    printf("number1 = %f\n", number1);
    printf("number2 = %lf", number2);
    return 0;
}
```

결과

```:no-line-numbers
number1 = 13.500000
number2 = 12.400000
```

## Input & Output
- `stdio.h` 헤더 파일에 정의된 `scanf()` 함수를 사용해 입력받는 방법을 많이 사용함
    - 서식 지정자 이용

### Integer
```c:no-line-numbers
#include <stdio.h>

int main() {
    int number;

    printf("Enter an integer : ");
    scanf("%d", &number);

    printf("Entered number = %d", number);
    
    return 0;
}
```

결과

```:no-line-numbers
Enter an integer : 23
Entered number = 23
```

- `&number` - `number`라는 변수의 주소(address)를 의미

### Float, Double
```c:no-line-numbers
#include <stdio.h>

int main() {
    float number1;
    double number2;

    printf("Enter number1 : ");
    scanf("%f", &number1);
    printf("Enter number2 : ");
    scanf("%lf", &number2);

    printf("Entered number1 : %f\n", number1);
    printf("Entered number2 : %lf", number2);

    return 0;
}
```

결과

```:no-line-numbers
Enter number1 : 11.1
Enter number2 : 21.1
Entered number1 : 11.100000
Entered number2 : 21.100000
```

### Character & ASCII Value
```c:no-line-numbers
#include <stdio.h>

int main() {
    char chr;
    printf("Enter a character : ");
    scanf("%c", &chr);     

    // When %c is used, a character is displayed
    printf("You entered %c.\n",chr);  

    // When %d is used, ASCII value is displayed
    printf("ASCII value is %d.", chr);  
    return 0;
}
```

결과

```:no-line-numbers
Enter a character : \
You entered \.
ASCII value is 92.
```

### 여러 값 입력
```c:no-line-numbers
#include <stdio.h>

int main() {
    int a;
    float b;

    printf("Enter integer and then a float: ");
  
    // Taking multiple inputs
    scanf("%d%f", &a, &b);

    printf("You entered %d and %f", a, b);
    return 0;
}
```

결과

```:no-line-numbers
Enter integer and then a float: 1
1
You entered 1 and 1.000000
```

## A. 참조
Parewa Labs Pvt. Ltd., "C Input Output (I/O)," *programiz.com*, [Online]. Available: [https://www.programiz.com/c-programming/c-input-output](https://www.programiz.com/c-programming/c-input-output) [Accessed Jun. 5, 2023].
