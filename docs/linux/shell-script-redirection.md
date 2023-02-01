---
title: '[Linux] 쉘 스크립트 - 리다이렉션(Redirection)'
icon: article
category:
  - Linux
date: 2023-02-01
---

## 리다이렉션(Redirection)이란
- Shell의 표준 입출력(STDIN, STDOUT, STDERR)을 제어하는 것
- 기본적으로 쉘에서 입력은 키보드, 출력은 터미널 화면
- 리아렉션을 통해 결과를 파일에 출력하거나 입력을 파일에서 받도록 바꿀 수 있음
- <, >, >> 등의 기호 사용
- 쉘에서는 표준 입출력도 각각 가상의 파일로 여겨지면서 File Descriptor가 할당되어 있음

<div class="align-center">

기능 | 채널 | 할당된 File Descriptor
:-: | :--: | :-------------------:
표준 입력(STDIN) | 터미널 키보드 | 0
표준 출력(STDOUT) | 터미널 화면 | 1
표준 에러(STDERR) | 터미널 화면 | 2
</div>

(작성 중...)
