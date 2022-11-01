const e=JSON.parse(`{"key":"v-bdf4725a","path":"/computer-science/computer-network/4-application-web-http.html","title":"[\uB124\uD2B8\uC6CC\uD06C] \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uACC4\uCE35 - Web & HTTP","lang":"en-US","frontmatter":{"title":"[\uB124\uD2B8\uC6CC\uD06C] \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uACC4\uCE35 - Web & HTTP","icon":"article","category":["Computer Network"],"date":"2022-08-01T00:00:00.000Z","order":4,"summary":"1. \uC6D4\uB4DC \uC640\uC774\uB4DC \uC6F9(WWW, World Wide Web)\uC774\uB780? \uC6D4\uB4DC \uC640\uC774\uB4DC \uC6F9\uC740 \uC778\uD130\uB137\uC0C1\uC758 \uC815\uBCF4\uB97C Hypertext \uBC29\uC2DD\uACFC \uBA40\uD2F0\uBBF8\uB514\uC5B4 \uD658\uACBD\uC5D0\uC11C \uAC80\uC0C9\uD560 \uC218 \uC788\uAC8C \uD574\uC8FC\uB294 \uC810\uBCF4\uAC80\uC0C9 \uC2DC\uC2A4\uD15C\uC774\uB2E4. \uAC04\uB2E8\uD788 \uC6F9(Web)\uC774\uB77C \uBD80\uB974\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uB2E4. \uC6F9\uC774\uB780 \uC6A9\uC5B4\uAC00 \uC778\uD130\uB137\uACFC \uB3D9\uC758\uC5B4\uB85C \uC4F0\uC774\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uC9C0\uB9CC \uC5C4\uACA9\uD788 \uB9D0\uD574 \uC11C\uB85C \uB2E4\uB978 \uAC1C\uB150\uC774\uB2E4. ","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/computer-science/computer-network/4-application-web-http.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[\uB124\uD2B8\uC6CC\uD06C] \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uACC4\uCE35 - Web & HTTP"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-14T02:28:19.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-08-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-14T02:28:19.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \uC6D4\uB4DC \uC640\uC774\uB4DC \uC6F9(WWW, World Wide Web)\uC774\uB780?","slug":"_1-\u110B\u116F\u11AF\u1103\u1173-\u110B\u116A\u110B\u1175\u1103\u1173-\u110B\u1170\u11B8-www-world-wide-web-\u110B\u1175\u1105\u1161\u11AB","link":"#_1-\u110B\u116F\u11AF\u1103\u1173-\u110B\u116A\u110B\u1175\u1103\u1173-\u110B\u1170\u11B8-www-world-wide-web-\u110B\u1175\u1105\u1161\u11AB","children":[]},{"level":2,"title":"2. \uC6F9\uACFC HTTP","slug":"_2-\u110B\u1170\u11B8\u1100\u116A-http","link":"#_2-\u110B\u1170\u11B8\u1100\u116A-http","children":[]},{"level":2,"title":"3. URI vs URL vs URN","slug":"_3-uri-vs-url-vs-urn","link":"#_3-uri-vs-url-vs-urn","children":[]},{"level":2,"title":"4. HTTP \uB3D9\uC791 \uAC1C\uC694","slug":"_4-http-\u1103\u1169\u11BC\u110C\u1161\u11A8-\u1100\u1162\u110B\u116D","link":"#_4-http-\u1103\u1169\u11BC\u110C\u1161\u11A8-\u1100\u1162\u110B\u116D","children":[]},{"level":2,"title":"5. HTTP\uC758 \uD2B9\uC9D5","slug":"_5-http\u110B\u1174-\u1110\u1173\u11A8\u110C\u1175\u11BC","link":"#_5-http\u110B\u1174-\u1110\u1173\u11A8\u110C\u1175\u11BC","children":[{"level":3,"title":"5.1. \uBE44\uC5F0\uACB0\uC131(Connectionless)","slug":"_5-1-\u1107\u1175\u110B\u1167\u11AB\u1100\u1167\u11AF\u1109\u1165\u11BC-connectionless","link":"#_5-1-\u1107\u1175\u110B\u1167\u11AB\u1100\u1167\u11AF\u1109\u1165\u11BC-connectionless","children":[]},{"level":3,"title":"5.2. \uBB34\uC0C1\uD0DC(Stateless)","slug":"_5-2-\u1106\u116E\u1109\u1161\u11BC\u1110\u1162-stateless","link":"#_5-2-\u1106\u116E\u1109\u1161\u11BC\u1110\u1162-stateless","children":[]},{"level":3,"title":"5.3. Non-persistent, Persistent HTTP, HTTP Pipelining","slug":"_5-3-non-persistent-persistent-http-http-pipelining","link":"#_5-3-non-persistent-persistent-http-http-pipelining","children":[]}]},{"level":2,"title":"7. HTTP Method","slug":"_7-http-method","link":"#_7-http-method","children":[]},{"level":2,"title":"8. HTTP \uC0C1\uD0DC \uCF54\uB4DC","slug":"_8-http-\u1109\u1161\u11BC\u1110\u1162-\u110F\u1169\u1103\u1173","link":"#_8-http-\u1109\u1161\u11BC\u1110\u1162-\u110F\u1169\u1103\u1173","children":[]},{"level":2,"title":"9. RESTful API","slug":"_9-restful-api","link":"#_9-restful-api","children":[{"level":3,"title":"9.1. REST API \uC124\uACC4 \uBAA9\uD45C","slug":"_9-1-rest-api-\u1109\u1165\u11AF\u1100\u1168-\u1106\u1169\u11A8\u1111\u116D","link":"#_9-1-rest-api-\u1109\u1165\u11AF\u1100\u1168-\u1106\u1169\u11A8\u1111\u116D","children":[]},{"level":3,"title":"9.2. REST\uC758 \uAD6C\uC131 \uC694\uC18C(\uD328\uD134)","slug":"_9-2-rest\u110B\u1174-\u1100\u116E\u1109\u1165\u11BC-\u110B\u116D\u1109\u1169-\u1111\u1162\u1110\u1165\u11AB","link":"#_9-2-rest\u110B\u1174-\u1100\u116E\u1109\u1165\u11BC-\u110B\u116D\u1109\u1169-\u1111\u1162\u1110\u1165\u11AB","children":[]},{"level":3,"title":"9.3. REST 6\uAC00\uC9C0 \uC6D0\uCE59","slug":"_9-3-rest-6\u1100\u1161\u110C\u1175-\u110B\u116F\u11AB\u110E\u1175\u11A8","link":"#_9-3-rest-6\u1100\u1161\u110C\u1175-\u110B\u116F\u11AB\u110E\u1175\u11A8","children":[]},{"level":3,"title":"9.4. RESTful API \uAC1C\uBC1C \uAC00\uC774\uB4DC","slug":"_9-4-restful-api-\u1100\u1162\u1107\u1161\u11AF-\u1100\u1161\u110B\u1175\u1103\u1173","link":"#_9-4-restful-api-\u1100\u1162\u1107\u1161\u11AF-\u1100\u1161\u110B\u1175\u1103\u1173","children":[]}]},{"level":2,"title":"A. \uCC38\uC870","slug":"a-\u110E\u1161\u11B7\u110C\u1169","link":"#a-\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1665714499000,"updatedTime":1665714499000,"contributors":[{"name":"DrMaemi","email":"leesh1510@ajou.ac.kr","commits":1}]},"readingTime":{"minutes":3.11,"words":932},"filePathRelative":"computer-science/computer-network/4-application-web-http.md","localizedDate":"August 1, 2022"}`);export{e as data};