const e=JSON.parse(`{"key":"v-f3abd0fe","path":"/backend/spring-boot/05-jpa-persistence-context.html","title":"[Spring Boot] JPA \uC601\uC18D\uC131 \uBB38\uB9E5(Persistence Context)","lang":"en-US","frontmatter":{"title":"[Spring Boot] JPA \uC601\uC18D\uC131 \uBB38\uB9E5(Persistence Context)","icon":"article","category":["Spring Boot"],"date":"2022-08-18T00:00:00.000Z","order":5,"summary":"1. \uC601\uC18D\uC131\uC774\uB780 \uC601\uC18D\uC131\uC740 \uB370\uC774\uD130\uB97C \uC0DD\uC131\uD55C \uD504\uB85C\uADF8\uB7A8\uC774 \uC885\uB8CC\uB418\uC5B4\uB3C4 \uC0AC\uB77C\uC9C0\uC9C0 \uC54A\uB294 \uB370\uC774\uD130\uC758 \uD2B9\uC131\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC601\uC18D\uC131\uC740 \uD504\uB85C\uADF8\uB7A8 \uC2E4\uD589 \uC911 \uC8FC\uAE30\uC5B5\uC7A5\uCE58\uC5D0 \uC0DD\uC131\uB41C \uB370\uC774\uD130\uB97C \uD30C\uC77C\uC774\uB098 DB\uC5D0 \uC800\uC7A5\uD568\uC73C\uB85C\uC368 \uBD80\uC5EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. 2. \uC601\uC18D\uC131 \uBB38\uB9E5(Persistence Context)\uC774\uB780? \uC5D4\uD2F0\uD2F0\uB97C \uC601\uAD6C \uC800\uC7A5\uD558\uB294 \uD658\uACBD; \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uACFC DB ","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/backend/spring-boot/05-jpa-persistence-context.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[Spring Boot] JPA \uC601\uC18D\uC131 \uBB38\uB9E5(Persistence Context)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-18T09:21:38.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-08-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-18T09:21:38.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \uC601\uC18D\uC131\uC774\uB780","slug":"_1-\u110B\u1167\u11BC\u1109\u1169\u11A8\u1109\u1165\u11BC\u110B\u1175\u1105\u1161\u11AB","link":"#_1-\u110B\u1167\u11BC\u1109\u1169\u11A8\u1109\u1165\u11BC\u110B\u1175\u1105\u1161\u11AB","children":[]},{"level":2,"title":"2. \uC601\uC18D\uC131 \uBB38\uB9E5(Persistence Context)\uC774\uB780?","slug":"_2-\u110B\u1167\u11BC\u1109\u1169\u11A8\u1109\u1165\u11BC-\u1106\u116E\u11AB\u1106\u1162\u11A8-persistence-context-\u110B\u1175\u1105\u1161\u11AB","link":"#_2-\u110B\u1167\u11BC\u1109\u1169\u11A8\u1109\u1165\u11BC-\u1106\u116E\u11AB\u1106\u1162\u11A8-persistence-context-\u110B\u1175\u1105\u1161\u11AB","children":[]},{"level":2,"title":"3. Entity \uC0DD\uBA85\uC8FC\uAE30","slug":"_3-entity-\u1109\u1162\u11BC\u1106\u1167\u11BC\u110C\u116E\u1100\u1175","link":"#_3-entity-\u1109\u1162\u11BC\u1106\u1167\u11BC\u110C\u116E\u1100\u1175","children":[{"level":3,"title":"3.1. \uBE44\uC601\uC18D(New/Transient)","slug":"_3-1-\u1107\u1175\u110B\u1167\u11BC\u1109\u1169\u11A8-new-transient","link":"#_3-1-\u1107\u1175\u110B\u1167\u11BC\u1109\u1169\u11A8-new-transient","children":[]},{"level":3,"title":"3.2. \uC601\uC18D(Managed)","slug":"_3-2-\u110B\u1167\u11BC\u1109\u1169\u11A8-managed","link":"#_3-2-\u110B\u1167\u11BC\u1109\u1169\u11A8-managed","children":[]},{"level":3,"title":"3.3. \uC900\uC601\uC18D(Detached)","slug":"_3-3-\u110C\u116E\u11AB\u110B\u1167\u11BC\u1109\u1169\u11A8-detached","link":"#_3-3-\u110C\u116E\u11AB\u110B\u1167\u11BC\u1109\u1169\u11A8-detached","children":[]},{"level":3,"title":"3.4. \uC0AD\uC81C(Removed)","slug":"_3-4-\u1109\u1161\u11A8\u110C\u1166-removed","link":"#_3-4-\u1109\u1161\u11A8\u110C\u1166-removed","children":[]}]},{"level":2,"title":"4. \uC601\uC18D\uC131 \uBB38\uB9E5\uC758 \uD2B9\uC9D5/\uC774\uC810","slug":"_4-\u110B\u1167\u11BC\u1109\u1169\u11A8\u1109\u1165\u11BC-\u1106\u116E\u11AB\u1106\u1162\u11A8\u110B\u1174-\u1110\u1173\u11A8\u110C\u1175\u11BC-\u110B\u1175\u110C\u1165\u11B7","link":"#_4-\u110B\u1167\u11BC\u1109\u1169\u11A8\u1109\u1165\u11BC-\u1106\u116E\u11AB\u1106\u1162\u11A8\u110B\u1174-\u1110\u1173\u11A8\u110C\u1175\u11BC-\u110B\u1175\u110C\u1165\u11B7","children":[{"level":3,"title":"4.1. 1\uCC28 \uCE90\uC2DC(Cache)","slug":"_4-1-1\u110E\u1161-\u110F\u1162\u1109\u1175-cache","link":"#_4-1-1\u110E\u1161-\u110F\u1162\u1109\u1175-cache","children":[]},{"level":3,"title":"4.2. \uB3D9\uC77C\uC131(Identity) \uBCF4\uC7A5","slug":"_4-2-\u1103\u1169\u11BC\u110B\u1175\u11AF\u1109\u1165\u11BC-identity-\u1107\u1169\u110C\u1161\u11BC","link":"#_4-2-\u1103\u1169\u11BC\u110B\u1175\u11AF\u1109\u1165\u11BC-identity-\u1107\u1169\u110C\u1161\u11BC","children":[]},{"level":3,"title":"4.3. \uD2B8\uB79C\uC7AD\uC158 \uC4F0\uAE30 \uC9C0\uC5F0(Transactional Write-behind)","slug":"_4-3-\u1110\u1173\u1105\u1162\u11AB\u110C\u1162\u11A8\u1109\u1167\u11AB-\u110A\u1173\u1100\u1175-\u110C\u1175\u110B\u1167\u11AB-transactional-write-behind","link":"#_4-3-\u1110\u1173\u1105\u1162\u11AB\u110C\u1162\u11A8\u1109\u1167\u11AB-\u110A\u1173\u1100\u1175-\u110C\u1175\u110B\u1167\u11AB-transactional-write-behind","children":[]},{"level":3,"title":"4.4. \uBCC0\uACBD \uAC10\uC9C0(Dirty Checking)","slug":"_4-4-\u1107\u1167\u11AB\u1100\u1167\u11BC-\u1100\u1161\u11B7\u110C\u1175-dirty-checking","link":"#_4-4-\u1107\u1167\u11AB\u1100\u1167\u11BC-\u1100\u1161\u11B7\u110C\u1175-dirty-checking","children":[]}]},{"level":2,"title":"A. \uCC38\uC870","slug":"a-\u110E\u1161\u11B7\u110C\u1169","link":"#a-\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1666084898000,"updatedTime":1666084898000,"contributors":[{"name":"DrMaemi","email":"leesh1510@ajou.ac.kr","commits":1}]},"readingTime":{"minutes":3.04,"words":913},"filePathRelative":"backend/spring-boot/05-jpa-persistence-context.md","localizedDate":"August 18, 2022"}`);export{e as data};