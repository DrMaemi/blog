---
title: 'vuepress-theme-hope 프로젝트 시작하기'
icon: article
category: Maemi's Devlog
date: 2022-10-19
order: 2
---

## 개발 환경 구성
우선 Node.js를 다운받아야 합니다. Node.js는 크롬의 V8 자바스크립트 엔진에서 빌드된 자바스크립트 런타임입니다.

[Node.js LTS 공식 다운로드 링크](https://nodejs.org/en/)

이후 IDE인 Editor를 설치해주어야 하는데, 저는 VS Code를 이용했습니다.

[VS Code 공식 다운로드 링크](https://code.visualstudio.com/)

### yarn 설치
yarn을 설치하지 않아도 되는데, 설치를 원한다면 Node를 설치한 뒤 npm으로 yarn을 설치해줍니다.

```:no-line-numbers
sudo npm install -g yarn
```

sudo 명령어 없이 `npm install -g yarn`을 실행하면 `npm ERR! Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/yarn'` 에러가 발생했었는데 유의바랍니다.

## 프로젝트 생성
임의의 이름의 디렉토리를 생성한 뒤 해당 디렉토리에서 `npm create vuepress-theme-hope@next docs` 명령어를 실행합니다.

::: tip 위치 인자
명령어 중 `docs`에 해당하는 인자는 VuePress 프로젝트 파일들을 위치시킬 폴더 이름을 의미하며, 임의로 변경이 가능합니다. `docs`를 입력하면 현재 프로젝트 루트 디렉토리 하위에 `docs` 폴더를 생성하고 해당 폴더 하위에 VuePress 관련 파일들이 생성됩니다.

만약 루트 디렉토리 하위에 바로 VuePress 프로젝트 파일들을 생성시키고 싶다면 `.`을 입력하면 되지만, 가급적이면 `docs` 폴더 이름을 사용하도록 VuePress 공식 홈페이지에서 안내하고 있습니다.
:::

::: details 명령어 실행 과정
```sh:no-line-numbers
$ npm create vuepress-theme-hope@next docs
Need to install the following packages:
  create-vuepress-theme-hope@2.0.0-beta.110
Ok to proceed? (y)
? Select a language to display / 选择显示语言 english (US)
? Choose package manager npm
Generating package.json...
? Your project name blog-project-test
? Your project version 2.0.0
? Your project description A project of vuepress-theme-hope
? Your project license MIT
? Do you need a GitHub workflow to deploy docs on GitHub pages? Yes
? What type of project do you want to create? blog
Generating Template...
Installing Deps...
This may take a few minutes, please be patient.
We can not correctly output progress bar from child process, so the process may look stuck.

added 636 packages, and audited 637 packages in 52s

104 packages are looking for funding
  run `npm fund` for details

12 high severity vulnerabilities

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
Successful Generated!
? Would you like to preview template now? No
Hint: You should execute "npm run docs:dev" to start dev server.
npm notice
npm notice New minor version of npm available! 8.18.0 -> 8.19.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.19.2
npm notice Run npm install -g npm@8.19.2 to update!
npm notice
```

결과
```:no-line-numbers
$ tree -L 2 -a
.
|-- .github
|   `-- workflows
`-- docs
    |-- node_modules
    |-- package-lock.json
    |-- package.json
    `-- src
```
:::

::: warning
중간에 보면 설치 과정에서 `?`로 시작하는, 사용자가 선택 혹은 입력해야 하는 옵션들이 주어집니다.

마지막 옵션으로 `blog` 타입 또는 `docs` 타입 중 어떤 타입으로 프로젝트를 생성할지 물어보는데, `blog`를 선택해야 합니다.
:::

## 실행
이후에 `docs`로 디렉토리를 이동한 뒤 `npm run docs:dev` 또는 `yarn docs:dev` 명령어를 실행하면 생성한 블로그 프로젝트를 구동한 화면을 볼 수 있습니다.

```:no-line-numbers
$ cd docs
$ yarn docs:dev
yarn run v1.22.19
$ vuepress dev src
✔ Initializing and preparing data - done in 397ms

  vite v3.0.9 dev server running at:

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://192.168.35.59:8080/
```

<br>

![](https://drive.google.com/uc?export=view&id=1uy8Ss0ot6WBT97s2q99Os2vy1gAx2W5C)
&lt;화면 1. 프로젝트 구동 화면&gt;
{ .align-center }

### VuePress 명령어와 폴더 이름 변경
`docs` 폴더 하위 `src` 폴더에는 다음과 같은 파일들이 있습니다.

```:no-line-numbers
$ tree -L 1 -a
.
|-- .vuepress
|-- README.md
|-- demo
|-- intro.md
|-- posts
|-- slides.md
`-- zh
```

여기서 `.vuepress`폴더가 바로 VuePress 프로젝트임을 명시하는 폴더이며 해당 폴더에는 전역 설정, 컴포넌트, 정적 자원 등이 저장되어 있습니다.

한 편 `docs` 폴더 하위의 `package.json` 파일을 살펴보면 vuepress 실행 명령어와 관련된 스크립트를 살펴볼 수 있습니다.

::: details docs/package.json
```json:no-line-numbers
{
  ...
  "scripts": {
    "docs:build": "vuepress build src",
    "docs:clean-dev": "vuepress dev src --clean-cache",
    "docs:dev": "vuepress dev src"
  },
  ...
}
```
:::

위와 같은 사실들로 미루어보아 `.vuepress`가 위치한 폴더의 위치를 vuepress 명령어에 전달하여 구동/빌드하는 것 같습니다. 따라서 `.vuepress`가 위치한 폴더 `src`의 이름을 임의로 변경이 가능하며, 그에 따라 scripts의 명령어 인자도 변경된 폴더 이름으로 수정해주는 방식으로 프로젝트 구조를 변경할 수 있습니다.

저 같은 경우 본 블로그 Maemi's Devlog 프로젝트 구조를 다음과 같이 사용하고 있습니다.

:::: details Maemi's Devlog 프로젝트 구조
```:no-line-numbers
$ tree -L 2 -I "node_modules|.git*" -a
.
|-- README.md
|-- docs
|   |-- .vuepress
|   |-- README.md
|   |-- algorithm
|   |-- backend
|   |-- cloud
|   |-- computer-science
|   |-- demo
|   |-- dev-ops
|   |-- frontend
|   |-- other
|   |-- programming-language
|   `-- project
|-- package-lock.json
`-- package.json
```

::: details package.json
```json:no-line-numbers
{
  ...
    "scripts": {
    "docs:build": "vuepress build docs",
    "docs:clean-dev": "vuepress dev docs --clean-cache",
    "docs:dev": "vuepress dev docs"
  },
  ...
}
```
:::
::::

## A. 참조
vuepress-theme-hope, "Setting Environment," *vuepress-theme-hope.github.io*, Sep. 8, 2022. [Online]. Available: [https://vuepress-theme-hope.github.io/v2/cookbook/tutorial/env.html](https://vuepress-theme-hope.github.io/v2/cookbook/tutorial/env.html) [Accessed Oct. 19, 2022].

<script setup lang="ts">
import DetailsOpen from "@DetailsOpen";
</script>

<DetailsOpen/>
