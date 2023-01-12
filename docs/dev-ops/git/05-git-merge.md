---
title: '[Git] 브랜치 병합 - git merge'
icon: article
category:
  - DevOps
  - Git
date: 2022-12-13
---

## 명령어
명령어

```:no-line-numbers
git merge <target branch name>
```

- 코드가 반영될 branch(주로 master 브랜치)에서 merge 수행

## 시나리오 예시
README.md 파일을 수정하는 이슈에 대해 다음과 같은 순서로 merge 할 수 있습니다.
1. 'readme' 브랜치에서 작업 후 master 브랜치에서 'readme' 브랜치를 merge
2. merge된 이후 'readme' 브랜치 삭제

## Fast-forward merge
Fast-forward merge란 현재 branch(수정된 코드가 반영될 branch, 주로 master 브랜치)의 HEAD가, 변경이 일어난 branch(ex. readme 브랜치)의 base commit과 동일한 경우 현재 branch의 HEAD를 변경이 일어난 branch의 HEAD로 단순 이동시키는 것을 말합니다.

::: info base commit이란
최소 공통 부모 커밋 노드를 말합니다.
:::

## Fast-forward merge가 안되는 경우
![](https://drive.google.com/uc?export=view&id=1wwpwosjDjoZuuoclcWFjTd_Bap-OzWS7)

그림과 같이 base commit(`1a8236f`)이 master 브랜치의 HEAD가 아닌 경우 Fast-forward merge가 불가능합니다.

## 3-way merge
작성 중..
