const e=JSON.parse(`{"key":"v-2e7b1700","path":"/computer-science/design-pattern/5-decorator.html","title":"[\uB514\uC790\uC778\uD328\uD134] \uB370\uCF54\uB808\uC774\uD130(Decorator) \uD328\uD134","lang":"en-US","frontmatter":{"title":"[\uB514\uC790\uC778\uD328\uD134] \uB370\uCF54\uB808\uC774\uD130(Decorator) \uD328\uD134","icon":"article","category":["Design Pattern"],"date":"2022-09-20T00:00:00.000Z","order":5,"summary":"\uB370\uCF54\uB808\uC774\uD130 \uD328\uD134(Decorator Pattern)\uC774\uB780? \uB370\uCF54\uB808\uC774\uD130 \uD328\uD134\uC774\uB780 \uAE30\uBCF8 \uAE30\uB2A5\uC5D0 \uCD94\uAC00\uD574\uC57C \uD558\uB294 \uAE30\uB2A5\uC758 \uC885\uB958\uAC00 \uB9CE\uC740 \uACBD\uC6B0 \uAC01 \uCD94\uAC00 \uAE30\uB2A5\uC744 Decorator \uD074\uB798\uC2A4\uB85C \uC815\uC758\uD55C \uD6C4 \uD544\uC694\uD55C Decorator \uAC1D\uCCB4\uB97C \uC870\uD569\uD568\uC73C\uB85C\uC368 \uCD94\uAC00 \uAE30\uB2A5\uC758 \uC870\uD569\uC744 \uC124\uACC4\uD558\uB294 \uB514\uC790\uC778 \uD328\uD134\uC744 \uB9D0\uD569\uB2C8\uB2E4. &lt;\uADF8\uB9BC 1. \uB370\uCF54\uB808\uC774\uD130 \uD328\uD134 UML \uB2E4","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/computer-science/design-pattern/5-decorator.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[\uB514\uC790\uC778\uD328\uD134] \uB370\uCF54\uB808\uC774\uD130(Decorator) \uD328\uD134"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-15T08:21:51.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-09-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-15T08:21:51.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\uB370\uCF54\uB808\uC774\uD130 \uD328\uD134(Decorator Pattern)\uC774\uB780?","slug":"\u1103\u1166\u110F\u1169\u1105\u1166\u110B\u1175\u1110\u1165-\u1111\u1162\u1110\u1165\u11AB-decorator-pattern-\u110B\u1175\u1105\u1161\u11AB","link":"#\u1103\u1166\u110F\u1169\u1105\u1166\u110B\u1175\u1110\u1165-\u1111\u1162\u1110\u1165\u11AB-decorator-pattern-\u110B\u1175\u1105\u1161\u11AB","children":[]},{"level":2,"title":"\uC608\uC81C - \uB3C4\uB85C \uD45C\uC2DC \uBC29\uBC95 \uC870\uD569","slug":"\u110B\u1168\u110C\u1166-\u1103\u1169\u1105\u1169-\u1111\u116D\u1109\u1175-\u1107\u1161\u11BC\u1107\u1165\u11B8-\u110C\u1169\u1112\u1161\u11B8","link":"#\u110B\u1168\u110C\u1166-\u1103\u1169\u1105\u1169-\u1111\u116D\u1109\u1175-\u1107\u1161\u11BC\u1107\u1165\u11B8-\u110C\u1169\u1112\u1161\u11B8","children":[]},{"level":2,"title":"\uBB38\uC81C\uC810","slug":"\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7","link":"#\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7","children":[{"level":3,"title":"\uB610 \uB2E4\uB978 \uB3C4\uB85C \uD45C\uC2DC \uAE30\uB2A5 \uCD94\uAC00 \uAD6C\uD604","slug":"\u1104\u1169-\u1103\u1161\u1105\u1173\u11AB-\u1103\u1169\u1105\u1169-\u1111\u116D\u1109\u1175-\u1100\u1175\u1102\u1173\u11BC-\u110E\u116E\u1100\u1161-\u1100\u116E\u1112\u1167\u11AB","link":"#\u1104\u1169-\u1103\u1161\u1105\u1173\u11AB-\u1103\u1169\u1105\u1169-\u1111\u116D\u1109\u1175-\u1100\u1175\u1102\u1173\u11BC-\u110E\u116E\u1100\u1161-\u1100\u116E\u1112\u1167\u11AB","children":[]},{"level":3,"title":"\uC5EC\uB7EC \uAC00\uC9C0 \uCD94\uAC00 \uAE30\uB2A5 \uC870\uD569","slug":"\u110B\u1167\u1105\u1165-\u1100\u1161\u110C\u1175-\u110E\u116E\u1100\u1161-\u1100\u1175\u1102\u1173\u11BC-\u110C\u1169\u1112\u1161\u11B8","link":"#\u110B\u1167\u1105\u1165-\u1100\u1161\u110C\u1175-\u110E\u116E\u1100\u1161-\u1100\u1175\u1102\u1173\u11BC-\u110C\u1169\u1112\u1161\u11B8","children":[]}]},{"level":2,"title":"\uD574\uACB0\uCC45 - \uB370\uCF54\uB808\uC774\uD130 \uD328\uD134","slug":"\u1112\u1162\u1100\u1167\u11AF\u110E\u1162\u11A8-\u1103\u1166\u110F\u1169\u1105\u1166\u110B\u1175\u1110\u1165-\u1111\u1162\u1110\u1165\u11AB","link":"#\u1112\u1162\u1100\u1167\u11AF\u110E\u1162\u11A8-\u1103\u1166\u110F\u1169\u1105\u1166\u110B\u1175\u1110\u1165-\u1111\u1162\u1110\u1165\u11AB","children":[]},{"level":2,"title":"A. \uCC38\uC870","slug":"a-\u110E\u1161\u11B7\u110C\u1169","link":"#a-\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1665822111000,"updatedTime":1665822111000,"contributors":[{"name":"DrMaemi","email":"leesh1510@ajou.ac.kr","commits":1}]},"readingTime":{"minutes":2.37,"words":710},"filePathRelative":"computer-science/design-pattern/5-decorator.md","localizedDate":"September 20, 2022"}`);export{e as data};