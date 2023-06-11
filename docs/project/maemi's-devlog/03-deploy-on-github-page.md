---
title: 'Github Page에 배포하기'
icon: article
category: Maemi's Devlog
date: 2022-10-23
order: 3
---

## deploy-docs.yml
[지난 포스트](02-create-vuepress-theme-hope-project.html)에서 vuepress theme hope의 블로그 프로젝트를 생성해봤습니다. 그렇다면 프로젝트 루트 디렉토리 하위에 .github/workflows/deploy-docs.yml 파일이 있을 것입니다.

::: details .github/workflows/deploy-docs.yml
```yml:no-line-numbers
name: Deploy Docs

on:
  push:
    branches:
      # make sure this is the branch you are using
      - main

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # if your docs needs submodules, uncomment the following line
          # submodules: true

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: npm

      - name: Install Deps
        run: npm install

      - name: Build Docs
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          npm run docs:build
          > docs/src/.vuepress/dist/.nojekyll

      - name: Deploy Docs
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # This is the branch where the docs are deployed to
          branch: gh-pages
          folder: docs/src/.vuepress/dist
```
:::

위 파일은 프로젝트를 Github Page에 배포할 때 동작하는 Github Action의 단계를 정의하고 단계별 동작 스크립트를 작성한 것으로 이해하면 됩니다.

동작 로직을 간단히 설명하면 다음과 같습니다.
1. `on.push.branches` - 명시된 브랜치에 push함을 감지하여 하위 `jobs`가 동작함
2. `jobs.deploy-gh-pages.runs-on` - `jobs`들이 동작할 환경은 `ubuntu-latest`임
3. `steps.name: Setup Node.js` - Node.js 개발 환경 세팅
4. `steps.name: Build Docs` - `docs/src/.vuepress/dist/.nojekyll` 파일에 `npm run docs:build` 명령어 실행 결과 리다이렉션
5. `steps.name: Deploy Docs` - `docs/src/.vuepress/dist` 폴더 하위 프로젝트 빌드 결과 파일들을 Git 원격 저장소의 gh-pages 브랜치에 push하는 일련의 절차 `JamesIves/github-pages-deploy-action@v4` 실행

## config.ts
### 프로젝트 빌드 경로 지정
그런데 프로젝트 빌드 결과가 출력되는 경로는 어떻게 알 수 있을까요? 직접 프로젝트 빌드를 실행해보거나, 임의로 지정해줄 수 있습니다.

임의로 지정하기 위해서는 `.vuepress` 폴더 하위에 있는 `config.ts` 파일에 `dest` 속성을 작성해줘야 합니다. 관련 내용은 [VuePress 공식 문서 - Config #dest](https://vuepress.vuejs.org/config/#dest)에서 확인할 수 있습니다.

::: details .../.vuepress/config.ts
```ts:no-line-numbers
...
export default hopeTheme({
  ...
  dest: "./dist", // 임의로 작성한 경로
  ...
})
```
:::

`config.ts`에 작성한 `dest` 속성의 값을 `deploy-docs.yml` 파일의 `steps.name: Deploy Docs`에 있는 `folder` 속성의 값으로 일치시켜주어야 정상적으로 배포 가능합니다.

### 프로젝트 base URL 지정
도메인 하위 경로에 배포할 계획이 있다면 [Vuepress Basic Config - base](https://vuepress.vuejs.org/config/#basic-config)를 설정해주어야 합니다.

예를 들어 `https://foo.github.io/bar/`에 배포할 계획이라면 `.vuepress` 폴더 하위에 있는 `config.ts` 파일에 `base` 속성의 값을 `/bar/`로 작성해줘야 합니다.

저는 제 깃허브 저장소 `blog`에 배포할 계획이며, 그 결과 `https://drmaemi.github.io/blog/`에 배포될 것입니다.

::: details .../.vuepress/config.ts
```ts:no-line-numbers
...
export default defineUserConfig({
  base: "/blog/",
  ...
}
```
:::

## theme.ts
### hostname 설정
배포 과정에 직접적으로 영향을 미치는 요소인지는 모르겠으나, Vuepress Theme Hope의 공식 문서를 살펴보던 중 호스트 네임을 설정하는 속성이 있음을 알게됐습니다.

`.vuepress` 폴더 하위에 있는 `theme.ts` 파일의 `hostname` 속성으로 자신이 배포할 도메인을 작성해줍니다. 

::: details .../.vuepress/theme.ts
```ts:no-line-numbers
...
export default hopeTheme({
  hostname: "https://drmaemi.github.io/blog",
  ...
}
```
:::

## Github Page 세팅
위 과정을 통해 프로젝트 배포 관련 구성 설정을 모두 마쳤다면, 이제 깃허브 원격 저장소에 프로젝트를 푸시하여 Github Action이 동작함에 따라 배포가 완료되도록 설정해야 합니다.

이 과정에서 다음 세팅이 필요합니다.

1. `package.json`, `package-lock.json` 파일 위치를 루트 디렉토리 하위에 위치시키기
   - Github Action 동작 시 npm 명령어 수행을 위함
2. Github Page 세팅

![](https://drive.google.com/uc?export=view&id=1G7iiLkUqYl0bcYYoPkGmm8zaI5FfURrn)
&lt;화면 1. Github Page 세팅&gt;
{ .align-center }

## A. 참조
VuePress, "Config Reference," *vuepress.vuejs.org*, Jul. 4, 2022. [Online]. Available: [https://vuepress.vuejs.org/config/#config-reference](https://vuepress.vuejs.org/config/#config-reference) [Accessed Oct. 21, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
