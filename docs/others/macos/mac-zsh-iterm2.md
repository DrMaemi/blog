---
title: '[MacOS] 터미널 꾸미기 - Oh My Zsh + iTerm2'
icon: article
category:
  - Others
  - MacOS
date: 2022-11-13
---

## 1. 들어가며
개발을 접한 처음부터 지금까지 윈도우만 쓰다가 맥을 써봤는데, 별도 커스터마이징 없어도 쓸만했던 Windows Terminal에 비해 맥의 터미널은 UI가 굉장히 밋밋했습니다.

터미널을 자주 보는 개발자로서 꾸며야겠다는 생각이 들었고, 관련 내용을 조사하다가 Oh My Zsh와 Iterm2 터미널을 이용해 보기 좋게 꾸미는 방법을 찾았습니다.

본문에서는 제가 맥의 터미널을 꾸미는 과정을 다뤘습니다.

## 2. Oh My Zsh, iTerm2 다운로드
먼저 Oh My Zsh와 iTerm2에 대한 간략한 소개를 하고자 합니다.

Oh My Zsh란 맥의 기본 터미널 zsh의 설정(configuration)을 관리하고 관련 편의 기능(functions, helpers, plugins, themes, etc.)을 제공하는 오픈소스 프레임워크입니다.

iTerm2란 맥의 기본 터미널 어플리케이션 대신 사용할 수 있는 가상 터미널 어플리케이션입니다. 차이점은 별도로 찾아보지 않았습니다만.. 많은 사람들이 예쁜 터미널을 위해 기본 터미널 앱 대신 이 iTerm을 사용하는 듯 합니다.

Oh My Zsh, iTerm2를 다운받기 전에 먼저 맥의 패키지 관리자 brew가 설치되어 있는지 확인합니다.

```:no-line-numbers
brew -v
```

만약 brew가 설치되어 있지 않으면 brew를 설치해줍니다. [brew 공식 홈페이지](https://brew.sh/index_ko)에서 설치 명령어를 확인할 수 있습니다.

brew 설치 명령어
```:no-line-numbers
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

그럼 oh-my-zsh를 다운로드하기 위해 다음 명령어를 실행해줍니다.

[oh-my-zsh 공식 홈페이지 - 설치 명령어](https://ohmyz.sh/#install)
```:no-line-numbers
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

iTerm2를 다운로드하기 위해 [iTerm2 download 공식 홈페이지](https://iterm2.com/downloads.html)에서 Stable Releases 파일을 다운로드받거나, 다음 명령어를 실행해줍니다.

```:no-line-numbers
brew install iterm2
```

## 3. iTerm 터미널 설정 변경
### 3.1. 테마 변경
공식 홈페이지에서 제공하는 테마들이 있는데, 그 중에서 가장 많이 쓰이는 agnoster 테마를 사용할 겁니다. 이 테마는 디렉토리 경로와 Git 연동 정보를 예쁘게 보여줘서 굉장히 만족스러웠습니다.

먼저 다음 vi 명령어로 ~/.zshrc 설정 파일을 열어줍니다.

```:no-line-numbers
vi ~/.zshrc
```

중간에 있는 zsh theme 설정 스크립트에 `agnoster`를 작성해줍니다.

![](https://drive.google.com/uc?export=view&id=1nmIdbUAwHFyy6NeQnQumA4fGUz2YGb6T)
&lt;화면 1. zsh 테마 변경&gt;
{ .align-center }

이후 터미널 종료 후 재시작하거나, 다음 명령어를 실행해 변경 사항을 반영해줍니다.

```:no-line-numbers
source ~/.zshrc
```

### 3.2. 프롬프트(prompt) 수정 - 항상 줄바꿈
터미널에서 작업을 하다보면 git branch 명 또는 폴더 트리가 길어져 보기 불편할 수 있습니다.

이를 해결하기 위해 프롬프트에서 명령어를 입력하는 부분을 새 줄에서 하도록 설정해줬습니다. [3.1. 테마 변경](#31-테마-변경)에서 설정한 Oh My Zsh 테마 설정 파일을 열어 `build_prompt()` 객체에 `prompt_newline` 함수를 추가하고, `prompt_newline` 함수에 줄바꿈 기능과 프롬프트 표시 형식을 작성해줍니다.

::: details ~/.oh-my-zsh/themes/agnoster.zsh-theme
저는 agnoster 테마를 사용했습니다.

파일을 열어 스크립트를 살펴보면 다음과 같이 `build_prompt()` 객체에 `prompt_newline`를 추가해줍니다.
```sh:no-line-numbers {12}
...
build_prompt() {
  RETVAL=$?
  prompt_status
  prompt_virtualenv
  prompt_aws
  prompt_context
  prompt_dir
  prompt_git
  prompt_bzr
  prompt_hg
  prompt_newline # 해당 줄을 추가합니다.
  prompt_end
}
...
```

그리고 다음과 같이 `prompt_newline` 함수를 파일 내에 정의해줍니다.

```sh:no-line-numbers
prompt_newline() { 
  if [[ -n $CURRENT_BG ]]; then
    echo -n "%{%k%F{$CURRENT_BG}%}$SEGMENT_SEPARATOR
%{%k%F{green}%}$SEGMENT_SEPARATOR"
  else
    echo -n "%{%k%}"
  fi

  echo -n "%{%f%}"
  CURRENT_BG=''
}
```

결과

![](https://drive.google.com/uc?export=view&id=1GZPCO9hsXfkbavzyWRqj42exj2h4Bn1c)
{ .align-center }
:::

함수 내용에 따라 자신이 원하는 프롬프트 모양을 표시할 수 있습니다. 예를 들어 angle bracket 모양(`>`)을 사용하기 위해 다음과 같이 작성합니다.

::: details ~/.oh-my-zsh/themes/agnoster.zsh-theme
```sh:no-line-numbers {4}
prompt_newline() {
  if [[ -n $CURRENT_BG ]]; then
    echo -n "%{%k%F{$CURRENT_BG}%}$SEGMENT_SEPARATOR
%(?.%F{$CURRENT_BG}.%F{red})❯%f" # 프롬프트 > 모양 사용, CURRENT_BG 색상 동기화

  else
    echo -n "%{%k%}"
  fi

  echo -n "%{%f%}"
  CURRENT_BG=''
}
```

결과

![](https://drive.google.com/uc?export=view&id=1lnysZ7wdAJxAZ49p5M-mNpxdi8s7CDMO)
{ .align-center }
:::

이후 터미널 종료 후 재시작하거나, `source ~/.zshrc` 명령어를 실행해 변경 사항을 반영해줍니다.

### 3.3. 프롬프트에 사용자ID & 기기ID 삭제
저는 사용자 ID와 기기 ID가 프롬프트에 표시되는 것이 싫었습니다. 이를 삭제하기 위해서 우선 `~/.oh-my-zsh/themes/agnoster.zsh-theme` 파일에 있는 `prompt_context()` 함수를 살펴봤습니다.

::: details ~/.oh-my-zsh/themes/agnoster.zsh-theme
```sh:no-line-numbers
...
# Context: user@hostname (who am I and where am I)
prompt_context() {
  if [[ "$USERNAME" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
    prompt_segment black default "%(!.%{%F{yellow}%}.)%n@%m"
  fi
}
...
```
:::

스크립트를 살펴보니 USERNAME 변수가 DEFAULT_USER와 같지 않거나 SSH 터널링으로 접속한 유저에 대해 유저명과 기기명을 표시하도록 로직이 구성되어 있음을 확인했습니다.

위 스크립트를 전부 비활성화시킬 수 있지만 저는 `~/.zshrc` 파일에 DEFAULT_USER 변수에 whoami 변수값을 항상 바인딩하도록 다음과 같이 스크립트를 추가했습니다.

::: details ~/.zshrc
```sh:no-line-numbers
...
DEFAULT_USER="$(whoami)"
```
:::

이후 터미널 종료 후 재시작하거나, `source ~/.zshrc` 명령어를 실행해 변경 사항을 반영해줍니다.

### 3.4. 컬러 테마 변경
iTerm 터미널을 실행한 상태에서 메뉴바의 환경설정(Preferences)을 실행하거나 `cmd`+`,` 단축키를 실행해준 뒤 Profiles - Colors 탭을 선택한 후 우측 하단 Color Presets를 클릭하여 자신이 원하는 컬러 테마로 변경할 수 있습니다.

저는 Tango Dark 컬러 테마가 가장 마음에 들었습니다.

그리고 Color 탭의 Basic Colors나 Cursor Colors에서 세부 색상을 개인이 재설정할 수 있는데, 저는 Basic Colors - Foreground를 Grey 75%(#bfbfbf), Bold를 #c1ddff 색상으로 변경했습니다(Basic Colors - Selection과 같은 옅은 하늘색)

![](https://drive.google.com/uc?export=view&id=1MmibQS_l5eYvcS740keA2hggILpyX5Gd)
&lt;화면 2. iTerm Profiles > Colors 설정&gt;
{ .align-center }

### 3.5. 폰트 다운 및 변경
폰트를 변경하는 이유는 보기 좋게 하기 위함도 있지만, 더 중요한 것은 터미널 테마로 agnoster를 선택했을 때 터미널에 표시되는 아이콘이나 기호가 깨져보이는 것을 막기 위함입니다.

터미널 기본 폰트를 사용하면 agnoster 테마의 아이콘이나 기호가 꺠져보일 수 있습니다.

저는 스크립트나 코드를 볼 때 IBM Plex Mono 폰트를 선호하는데, 해당 폰트를 사용해도 문자가 깨져보여서 이 점을 보완한 BlexMono Nerd Font를 다운받아 사용했습니다.

폰트 변경은 환경설정 - Profiles - Text - Font 에서 변경할 수 있습니다.

![](https://drive.google.com/uc?export=view&id=1KztbMU2ZiiH8aDa88D8YUHKlJupqzHQu){ .border-rectangle }
&lt;화면 3. iTerm terminal font 변경 - BlexMono Nerd Font&gt;
{ .align-center }

### 3.6. status bar 추가
iTerm 터미널에는 기기의 각종 상태를 볼 수 있는 status bar를 구성할 수 있습니다.

status bar는 환경설정 - Profiles - Session 에서 다음 화면과 같이 설정할 수 있습니다.

![](https://drive.google.com/uc?export=view&id=1wh3qGe7SKjsfGkOaZCj_XDrI_dNUdwWN)
&lt;화면 4. iTerm status bar setting&gt;
{ .align-center }

![](https://drive.google.com/uc?export=view&id=1iYiqt5fVikfFYZPPbx4MC1ST05mbcBzV)
&lt;화면 5. iTerm status bar configuration&gt;
{ .align-center }

![](https://drive.google.com/uc?export=view&id=1JT77mGqQ2lOU8boudKxSkDS9r1tvE-4n)
&lt;화면 6. status bar 위치 설정&gt;
{ .align-center }

결과 다음과 같이 터미널에서 status bar를 볼 수 있습니다.

![](https://drive.google.com/uc?export=view&id=1JT77mGqQ2lOU8boudKxSkDS9r1tvE-4n)
&lt;화면 7. iTerm status bar&gt;
{ .align-center}

### 3.7. Tab session bar 항상 보이기 & font 크기 조정
별 거 아니긴 한데 Tab session bar 관련 설정들도 해줬습니다.

![](https://drive.google.com/uc?export=view&id=18GE6n2gJzCl3ZCATC6v3tlx-PBMFLTrI)
&lt;화면 8. iTerm - Appearance > Tabs > Show tab bar&gt;
{ .align-center }

![](https://drive.google.com/uc?export=view&id=1Yz0Z86JEOER1fDjH9Kz6elB8SiwsNzzj)
&lt;화면 9. iTerm - Tab font size&gt;
{ .align-center }

## A. 참조
easyhwan, "[Mac] 맥북 터미널 꾸미기 ( iTerm2, Oh My Zsh )," *Velog.io*, Jun. 28, 2022. [Online]. Available: [https://velog.io/@easyhwan/Mac-맥북-터미널-꾸미기-iTerm2-Oh-My-Zsh](https://velog.io/@easyhwan/Mac-맥북-터미널-꾸미기-iTerm2-Oh-My-Zsh) [Accessed Nov. 13, 2022].

SAMIR MAKWANA, "How to Customize the zsh Prompt in the macOS Terminal," *makeuseof.com*, Apr. 29, 2022. [Online]. Available: [https://www.makeuseof.com/customize-zsh-prompt-macos-terminal/](https://www.makeuseof.com/customize-zsh-prompt-macos-terminal/) [Accessed Nov. 19, 2022].

초보몽키의 개발공부블로그, "oh-my-zsh 테마 변경 및 설정 (alias, agnoster 멀티라인, 사용자명 숨김처리)," *github.io*, Mar. 12, 2017. [Online]. Available: [https://wayhome25.github.io/blog/page43/](https://wayhome25.github.io/blog/page43/) [Accessed Nov. 20, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
