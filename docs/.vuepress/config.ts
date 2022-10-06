import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",
  dest: "./dist",

  locales: {
    "/": {
      lang: "en-US",
      title: "Maemi's Devlog",
      description: "어려울수록 기본에 미쳐라",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "博客演示",
    //   description: "vuepress-theme-hope 的博客演示",
    // },
  },

  theme,

  shouldPrefetch: false,

  plugins: [
    docsearchPlugin({
      locales: {
        "/": {
          placeholder: "Search"
        },
      },
    }),
  ],
});
