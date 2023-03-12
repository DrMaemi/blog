---
title: '[Git] 저장소 병합 - subtree'
icon: article
category: Git
date: 2023-03-12
---

## subtree란
Git에는 프로젝트 간 Merging을 Subtree Merging이라 하며, 이 Sutbree Merging에 사용되는 명령어가 subtree입니다.

Subtree Merging은 여러 개의 프로젝트를 하나로 Merging하는 개념을 뜻합니다.

## 사용법
특정 저장소에서 다른 저장소를 Merge하기 위해 subtree 명령어를 사용합니다.

::: warning 주의
만약 빈 저장소에서 다른 저장소들을 합하려면 initial commit이 존재해야 합니다. 그렇지 않으면 오류가 발생합니다.
:::

### 1. 원격 저장소 URL 추가
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
