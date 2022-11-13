import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/algorithm/boj/": [
    {
      icon: "/assets/icon/boj.png",
      text: "Baekjoon Online Judge",
      link: "/category/baekjoon-online-judge/",
      children: [
        {
          text: "알고리즘 분류",
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
            {
              text: "스택",
              prefix: "stack/",
              collapsable: true,
              children: "structure",
            },
          ],
        },
        {
          text: "단계별로 풀어보기",
          prefix: "step-by-step/",
          collapsable: true,
          children: [
            {
              text: "문자열",
              prefix: "6-string/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "재귀",
              prefix: "9-recursive/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "정렬",
              prefix: "11-sort/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "집합과 맵",
              prefix: "12-set-map/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "정수론 및 조합론",
              prefix: "14-number-combinatorics/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "백트래킹",
              prefix: "15-back-tracking/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "동적 계획법 1",
              prefix: "16-dynamic-programming-1/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "누적합",
              prefix: "17-cumulative-sum/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "큐, 덱",
              prefix: "20-queue-deque/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "분할 정복",
              prefix: "21-divide-conquer/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "이분 탐색",
              prefix: "22-binary-search/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "우선순위 큐",
              prefix: "23-priority-queue/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "동적 계획법 2",
              prefix: "24-dynamic-programming-2/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "그래프와 순회",
              prefix: "25-graph-traversal/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "최단 경로",
              prefix: "26-shortest-path/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "트리",
              prefix: "29-tree/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "유니온 파인드",
              prefix: "30-union-find/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "최소 신장 트리",
              prefix: "31-minimum-spanning-tree/",
              collapsable: true,
              children: "structure",
            },
            {
              text: "문자열 알고리즘 1",
              prefix: "35-string-algorithm-1/",
              collapsable: true,
              children: "structure",
            },
          ],
        },
      ],
    },
  ],
  "/algorithm/programmers/": [
    {
      icon: "/assets/icon/programmers.png",
      text: "Programmers",
      link: "/category/programmers/",
      children: [
        {
          text: "2017 카카오 코드 본선",
          prefix: "2017-kakao-code-final/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "2018 카카오 블라인드 채용",
          prefix: "2018-kakao-blind-recruitment/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "2019 카카오 블라인드 채용",
          prefix: "2019-kakao-blind-recruitment/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "2020 카카오 블라인드 채용",
          prefix: "2020-kakao-blind-recruitment/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "2021 카카오 블라인드 채용",
          prefix: "2021-kakao-blind-recruitment/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "2022 카카오 블라인드 채용",
          prefix: "2022-kakao-blind-recruitment/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "레벨 2",
          prefix: "level-2/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "레벨 3",
          prefix: "level-3/",
          collapsable: true,
          children: "structure",
        },
      ],
    },
  ],
  "/backend/spring-boot/": [
    {
      icon: "/assets/icon/springboot.png",
      text: "Spring Boot",
      link: "/category/spring-boot/",
      // activeMatch: "^/programming-language/cpp/",
      children: "structure",
    },
  ],
  "/cloud/aws/": [
    {
      icon: "/assets/icon/aws.png",
      text: "AWS",
      link: "/category/aws/",
      children: "structure",
    },
  ],
  "/computer-science/computer-network/": [
    {
      icon: "/assets/icon/computer-network.png",
      text: "Computer Network",
      link: "/category/computer-network/",
      children: "structure",
    },
  ],
  "/computer-science/data-structure/": [
    {
      icon: "/assets/icon/data-structure.png",
      text: "Data Structure",
      link: "/category/data-structure/",
      children: "structure",
    },
  ],
  "/computer-science/design-pattern/": [
    {
      icon: "/assets/icon/data-structure.png",
      text: "Design Pattern",
      link: "/category/design-pattern/",
      children: "structure",
    },
  ],
  "/computer-science/operating-system/": [
    {
      icon: "/assets/icon/operating-system.png",
      text: "Operating System",
      link: "/category/operating-system/",
      children: "structure",
    },
  ],
  "/dev-ops/git/": [
    {
      icon: "/assets/icon/git.png",
      text: "Git",
      link: "/category/git/",
      children: "structure",
    },
  ],
  "/programming-language/c++/": [
    {
      icon: "/assets/icon/c++.png",
      text: "C++",
      link: "/category/c++/",
      // activeMatch: "^/programming-language/cpp/",
      children: "structure",
    },
  ],
  "/programming-language/effective-java/": [
    {
      icon: "/assets/icon/effective-java.png",
      text: "Effective Java",
      link: "/category/effective-java/",
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
  "/project/maemi's-devlog/": [
    {
      icon: "/assets/icon/devlog-icon.png",
      text: "Maemi's DevLog",
      link: "/category/maemi's-devlog/",
      children: "structure",
    },
  ],
  "/project/bulletin-board-jsp/": [
    {
      icon: "/assets/icon/jsp.png",
      text: "게시판 만들기 - JSP",
      link: "/category/게시판-만들기---JSP/",
      children: "structure",
    },
  ],
  "/project/bulletin-board-springboot/": [
    {
      icon: "/assets/icon/springboot-project.png",
      text: "게시판 만들기 - Spring Boot",
      link: "/category/게시판-만들기---spring-boot/",
      children: "structure",
    },
  ],
  "/others/": [
    {
      icon: "/assets/icon/rocket-launch.png",
      text: "Others",
      link: "/category/others/",
      children: [
        {
          icon: "/assets/icon/macos.png",
          text: "macOS",
          prefix: "macos/",
          collapsable: true,
          children: "structure",
        },
        "eclipse-shortcut",
        "install-mingw",
      ],
    },
  ],
});
