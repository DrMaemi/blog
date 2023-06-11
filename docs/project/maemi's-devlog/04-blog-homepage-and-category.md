---
title: '블로그 홈페이지의 프로젝트, 카테고리 연동'
icon: article
category: Maemi's Devlog
date: 2022-10-23
order: 4
---

## 블로그 스타일 홈페이지 지원
[지난 포스트](02-create-vuepress-theme-hope-project.html)에서 vuepress theme hope 블로그 프로젝트를 생성했다면 테마에서 지원하는 블로그 스타일의 홈페이지를 사용할 수 있습니다.

`.vuepress` 폴더를 갖고 있는 VuePress 프로젝트 디렉토리에 `README.md` 파일을 만들고, Frontmatter에 `home: true`, `layout: Blog` 속성을 명시합니다.

::: details REAMDE.md
```md:no-line-numbers {2-3}
---
home: true
layout: Blog
icon: home
title: Maemi's Devlog
heroImage: /hero-image.png
bgImage: /assets/image/bg-image.png
heroText: Maemi's Devlog
tagline: 어려울수록 기본에 미쳐라
# heroFullScreen: true
projects:
...
---
...
```
:::

다른 속성에 대한 설명은 [vuepress theme hope - Blog homepage](https://vuepress-theme-hope.github.io/v2/guide/blog/home.html)에서 확인할 수 있습니다.

## Frontmatter - category
vuepress theme hope에서 지원하는 Frontmatter를 이용해 작성할 포스트의 카테고리를 지정할 수 있습니다.

::: details 예시
현재 게시글의 경우 마크다운으로 다음과 같이 작성 중입니다.

```md:no-line-numbers {4}
---
title: '04. 메인페이지 프로젝트, 사이드바, 카테고리 연동'
icon: article
category: Maemi's Devlog
date: 2022-10-23
order: 4
---

## 블로그 스타일 홈페이지 지원
[지난 포스트](02-create-vuepress-theme-hope-project.html)에서 vuepress theme hope 블로그 프로젝트를 생성했다면 테마에서 지원하는 블로그 스타일의 홈페이지를 사용할 수 있습니다.

`.vuepress` 폴더를 갖고 있는 VuePress 프로젝트 디렉토리에 `README.md` 파일을 만들고, Frontmatter에 `home: true`, `layout: Blog` 속성을 명시합니다.

...
```
:::

이렇게 Frontmatter를 통해 포스트의 카테고리나 태그를 명시했다면, [vuepress theme hope - View list](https://vuepress-theme-hope.github.io/v2/guide/blog/category-and-tags.html#view-list)를 통해 관련 포스트를 리스트 형태로 확인할 수 있습니다.

URL 형태는 `/category/<category-name>`과 같습니다. 카테고리 이름은 포스트에 작성한 카테고리 이름에서 영문 대문자는 소문자로, 공백은 `-`로 변환한 문자열입니다.

![](https://drive.google.com/uc?export=view&id=1Xy8SjrQCoXy9m-2N57ec7vQNdB8AoYmn)
&lt;화면 1. 카테고리별 링크&gt;
{ .align-center }

## 블로그 홈페이지 - projects
VuePress 테마 Hope로 블로그를 만들 때 가장 마음에 들었던 부분 중 하나로, 블로그 홈페이지의 `README.md` 파일 Frontmatter에 `projects` 속성을 작성하여 &lt;화면 2&gt;와 같이 멋진 UI를 사용할 수 있습니다.

![](https://drive.google.com/uc?export=view&id=1aEuNZHuM2l7hdeHbJCAFRssbIWtzIl22)
&lt;화면 2. 홈페이지 projects&gt;
{ .align-center }

작성 방법은 [vuepress theme hope - Blog homepage - Frontmatter Options - projects](https://vuepress-theme-hope.github.io/v2/guide/blog/home.html#projects)에서 확인할 수 있습니다.

::: details 예시 - README.md
본 블로그에서는 블로그 홈페이지 projects를 다음과 같이 작성하고 있습니다.

```md:no-line-numbers {4-30}
---
home: true
...
projects:
  - icon: /assets/icon/programmers.png
    name: Programmers
    desc: Algorithm
    link: category/programmers/

  - icon: /assets/icon/boj.png
    name: Baekjoon Online Judge
    desc: Algorithm
    link: category/baekjoon-online-judge/

  - icon: /assets/icon/springboot.png
    name: Spring Boot
    desc: Back-end
    link: category/spring-boot/

  - icon: /assets/icon/aws.png
    name: AWS
    desc: Cloud
    link: category/aws/

  - icon: /assets/icon/computer-network.png
    name: Computer Network
    desc: Computer Science
    link: category/computer-network/

    ...
---
```

`link`에 카테고리에 대한 상대 경로를 작성하면 블로그 홈페이지 프로젝트 UI를 클릭했을 때 해당 카테고리에 대한 View list를 볼 수 있습니다.
:::

## A. 참조
vuepress-theme-hope, "Blog homepage," *vuepress-theme-hope.github.io*, May 24, 2022. [Online]. Available: [https://vuepress-theme-hope.github.io/v2/guide/blog/home.html](https://vuepress-theme-hope.github.io/v2/guide/blog/home.html) [Accessed Oct. 23, 2022].

vuepress-theme-hope, "Category and tags," *vuepress-theme-hope.github.io*, May 25, 2022. [Online]. Available: [https://vuepress-theme-hope.github.io/v2/guide/blog/category-and-tags.html](https://vuepress-theme-hope.github.io/v2/guide/blog/category-and-tags.html) [Accessed Oct. 23, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
