const e=JSON.parse(`{"key":"v-6f9ecfac","path":"/programming-language/java/serialization-deserialization.html","title":"[JAVA] \uC9C1\uB82C\uD654(Serialization) & \uC5ED\uC9C1\uB82C\uD654(Deserialization)","lang":"en-US","frontmatter":{"title":"[JAVA] \uC9C1\uB82C\uD654(Serialization) & \uC5ED\uC9C1\uB82C\uD654(Deserialization)","icon":"article","category":["Java"],"date":"2022-12-14T00:00:00.000Z","summary":"\uB370\uC774\uD130 \uC9C1\uB82C\uD654\uC640 \uC5ED\uC9C1\uB82C\uD654 \uB370\uC774\uD130 \uC9C1\uB82C\uD654; \uBA54\uBAA8\uB9AC\uB97C \uB514\uC2A4\uD06C\uC5D0 \uC800\uC7A5\uD558\uAC70\uB098 \uB124\uD2B8\uC6CC\uD06C \uD1B5\uC2E0\uC5D0 \uC0AC\uC6A9\uD558\uAE30 \uC704\uD55C \uD615\uC2DD\uC73C\uB85C \uBCC0\uD658\uD558\uB294 \uAC83; \uB370\uC774\uD130 \uC5ED\uC9C1\uB82C\uD654; \uB514\uC2A4\uD06C\uC5D0 \uC800\uC7A5\uD55C \uB370\uC774\uD130\uB97C \uC77D\uAC70\uB098 \uB124\uD2B8\uC6CC\uD06C \uD1B5\uC2E0\uC73C\uB85C \uBC1B\uC740 \uB370\uC774\uD130\uB97C \uBA54\uBAA8\uB9AC\uC5D0 \uC4F8 \uC218 \uC788\uB3C4\uB85D \uBCC0\uD658\uD558\uB294 \uAC83; \uC9C1\uB82C\uD654\uAC00 \uD544\uC694\uD55C \uC774\uC720 \uAC1C\uBC1C \uC5B8\uC5B4\uB97C \uBB34\uC5C7\uC744 \uC120\uD0DD\uD558\uB4E0 \uB370\uC774\uD130(\uBCC0\uC218)\uB97C \uBA54\uBAA8\uB9AC \uAD6C\uC870 ","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/programming-language/java/serialization-deserialization.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[JAVA] \uC9C1\uB82C\uD654(Serialization) & \uC5ED\uC9C1\uB82C\uD654(Deserialization)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-15T14:35:53.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-12-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-15T14:35:53.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\uB370\uC774\uD130 \uC9C1\uB82C\uD654\uC640 \uC5ED\uC9C1\uB82C\uD654","slug":"\u1103\u1166\u110B\u1175\u1110\u1165-\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A\u110B\u116A-\u110B\u1167\u11A8\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A","link":"#\u1103\u1166\u110B\u1175\u1110\u1165-\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A\u110B\u116A-\u110B\u1167\u11A8\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A","children":[]},{"level":2,"title":"\uC9C1\uB82C\uD654\uAC00 \uD544\uC694\uD55C \uC774\uC720","slug":"\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A\u1100\u1161-\u1111\u1175\u11AF\u110B\u116D\u1112\u1161\u11AB-\u110B\u1175\u110B\u1172","link":"#\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A\u1100\u1161-\u1111\u1175\u11AF\u110B\u116D\u1112\u1161\u11AB-\u110B\u1175\u110B\u1172","children":[]},{"level":2,"title":"\uC9C1\uB82C\uD654\uAC00 \uB370\uC774\uD130\uB97C \uBCC0\uD658\uD558\uB294 \uBC95","slug":"\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A\u1100\u1161-\u1103\u1166\u110B\u1175\u1110\u1165\u1105\u1173\u11AF-\u1107\u1167\u11AB\u1112\u116A\u11AB\u1112\u1161\u1102\u1173\u11AB-\u1107\u1165\u11B8","link":"#\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A\u1100\u1161-\u1103\u1166\u110B\u1175\u1110\u1165\u1105\u1173\u11AF-\u1107\u1167\u11AB\u1112\u116A\u11AB\u1112\u1161\u1102\u1173\u11AB-\u1107\u1165\u11B8","children":[]},{"level":2,"title":"\uC9C1\uB82C\uD654 - \uC5ED\uC9C1\uB82C\uD654 \uACFC\uC815","slug":"\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A-\u110B\u1167\u11A8\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A-\u1100\u116A\u110C\u1165\u11BC","link":"#\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A-\u110B\u1167\u11A8\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A-\u1100\u116A\u110C\u1165\u11BC","children":[]},{"level":2,"title":"\uC608\uC81C \uCF54\uB4DC - \uC9C1\uB82C\uD654","slug":"\u110B\u1168\u110C\u1166-\u110F\u1169\u1103\u1173-\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A","link":"#\u110B\u1168\u110C\u1166-\u110F\u1169\u1103\u1173-\u110C\u1175\u11A8\u1105\u1167\u11AF\u1112\u116A","children":[]},{"level":2,"title":"A. \uCC38\uC870","slug":"a-\u110E\u1161\u11B7\u110C\u1169","link":"#a-\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1671021466000,"updatedTime":1671114953000,"contributors":[{"name":"DrMaemi","email":"dev.maemi@gmail.com","commits":2}]},"readingTime":{"minutes":0.77,"words":232},"filePathRelative":"programming-language/java/serialization-deserialization.md","localizedDate":"December 14, 2022"}`);export{e as data};