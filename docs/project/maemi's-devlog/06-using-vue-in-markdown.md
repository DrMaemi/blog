---
title: 'Vuepress에서 마크다운 파일에 Vue 사용하기'
icon: article
category: Maemi's Devlog
date: 2022-11-20
order: 6
---

::: details docs/.vuepress/components/DetailsOpen.vue
```vue
<template></template>

<script>
export default {
	mounted() {
		var detailsCollection = document.getElementsByTagName("details")
		var detailsArray = Array.from(detailsCollection)
		detailsArray.forEach(detail => detail.open = true)
	}
}
</script>
```
:::

::: details docs/.vuepress/components/UmlScript.vue
```vue
<template></template>

<script>
export default {
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "https://viewer.diagrams.net/js/viewer-static.min.js"
    );
    plugin.async = true;
    document.body.appendChild(plugin);
  }
}
</script>
```
:::

::: details docs/.vuepress/config.ts
```ts:no-line-numbers
import { defineUserConfig } from "vuepress";
import { path } from "@vuepress/utils";
...

export default defineUserConfig({
  ...
  alias: {
    "@DetailsOpen": path.resolve(__dirname, "components/DetailsOpen.vue"),
    "@UmlScript": path.resolve(__dirname, "components/UmlScript.vue"),
  },
  ...
});
```
:::

마크다운으로 작성한 포스트 내용 마지막에 다음 스크립트를 추가해줍니다.

```html:no-line-numbers
<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
import UmlScript from "@UmlScript";
</script>

<DetailsOpen/>
<UmlScript/>
```

## A. 참조
Evan You, "Using Vue in Markdown," *vuepress.vuejs.org*, Nov. 10, 2020. [Online]. Available: [https://vuepress.vuejs.org/guide/using-vue.html#built-in-components](https://vuepress.vuejs.org/guide/using-vue.html#built-in-components) [Accessed Nov. 20, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
