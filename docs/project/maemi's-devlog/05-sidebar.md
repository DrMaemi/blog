---
title: '05. 사이드바 및 TOC 설정'
icon: article
category: Maemi's Devlog
date: 2022-10-24
order: 5
---

vuepress theme hope에서 제공하는 사이드바를 이용해 웹페이지를 꾸밀 수 있는데, 본문에서는 본 블로그를 꾸밀 때 사용했던 방법에 대해서 다룹니다.

## 사이드바 설정 파일 및 의존 관계
<div class="mxgraph" style="max-width:100%; margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;Electron\&quot; modified=\&quot;2022-10-23T12:02:09.094Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/20.3.0 Chrome/104.0.5112.114 Electron/20.1.3 Safari/537.36\&quot; etag=\&quot;wBR6sWQOg4gmRb2IRo95\&quot; version=\&quot;20.3.0\&quot; type=\&quot;device\&quot;&gt;&lt;diagram id=\&quot;klfuljvmkhf6RmSSAibK\&quot; name=\&quot;그림 1. 사이드바 설정 파일 및 의존 관계\&quot;&gt;1ZbNbqMwFIWfhuVUAZMElp20aTeVKmUx3Y1cuAVLgBljAunTjxnbgGOan6ppNBuEj+1r3+/aBxy0ytsHhsv0icaQOd4sbh1053jePAjFsxN2UljMkRQSRmIpuYOwIe+gxJlSaxJDZQzklGaclKYY0aKAiBsaZow25rA3mpmrljgBS9hEOLPVXyTmqVQDbznoj0CSVK/sLlTCOdaDVSZVimPajCR076AVo5TLt7xdQdax01zkvPUHvf3GGBT8lAn85X3x+vsl+ZOVadU8+uvbt/qHJ6NscVarhG+2NZQMqkpEqgT7V8y6mDIFvtNcqobkGS5E66e9EbW3LTAO7UhSG3sAmgNnOzFE9foakjol7lK1m4G5GygtHfH2ZkrEqs5JH3tAIV4UjTPI+BYZUsTQ3vDKYsFoLbq6YDOBo0kJh02Jo663EZdCaCnPxeJ37iStg4U5GSEyCfoTAL0JgItL8Ztb/KD4X+D1pK5GL7DoWeCgiG87gxMtWkIh6AhlTTLNSrSUnQYmRJP4eUgrWrMIjl8bjlkCh+Kp4wGxYb92gcYV0LQZZJiTrenQUyVQ4Z4pEbn1xXY/8BodQeaoJo0NdT/O8kggCcEK9O9A9Cl+/oyEB737wo7dG4xOHtlXBk069sXujIssIDyFHL7LdcJzGe65TnBt03Htb973uY57osHoKh91GP+KDhOalfU+bTH7gcKvshjRHH495fDh/x3d/wU=&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<div class="align-center">&lt;그림 1. 사이드바 설정 파일 및 의존 관계&gt;</div>

::: details .vuepress/sidebar/index.ts
```ts
export * from "./en.js";
```
:::

::: details .vuepress/sidebar/en.ts
```ts:no-line-numbers
import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/algorithm/boj/": [
    {
      icon: "/assets/icon/boj.png",
      text: "Baekjoon Online Judge",
      link: "/category/baekjoon-online-judge/",
      children: [
        {
          ...
        },
      ],
    },
    ...
});
```
:::

::: details .vuepress/theme.ts
```ts:no-line-numbers
import { enSidebar } from "./sidebar/index.js";
...

export default hopeTheme({
  ...
  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      ...
    },
  },
});
```
:::

## 사이드바 설정 방법
### 다중 및 자동 사이드바(Multiple & Auto Sidebar)
예를 들어 프로젝트 구조가 다음과 같을 때,

```:no-line-numbers
.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│   ├─ README.md
│   ├─ one.md
│   └─ two.md
└─ bar/
    ├─ README.md
    ├─ three.md
    └─ four.md
```

`foo`와 `bar` 폴더는 `REAMDE.md` 파일을 포함하고 있으며, 거기에 다른 폴더나 파일들을 포함하고 있을 때 vuepress theme hope 프로젝트의 sidebar 설정을 통해 각 폴더 하위 URL에서 독립된 **다중** 사이드바를 **자동**으로 생성할 수 있습니다.

::: details .vuepress/en.ts
```ts:no-line-numbers {3,8,11,16}
export const enSidebar = sidebar({
  ...
  "/foo/": [
    {
      icon: "/assets/icon/foo.png",
      text: "Foo",
      link: "/category/foo/",
      children: "structure",
    },
  ],
  "/bar/": [
    {
      icon: "/assets/icon/bar.png",
      text: "Bar",
      link: "/category/bar/",
      children: "structure",
    },
  ],
});
```
:::

사이드바에 표현되는 폴더 하위 게시글의 아이콘, 제목 등은 각 게시글의 Frontmatter에 작성된 정보들을 토대로 표시됩니다.

### 그룹 및 중첩(Grouping & Nesting)
예를 들어 프로젝트 구조가 다음과 같을 때,

```:no-line-numbers
.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
    ├─ README.md
    ├─ one.md
    └─ bar/
        ├─ README.md
        ├─ three.md
        └─ four.md
```

`foo` 하위 `bar` 폴더 내 게시글에서도 같은 사이드바를 공유하도록 그룹 및 중첩 사이드바를 다음과 같이 작성할 수 있습니다.

::: details .vuepress/en.ts
```ts
export const enSidebar = sidebar({
  "/foo/": {
    icon: "/assets/icon/foo.png",
      text: "Foo",
      link: "/category/foo/",
      children: [
        "", // /foo/, REAMDE.md 렌더링
        "one", // /foo/one.md
        {
          text: "Bar",
          collapsable: true,
          children: "structure",
        }
      ],
  },
});
```
:::

## TOC 헤더 링크 깊이(Depth)
vuepress theme hope는 사이드바에 TOC 링크를 생성해주는데, 기본적으로 마크다운 헤더 레벨 2, 3에 해당하는 `h2`, `h3` 헤더를 추출하여 TOC를 생성합니다.

이와 관련된 설정은 게시글의 Frontmatter에 `headerDepth`란 속성을 통해 할 수 있습니다.

```md
---
headerDepth: 2
---
```

`headerDepth`의 기본값(Default value)은 2로, 위의 코드는 기본값과 같은 설정이므로 생략 가능합니다.

`headerDepth`를 0으로 설정하면 TOC 생성이 비활성화됩니다.

::: warning
`headerDepth`의 최대값은 VuePress의 [markdown.headers](https://v2.vuepress.vuejs.org/reference/config.html#markdown-headers) 설정과 [markdown.toc](https://v2.vuepress.vuejs.org/reference/config.html#markdown-toc) 설정에 영향을 받습니다.

두 설정의 기본값은 `[2, 3]`으로 이 때 `headerDepth`의 최대값은 `2`가 됩니다.
:::

## A .참조
vuepress-theme-hope, "Sidebar," *vuepress-theme-hope.github.io*, Aug. 28, 2022. [Online]. Available: [https://vuepress-theme-hope.github.io/v2/guide/layout/sidebar.html](https://vuepress-theme-hope.github.io/v2/guide/layout/sidebar.html) [Accessed Oct. 21, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
import UmlScript from "@UmlScript";
</script>

<DetailsOpen/>
<UmlScript/>
