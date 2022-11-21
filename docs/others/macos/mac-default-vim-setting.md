---
title: '[MacOS] 맥북 default vim 설정'
icon: article
category:
  - Others
  - MacOS
date: 2022-11-20
---

## The Ultimate vimrc
Mac 기본 vimrc 설정을 다음 명령어를 통해 Git 저장소에서 가져올 수 있습니다.

```:no-line-numbers
git clone https://github.com/amix/vimrc.git ~/.vim_runtime
```

이후, Complete 버전으로 vim 설정을 적용하기 위해선 다음 명령어를 수행합니다.

```:no-line-numbers
sh ~/.vim_runtime/install_awesome_vimrc.sh
```

Basic 버전으로 vim 설정을 적용하기 위해선 다음 명령어를 수행합니다.

```:no-line-numbers
sh ~/.vim_runtime/install_basic_vimrc.sh
```

## Update
vimrc 설정 스크립트를 최신화하기 위해서는 다음 명령어를 수행합니다.

```:no-line-numbers
cd ~/.vim_runtime && git pull --rebase && cd -
```

## A. 참조
SOURABH BAJAJ, "Vim," *sourabhbajaj.com*, [Online]. Available: [https://sourabhbajaj.com/mac-setup/Vim/](https://sourabhbajaj.com/mac-setup/Vim/) [Accessed Nov. 20, 2022].
