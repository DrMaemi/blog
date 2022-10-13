---
title: '[C++] STL - <string>'
icon: article
category: C++
date: 2022-05-27
order: 12
---

### string → char*
```cpp:no-line-numbers
string s = "It's string.";
const char* c = s.c_str();
```

### char → string
```cpp:no-line-numbers
char c = 'a';
string s(1, c);
```

### char[] → string
```cpp:no-line-numbers
char c[100] = "It's string.";
string s(c);
```

### string → string
```cpp:no-line-numbers
string s1 = "It's string.";
string s2(s1);
```

### 공백 `split()` 함수
```cpp:no-line-numbers
vector<string> split(string& str) {
    vector<string> ret;
    string buffer = "";

    for (char x: str) {
        if (x == ' ') {
            if (!buffer.empty()) {
                ret.push_back(buffer);
            }
            buffer.clear();
        } else {
            buffer += x;
        }
    }

    if (!buffer.empty()) {
        ret.push_back(buffer);
    }
    return ret;
}
```

### 단어 찾기 find, string::npos
```cpp:no-line-numbers
string str = " java c c++ +cc+ python ";
size_t fidx = str.find("c+");
if (fidx != string::npos)
    cout << "in \""+str+"\", \"c+\" is founded at index " << fidx;
// in " java c c++ +cc+ python ", "c+" is founded at index 8
```

### 부분문자열 substr
```cpp:no-line-numbers
string str("There are two needles in this hackstay with needles.");
cout << str.substr(14, 7); // needles
```

## A. 참조
::: left
cplusplus.com, "&lt;algorithm&gt;", *cplusplus.com*, [Online]. Available: [https://m.cplusplus.com/reference/string/string/](https://m.cplusplus.com/reference/string/string/) [Accessed May 27, 2022].
:::
