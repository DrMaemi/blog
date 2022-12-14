---
title: Markdown 사용법
icon: article
category:
  - Markdown
date: 2022-12-23
---

## 마크다운이란?
마크다운은 평문(plain-text) 편집기를 사용하는 정형화된(formatted) 텍스트를 위한 경량 마크업 언어다. 마크다운은 블로그나 즉석 메시지(instant messaging), 온라인 포럼, 협업 소프트웨어 그리고 리드미(REAMDE) 파일 등에 널리 사용된다.

## 기본 문법
마크다운의 기본 문법은 두레이의 마크다운 가이드 링크 [https://dooray.com/htmls/guides/markdown_ko_KR.html](https://dooray.com/htmls/guides/markdown_ko_KR.html)에서 자세히 익힐 수 있다.

## 같은 문서 내 헤더로 링크 걸기
목차를 작성할 때 주로 사용하거나, 본문 내에서 특정 헤더로 이동이 필요할 때 사용한다. 다음과 같은 규칙으로 작성된다.
- [보여줄 텍스트](#링크할 헤더) 형식으로 기입
- 스페이스바(띄어쓰기)는 '-'로 대체
- '.', '-', '_', ':', '(', ')', '?'는 무시한다(제거)
- 이모지는 무시한다(제거)
- 대문자는 소문자로 바꿔 쓴다
- 어떤 헤더이든 '#'는 한 번만 쓴다

예시

```md:no-line-numbers
자세한 내용은 [5번 챕터](#5-대충-어떤-헤더)을 참조하세요.
...

### 5. 대?충 어:떤 헤-더
...
```

## 중첩된 목록
두 칸을 들여 쓰거나, `tab`키를 입력해 중첩된 목록을 만들 수 있다.

```:no-line-numbers
1. 첫 번째 목록
    1. 첫 번째의 첫 번째 목록
    2. 첫 번째의 두 번째 목록
2. 2
    - 2 1
    - 2 2
        - 2 2 1
        - 2 2 2
    - 2 3
```

결과

1. 첫 번째 목록
    1. 첫 번째의 첫 번째 목록
    2. 첫 번째의 두 번째 목록
2. 2
    - 2 1
    - 2 2
        - 2 2 1
        - 2 2 2
    - 2 3

## 표
기본 예제 1

```md:no-line-numbers
열 1 | 열 2 | 열 3
--- | --- | ---
열 1111 | 열 22222222 | 열 333333333333
열  | 열 | 열
```

결과

열 1 | 열 2 | 열 3
--- | --- | ---
열 1111 | 열 22222222 | 열 333333333333
열  | 열 | 열

기본 예제 2

```md:no-line-numbers
왼쪽 정렬 | 가운데 정렬 | 오른쪽 정렬
:------- | :--------: | -:
왼쪽 | 가운데 | 오른쪽
정렬 | 정렬 | 정렬
```

결과

왼쪽 정렬 | 가운데 정렬 | 오른쪽 정렬
:------- | :--------: | -:
왼쪽 | 가운데 | 오른쪽
정렬 | 정렬 | 정렬