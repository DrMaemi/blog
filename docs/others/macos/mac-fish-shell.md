---
title: '[MacOS] Fish Shell'
icon: article
category:
  - Others
  - MacOS
date: 2022-11-30
---

```:no-line-numbers
$ brew install fish
```

```:no-line-numbers
$ cat /etc/shells
/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
```

```:no-line-numbers
$ which fish
/usr/local/bin/fish
```

```:no-line-numbers
# sudo -e /etc/shells or
$ sudo sh -c 'echo $(which fish) >> /etc/shells'
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
/usr/local/bin/fish
```

```:no-line-numbers
$ chsh -s $(which fish)
```

```:no-line-numbers
$ echo "Theme 'agnoster'" >> ~/.config/fish/config.fish
$ echo "Plugin 'theme'" >> ~/.config/fish/config.fish
$ cat ~/.config/fish/config.fish

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
eval /Users/user/opt/anaconda3/bin/conda "shell.fish" "hook" $argv | source
# <<< conda initialize <<<

Theme 'agnoster'
Plugin 'theme'
```

## A. 참조
NineTIN, "【Mac/OS X】 fish shell 설치하기," *tistory.com*, Nov. 6, 2018. [Online]. Available: [https://ninetin.tistory.com/45](https://ninetin.tistory.com/45) [Accessed Nov. 30, 2022].

Youngbin Han, "Fish 셸 설치하고, Oh My Fish 로 커스터마이징 하기," *blog.youngbin.xyz*, Jul. 30, 2015. [Online]. Availble: [https://blog.youngbin.xyz/2015-07-30-install-fish-then-customize-it-with-oh-my-fish/](https://blog.youngbin.xyz/2015-07-30-install-fish-then-customize-it-with-oh-my-fish/) [Accessed Nov. 30, 2022].

[https://github.com/oh-my-fish/oh-my-fish](https://github.com/oh-my-fish/oh-my-fish)
