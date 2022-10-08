import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/algorithm/boj/": [
    {
      icon: "/assets/icon/boj.png",
      text: "Baekjoon Online Judge",
      link: "/category/baekjoon-online-judge/",
      children: [
        {
          text: "카테고리",
          prefix: "categorized/",
          collapsable: true,
          // activeMatch: "^/algorithm/boj/categorized/",
          children: [
            {
              text: "구현",
              prefix: "implementation/",
              collapsable: true,
              // activeMatch: "^/algorithm/boj/categorized/implementation/",
              children: "structure",
            },
          ],
        },
      ],
    },
  ],
  "/programming-language/cpp/": [
    {
      icon: "/assets/icon/cpp.png",
      text: "C++",
      link: "/category/cpp/",
      // activeMatch: "^/programming-language/cpp/",
      children: "structure",
    },
  ],
  "/programming-language/java/": [
    {
      icon: "/assets/icon/java.png",
      text: "Java",
      link: "/category/java/",
      // activeMatch: "^/programming-language/java/",
      children: "structure",
    },
  ],
});
