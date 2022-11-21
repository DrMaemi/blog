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

## 오류 - EACCES: permission denied, unlink '/usr/local/bin/code'

맥에서 VS Code 어플리케이션을 삭제했다가 재설치를 한 뒤 본문처럼 Shell Command 설정을 시도했는데 다음 &lt;화면 2&gt;와 같이 오류가 발생했습니다.

![](https://drive.google.com/uc?export=view&id=1r20CE0ZzJ5WRtg6q51pK9OgUz68TI0CS)
&lt;화면 2. 오류 - EACCES permission denied, unlink '/usr/local/bin/code'&gt;
{ .align-center }

해당 경로 때문에 문제가 생긴 것으로 파악되는데, 파일을 지우고 다시 시도하면 됩니다.

```:no-line-numbers
sudo rm -rf /usr/local/bin/code
```

확인해보니 해당 경로의 code 파일은 `/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code`를 가리키는 링크 파일이었습니다. 맥OS 파일 시스템과 환경 변수 설정 개념을 좀 공부해두어야겠습니다..

## A. 참조
Peter Mortesen, "'code .' is not working in on the command line for Visual Studio Code on OS X/Mac," *stackoverflow.com*, Apr. 1, 2022. [Online]. Available: [https://stackoverflow.com/questions/29955500/code-is-not-working-in-on-the-command-line-for-visual-studio-code-on-os-x-ma](https://stackoverflow.com/questions/29955500/code-is-not-working-in-on-the-command-line-for-visual-studio-code-on-os-x-ma) [Accessed Nov. 20, 2022].

kkamyang, "[에러] EACCES: permission denied, unlink '/usr/local/bin/code'," *velog.io*, Apr. 7, 2022. [Online]. Available: [https://velog.io/@kkamyang/에러-EACCES-permission-denied-unlink-usrlocalbincode](https://velog.io/@kkamyang/에러-EACCES-permission-denied-unlink-usrlocalbincode) [Accessed Nov. 20, 2022].
