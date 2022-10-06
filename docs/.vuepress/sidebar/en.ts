import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/programming-language/cpp/": [
    {
      icon: "note",
      text: "C++",
      link: "/programming-language/cpp/",
      children: "structure",
      activeMatch: "^/programming-language/cpp/$",
    },
  ],
  "/programming-language/java/": [
    {
      icon: "/assets/icon/java.png",
      text: "Java",
      link: "/programming-language/java/",
      children: "structure",
      activeMatch: "^/programming-language/java/$",
    },
  ],
});
