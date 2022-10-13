const e=JSON.parse(`{"key":"v-4d9962aa","path":"/programming-language/java/3-variable-casting.html","title":"[JAVA] \uD615\uBCC0\uD658(Casting)","lang":"en-US","frontmatter":{"title":"[JAVA] \uD615\uBCC0\uD658(Casting)","icon":"article","category":["Java"],"date":"2022-08-11T00:00:00.000Z","order":3,"summary":"1. \uD615\uBCC0\uD658(\uCE90\uC2A4\uD305, Casting)\uC774\uB780? \uBCC0\uC218\uB098 \uB9AC\uD130\uB7F4\uC758 \uD0C0\uC785\uC744 \uB2E4\uB978 \uD0C0\uC785\uC73C\uB85C \uBCC0\uD658\uD558\uB294 \uAC83\uC744 \uD615\uBCC0\uD658(Casting)\uC774\uB77C\uACE0 \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 int \uD0C0\uC785\uC758 \uAC12\uACFC float \uD0C0\uC785\uC758 \uAC12\uC744 \uB354\uD558\uB294 \uACBD\uC6B0 \uBA3C\uC800 \uB450 \uAC12\uC744 \uAC19\uC740 \uD0C0\uC785\uC73C\uB85C, \uC989 \uB458 \uB2E4 float \uD0C0\uC785\uC73C\uB85C \uBCC0\uD658\uD55C \uB2E4\uC74C \uB354\uD574\uC57C \uD569\uB2C8\uB2E4. 2. \uD615\uBCC0\uD658 \uBC29\uBC95 '(\uD0C0\uC785)\uD53C\uC5F0\uC0B0\uC790","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/programming-language/java/3-variable-casting.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[JAVA] \uD615\uBCC0\uD658(Casting)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-13T10:39:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-08-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-13T10:39:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \uD615\uBCC0\uD658(\uCE90\uC2A4\uD305, Casting)\uC774\uB780?","slug":"_1-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB-\u110F\u1162\u1109\u1173\u1110\u1175\u11BC-casting-\u110B\u1175\u1105\u1161\u11AB","link":"#_1-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB-\u110F\u1162\u1109\u1173\u1110\u1175\u11BC-casting-\u110B\u1175\u1105\u1161\u11AB","children":[]},{"level":2,"title":"2. \uD615\uBCC0\uD658 \uBC29\uBC95","slug":"_2-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8","link":"#_2-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8","children":[]},{"level":2,"title":"3. \uC815\uC218\uD615 \uAC04 \uD615\uBCC0\uD658","slug":"_3-\u110C\u1165\u11BC\u1109\u116E\u1112\u1167\u11BC-\u1100\u1161\u11AB-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB","link":"#_3-\u110C\u1165\u11BC\u1109\u116E\u1112\u1167\u11BC-\u1100\u1161\u11AB-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB","children":[]},{"level":2,"title":"4. \uC2E4\uC218\uD615 \uAC04 \uD615\uBCC0\uD658","slug":"_4-\u1109\u1175\u11AF\u1109\u116E\u1112\u1167\u11BC-\u1100\u1161\u11AB-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB","link":"#_4-\u1109\u1175\u11AF\u1109\u116E\u1112\u1167\u11BC-\u1100\u1161\u11AB-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB","children":[]},{"level":2,"title":"5. \uC815\uC218\uD615\uACFC \uC2E4\uC218\uD615 \uAC04 \uD615\uBCC0\uD658","slug":"_5-\u110C\u1165\u11BC\u1109\u116E\u1112\u1167\u11BC\u1100\u116A-\u1109\u1175\u11AF\u1109\u116E\u1112\u1167\u11BC-\u1100\u1161\u11AB-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB","link":"#_5-\u110C\u1165\u11BC\u1109\u116E\u1112\u1167\u11BC\u1100\u116A-\u1109\u1175\u11AF\u1109\u116E\u1112\u1167\u11BC-\u1100\u1161\u11AB-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB","children":[{"level":3,"title":"\uC815\uC218\uD615\uC744 \uC2E4\uC218\uD615\uC73C\uB85C \uBCC0\uD658","slug":"\u110C\u1165\u11BC\u1109\u116E\u1112\u1167\u11BC\u110B\u1173\u11AF-\u1109\u1175\u11AF\u1109\u116E\u1112\u1167\u11BC\u110B\u1173\u1105\u1169-\u1107\u1167\u11AB\u1112\u116A\u11AB","link":"#\u110C\u1165\u11BC\u1109\u116E\u1112\u1167\u11BC\u110B\u1173\u11AF-\u1109\u1175\u11AF\u1109\u116E\u1112\u1167\u11BC\u110B\u1173\u1105\u1169-\u1107\u1167\u11AB\u1112\u116A\u11AB","children":[]},{"level":3,"title":"\uC2E4\uC218\uD615\uC744 \uC815\uC218\uD615\uC73C\uB85C \uBCC0\uD658","slug":"\u1109\u1175\u11AF\u1109\u116E\u1112\u1167\u11BC\u110B\u1173\u11AF-\u110C\u1165\u11BC\u1109\u116E\u1112\u1167\u11BC\u110B\u1173\u1105\u1169-\u1107\u1167\u11AB\u1112\u116A\u11AB","link":"#\u1109\u1175\u11AF\u1109\u116E\u1112\u1167\u11BC\u110B\u1173\u11AF-\u110C\u1165\u11BC\u1109\u116E\u1112\u1167\u11BC\u110B\u1173\u1105\u1169-\u1107\u1167\u11AB\u1112\u116A\u11AB","children":[]}]},{"level":2,"title":"6. \uC790\uB3D9 \uD615\uBCC0\uD658","slug":"_6-\u110C\u1161\u1103\u1169\u11BC-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB","link":"#_6-\u110C\u1161\u1103\u1169\u11BC-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB","children":[]},{"level":2,"title":"A. \uCC38\uC870","slug":"a-\u110E\u1161\u11B7\u110C\u1169","link":"#a-\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1665657574000,"updatedTime":1665657574000,"contributors":[{"name":"DrMaemi","email":"leesh1510@ajou.ac.kr","commits":1}]},"readingTime":{"minutes":5.63,"words":1690},"filePathRelative":"programming-language/java/3-variable-casting.md","localizedDate":"August 11, 2022"}`);export{e as data};
