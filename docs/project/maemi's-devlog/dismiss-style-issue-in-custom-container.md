---
title: Custom container 내부 마지막 요소 스타일 무시 현상에 대한 고찰
icon: article
category: Maemi's Devlog
date: 2022-11-27
---

## 들어가며
본문에서 다루는 Vuepress 개발 환경은 다음과 같습니다.

```json:no-line-numbers
"devDependencies": {
  "@vuepress/client": "2.0.0-beta.51",
  "@vuepress/plugin-docsearch": "^2.0.0-beta.51",
  "vue": "^3.2.29",
  "vuepress": "2.0.0-beta.51",
  "vuepress-theme-hope": "2.0.0-beta.106"
}
```

저는 블로그 포스트를 작성할 때 Vuepress Theme Hope에서 제공하는 [Enhanced Markdown - Custom container](https://vuepress-theme-hope.github.io/v2/guide/markdown/container.html)를 애용하고 있습니다.

또한 Vuepress Theme Hope의 [Enhanced Markdown - Attrs support](https://vuepress-theme-hope.github.io/v2/guide/markdown/attrs.html)도 애용하고 있죠. 간단한 문법으로 자신이 만든 CSS를 마크다운 문서에 바로 적용할 수 있다는 점이 매우 간편했습니다.

## 문제 상황
문제는 위 두 문법을 혼용해서 사용할 때 발생했습니다. Details와 같은 컨테이너 내부에 있는 마지막 요소에 스타일을 적용하면 이를 무시하고 렌더링됐습니다.

:::: details 본 블로그의 어떤 포스트에 작성한, Custom container와 Attr support 문법으로 작성한 내용
```md:no-line-numbers {3,6}
...

::: details
![](https://drive.google.com/uc?export=view&id=1H_1e5DeHUk_1LRnqs2-yMs7K_6glyXC6)
&lt;화면 1. React Live Preview - Hello World&gt;
{ .align-center }
:::

...
```

렌더링 결과

![](https://drive.google.com/uc?export=view&id=1gkZQaNeOSF6YJ_aFC6Nl9gFTQtkyuAA7)
&lt;화면 1. .align-center 클래스가 적용되지 않음&gt;
{ .align-center }

반대로, 마지막이 아닌 요소들에 대해서는 스타일이 제대로 적용됨을 확인했습니다.
::::

## 해결 방법?
vuepress-theme-hope가 사용하는 마크다운 렌더링 엔진을 직접 수정하는 방법이 가장 최선이겠으나 저는 그럴 만한 역량도 없고 시간도 없습니다.

저는 임시 방편으로 컨테이너 내부에 `<!---->` 주석을 추가함으로써 해결했습니다.

```md:no-line-numbers {5}
::: details
![](https://drive.google.com/uc?export=view&id=1H_1e5DeHUk_1LRnqs2-yMs7K_6glyXC6)
&lt;화면 1. React Live Preview - Hello World&gt;
{ .align-center }
<!---->
:::
```

렌더링 결과

![](https://drive.google.com/uc?export=view&id=1GFSnxazSSWMFoZO1EMrWLfCE_mTs7Vfj)
&lt;화면 2. 마지막 요소로 주석을 사용하면 .align-center 클래스가 정상적으로 적용됨&gt;
{ .align-center }

## 향후 계획
제가 해결한 방법은 production 코드 가독성을 해치는 단점이 있으므로 향후에 다음과 같은 과정을 통해 근본적으로 문제를 해결할 수 있다면 좋겠습니다.

1. [Ensure using latest version](https://vuepress-theme-hope.github.io/v2/faq/troubleshooting.html#ensure-using-latest-version) - 현재 vuepress theme hope의 버전(2.0.0-beta.106)은 latest 버전(2.0.0-beta.130)에 비해 낮습니다. 버전을 최신화하면 문제가 해결될 가능성이 있습니다.

    → 만약 최신 버전에서도 이 문제가 지속된다면 공식 저장소에 관련 issue를 남기는 것이 좋아보입니다.

2. [Vuepress - Ejecting](https://vuepress.vuejs.org/theme/default-theme-config.html#ejecting)으로 Theme 템플릿을 eject하여 커스터마이징 하기

    → Vuepress에서 지원하는 기능이지만 vuepress-theme-hope에서는 아직 구현되지 않았습니다. Hope가 베타 버전을 넘어 공식 배포된 후 Eject 기능을 제공하면 이를 커스터마이징하여 본문의 문제를 비롯한 다양한 문제를 해결하기 위해 시도를 할 수 있을 것으로 생각됩니다.

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
