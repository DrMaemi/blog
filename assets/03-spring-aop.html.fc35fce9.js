const e=JSON.parse(`{"key":"v-b2864cc4","path":"/backend/spring-boot/03-spring-aop.html","title":"[Spring Boot] \uC2A4\uD504\uB9C1 AOP(Aspect Oriented Programming)","lang":"en-US","frontmatter":{"title":"[Spring Boot] \uC2A4\uD504\uB9C1 AOP(Aspect Oriented Programming)","icon":"article","category":["Spring Boot"],"date":"2022-08-14T00:00:00.000Z","order":3,"summary":"1. AOP\uB780? Aspect Oriented Programming\uC758 \uC57D\uC790, \uAD00\uC810 \uC9C0\uD5A5 \uD504\uB85C\uADF8\uB798\uBC0D\uC744 \uC758\uBBF8; \uAD00\uC810 \uC9C0\uD5A5\uC774\uB780 \uD504\uB85C\uADF8\uB7A8 \uB85C\uC9C1\uC744 \uD575\uC2EC \uAD00\uC810, \uBD80\uAC00\uC801 \uAD00\uC810\uC73C\uB85C \uB098\uB204\uACE0 \uAC01 \uAD00\uC810\uC744 \uAE30\uC900\uC73C\uB85C \uBAA8\uB4C8\uD654\uD55C\uB2E4\uB294 \uB73B; \uD575\uC2EC \uAD00\uC810; \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1; \uBD80\uAC00\uC801 \uAD00\uC810; \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC5D0 \uC911\uBCF5\uC801\uC73C\uB85C \uB098\uD0C0\uB098\uB294 \uC5B4\uB5A4 \uACFC\uC815; \uB85C\uAE45, \uC778\uC99D \uBC0F \uBCF4\uC548,","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/backend/spring-boot/03-spring-aop.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[Spring Boot] \uC2A4\uD504\uB9C1 AOP(Aspect Oriented Programming)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-18T09:21:38.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-08-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-18T09:21:38.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. AOP\uB780?","slug":"_1-aop\u1105\u1161\u11AB","link":"#_1-aop\u1105\u1161\u11AB","children":[{"level":3,"title":"1.1. OOP vs AOP","slug":"_1-1-oop-vs-aop","link":"#_1-1-oop-vs-aop","children":[]},{"level":3,"title":"1.2. AOP \uC7A5\uC810","slug":"_1-2-aop-\u110C\u1161\u11BC\u110C\u1165\u11B7","link":"#_1-2-aop-\u110C\u1161\u11BC\u110C\u1165\u11B7","children":[]},{"level":3,"title":"1.3. AOP \uAD6C\uD604\uCCB4","slug":"_1-3-aop-\u1100\u116E\u1112\u1167\u11AB\u110E\u1166","link":"#_1-3-aop-\u1100\u116E\u1112\u1167\u11AB\u110E\u1166","children":[]}]},{"level":2,"title":"2. AOP \uC801\uC6A9 \uBC29\uC2DD","slug":"_2-aop-\u110C\u1165\u11A8\u110B\u116D\u11BC-\u1107\u1161\u11BC\u1109\u1175\u11A8","link":"#_2-aop-\u110C\u1165\u11A8\u110B\u116D\u11BC-\u1107\u1161\u11BC\u1109\u1175\u11A8","children":[]},{"level":2,"title":"3. AOP \uAD6C\uD604 \uAC1C\uB150 \uBC0F \uC6A9\uC5B4","slug":"_3-aop-\u1100\u116E\u1112\u1167\u11AB-\u1100\u1162\u1102\u1167\u11B7-\u1106\u1175\u11BE-\u110B\u116D\u11BC\u110B\u1165","link":"#_3-aop-\u1100\u116E\u1112\u1167\u11AB-\u1100\u1162\u1102\u1167\u11B7-\u1106\u1175\u11BE-\u110B\u116D\u11BC\u110B\u1165","children":[]},{"level":2,"title":"4. \uC2A4\uD504\uB9C1 AOP","slug":"_4-\u1109\u1173\u1111\u1173\u1105\u1175\u11BC-aop","link":"#_4-\u1109\u1173\u1111\u1173\u1105\u1175\u11BC-aop","children":[{"level":3,"title":"4.1. \uD504\uB85D\uC2DC \uAC1D\uCCB4 \uC9C1\uC811 \uAD6C\uD604 AOP","slug":"_4-1-\u1111\u1173\u1105\u1169\u11A8\u1109\u1175-\u1100\u1162\u11A8\u110E\u1166-\u110C\u1175\u11A8\u110C\u1165\u11B8-\u1100\u116E\u1112\u1167\u11AB-aop","link":"#_4-1-\u1111\u1173\u1105\u1169\u11A8\u1109\u1175-\u1100\u1162\u11A8\u110E\u1166-\u110C\u1175\u11A8\u110C\u1165\u11B8-\u1100\u116E\u1112\u1167\u11AB-aop","children":[]},{"level":3,"title":"4.2. \uC2A4\uD504\uB9C1 AOP","slug":"_4-2-\u1109\u1173\u1111\u1173\u1105\u1175\u11BC-aop","link":"#_4-2-\u1109\u1173\u1111\u1173\u1105\u1175\u11BC-aop","children":[]}]},{"level":2,"title":"A. \uCC38\uC870","slug":"a-\u110E\u1161\u11B7\u110C\u1169","link":"#a-\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1666084898000,"updatedTime":1666084898000,"contributors":[{"name":"DrMaemi","email":"leesh1510@ajou.ac.kr","commits":1}]},"readingTime":{"minutes":2.43,"words":730},"filePathRelative":"backend/spring-boot/03-spring-aop.md","localizedDate":"August 14, 2022"}`);export{e as data};
