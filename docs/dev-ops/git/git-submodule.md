---
title: '[Git] 저장소 포함 - submodule'
icon: article
category: Git
date: 2023-05-06
---

`git submodule`은 상위 저장소에서 하위 저장소를 포함시켜 관리하기 위해 사용하는 기능입니다. 상위 저장소와 하위 저장소가 각각 원격 저장소로 관리되어야 하면서, 동시에 상위 저장소가 하위 저장소를 의존하여 사용할 때 사용합니다.

- Submodule은 다른 Repository에 embed 된 어떤 Repository를 의미합니다.
- Submodule은 고유의 history를 가집니다.
- 상위 Repository를 superproject라 합니다.
- 파일시스템 상 Submodule은 주로(언제나는 아니고) superproject의 `$GIT_DIR/modules/` 하위에 Git 디렉토리...(1)를 가집니다. 그리고 `.git` 파일이 Submodule의 workding 디렉토리 루트에 위치하는데, 이 `.git` 파일은 (1)을 가리킵니다.

## 사용법
```:no-line-numbers
git submodule add <Git URL [원하는 이름]>
```

예시
```:no-line-numbers
git submodule add https://github.com/chaconinc/DbConnector
```

- `git submodule` 명령어를 사용했을 때 기본적으로 프로젝트 저장소 이름으로 디렉토리를 생성함
- 인자로 원하는 이름을 작성해 다른 디렉토리 이름으로 서브 모듈을 추가할 수 있음

## 생성 파일
```:no-line-numbers
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   .gitmodules
    new file:   DbConnector
```

- `.gitmodules` 파일 생성
  - 하위 프로젝트의 URL 매핑 정보를 담은 설정 파일

## 커밋 시 로그
```:no-line-numbers
$ git commit -am 'added DbConnector module'
[master fb9093c] added DbConnector module
 2 files changed, 4 insertions(+)
 create mode 100644 .gitmodules
 create mode 160000 DbConnector
```

- `mode 160000`은 Git 시스템에서 일반적인 파일 또는 디렉토리가 아닌 특별한 것임을 의미

## 서브 모듈을 포함한 프로젝트를 clone할 때
서브 모듈을 포함하는 프로젝트를 clone하면 기본적으로 서브 모듈 디렉토리가 비어 있습니다. 이를 가져오려면 다음 방법 중 하나를 수행해야 합니다.

- git clone 후 `git submodule init`, `git submodule update`
- git clone 후 `git submodule update --init --recursive`
- 처음부터 clone할 때 `git clone --recurse-submodules <상위 저장소 Git URL>`

## 서브 모듈 업데이트
- 서브 모듈을 포함한 상위 프로젝트에서 서브 모듈 코드를 건드리지 않는 것이 바람직함
- 서브 모듈 수정 필요 시 서브 모듈 저장소에서 update-commit-push 후 상위 저장소에서 다음 두 가지 방법 중 하나 실행
  - 서브 모듈 디렉토리에서 `git pull`
  - 상위 저장소에서 `git submodule update --remote <submodule alias>`
    - 예시
    ```:no-line-numbers
    $ git submodule update --remote DBConnector
    remote: Counting objects: 4, done.
    remote: Compressing objects: 100% (2/2), done.
    remote: Total 4 (delta 2), reused 4 (delta 2)
    Unpacking objects: 100% (4/4), done.
    From https://github.com/chaconinc/DbConnector
      3f19983..d0354fc  master     -> origin/master
    Submodule path 'DbConnector': checked out 'd0354fc054692d3906c85c3af05ddce39a1c0644'
    ```

## 서브 모듈 브랜치 변경
```:no-line-numbers
git config -f .gitmodules submodule.DbConnector.branch <branch>
```

## 서브 모듈 디렉토리 위치 변경
```:no-line-numbers
git mv <submodule alias> <directory path(ex. ./my-folder1)/submodule alias>
```

- `.gitmodules`에 해당 서브 모듈의 path가 변경됨

## Trouble Shootings
### `A git directory for ... is found locally with remote(s)...`
```:no-line-numbers
A git directory for 'submodule alias' is found locally with remote(s):
  origin        https://github.com/DrMaemi/submodule-repo.git
If you want to reuse this local git directory instead of cloning again from
  https://github.com/drmaemi/submodule-repo.git
use the '--force' option. If the local git directory is not the correct repo
or you are unsure what this means choose another name with the '--name' option.
```

- 서브 모듈을 추가했다가 git reset 등으로 되돌린 경우 발생
- `.gitmodules`, `.git/modules`에서 문제가 되는 서브 모듈과 관련된 코드를 지워 해결 가능

## A. 참조
노초코, "9.1: submodule 을 포함하는 git 저장소를 clone 하기," *tistory.com*, Oct. 12, 2019. [Online]. Available: [https://nochoco-lee.tistory.com/87](https://nochoco-lee.tistory.com/87) [Accessed May 6, 2023].

Software Freedom Conservancy, "gitsubmodules - Mounting one repository inside another," *git-scm.com*, last updated in 2.40.1. [Online]. Available: [https://git-scm.com/docs/gitsubmodules](https://git-scm.com/docs/gitsubmodules) [Accessed May 28, 2023].
