const e=JSON.parse(`{"key":"v-f8528ca2","path":"/computer-science/computer-network/3-application-layer-intro.html","title":"[\uB124\uD2B8\uC6CC\uD06C] \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uACC4\uCE35 - \uAC1C\uC694","lang":"en-US","frontmatter":{"title":"[\uB124\uD2B8\uC6CC\uD06C] \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uACC4\uCE35 - \uAC1C\uC694","icon":"article","category":["Computer Network"],"date":"2022-07-20T00:00:00.000Z","order":3,"summary":"\uBCF8\uBB38\uC740 2019\uB144\uB3C4 \uD558\uBC18\uAE30 \uC544\uC8FC\uB300\uD559\uAD50\uC758 \uCEF4\uD4E8\uD130\uACF5\uD559\uACFC \uAD50\uC218\uB85C \uC7AC\uC9C1\uD558\uC168\uB358 \uAC15\uACBD\uB780 \uAD50\uC218\uB2D8\uC758 \uCEF4\uD4E8\uD130\uB124\uD2B8\uC6CC\uD06C \uACFC\uBAA9 \uAC15\uC758 \uC790\uB8CC\uB97C \uAE30\uBC18\uC73C\uB85C \uC791\uC131\uB418\uC5C8\uC74C\uC744 \uC54C\uB9BD\uB2C8\uB2E4. 1. SW\uC758 \uB124\uD2B8\uC6CC\uD06C \uAE30\uB2A5 \uAD6C\uD604 SW\uC758 \uB124\uD2B8\uC6CC\uD06C \uAE30\uB2A5\uC740 Application \uACC4\uCE35\uC5D0\uC11C \uAD6C\uD604\uD55C\uB2E4. \uC774 \uB54C \uB2E4\uC74C \uC0AC\uD56D\uB4E4\uC744 \uACE0\uB824\uD574\uC57C \uD55C\uB2E4. \uB124\uD2B8\uC6CC\uD06C \uBAA8\uB378; Client-serve","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/computer-science/computer-network/3-application-layer-intro.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[\uB124\uD2B8\uC6CC\uD06C] \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uACC4\uCE35 - \uAC1C\uC694"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-14T02:28:19.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-07-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-14T02:28:19.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. SW\uC758 \uB124\uD2B8\uC6CC\uD06C \uAE30\uB2A5 \uAD6C\uD604","slug":"_1-sw\u110B\u1174-\u1102\u1166\u1110\u1173\u110B\u116F\u110F\u1173-\u1100\u1175\u1102\u1173\u11BC-\u1100\u116E\u1112\u1167\u11AB","link":"#_1-sw\u110B\u1174-\u1102\u1166\u1110\u1173\u110B\u116F\u110F\u1173-\u1100\u1175\u1102\u1173\u11BC-\u1100\u116E\u1112\u1167\u11AB","children":[]},{"level":2,"title":"2. Client-server vs P2P","slug":"_2-client-server-vs-p2p","link":"#_2-client-server-vs-p2p","children":[]},{"level":2,"title":"3. \uD504\uB85C\uC138\uC2A4\uAC04 \uD1B5\uC2E0","slug":"_3-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173\u1100\u1161\u11AB-\u1110\u1169\u11BC\u1109\u1175\u11AB","link":"#_3-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173\u1100\u1161\u11AB-\u1110\u1169\u11BC\u1109\u1175\u11AB","children":[{"level":3,"title":"3.1. Socket","slug":"_3-1-socket","link":"#_3-1-socket","children":[]},{"level":3,"title":"3.2. IP \uC8FC\uC18C\uC640 \uD3EC\uD2B8 \uBC88\uD638","slug":"_3-2-ip-\u110C\u116E\u1109\u1169\u110B\u116A-\u1111\u1169\u1110\u1173-\u1107\u1165\u11AB\u1112\u1169","link":"#_3-2-ip-\u110C\u116E\u1109\u1169\u110B\u116A-\u1111\u1169\u1110\u1173-\u1107\u1165\u11AB\u1112\u1169","children":[]}]},{"level":2,"title":"4. \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uACC4\uCE35 \uD504\uB85C\uD1A0\uCF5C \uAC1C\uC694","slug":"_4-\u110B\u1165\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1100\u1168\u110E\u1173\u11BC-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF-\u1100\u1162\u110B\u116D","link":"#_4-\u110B\u1165\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1100\u1168\u110E\u1173\u11BC-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF-\u1100\u1162\u110B\u116D","children":[]},{"level":2,"title":"5. \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uD2B9\uC131\uACFC \uD504\uB85C\uD1A0\uCF5C","slug":"_5-\u110B\u1165\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1110\u1173\u11A8\u1109\u1165\u11BC\u1100\u116A-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF","link":"#_5-\u110B\u1165\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1110\u1173\u11A8\u1109\u1165\u11BC\u1100\u116A-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF","children":[]},{"level":2,"title":"6. \uC804\uC1A1 \uACC4\uCE35 \uD504\uB85C\uD1A0\uCF5C TCP vs UDP","slug":"_6-\u110C\u1165\u11AB\u1109\u1169\u11BC-\u1100\u1168\u110E\u1173\u11BC-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF-tcp-vs-udp","link":"#_6-\u110C\u1165\u11AB\u1109\u1169\u11BC-\u1100\u1168\u110E\u1173\u11BC-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF-tcp-vs-udp","children":[]},{"level":2,"title":"A. \uCC38\uC870","slug":"a-\u110E\u1161\u11B7\u110C\u1169","link":"#a-\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1665714499000,"updatedTime":1665714499000,"contributors":[{"name":"DrMaemi","email":"leesh1510@ajou.ac.kr","commits":1}]},"readingTime":{"minutes":1.57,"words":472},"filePathRelative":"computer-science/computer-network/3-application-layer-intro.md","localizedDate":"July 20, 2022"}`);export{e as data};
