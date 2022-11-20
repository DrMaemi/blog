---
title: '[VS Code] 맥OS에서 커맨드 code . 로 VS Code 실행하기'
icon: article
category:
  - Others
  - VS Code
date: 2022-11-20
---

맥OS에서 VS Code를 설치한 뒤 터미널에서 `code .`로 현재 경로에서 VS Code를 실행시켜보려 했는데 명령어를 인식하지 못했습니다.

이를 해결하는 방법은 간단했습니다.

일단 VS Code를 실행하고, Command Palette(`ctrl`+`shift`+`p`)를 열어 `Shell Command: Install 'code' command in PATH`를 실행해줍니다.

![](https://drive.google.com/uc?export=view&id=1tOxmqazK9MhYGwU6IGdIyCUbTlRUaFSs)
&lt;화면 1. VS Code command pallet - Shell Command&gt;
{ .align-center }

## A. 참조
Peter Mortesen, "'code .' is not working in on the command line for Visual Studio Code on OS X/Mac," *stackoverflow.com*, Apr. 1, 2022. [Online]. Available: [https://stackoverflow.com/questions/29955500/code-is-not-working-in-on-the-command-line-for-visual-studio-code-on-os-x-ma](https://stackoverflow.com/questions/29955500/code-is-not-working-in-on-the-command-line-for-visual-studio-code-on-os-x-ma) [Accessed Nov. 20, 2022].
