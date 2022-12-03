---
title: '[MacOS] Fish Shell'
icon: article
category:
  - Others
  - MacOS
date: 2022-11-30
---

## fish shell
### 설치
```sh:no-line-numbers
$ brew install fish
```

```sh:no-line-numbers
$ which fish
/usr/local/bin/fish
```

### 시스템이 사용 가능한 쉘 목록에 등록
```sh:no-line-numbers
$ cat /etc/shells
/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
```

```sh:no-line-numbers
# sudo -e /etc/shells or
$ sudo sh -c 'echo $(which fish) >> /etc/shells'
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.
$ cat /etc/shells
/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
/usr/local/bin/fish
```

### 시스템 기본 쉘로 변경
```sh:no-line-numbers
$ chsh -s $(which fish)
```

이후 터미널 재시작

## Oh-My-Fish
[Oh-My-Fish Github](https://github.com/oh-my-fish/oh-my-fish)

### 삭제
```sh:no-line-numbers
omf destroy
```

```:no-line-numbers
 !  ~  omf destroy                                      토 12/ 3 12:12:30 2022
Checking for a sane environment...
This will uninstall Oh My Fish and all plugins and themes from
/Users/user/.local/share/omf.
read> y
Uninstalling from /Users/user/.local/share/omf...
Uninstall complete
Welcome to fish, the friendly interactive shell
Type help for instructions on how to use fish
user@AL01549179 ~>
```

### Theme 삭제
```sh:no-line-numbers
omf remove agnoster
omf remove bobthefish
```

## bobthefish Theme
[Theme bobthefish Github](https://github.com/oh-my-fish/theme-bobthefish)

## A. 참조
NineTIN, "【Mac/OS X】 fish shell 설치하기," *tistory.com*, Nov. 6, 2018. [Online]. Available: [https://ninetin.tistory.com/45](https://ninetin.tistory.com/45) [Accessed Nov. 30, 2022].

Youngbin Han, "Fish 셸 설치하고, Oh My Fish 로 커스터마이징 하기," *blog.youngbin.xyz*, Jul. 30, 2015. [Online]. Availble: [https://blog.youngbin.xyz/2015-07-30-install-fish-then-customize-it-with-oh-my-fish/](https://blog.youngbin.xyz/2015-07-30-install-fish-then-customize-it-with-oh-my-fish/) [Accessed Nov. 30, 2022].

[https://github.com/oh-my-fish/oh-my-fish](https://github.com/oh-my-fish/oh-my-fish)

[https://github.com/oh-my-fish/theme-bobthefish](https://github.com/oh-my-fish/theme-bobthefish)
