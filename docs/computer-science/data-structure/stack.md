---
title: '[자료구조] 스택(Stack)'
icon: article
category: Data Structure
date: 2022-07-05
---

스택은 자료구조의 한 쪽 끝에서만 자료를 추가하거나 삭제할 수 있으며 가장 최근에 추가한 자료에 가장 먼저 접근할 수 있는 LIFO(Last In First Out) 특성을 가진다.

자료를 추가하는 push 연산, 자료를 삭제하는 pop 연산, 가장 최근에 추가된 자료를 가리키는 포인터 top 등의 구성 요소를 가지고 있다.

<div class="mxgraph" style="max-width:100%; margin: auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-07-05T13:46:45.781Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\&quot; etag=\&quot;rUU3nTwcPAD0sb_O2JHZ\&quot; version=\&quot;20.0.4\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;YW6jLNVquYc3UYGimNAr\&quot; name=\&quot;Page-1\&quot;&gt;7VxLk6I6FP41LqeLVxCWrd0z9y5u1VS5mJklI2mlBgkFcdT+9TdIwiPRFmggILqw4BgScr7znUcCzvTl7vgtcsLtf8iF/kxT3ONMf5lpmjmfk+9EcEoFOrBTwSby3FSk5oKV9w6pUKHSvefCuNQQI+RjLywL1ygI4BqXZE4UoUO52Rvyy6OGzgYKgtXa8UXpD8/F21RqafNc/g/0Nls2smrS+e0c1pjOJN46LjoURPrrTF9GCOH0aHdcQj/RHdNLet3XK79mNxbBAFe5QF+sNs/QPYZR+L75Av79/ro7fWFq/uv4ezpjerf4xFSwidA+pM1ghOHxkuKd36y5It6Ymk2XmAlEO4ijE2lCO7LoFafy6SFX95yKtkVNs4EcivAm6zhXAjmgeqijk9sqgYH7nBgXOQtQQISLLd6RQV5UckjUFbgwGUEhZ+m10BXMLFfPB8iISiuoBVxQC5NF0Hew97c86CVV0RG+I4/cTgaCoN0Y7aM1pK2KVsYuZA2xE20gFhqekcim0RwcbcrgHMt0aIwV109P0OlThq4trK710zF2qi2A9yygR0IDLkMW4wj9gUvkoyiH9M3zfU7k+N4mIKdrgh0k8kUSaDwShZ/pDzvPdZNhFoeth+EqdNbJmAeScgiG8YYCvKI3xVy5GLYa2wkFwK4WpfSughRol02kKc29tOTs6OGf7Bdy/Ktw/HIsnpyy68mkftKuzye/ir/kF53P2FWf4zCZ65k8Fcw2ZcfNhrIcemYmXApU10nwqRRvfV07iQqZU9fJpKYMLZscSMZyRW1DDXt9mexAkhI56Iw7n1SNKWM38oSSDTehhPLjwAVKcFxIL80+00tNDOWLBzwZPKZkeEC7rm9k2b9Uh2vZT4AkmdmH66Ch+73Ra8fOGICHOUkyJ7Od8M1303X0rlDUdF3p6RpHIdmVnjaMWiIddTz5aF8mO4xqQRI64670tHbj08iwG3ulZwrg3Xmld81OhlnpzQV47rzSqwWP7EpPF8PW8gGPsMMhrRAXndtnItO4Kie58fAuC3HRGT/MqR9zAgR41c4/VivmdKPXrs3JepiTJHPiI05D++l5B1+rYDBdr+sYul1SwTzxyEKU73lpR3z86TNEamzSlkyTHuzSDiPJNNEZ99KOPoynrcfGrGEs7eiaAN69L+1csZNBLu3o4obEvS/t1IFH9tIOaDepGFl2LtXh2sqTorS+dnCj146dsdluFvQwp1prB3bxY5mt2NOtbruO7uJiVLiPt0RSJYpUjw4RjL13WjAmNhAmEzpPESxm4CXpa49RnBpjnQBVKY58XIyqRhkSTXZIF2MGxaTKrsB9YJJpfCCYGPVKGBTCoIbjDdyvXnI/Vd2j1CfJVb4gsUAzT6iCGx117PsMsbLBKJwMxVSOYhmuBTMyeuVYvWer7pljWVnJsAENOSasHvAddc0xcWt7ShzjX9bLUg1pHKv3lNU9c8xQynsQqtaQY7p1o6OuOSY+nzAljuk2p35VNsfqbfDfM8eAxmEDjGyjry7NAM/XC311zTRx63RKTAMqh4B+cdu2X7JVWGCNt06YHL758EhZtygQcO07ceytq3EQPNm2YsxNlX2DZO2bTl4dAyf5sqvp2yn8W/g9v57CZvEAvirwt94nqpzvaHKBF5diwgk5YT7bvLAy1qsDZgHgwcOqPOQRbMpDg4TfC1tRbbOSnOZ/YJg2z/8FUn/9Hw==&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="caption">&lt;그림 1. 스택 자료구조 예시&gt;</div>

## 구현
::: code-tabs
@tab C++
```cpp
#include <iostream>

using namespace std;

#define DEFAULT_SIZE 10

template <typename T>
class Stack {
private:
    T* stack_ptr_;
    size_t capacity_;
    size_t size_;
    size_t top_;

public:
    Stack() {
        stack_ptr_ = new T[DEFAULT_SIZE];
        capacity_ = DEFAULT_SIZE;
        size_ = 0;
        top_ = -1;
    }

    Stack(size_t __capacity): capacity_(__capacity) {
        stack_ptr_ = new T[capacity_];
        size_ = 0;
        top_ = -1;
    }

    ~Stack() {
        if (stack_ptr_ != NULL)
            delete[] stack_ptr_;
    }

    bool empty() {
        return top_ == -1;
    }

    bool full() {
        return size_ == capacity_;
    }

    void push(T value) {
        if (size_ == capacity_)
            throw "Max Capacity";
        
        stack_ptr_[++top_] = value;
        size_++;
    }

    T top() {
        if (empty())
            throw "Stack is empty";

        return stack_ptr_[top_];
    }

    void pop() {
        if (empty())
            throw "Stack is empty";
        
        top_--;
        size_--;
    }

    size_t size() {
        return size_;
    }

    void resize(size_t __size) {
        T* newStackPtr = new T[__size];
        newStackPtr = stack_ptr_;
        delete[] stack_ptr_;

        stack_ptr_ = new T[__size];
        stack_ptr_ = newStackPtr;
        delete[] newStackPtr;
    }
};

struct Location {
    int r, c;
};

int main() {
    Stack<Location> stack;

    stack.push({1, 2});
    stack.push({3, 4});
    stack.push({5, 6});

    cout << "After inserted 3 items, stack size is " << stack.size() << "\n";

    while (!stack.empty()) {
        Location top = stack.top();
        stack.pop();

        cout << top.r << " " << top.c << "\n";
    }

    cout << "Program terminated successfully.";

    return 0;
}
```
:::

실행 결과
```:no-line-numbers
After inserted 3 items, stack size is 3
5 6
3 4
1 2
Program terminated successfully.
```

<script setup lang="ts">
import UmlScript from "@UmlScript";
</script>

<UmlScript/>
