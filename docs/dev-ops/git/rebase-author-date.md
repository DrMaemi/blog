---
title: '[Git] Commit 이력 변경 - 작성자(Author), 커밋 날짜(CommitDate) 변경'
icon: article
category: Git
date: 2022-11-13
order: -1
---

## 1. 들어가며, Git 커밋 이력을 변경해야 하는 문제 - 개인 계정과 회사 계정
회사 업무용 기기로 맥북을 받고 Git 작업을 하는데 개인 레포에 커밋할 일이 있었습니다.

그런데 깜빡하고 Git 유저 정보 세팅을 회사 계정 정보로 해둔 채 커밋을 연달아 해버렸습니다.

본문에서는 이런 문제를 만났을 때 Git commit 이력을 회사 계정에서 개인 계정으로 변경하는 방법, 나아가 커밋 이력 중 날짜를 변경하는 방법에 대해서 설명합니다.

## 2. Git config - Github 유저 정보 설정
명령어

```:no-line-numbers
git config --local user.name <user name>
git config --local user.email <user email>
```

예시

```:no-line-numbers
git config --local user.name DrMaemi
git config --local user.email dev.maemi@gmail.com
```

::: info 모든 레포에서 사용하는 Github 계정을 변경하고 싶다면 --local 옵션 대신 --global 옵션을 사용합니다.
```:no-line-numbers
git config --global ...
```
:::

::: info 혹시 기존 계정 정보가 남아있어 반영이 되지 않으면 다음 명령어를 사용합니다.
```:no-line-numbers
git credential-osxkeychain erase
```
:::

::: info 등록된 Git 설정을 확인하고 싶다면 <code>git config --list</code> 명령어를 사용합니다.
```:no-line-numbers
git config --list
```

![](https://drive.google.com/uc?export=view&id=1QAc5VEOVJX1fdD0QNBF_h0Ssa6v14rC6)
{ .align-center }

확인해보니 global 명령어로 설정한 뒤 local 명령어로 설정하면 두 값 모두 확인 가능한데, 내부적으로 local 설정 값을 쓰도록 구현되어 있는 것 같습니다.
:::

## 3. Git commit 작성자(author) 변경

### git log
먼저 `git log`로 현재 git history 상황을 봐야 합니다. 자신이 변경해야 할 커밋이 어디까지인지 확인하기 위함입니다.

::: details <code>git log</code> 명령어 실행 후 git 에디터 화면
```:no-line-numbers
commit 62cbf4e34ca4eebc04beaa2833d274d4e796fe4b (HEAD -> master, origin/master, origin/HEAD)
Author: sh.maemi.lee <sh.maemi.lee@navercorp.com>
Date:   Sun Nov 13 02:19:46 2022 +0900

    Post: [MacOS] 서드 파티 앱 없이 MacOS 키 매핑하기

commit 2dac45fb5d06680b85bb4b6897b0fa0a16db504f
Author: sh.maemi.lee <sh.maemi.lee@navercorp.com>
Date:   Sun Nov 13 02:16:46 2022 +0900

    Modify post: [MacOS] 맥북에서 윈도우 키보드를 윈도우처럼 사용하기
    
    fix typo: google image view link
    
    & complete post content with retrospect & further post link

commit 0a6dfd559dd7d2575713bfcf8e4b59bf96965dc7
Author: sh.maemi.lee <sh.maemi.lee@navercorp.com>
Date:   Sun Nov 13 02:06:36 2022 +0900

    Style: Add syntax highlight lang - 'plist'
    
    && Style: Add <img> class='border-rectangle' CSS
```
:::

확인해보니 최근 4개 커밋이 회사 계정으로 되어 있었습니다. 저의 목표는 해당 커밋들의 이력 상 작성자(author) 정보를 개인 계정으로 바꾸는 것입니다.

### git rebase -i
git log로 변경할 커밋들을 확인했으면 해당 커밋들을 변경하기 위해 git rebase -i 명령어를 실행합니다.

```:no-line-numbers
$ git rebase -i HEAD~4
```
- HEAD~&lt;n&gt;로 HEAD(가장 최신 커밋)로부터 n개까지의 커밋을 변경
- 만약 레포 가장 첫 커밋부터 변경해야 한다면 `git rebase -i --root`와 같이 `--root` 옵션 사용

명령어를 수행하면 다음과 같이 vim 에디터로 변경 후보 커밋들의 목록이 나타나는데, 실제 변경이 필요한 변경 대상 커밋 id에 pick 대신 e(edit)를 기입합니다.

vim 에디터를 다룰 줄 알아야 하는데, i버튼을 눌러 편집 모드로 수정하고 이후 esc - `:wq`를 입력하여 종료합니다.

![](https://drive.google.com/uc?export=view&id=11YQkwm9jA2_k5IyaGHxVQvSlk_R0vM68)
&lt;화면 1. git rebase -i 명령어 실행 직후&gt;
{ .align-center }

![](https://drive.google.com/uc?export=view&id=1Lcunx2POd6pGwIWo-o5PDdjE-28l16kN)
&lt;화면 2. git rebase -i, pick 대신 e&gt;
{ .align-center }

이후 변경 후보 커밋들을 순회하면서 변경 대상 커밋에서 멈추고 변경을 원하면 `git commit --amend`, 변경을 완료했다면 `git rebase --continue` 명령어를 입력하라고 합니다.

저는 작성자 정보를 변경하길 원하기 때문에 `git commit --amend --author="{author name}<{author@email.com}>"` 명령어를 입력해줬습니다.

```:no-line-numbers {13,17,28,33}
$ git rebase -i HEAD~4
...(pick 대신 e 작성 후)

Stopped at 8319d94c...  Modify post: [MacOS] 맥북에서 윈도우 키보드를 윈도우처럼 사용하기
You can amend the commit now, with

  git commit --amend 

Once you are satisfied with your changes, run

  git rebase --continue

$ git commit --amend --author="DrMaemi<dev.maemi@gmail.com>" 
[detached HEAD 4ac3515b] Modify post: [MacOS] 맥북에서 윈도우 키보드를 윈도우처럼 사용하기
 Date: Sat Nov 12 20:19:14 2022 +0900
 1 file changed, 24 insertions(+), 3 deletions(-)
$ git rebase --continue

Stopped at b77a24a7...  Style: Add syntax highlight lang - 'plist'
You can amend the commit now, with

  git commit --amend 

Once you are satisfied with your changes, run

  git rebase --continue

$ git commit --amend --author="DrMaemi<dev.maemi@gmail.com>"
detached HEAD 62cbf4e3] Post: [MacOS] 서드 파티 앱 없이 MacOS 키 매핑하기
 Date: Sun Nov 13 02:19:46 2022 +0900
 1 file changed, 117 insertions(+)
 create mode 100644 docs/other/mac-key-mapping-not-using-third-party-apps.md
$ git rebase --continue
...
...
$ git rebase --continue
Successfully rebased and updated refs/heads/master.
```

테스트해보진 않았으나 e로 명시한 변경 대상 커밋에 한해서 `Stopped at <commit id>...` 문구가 출력되며 순회를 멈추고 변경 내용을 반영할지 넘어갈지 결정하는 것 같습니다.

## 4. Git commit 날짜 변경
대상 커밋 날짜를 현재 날짜로 변경
```:no-line-numbers
git commit --amend --no-edit --date "$(date)"
```

커밋 날짜 & 작성 날짜 동시 변경
```:no-line-numbers
GIT_COMMITTER_DATE="Jan 15 12:34:56 2022 +0900" git commit --amend --date "Jan 15 12:34:56 2022 +0900"
```

### 커밋 날짜 변경 확인
다음 명령어로 `CommitDate`가 원하는 날짜로 변경되었는지 확인합니다. 이 값이 실제 Github에 커밋 날짜로 반영됩니다.
```:no-line-numbers
git log --pretty=fuller
```

## 5. 변경 내용 Push
```:no-line-numbers
git push -f
```

## A. 참조
nova_dev, "Git Commit 이력 변경 - 작성자(Author), 커밋 날짜(CommitDate) 변경하기," *Tistory*, Jan. 31, 2022. [Online]. Available: [https://hirlawldo.tistory.com/156](https://hirlawldo.tistory.com/156) [Accessed Nov. 13, 2022].

fefefe || efefef, "[GIT] commit 날짜 및 시간 변경하는 방법(amend)," *Tistory*, Oct. 3, 2021. [Online]. Available: [https://habitual-history.tistory.com/entry/git-commit-날짜-및-시간-변경하는-방법amend](https://habitual-history.tistory.com/entry/git-commit-날짜-및-시간-변경하는-방법amend) [Accessed Nov. 13, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
