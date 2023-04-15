---
title: '[Git] 저장소 명명 규칙(Repository Naming Convention)'
icon: article
category: Git
date: 2023-04-15
order: -1
---

본문은 저자가 정리한 Git 저장소 명명 규칙에 대해 설명합니다. 설명한 내용이 정답은 아니니 참고만 하시길 바랍니다.

## 기본 명명 규칙
1. 소문자 사용(Use lower case)
2. 대시(-) 사용(Use dashes)
3. 명확하게 작성(Be specific)
4. 일관성 있게 작성(Be consistent)

위 규칙 하에 프로젝트의 키워드에 따라 저장소 이름을 명명합니다.

프로젝트 키워드는 1. 이름(Name), 2. 개발 환경(Development Environment), 3. 용도(Purpose)가 될 수 있습니다.

## 이름(Name)
- 프로젝트의 이름을 나타내는 키워드
- 웹사이트의 경우 특별한 프로젝트 이름이 없을 경우 도메인(Domain) 자체가 프로젝트 이름이 될 수 있음
    - http://domain.com → domain.com
    - http://sub.domain.com → sub.domain.com

## 개발 환경(Development Environment)
- 프로젝트의 개발 환경을 나타내는 키워드
- 개발에 사용된 언어, 도구, OS 등을 포함
- 특정 개발 환경에서만 프로젝트가 동작하는 경우 본 키워드를 우선적으로 사용
- ex. angular, cpp, dotnet, java, javascript, node, windows, etc.

## 용도(Purpose)
- 프로젝트가 어떤 용도로 사용되는지 나타내는 키워드
- ex. backend, cli, client, core, documents, extention, frontend, sdk, server, tools, util, etc.

## A. 참조
jinseobhong, "Git 저장소 이름 규칙(Git repository naming convention)," *github.com*, Jun 9, 2021. [Online]. Available: [https://github.com/jinseobhong/gitRepositoryNamingConvention](https://github.com/jinseobhong/gitRepositoryNamingConvention) [Accessed Apr. 15, 2023].

siAhn, "[Git][Github] Repository Naming Convention이 있을까?," *tistory.com*, Aug. 25, 2021. [Online]. Available: [https://siahn95.tistory.com/144](https://siahn95.tistory.com/144) [Accessed Apr. 15, 2023].
