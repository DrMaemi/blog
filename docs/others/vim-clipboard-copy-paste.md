---
title: '[vim] 클립보드 복사 & 붙여넣기'
icon: article
category:
  - Others
  - vim
date: 2022-11-20
---

## 1. 설치된 vim 클립보드 지원 여부 확인
```:no-line-numbers
$ vim --version | grep clipboard
+clipboard         -keymap            +printer           +vertsplit
+eval              -mouse_jsbterm     -sun_workshop      -xterm_clipboard
```

- -clipboard - 시스템 클립보드 지원 X
- +clipboard - 시스템 클립보드 지원 O

## 2. 클립보드를 지원하는 vim 설치
::: details Linux
```sh:no-line-numbers
sudo apt update && sudo apt install vim-gtk -y
```
:::

::: details MacOS
제 맥은 기본적으로 설치된 vim 에디터에서 시스템 클립보드를 지원했는데, 그렇지 않은 경우 brew 패키지 매니저를 통해 설치해야 할 것으로 추측합니다.
:::

## 3. vim에서 클립보드로 복사하는 법
vim 에디터를 실행시키고, visual 모드에서 복사하고 싶은 구간을 드래그한 뒤 `"`+`+`+`y`를 눌러 클립보드로 복사할 수 있습니다.

이후 `ctrl`(command)+`v`로 붙여넣을 수 있습니다.

반대로 외부에서 `ctrl`+`c`로 복사한 내용을 vim에 붙여넣기 위해서는 `"`+`+`+`p`를 눌러 할 수 있습니다.

## 4. 시스템 클립보드 복사-붙여넣기를 기본값으로 설정
```:no-line-numbers
vi ~/.vimrc
```

::: details ~/.vimrc
```:no-line-numbers
set clipbaord=unnamedplus
```
:::

위와 같이 설정한 뒤 터미널을 재시작하면 vim에서 `y`, `p` 단축키를 이용한 복사/붙여넣기를 수행해도 시스템 어디서든 복사/붙여넣기가 가능해집니다.

## A. 참조
heyhyo, "[Vim]클립보드 복사&붙여넣기(Copy&Paste Clipboard)," *tistory.com*, Mar. 29, 2019. [Online]. Available: [https://hyoje420.tistory.com/49](https://hyoje420.tistory.com/49) [Accessed Nov. 20, 2022].
