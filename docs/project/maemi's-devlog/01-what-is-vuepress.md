---
title: 'VuePress란 무엇인가'
icon: article
category: Maemi's Devlog
date: 2022-10-19
order: 1
---

## VuePress란?
VuePress는 자바스크립트 프레임워크 Vue를 기반으로 한 정적 사이트 생성기(SSG, Static Site Generator)입니다.

VuePress를 정확히 이해하려면 동적 사이트와 정적 사이트에 대한 이해가 필요합니다.

## 동적 사이트(Dynamic Site)
유저의 상태나 권한, 혹은 필요에 따라 콘텐츠가 실시간으로 업데이트되는 콘텐츠를 동적 콘텐츠라 하며, 동적 콘텐츠를 담고 있는 웹페이지를 동적 웹페이지라고 합니다.

이런 동적 웹페이지들을 운영하고 관리하는 웹사이트를 동적 사이트(Dynamic Site)라 합니다. 동적 사이트의 예로 게시판 시스템이 있으며, 게시판에는 글 작성/수정/삭제/조회 등의 기능이 존재합니다.

동적 웹페이지는 데이터를 가공해 각 사용자에게 맞춤혐으로 화면을 보여주기 때문에 데이터베이스와 웹 어플리케이션 서버가 필요합니다.

어플리케이션 서버를 구축하는데에는 다음과 같은 기술(혹은 프로그래밍 언어, 프레임워크)이 필요합니다.

- `java` Spring framework, JSP
- `php` Laravel, Codeigniter framework, Wordpress
- `python` Django, Flask framework
- `node.js` Express.js, Coa.js, Nest.js
- `C#` .NET framework

## 정적 사이트(Static Site)
동적 웹페이지와 달리 내용이 바뀌지 않는 정적 콘텐츠를 다루는 웹사이트는 정적 사이트(Static Site)라 합니다. 정적 사이트는 오직 HTML, CSS, Javascript만 사용하여 만들어집니다.

정적 사이트의 예로 Github Page가 있습니다. Github Page는 github에 업로드된 파일(HTML, CSS, Javascript)를 기반으로 동작합니다.

정적 사이트는 서버 사이드에서 DB를 처리하거나 데이터 요청을 받아 처리하는 방식이 아니기 때문에 작성/수정/삭제와 같은 기능을 제공할 수 없습니다. 오직 페이지를 조회하는 것만 가능합니다.

## 정적 사이트 생성기(SSG, Static Site Generator)
SSG는 정적 사이트를 만들어주는 도구 혹은 프레임워크를 말합니다. 다음과 같은 SSG들이 존재합니다.

- Jekyll - Ruby 기반 / 테마, 플러그인 등이 풍부하며 Github Page 엔진에 내장되어 있음
- Hugo - Go 기반 / build 속도가 제일 빠름
- Hexo - Node.js 기반 / 공식 한글 문서 지원
- Gatsby - React 기반 / GraphQL 사용 가능
- VuePress - Vue 기반 / Vue 공식 문서에 사용되는 프레임워크. **본 블로그의 SSG**

SSG 사용 최신 동향은 [Site Generators](https://jamstack.org/generators/)에서 확인할 수 있습니다.

## A. 참조
황준일, "Vuepress 시작하기," *github.io*, Jun. 6, 2022. [Online]. Available: [https://junilhwang.github.io/TIL/Vuepress/Starter/](https://junilhwang.github.io/TIL/Vuepress/Starter/) [Accessed Oct. 19, 2022].

편해걸, "LINE에서 하루 만에 정적 웹 페이지 개발해서 배포하는 방법," *engineering.linecorp.com*, Jun. 18, 2021. [Online]. Available: [https://engineering.linecorp.com/ko/blog/how-to-quickly-develop-static-pages-in-line/](https://engineering.linecorp.com/ko/blog/how-to-quickly-develop-static-pages-in-line/) [Accessed Oct. 19, 2022].
