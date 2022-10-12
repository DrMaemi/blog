const e=JSON.parse(`{"key":"v-0ff48458","path":"/backend/spring-boot/3-spring-jpa-intro.html","title":"[Spring Boot] \uC2A4\uD504\uB9C1 JPA(Java Persistence API) \uAC1C\uC694","lang":"en-US","frontmatter":{"title":"[Spring Boot] \uC2A4\uD504\uB9C1 JPA(Java Persistence API) \uAC1C\uC694","icon":"article","category":["Spring Boot"],"date":"2022-08-16T00:00:00.000Z","order":3,"summary":"0. \uB4E4\uC5B4\uAC00\uBA70, \uAD00\uACC4\uD615 DB\uC640 ORM DBMS\uAC00 \uBC1C\uC804\uD574\uC628 \uACFC\uC815\uC744 \uC0B4\uD3B4\uBCF4\uBA74 \uAD00\uACC4\uD615 DB\uAC00 \uAC00\uC7A5 \uC624\uB798 \uC0AC\uC6A9\uB418\uC5C8\uACE0 \uADF8\uB9CC\uD07C \uB9CE\uC740 \uC7A5\uC810\uC744 \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0 \uAC1D\uCCB4\uC9C0\uD5A5 \uD504\uB85C\uADF8\uB798\uBC0D\uC5D0\uC11C \uB3C4\uC785\uD55C \uAC1D\uCCB4\uB77C\uB294 \uAC1C\uB150\uC744 \uC774\uC6A9\uD574 DB\uB97C \uAD00\uB9AC\uD558\uB294 \uAC83\uC73C\uB85C \uAC1D\uCCB4\uC9C0\uD5A5 DBMS, \uAC1D\uCCB4\uAD00\uACC4 DBMS\uAC00 \uC0DD\uACA8\uB0AC\uC2B5\uB2C8\uB2E4. JPA\uB294 ORM \uD504\uB808\uC784\uC6CC\uD06C\uB77C\uB294 \uD45C\uD604\uC744 ","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/backend/spring-boot/3-spring-jpa-intro.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[Spring Boot] \uC2A4\uD504\uB9C1 JPA(Java Persistence API) \uAC1C\uC694"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-12T02:57:24.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-08-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-12T02:57:24.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"0. \uB4E4\uC5B4\uAC00\uBA70, \uAD00\uACC4\uD615 DB\uC640 ORM","slug":"_0-\u1103\u1173\u11AF\u110B\u1165\u1100\u1161\u1106\u1167-\u1100\u116A\u11AB\u1100\u1168\u1112\u1167\u11BC-db\u110B\u116A-orm","link":"#_0-\u1103\u1173\u11AF\u110B\u1165\u1100\u1161\u1106\u1167-\u1100\u116A\u11AB\u1100\u1168\u1112\u1167\u11BC-db\u110B\u116A-orm","children":[]},{"level":2,"title":"1. JPA\uB780?","slug":"_1-jpa\u1105\u1161\u11AB","link":"#_1-jpa\u1105\u1161\u11AB","children":[]},{"level":2,"title":"2. ORM\uC774\uB780?","slug":"_2-orm\u110B\u1175\u1105\u1161\u11AB","link":"#_2-orm\u110B\u1175\u1105\u1161\u11AB","children":[{"level":3,"title":"2.1. \uC7A5\uC810","slug":"_2-1-\u110C\u1161\u11BC\u110C\u1165\u11B7","link":"#_2-1-\u110C\u1161\u11BC\u110C\u1165\u11B7","children":[]},{"level":3,"title":"2.2. \uB2E8\uC810","slug":"_2-2-\u1103\u1161\u11AB\u110C\u1165\u11B7","link":"#_2-2-\u1103\u1161\u11AB\u110C\u1165\u11B7","children":[]}]},{"level":2,"title":"3. DB \uC811\uADFC \uAE30\uC220 \uBCC0\uCC9C\uC0AC, SQL Mapper vs JPA","slug":"_3-db-\u110C\u1165\u11B8\u1100\u1173\u11AB-\u1100\u1175\u1109\u116E\u11AF-\u1107\u1167\u11AB\u110E\u1165\u11AB\u1109\u1161-sql-mapper-vs-jpa","link":"#_3-db-\u110C\u1165\u11B8\u1100\u1173\u11AB-\u1100\u1175\u1109\u116E\u11AF-\u1107\u1167\u11AB\u110E\u1165\u11AB\u1109\u1161-sql-mapper-vs-jpa","children":[{"level":3,"title":"3.1. \uC804\uD1B5\uC801 \uC5F0\uB3D9 \uBC29\uBC95","slug":"_3-1-\u110C\u1165\u11AB\u1110\u1169\u11BC\u110C\u1165\u11A8-\u110B\u1167\u11AB\u1103\u1169\u11BC-\u1107\u1161\u11BC\u1107\u1165\u11B8","link":"#_3-1-\u110C\u1165\u11AB\u1110\u1169\u11BC\u110C\u1165\u11A8-\u110B\u1167\u11AB\u1103\u1169\u11BC-\u1107\u1161\u11BC\u1107\u1165\u11B8","children":[]},{"level":3,"title":"3.2. JDBC","slug":"_3-2-jdbc","link":"#_3-2-jdbc","children":[]},{"level":3,"title":"3.3. SQL Mapper","slug":"_3-3-sql-mapper","link":"#_3-3-sql-mapper","children":[]},{"level":3,"title":"3.4. ORM","slug":"_3-4-orm","link":"#_3-4-orm","children":[]}]},{"level":2,"title":"A. \uCC38\uC870","slug":"a-\u110E\u1161\u11B7\u110C\u1169","link":"#a-\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1665543444000,"updatedTime":1665543444000,"contributors":[{"name":"DrMaemi","email":"leesh1510@ajou.ac.kr","commits":1}]},"readingTime":{"minutes":4.03,"words":1209},"filePathRelative":"backend/spring-boot/3-spring-jpa-intro.md","localizedDate":"August 16, 2022"}`);export{e as data};
