---
title: '[Git] 03. git remote'
icon: article
category:
  - DevOps
  - Git
date: 2022-11-26
order: 3
---

## 저장소 복제 - git clone & remote set-url & push
먼저 Github와 같은, Git 원격 저장소 호스팅 서비스에 새로운 원격 저장소를 생성해줍니다.

이후 기존 저장소의 코드와 커밋 기록을 새로운 원격 저장소에 복제하기 위해서 git clone, git remote set-url 명령어를 실행해주면 됩니다.

```:no-line-numbers
git clone <기존 원격 저장소 URL>
cd <기존 원격 저장소 이름>
git remote set-url origin <새로운 원격 저장소 URL>
git push
```

## git remote
현재 프로젝트의 원격 저장소 설정과 관련된 명령어입니다.

### 등록된 원격 저장소 목록 확인
```:no-line-numbers
git remote
git remote show [alias]
git remote -v
```

### 등록
```:no-line-numbers
git remote add <alias> <원격 저장소 URL>
```

예시
```:no-line-numbers
git remote add origin https://github.com/DrMaemi/apple-edu-react-study.git
```

### URL 변경
```:no-line-numbers
git remote set-url <alias> <새로운 원격 저장소 URL>
```

### alias 변경
```:no-line-numbers
git remote rename <old alias> <new alias>
```

예시
```:no-line-numbers
git remote rename origin github
```

### 삭제
```:no-line-numbers
git remote remove <alias>
```

예시
```:no-line-numbers
git remote remove origin
```
