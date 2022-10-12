const e=JSON.parse(`{"key":"v-1b79bcf5","path":"/backend/spring-boot/6-jpa-associate.html","title":"[Spring Boot] JPA \uC5F0\uAD00 \uAD00\uACC4 \uCF54\uB529","lang":"en-US","frontmatter":{"title":"[Spring Boot] JPA \uC5F0\uAD00 \uAD00\uACC4 \uCF54\uB529","icon":"article","category":["Spring Boot"],"date":"2022-06-17T00:00:00.000Z","order":6,"summary":"\uB2E8\uBC29\uD5A5 \uC5F0\uAD00 \uAD00\uACC4 \uC77C\uB300\uB2E4 \uC5F0\uAD00 \uAD00\uACC4 @OneToMany \uD559\uACFC(DEPARTMENT)\uC640 \uD559\uC0DD(STUDENT)\uC5D0 \uB300\uD55C \uAD00\uACC4 \uB370\uC774\uD130 \uBAA8\uB378\uC744 \uC0DD\uAC01\uD574\uBCF4\uC790. \uC774 \uB54C \uB2E8\uBC29\uD5A5 \uC77C\uB300\uB2E4 \uC5F0\uAD00 \uAD00\uACC4\uB97C \uC9C0\uB2C8\uB3C4\uB85D \uAC1D\uCCB4 \uAD00\uACC4\uB97C \uC124\uACC4\uD558\uACE0 ERD\uB97C \uADF8\uB9B0\uB2E4\uBA74 &lt;\uADF8\uB9BC 3&gt;\uACFC \uAC19\uC774 \uD45C\uD604\uD560 \uC218 \uC788\uB2E4. \uAD00\uACC4\uD615 \uD14C\uC774\uBE14\uACFC JPA \uC5B4\uB178\uD14C\uC774\uC158\uC758 \uB3D9\uC791\uC744 \uC0B4\uD3B4","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/backend/spring-boot/6-jpa-associate.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[Spring Boot] JPA \uC5F0\uAD00 \uAD00\uACC4 \uCF54\uB529"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-12T02:57:24.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-06-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-12T02:57:24.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\uB2E8\uBC29\uD5A5 \uC5F0\uAD00 \uAD00\uACC4","slug":"\u1103\u1161\u11AB\u1107\u1161\u11BC\u1112\u1163\u11BC-\u110B\u1167\u11AB\u1100\u116A\u11AB-\u1100\u116A\u11AB\u1100\u1168","link":"#\u1103\u1161\u11AB\u1107\u1161\u11BC\u1112\u1163\u11BC-\u110B\u1167\u11AB\u1100\u116A\u11AB-\u1100\u116A\u11AB\u1100\u1168","children":[{"level":3,"title":"\uC77C\uB300\uB2E4 \uC5F0\uAD00 \uAD00\uACC4 @OneToMany","slug":"\u110B\u1175\u11AF\u1103\u1162\u1103\u1161-\u110B\u1167\u11AB\u1100\u116A\u11AB-\u1100\u116A\u11AB\u1100\u1168-onetomany","link":"#\u110B\u1175\u11AF\u1103\u1162\u1103\u1161-\u110B\u1167\u11AB\u1100\u116A\u11AB-\u1100\u116A\u11AB\u1100\u1168-onetomany","children":[]},{"level":3,"title":"\uB2E4\uB300\uC77C \uC5F0\uAD00 \uAD00\uACC4 @ManyToOne","slug":"\u1103\u1161\u1103\u1162\u110B\u1175\u11AF-\u110B\u1167\u11AB\u1100\u116A\u11AB-\u1100\u116A\u11AB\u1100\u1168-manytoone","link":"#\u1103\u1161\u1103\u1162\u110B\u1175\u11AF-\u110B\u1167\u11AB\u1100\u116A\u11AB-\u1100\u116A\u11AB\u1100\u1168-manytoone","children":[]}]},{"level":2,"title":"\uC591\uBC29\uD5A5 \uC5F0\uAD00 \uAD00\uACC4","slug":"\u110B\u1163\u11BC\u1107\u1161\u11BC\u1112\u1163\u11BC-\u110B\u1167\u11AB\u1100\u116A\u11AB-\u1100\u116A\u11AB\u1100\u1168","link":"#\u110B\u1163\u11BC\u1107\u1161\u11BC\u1112\u1163\u11BC-\u110B\u1167\u11AB\u1100\u116A\u11AB-\u1100\u116A\u11AB\u1100\u1168","children":[{"level":3,"title":"\uC77C\uB300\uB2E4 - \uB2E4\uB300\uC77C \uC5F0\uAD00 \uAD00\uACC4 @OneToMany, mappedBy, @ManyToOne","slug":"\u110B\u1175\u11AF\u1103\u1162\u1103\u1161-\u1103\u1161\u1103\u1162\u110B\u1175\u11AF-\u110B\u1167\u11AB\u1100\u116A\u11AB-\u1100\u116A\u11AB\u1100\u1168-onetomany-mappedby-manytoone","link":"#\u110B\u1175\u11AF\u1103\u1162\u1103\u1161-\u1103\u1161\u1103\u1162\u110B\u1175\u11AF-\u110B\u1167\u11AB\u1100\u116A\u11AB-\u1100\u116A\u11AB\u1100\u1168-onetomany-mappedby-manytoone","children":[]}]},{"level":2,"title":"A. \uCC38\uC870","slug":"a-\u110E\u1161\u11B7\u110C\u1169","link":"#a-\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1665543444000,"updatedTime":1665543444000,"contributors":[{"name":"DrMaemi","email":"leesh1510@ajou.ac.kr","commits":1}]},"readingTime":{"minutes":2.95,"words":884},"filePathRelative":"backend/spring-boot/6-jpa-associate.md","localizedDate":"June 17, 2022"}`);export{e as data};
