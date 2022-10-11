import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";
import { path } from "@vuepress/utils";

export default defineUserConfig({
  base: "/blog/",
  dest: "./dist",
  alias: {
    "@DetailsOpen": path.resolve(__dirname, "components/DetailsOpen.vue"),
  },

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

  // <script type="text/javascript" src="/assets/js/viewer.min.js"></script>
  // <script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>
  head: [
    ["script", {type: "text/javascript", src: "https://viewer.diagrams.net/js/viewer-static.min.js"}]
  ],

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
