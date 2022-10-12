const t=JSON.parse(`{"key":"v-04434592","path":"/backend/spring-boot/1-spring-annotation.html","title":"[Spring Boot] Annotation \uB3D9\uC791 \uC6D0\uB9AC\uC640 \uC0AC\uC6A9\uBC95","lang":"en-US","frontmatter":{"title":"[Spring Boot] Annotation \uB3D9\uC791 \uC6D0\uB9AC\uC640 \uC0AC\uC6A9\uBC95","icon":"article","category":["Spring Boot"],"date":"2022-08-21T00:00:00.000Z","order":1,"summary":"1. \uC5B4\uB178\uD14C\uC774\uC158(Annotation)\uC774\uB780? \uC0AC\uC804 \uC0C1 \uC8FC\uC11D\uC758 \uC758\uBBF8\uC774\uC9C0\uB9CC, Java\uC5D0\uC11C\uB294 \uC8FC\uC11D \uC774\uC0C1\uC758 \uAE30\uB2A5\uC744 \uAC00\uC9D0; \uC790\uBC14 \uC18C\uC2A4\uCF54\uB4DC\uC5D0 \uCD94\uAC00\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uBA54\uD0C0\uB370\uC774\uD130\uC758 \uC77C\uC885; \uD074\uB798\uC2A4\uC640 \uBA54\uC11C\uB4DC\uC5D0 \uCD94\uAC00\uD558\uC5EC \uB2E4\uC591\uD55C \uAE30\uB2A5 \uBD80\uC5EC; \uC0AC\uC6A9 \uC774\uC810 \uCF54\uB4DC \uAE38\uC774 \uAC10\uC18C; \uC720\uC9C0\uBCF4\uC218 \uC6A9\uC774; \uC0DD\uC0B0\uC131 \uC99D\uAC00; OOP\uC758 \uC7A5\uC810 \uD65C\uC6A9; \uCEA1\uC290\uD654; Built-i","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/backend/spring-boot/1-spring-annotation.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[Spring Boot] Annotation \uB3D9\uC791 \uC6D0\uB9AC\uC640 \uC0AC\uC6A9\uBC95"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-12T02:57:24.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-08-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-12T02:57:24.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \uC5B4\uB178\uD14C\uC774\uC158(Annotation)\uC774\uB780?","slug":"_1-\u110B\u1165\u1102\u1169\u1110\u1166\u110B\u1175\u1109\u1167\u11AB-annotation-\u110B\u1175\u1105\u1161\u11AB","link":"#_1-\u110B\u1165\u1102\u1169\u1110\u1166\u110B\u1175\u1109\u1167\u11AB-annotation-\u110B\u1175\u1105\u1161\u11AB","children":[{"level":3,"title":"\uC0AC\uC6A9 \uC774\uC810","slug":"\u1109\u1161\u110B\u116D\u11BC-\u110B\u1175\u110C\u1165\u11B7","link":"#\u1109\u1161\u110B\u116D\u11BC-\u110B\u1175\u110C\u1165\u11B7","children":[]},{"level":3,"title":"\uC6A9\uB3C4","slug":"\u110B\u116D\u11BC\u1103\u1169","link":"#\u110B\u116D\u11BC\u1103\u1169","children":[]}]},{"level":2,"title":"2. \uC5B4\uB178\uD14C\uC774\uC158 \uC815\uC758 \uBC29\uBC95","slug":"_2-\u110B\u1165\u1102\u1169\u1110\u1166\u110B\u1175\u1109\u1167\u11AB-\u110C\u1165\u11BC\u110B\u1174-\u1107\u1161\u11BC\u1107\u1165\u11B8","link":"#_2-\u110B\u1165\u1102\u1169\u1110\u1166\u110B\u1175\u1109\u1167\u11AB-\u110C\u1165\u11BC\u110B\u1174-\u1107\u1161\u11BC\u1107\u1165\u11B8","children":[{"level":3,"title":"@Target","slug":"target","link":"#target","children":[]},{"level":3,"title":"@Retention","slug":"retention","link":"#retention","children":[]}]},{"level":2,"title":"3. Spring @Controller \uC5B4\uB178\uD14C\uC774\uC158 \uBD84\uC11D","slug":"_3-spring-controller-\u110B\u1165\u1102\u1169\u1110\u1166\u110B\u1175\u1109\u1167\u11AB-\u1107\u116E\u11AB\u1109\u1165\u11A8","link":"#_3-spring-controller-\u110B\u1165\u1102\u1169\u1110\u1166\u110B\u1175\u1109\u1167\u11AB-\u1107\u116E\u11AB\u1109\u1165\u11A8","children":[]},{"level":2,"title":"A. \uCC38\uC870","slug":"a-\u110E\u1161\u11B7\u110C\u1169","link":"#a-\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1665543444000,"updatedTime":1665543444000,"contributors":[{"name":"DrMaemi","email":"leesh1510@ajou.ac.kr","commits":1}]},"readingTime":{"minutes":0.97,"words":290},"filePathRelative":"backend/spring-boot/1-spring-annotation.md","localizedDate":"August 21, 2022"}`);export{t as data};
