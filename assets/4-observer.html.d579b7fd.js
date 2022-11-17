const e=JSON.parse(`{"key":"v-51687240","path":"/computer-science/design-pattern/4-observer.html","title":"[\uB514\uC790\uC778\uD328\uD134] \uC635\uC800\uBC84(Observer) \uD328\uD134","lang":"en-US","frontmatter":{"title":"[\uB514\uC790\uC778\uD328\uD134] \uC635\uC800\uBC84(Observer) \uD328\uD134","icon":"article","category":["Design Pattern"],"date":"2022-09-18T00:00:00.000Z","order":4,"summary":"\uC635\uC800\uBC84 \uD328\uD134(Observer Pattern)\uC774\uB780? \uC635\uC800\uBC84 \uD328\uD134\uC740 \uAC1D\uCCB4\uC758 \uC0C1\uD0DC \uBCC0\uD654\uB97C \uAD00\uCC30\uD558\uB294 \uAD00\uCC30\uC790\uB4E4, \uC989 \uC635\uC800\uBC84\uB4E4\uC758 \uBAA9\uB85D\uC744 \uAC1D\uCCB4\uC5D0 \uB4F1\uB85D\uD558\uC5EC \uC0C1\uD0DC \uBCC0\uD654\uAC00 \uC788\uC744 \uB54C\uB9C8\uB2E4 \uBA54\uC11C\uB4DC \uB4F1\uC744 \uD1B5\uD574 \uAC1D\uCCB4\uAC00 \uC9C1\uC811 \uBAA9\uB85D\uC758 \uAC01 \uC635\uC800\uBC84\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uB3C4\uB85D \uD558\uB294 \uB514\uC790\uC778 \uD328\uD134\uC785\uB2C8\uB2E4. \uC8FC\uB85C \uBD84\uC0B0 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB9C1 \uC2DC\uC2A4\uD15C\uC744 \uAD6C\uD604\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4(\uBC1C\uD589/\uAD6C\uB3C5 ","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/computer-science/design-pattern/4-observer.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[\uB514\uC790\uC778\uD328\uD134] \uC635\uC800\uBC84(Observer) \uD328\uD134"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-15T08:21:51.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-09-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-15T08:21:51.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\uC635\uC800\uBC84 \uD328\uD134(Observer Pattern)\uC774\uB780?","slug":"\u110B\u1169\u11B8\u110C\u1165\u1107\u1165-\u1111\u1162\u1110\u1165\u11AB-observer-pattern-\u110B\u1175\u1105\u1161\u11AB","link":"#\u110B\u1169\u11B8\u110C\u1165\u1107\u1165-\u1111\u1162\u1110\u1165\u11AB-observer-pattern-\u110B\u1175\u1105\u1161\u11AB","children":[]},{"level":2,"title":"\uC608\uC81C - \uC131\uC801 \uB9AC\uC2A4\uD2B8 \uCD9C\uB825","slug":"\u110B\u1168\u110C\u1166-\u1109\u1165\u11BC\u110C\u1165\u11A8-\u1105\u1175\u1109\u1173\u1110\u1173-\u110E\u116E\u11AF\u1105\u1167\u11A8","link":"#\u110B\u1168\u110C\u1166-\u1109\u1165\u11BC\u110C\u1165\u11A8-\u1105\u1175\u1109\u1173\u1110\u1173-\u110E\u116E\u11AF\u1105\u1167\u11A8","children":[]},{"level":2,"title":"\uBB38\uC81C\uC810","slug":"\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7","link":"#\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7","children":[{"level":3,"title":"\uC131\uC801\uC744 \uB2E4\uB978 \uBC29\uC2DD(\uCD5C\uC18C/\uCD5C\uB300 \uAC12)\uC73C\uB85C \uCD9C\uB825","slug":"\u1109\u1165\u11BC\u110C\u1165\u11A8\u110B\u1173\u11AF-\u1103\u1161\u1105\u1173\u11AB-\u1107\u1161\u11BC\u1109\u1175\u11A8-\u110E\u116C\u1109\u1169-\u110E\u116C\u1103\u1162-\u1100\u1161\u11B9-\u110B\u1173\u1105\u1169-\u110E\u116E\u11AF\u1105\u1167\u11A8","link":"#\u1109\u1165\u11BC\u110C\u1165\u11A8\u110B\u1173\u11AF-\u1103\u1161\u1105\u1173\u11AB-\u1107\u1161\u11BC\u1109\u1175\u11A8-\u110E\u116C\u1109\u1169-\u110E\u116C\u1103\u1162-\u1100\u1161\u11B9-\u110B\u1173\u1105\u1169-\u110E\u116E\u11AF\u1105\u1167\u11A8","children":[]},{"level":3,"title":"\uB3D9\uC2DC \uB610\uB294 \uC21C\uCC28\uC801\uC73C\uB85C \uC131\uC801 \uCD9C\uB825","slug":"\u1103\u1169\u11BC\u1109\u1175-\u1104\u1169\u1102\u1173\u11AB-\u1109\u116E\u11AB\u110E\u1161\u110C\u1165\u11A8\u110B\u1173\u1105\u1169-\u1109\u1165\u11BC\u110C\u1165\u11A8-\u110E\u116E\u11AF\u1105\u1167\u11A8","link":"#\u1103\u1169\u11BC\u1109\u1175-\u1104\u1169\u1102\u1173\u11AB-\u1109\u116E\u11AB\u110E\u1161\u110C\u1165\u11A8\u110B\u1173\u1105\u1169-\u1109\u1165\u11BC\u110C\u1165\u11A8-\u110E\u116E\u11AF\u1105\u1167\u11A8","children":[]}]},{"level":2,"title":"\uD574\uACB0\uCC45 - \uC635\uC800\uBC84 \uD328\uD134","slug":"\u1112\u1162\u1100\u1167\u11AF\u110E\u1162\u11A8-\u110B\u1169\u11B8\u110C\u1165\u1107\u1165-\u1111\u1162\u1110\u1165\u11AB","link":"#\u1112\u1162\u1100\u1167\u11AF\u110E\u1162\u11A8-\u110B\u1169\u11B8\u110C\u1165\u1107\u1165-\u1111\u1162\u1110\u1165\u11AB","children":[]},{"level":2,"title":"A. \uCC38\uC870","slug":"a-\u110E\u1161\u11B7\u110C\u1169","link":"#a-\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1665822111000,"updatedTime":1665822111000,"contributors":[{"name":"DrMaemi","email":"leesh1510@ajou.ac.kr","commits":1}]},"readingTime":{"minutes":2.8,"words":840},"filePathRelative":"computer-science/design-pattern/4-observer.md","localizedDate":"September 18, 2022"}`);export{e as data};