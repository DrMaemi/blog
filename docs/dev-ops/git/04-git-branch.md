---
title: '[Git] 04. git branch'
icon: article
category:
  - DevOps
  - Git
date: 2022-12-05
order: 4
---

## 원격 저장소의 브랜치 정보 보기
```:no-line-numbers
git remote update
git branch -r
```

## 원격 저장소의 브랜치 가져오기
만약 /feature/created-branch 브랜치를 가져오고 싶다면

```:no-line-numbers
git checkout -t origin/feature/created-branch
```

## 로컬에 브랜치 생성
```:no-line-numbers
git branch feature/test
```

## 브랜치 전환
```:no-line-numbers
git checkout feature/test
```

### 브랜치 생성과 동시에 전환
```:no-line-numbers
git checkout -b feature/test
```

## 로컬 브랜치 작업 내용을 원격 저장소에 push
```:no-line-numbers
git push <remote alias> <branch>
```

::: details 예제 - test-file 생성, 커밋, 푸시
```:no-line-numbers {1,2,6}
$ touch test-file
$ git commit -m "Create file: test-file"
[feature/test b3003ae] Create file: test-file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test-file
$ git push origin feature/test
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 279 bytes | 279.00 KiB/s, done.
Total 3 (delta 1), reused 1 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'feature/test' on GitHub by visiting:
remote:      https://oss.navercorp.com/sh-maemi-lee/git-study/pull/new/feature/test
remote:
To https://oss.navercorp.com/sh-maemi-lee/git-study.git
 * [new branch]      feature/test -> feature/test
```
:::

작업 내용 없이 브랜치 생성 후 원격 저장소에 push할 수도 있습니다.

## Pull request & Comment & Merge
로컬 브랜치 작업 내용을 원격 저장소에 push했다면, 브라우저로 [Github](https://github.com)에 접속하여 Pull request를 할 수 있습니다.

![](https://drive.google.com/uc?export=view&id=1eZn83h9Elu_rLMe6yfK9fCTWUk28E_fB)
&lt;Github - Pull request & Comment & Merge&gt;
{ .align-center }

Pull request, Comment, Merge를 모두 끝냈다면 로컬 저장소와 원격 저장소의 상태를 동기화해줍니다.

```:no-line-numbers {1,4,7,14}
$ git branch
* feature/test
  master
$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
$ git remote update
remote: Enumerating objects: 1, done.
remote: Counting objects: 100% (1/1), done.
remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (1/1), 287 bytes | 287.00 KiB/s, done.
From https://oss.navercorp.com/sh-maemi-lee/git-study
   f1daa0c..9c7aadb  master     -> origin/master
$ git pull
Updating f1daa0c..9c7aadb
Fast-forward
 test-file | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test-file
```

그러나 로컬에서 확인해보면 여전히 브랜치 정보가 남아있습니다.

```:no-line-numbers {1,4}
$ git branch
  feature/test
* master
$ git branch -r
  origin/HEAD -> origin/master
  origin/feature/test
  origin/master
```

## 브랜치 삭제
로컬 브랜치 삭제

```:no-line-numbers {1,3}
$ git branch -d feature/test
Deleted branch feature/test (was b3003ae).
$ git branch
* master
```

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
