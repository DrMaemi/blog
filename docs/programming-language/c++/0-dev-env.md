---
title: '[C++] 개발 환경 구성'
icon: article
category: C++
date: 2022-03-06
order: 1
---

C++는 객체 지향 및 멀티 패러다임을 지원하는 프로그래밍 언어다. C에는 없는 객체 지향 프로그밍을 위한 기능을 가지고 있어 C언어의 확장판으로 생각해도 무방하다.

## 윈도우 - VS Code
C/C++ 소스를 컴파일할 수 있는 MinGW가 설치되어 있다고 가정한다. 만약 설치되어있지 않다면 [링크](https://drmaemi.github.io/tools/mingw/installation) 참조하길 바란다.

MinGW가 정상적으로 설치됐다면, VS Code에 연동해야 한다. VS Code에서 워킹 디렉토리 최상위 경로에 `.vscode` 폴더를 생성하고, 내부에 `tasks.json` 파일을 생성하여 다음 코드를 추가한다.

::: details /.vscode/tasks.json
```json
{
    "version": "2.0.0",
    "runner": "terminal",
    "type": "shell",
    "echoCommand": true,
    "presentation": {
        "reveal": "always"
    },
    "tasks": [
        /* C++ 컴파일 */
        {
            "label": "SAVE & COMPILE FOR C++",
            "command": "g++",
            "args": [
                "${file}",
                "-o",
                "${fileDirname}/${fileBasenameNoExtension}"
            ],
            "group": "build",
            /* 컴파일시 에러를 편집기에 반영 */
            /* 참고 - https://code.visualstudio.com/docs/editor/tasks#_defining-a-problem-matcher */
            "problemMatcher": {
                "fileLocation": [
                    "relative",
                    "${workspaceRoot}"
                ],
                "pattern": {
                    /* The regular expression */
                    /* Example to match: helloWorld.c:5:3: warning: implicit declaration of function 'prinft' */
                    "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning error):\\s+(.*)$",
                    "file": 1,
                    "line": 2,
                    "column": 3,
                    "severity": 4,
                    "message": 5
                }
            }
        },
        /* C 컴파일 */
        {
            "label": "SAVE & COMPILE FOR C",
            "command": "gcc",
            "args": [
                "${file}",
                "-o",
                "${fileDirname}/${fileBasenameNoExtension}"
            ],
            "group": "build",
            /* 컴파일시 에러를 편집기에 반영 */
            /* 참고:   https://code.visualstudio.com/docs/editor/tasks#_defining-a-problem-matcher */
            "problemMatcher": {
                "fileLocation": [
                    "relative",
                    "${workspaceRoot}"
                ],
                "pattern": {
                    /* The regular expression */
                    /* Example to match: helloWorld.c:5:3: warning: implicit declaration of function 'prinft' */
                    "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning error):\\s+(.*)$",
                    "file": 1,
                    "line": 2,
                    "column": 3,
                    "severity": 4,
                    "message": 5
                }
            }
        },
        /* 바이너리 실행(Windows) */
        {
            "label": "EXECUTE",
            "command": "",
            "group": "test",
            "args": ["${fileDirname}\\${fileBasenameNoExtension}"]
        }
    ]
}
```
:::

`tasks.json` 파일을 작성하게 되면 VS Code에서 .c 혹은 .cpp 파일을 작성한 후 `Ctrl` + `Shift` + `B` 단축키를 통해 컴파일할 수 있다.

이는 VS Code에 해당 단축키가 **C/C++ 컴파일/빌드를 하기 위해서 이미 지정되어 있기 때문**이다.

그러나 **소스코드가 컴파일된 .exe 파일을 실행시키는 단축키는 지정되어 있지 않다**.

![](https://drive.google.com/uc?export=view&id=1mrLEAfc20Nn1JXOon9Jsfq7VShyFJRdf)
&lt;그림 1. Ctrl + K + S 단축키를 사용하여 Keyboard Shortcuts 세팅 확인&gt;
{ .align-center }

![](https://drive.google.com/uc?export=view&id=1EGpvvz5hgq0RqctXWA7yGxzFqAEnyznd)
&lt;그림 2. 소스코드가 컴파일된 .exe 파일을 실행시키는 단축키는 지정되어 있지 않음&gt;
{ .align-center }

![](https://drive.google.com/uc?export=view&id=1Z9MxCDxhQ4ETj1cPgCP937_qD-i4bN54)
&lt;그림 3. keybindings.json 파일을 열기 위해 우측 상단 아이콘 클릭&gt;
{ .align-center }

단축키 설정을 위해 `keybindings.json` 파일 [] 내부에 다음 객체 코드를 추가한다.

::: details keybindings.json
```json:no-line-numbers
[
    /* 컴파일 */
    {
        "key": "ctrl+shift+c",
        "command": "workbench.action.tasks.build"
        // 변경 전 - CTRL + ALT + B
    },
    /* 실행 */
    {
        "key": "ctrl+shift+r",
        "command": "workbench.action.tasks.test"
    }
]
```
:::

`keybindings.json` 파일은 윈도우에서 C:/Users/&lt;유저 이름&gt;/AppData/Roaming/Code/User 경로에 있다.

여기까지 설정했다면 `Ctrl` + `Shift` + `C`, `Ctrl` + `Shift` + `R`로 C/C++ 소스코드를 컴파일 및 실행할 수 있다.

추가로, &lt;그림 4&gt;, &lt;그림 5&gt;와 같이 Command Pallet에서 C/C++ 편집 구성에 관한 설정을 이용하면 사용할 컴파일러를 직접 지정할 수 있다.

![](https://drive.google.com/uc?export=view&id=1q3JGoEooqxTehXovPth3sk0cqQ9YHZhk)
&lt;그림 4. Command Pallet에서 C/C++ 검색&gt;
{ .align-center }

![](https://drive.google.com/uc?export=view&id=1KPISD7dwI-xIFfgel5ccbv7VOoBLypkw)
&lt;그림 5. C/C++ 편집기 구성 설정&gt;
{ .align-center }

위 설정을 끝내면 `.vscode` 폴더 내에 `c_cpp_properties.json` 파일이 생성된다.

## 보충
윈도우에서 git bash를 VS Code의 기본 터미널로 설정한 경우, C/C++ 컴파일 시 `:\`와 같은 디렉토리 구분자를 인식하지 못해 `No such file or directory` 오류를 만났었다.

위 오류를 해결하기 위해선 `tasks.json` 파일 내부에서 `gcc`, `g++` 명령어 인자인 `args`에 파일 및 경로와 관련된 부분을 `''`(작은 따옴표)로 감싸야 한다. 또한 바이너리 실행에 필요한 인자에서 `/C`를 제거한다.

::: details /.vscode/tasks.json - `// 참조`, `// 제거` 주석 유의
```json:no-line-numbers
{
    "version": "2.0.0",
    ...
    "tasks": [
        {
            "label": "SAVE & COMPILE FOR C++",
            "command": "g++",
            "args": [
                "'${file}'", // 참조
                "-o",
                "'${fileDirname}/${fileBasenameNoExtension}'" // 참조
            ],
            "group": "build",
            ...
        },
        /* C 컴파일 */
        {
            "label": "SAVE & COMPILE FOR C",
            "command": "gcc",
            "args": [
                "'${file}'", // 참조
                "-o",
                "'${fileDirname}/${fileBasenameNoExtension}'" // 참조
            ],
            ...
        },
        /* 바이너리 실행(Windows) */
        {
            "label": "EXECUTE",
            "command": "cmd",
            "group": "test",
            "args": [
                // "/C", // 제거
                "'${fileDirname}\\${fileBasenameNoExtension}'" // 참조
            ]
        }
    ]
}
```
:::

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
