---
title: '[Git] 저장소 병합 및 분리 - subtree'
icon: article
category: Git
date: 2023-03-12
---

## subtree란
Git에는 프로젝트 간 Merging을 Subtree Merging이라 하며, 이 Sutbree Merging에 사용되는 명령어가 subtree입니다.

Subtree Merging은 여러 개의 프로젝트를 하나로 Merging하는 개념을 뜻합니다.

반대로 하나의 프로젝트에서 하위 디렉토리를 별도의 프로젝트로 분리할 때에도 subtree 명령어를 사용합니다.

## subtree로 저장소 병합
특정 저장소에서 다른 저장소를 Merge하기 위해 subtree 명령어를 사용합니다.

::: warning 주의
만약 빈 저장소에서 다른 저장소들을 합하려면 initial commit이 존재해야 합니다. 그렇지 않으면 오류가 발생합니다.
:::

### 1. 원격 저장소 URL 연동
```:no-line-numbers
git remote add ${ALIAS} ${REMOTE_REPOSITORY_URL}
```

예시
```:no-line-numbers
git remote add javascript https://github.com/drmaemi/javascript
```

### 2. subtree 추가
```:no-line-numbers
git subtree add --prefix ${PATH} ${REMOTE_REPO_ALIAS} ${BRANCH}
```

예시
```:no-line-numbers
git subtree add --prefix javascript javascript master
```

::: warning 주의
&#36;&#123;PATH&#125;가 미리 생성되어 있으면 안됩니다.
:::

### 3. push
```:no-line-numbers
git push
```

### 4. git remote 제거 / 원격 저장소 제거
```:no-line-numbers
git remote remote ${ALIAS}
```

이후 github 원격 저장소도 전부 삭제해줍니다.

## subtree로 저장소 분리
예를 들어 다음과 같이 상위 프로젝트 내에 디렉토리로 frontend와 backend 프로젝트가 나뉘어 있다면,

```:no-line-numbers
project
|-- backend
`-- frontend
```

### 1. 상위 저장소에서 `git subtree split` 명령어 실행, 브랜치에 하위 디렉토리 분리
```:no-line-numbers
git subtree split -P [분리하고자 하는 하위 디렉토리 경로] -b [새로운 브랜치 명]
```

예시

```:no-line-numbers
cd project
git subtree split -P backend -b splitted-backend
```

### 2. 분리한 브랜치를 새로운 루트 디렉토리에서 pull
```:no-line-numbers
mkdir [새로운 루트 디렉토리 경로]
cd [새로운 루트 디렉토리 경로]
git init
git pull [기존 상위 저장소 경로] [분리한 브랜치 명]
```

예시

```:no-line-numbers
mkdir ~/project-backend
cd ~/project-backend
git init
git pull ~/project splitted-backend
```

### 3. 원격 저장소 생성, 연동, push
분리되어 새롭게 만들어질 원격 저장소를 Github 등에서 생성해준 뒤, `git remote add` 명령어로 원격 저장소 URL을 연동하고 push 해줍니다.

```:no-line-numbers
git remote add origin [원격 저장소 URL]
git push -u origin master
```

## A. 참조
지속가능한 개발 블로그, "레포지토리의 하위폴더를 분리해서 새로운 레포지토리로 만들기," *tistory.com*, Mar. 7, 2020. [Online]. Available: [https://sustainable-dev.tistory.com/119](https://sustainable-dev.tistory.com/119) [Accessed May 28, 2023].
