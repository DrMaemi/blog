const e=JSON.parse(`{"key":"v-929c8140","path":"/project/bulletin-board-jsp/01-servlet-jsp.html","title":"[\uAC8C\uC2DC\uD310 \uB9CC\uB4E4\uAE30 - JSP] 01. \uC11C\uBE14\uB9BF(Servlet)\uACFC JSP","lang":"en-US","frontmatter":{"title":"[\uAC8C\uC2DC\uD310 \uB9CC\uB4E4\uAE30 - JSP] 01. \uC11C\uBE14\uB9BF(Servlet)\uACFC JSP","icon":"article","category":["\uAC8C\uC2DC\uD310 \uB9CC\uB4E4\uAE30 - JSP"],"date":"2022-04-26T00:00:00.000Z","order":1,"summary":"\uD55C\uAD6D\uC5D0\uC11C \uB9CE\uC740 \uAE30\uC5C5\uB4E4\uC774 \uBC31\uC5D4\uB4DC \uC11C\uBC84\uB97C \uD504\uB85C\uADF8\uB798\uBC0D\uD560 \uB54C Java \uAE30\uBC18\uC758 Spring \uD504\uB808\uC784 \uC6CC\uD06C\uB97C \uAC00\uC7A5 \uB9CE\uC774 \uC4F4\uB2E4. \uD544\uC790\uB294 \uBC31\uC5D4\uB4DC \uBD84\uC57C\uC5D0 \uAD00\uC2EC\uC774 \uB9CE\uC544\uC11C Spring\uC774 \uC65C \uB9CE\uC774 \uC4F0\uC774\uB294\uC9C0, \uADF8\uB9AC\uACE0 \uC5B4\uB5BB\uAC8C \uC0AC\uC6A9\uD558\uB294\uC9C0 \uAD81\uAE08\uD574\uC11C \uACF5\uBD80\uB97C \uC2DC\uC791\uD588\uB294\uB370, Spring\uC744 \uC81C\uB300\uB85C \uC774\uD574\uD558\uAE30 \uC704\uD574\uC11C\uB294 Spring\uC774 \uB4F1\uC7A5\uD558\uAE30 \uC804\uC5D0 \uC790\uBC14\uB85C \uC11C\uBC84\uB97C \uD504","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/project/bulletin-board-jsp/01-servlet-jsp.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[\uAC8C\uC2DC\uD310 \uB9CC\uB4E4\uAE30 - JSP] 01. \uC11C\uBE14\uB9BF(Servlet)\uACFC JSP"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-17T10:17:49.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-04-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-17T10:17:49.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\uC11C\uBE14\uB9BF(Servlet)","slug":"\u1109\u1165\u1107\u1173\u11AF\u1105\u1175\u11BA-servlet","link":"#\u1109\u1165\u1107\u1173\u11AF\u1105\u1175\u11BA-servlet","children":[{"level":3,"title":"\uC11C\uBE14\uB9BF \uD2B9\uC9D5","slug":"\u1109\u1165\u1107\u1173\u11AF\u1105\u1175\u11BA-\u1110\u1173\u11A8\u110C\u1175\u11BC","link":"#\u1109\u1165\u1107\u1173\u11AF\u1105\u1175\u11BA-\u1110\u1173\u11A8\u110C\u1175\u11BC","children":[]},{"level":3,"title":"HTTP \uC11C\uBE14\uB9BF \uC5ED\uD560","slug":"http-\u1109\u1165\u1107\u1173\u11AF\u1105\u1175\u11BA-\u110B\u1167\u11A8\u1112\u1161\u11AF","link":"#http-\u1109\u1165\u1107\u1173\u11AF\u1105\u1175\u11BA-\u110B\u1167\u11A8\u1112\u1161\u11AF","children":[]}]},{"level":2,"title":"\uC11C\uBE14\uB9BF \uCEE8\uD14C\uC774\uB108(Servlet Container)","slug":"\u1109\u1165\u1107\u1173\u11AF\u1105\u1175\u11BA-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-servlet-container","link":"#\u1109\u1165\u1107\u1173\u11AF\u1105\u1175\u11BA-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-servlet-container","children":[{"level":3,"title":"\uC11C\uBE14\uB9BF \uCEE8\uD14C\uC774\uB108 \uC5ED\uD560","slug":"\u1109\u1165\u1107\u1173\u11AF\u1105\u1175\u11BA-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-\u110B\u1167\u11A8\u1112\u1161\u11AF","link":"#\u1109\u1165\u1107\u1173\u11AF\u1105\u1175\u11BA-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-\u110B\u1167\u11A8\u1112\u1161\u11AF","children":[]}]},{"level":2,"title":"JSP","slug":"jsp","link":"#jsp","children":[{"level":3,"title":"JSP \uD2B9\uC9D5","slug":"jsp-\u1110\u1173\u11A8\u110C\u1175\u11BC","link":"#jsp-\u1110\u1173\u11A8\u110C\u1175\u11BC","children":[]},{"level":3,"title":"JSP \uB3D9\uC791 \uAD6C\uC870","slug":"jsp-\u1103\u1169\u11BC\u110C\u1161\u11A8-\u1100\u116E\u110C\u1169","link":"#jsp-\u1103\u1169\u11BC\u110C\u1161\u11A8-\u1100\u116E\u110C\u1169","children":[]}]},{"level":2,"title":"A. \uCC38\uC870","slug":"a-\u110E\u1161\u11B7\u110C\u1169","link":"#a-\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1666001869000,"updatedTime":1666001869000,"contributors":[{"name":"DrMaemi","email":"leesh1510@ajou.ac.kr","commits":1}]},"readingTime":{"minutes":2.1,"words":631},"filePathRelative":"project/bulletin-board-jsp/01-servlet-jsp.md","localizedDate":"April 26, 2022"}`);export{e as data};
