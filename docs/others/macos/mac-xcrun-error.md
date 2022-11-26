---
title: '[MacOS] xcrun error - 커맨드 인식 에러'
icon: article
category:
  - Others
  - MacOS
date: 2022-11-26
---

## 들어가며
맥북으로 개발을 잘 하다가 어느날 맥북 OS 업데이트를 했는데, 업데이트 직후 터미널에서 `code .`, `idea .`, `git` 명령어를 실행했더니 다음과 같은 에러 메시지를 만났습니다.

```:no-line-numbers
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```

## 원인 추측
에러 메시지를 보니, 맥 터미널에서 CLI로 명령어를 수행하기 위해선 xcrun 이라는 툴이 필요한데 `/Library/Developer/CommandLineTools/usr/bin/xcrun` 경로에 xcrun이 없는 것으로 보입니다.

xcrun이 정확히 어떤 것인지는 알아보지 않았고, macOS에서 CLI 기능을 제공하고 관리하기 위한 어떤 툴일 것이라고 생각했습니다. macOS 업데이트를 진행하면서 xcrun 모듈이 삭제된 것 같습니다.

도대체 왜..? 에 대한 궁금증이 생겼지만.. 이걸 정확하게 알기 위해선 macOS 구조와 기능들에 대해 알아나가야 할 것 같아 그러진 않았습니다.

## 해결 방법
일단 에러 메시지를 검색해보니 해결 방법은 간단했습니다. 다음 명령어를 터미널에서 실행해주면 됩니다.

```:no-line-numbers
xcode-select --install
```

이후 설치 창이 열리고 설치를 진행해주면 됩니다. 참고로 용량이 꽤 큰 편이라고 합니다. 혹시 여유가 없다고 생각되시면 디스크 용량을 한 번 확인해봐야 할 것 같습니다.

설치가 완료된 후 간단하게 Git 버전 확인 명령어를 실행해줌으로써 정상적으로 CLI 명령어가 동작하는지 확인했습니다.

```:no-line-numbers
$ git --version
git version 2.37.1 (Apple Git-137.1)
```

## A. 참조
왼하루, "맥북 git 에러, xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun," *tistory.com*, Mar. 23, 2022. [Online]. Available: [https://leftday.tistory.com/42](https://leftday.tistory.com/42) [Accessed Nov. 26, 2022].
