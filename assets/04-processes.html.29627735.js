const e=JSON.parse(`{"key":"v-7370c795","path":"/computer-science/operating-system/04-processes.html","title":"[\uC6B4\uC601\uCCB4\uC81C] 04. \uD504\uB85C\uC138\uC2A4 \uAC1C\uC694","lang":"en-US","frontmatter":{"title":"[\uC6B4\uC601\uCCB4\uC81C] 04. \uD504\uB85C\uC138\uC2A4 \uAC1C\uC694","icon":"article","category":["Operating System"],"date":"2022-07-15T00:00:00.000Z","order":4,"summary":"\uBCF8\uBB38\uC740 2019\uB144\uB3C4 \uD558\uBC18\uAE30 \uC544\uC8FC\uB300\uD559\uAD50\uC758 \uCEF4\uD4E8\uD130\uACF5\uD559\uACFC \uAD50\uC218\uB85C \uC7AC\uC9C1\uD558\uC168\uB358 \uAE40\uC0C1\uD6C8 \uAD50\uC218\uB2D8\uC758 \uC6B4\uC601\uCCB4\uC81C \uACFC\uBAA9 \uAC15\uC758 \uC790\uB8CC\uB97C \uAE30\uBC18\uC73C\uB85C \uC791\uC131\uB418\uC5C8\uC74C\uC744 \uC54C\uB9BD\uB2C8\uB2E4. 1. \uD504\uB85C\uC138\uC2A4(Process)\uB780 \uBB34\uC5C7\uC778\uAC00? \uD504\uB85C\uADF8\uB7A8\uC774 \uC2E4\uD589\uB418\uC5B4 \uBA54\uBAA8\uB9AC\uC5D0 \uB85C\uB4DC\uB41C \uC778\uC2A4\uD134\uC2A4(An instance of a program in execution)\uC744 \uD504\uB85C\uC138\uC2A4(Proce","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/computer-science/operating-system/04-processes.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[\uC6B4\uC601\uCCB4\uC81C] 04. \uD504\uB85C\uC138\uC2A4 \uAC1C\uC694"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-15T08:22:29.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-07-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-15T08:22:29.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \uD504\uB85C\uC138\uC2A4(Process)\uB780 \uBB34\uC5C7\uC778\uAC00?","slug":"_1-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-process-\u1105\u1161\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161","link":"#_1-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-process-\u1105\u1161\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161","children":[]},{"level":2,"title":"2. \uD504\uB85C\uC138\uC2A4 \uC0C1\uD0DC \uC804\uD658(State Transition)","slug":"_2-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u1109\u1161\u11BC\u1110\u1162-\u110C\u1165\u11AB\u1112\u116A\u11AB-state-transition","link":"#_2-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u1109\u1161\u11BC\u1110\u1162-\u110C\u1165\u11AB\u1112\u116A\u11AB-state-transition","children":[]},{"level":2,"title":"3. \uD504\uB85C\uC138\uC2A4 \uACC4\uCE35 \uAD6C\uC870(Hierarchy)","slug":"_3-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u1100\u1168\u110E\u1173\u11BC-\u1100\u116E\u110C\u1169-hierarchy","link":"#_3-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u1100\u1168\u110E\u1173\u11BC-\u1100\u116E\u110C\u1169-hierarchy","children":[]},{"level":2,"title":"4. \uD504\uB85C\uC138\uC2A4 \uC0DD\uC131(Creation)","slug":"_4-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC-creation","link":"#_4-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC-creation","children":[]},{"level":2,"title":"5. \uD504\uB85C\uC138\uC2A4 \uC885\uB8CC(Termination)","slug":"_5-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u110C\u1169\u11BC\u1105\u116D-termination","link":"#_5-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u110C\u1169\u11BC\u1105\u116D-termination","children":[{"level":3,"title":"5.1. Zombie process","slug":"_5-1-zombie-process","link":"#_5-1-zombie-process","children":[]},{"level":3,"title":"5.2. Orphan process","slug":"_5-2-orphan-process","link":"#_5-2-orphan-process","children":[]}]},{"level":2,"title":"6. \uD504\uB85C\uC138\uC2A4 \uAD6C\uC131\uACFC \uAD6C\uD604","slug":"_6-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u1100\u116E\u1109\u1165\u11BC\u1100\u116A-\u1100\u116E\u1112\u1167\u11AB","link":"#_6-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u1100\u116E\u1109\u1165\u11BC\u1100\u116A-\u1100\u116E\u1112\u1167\u11AB","children":[{"level":3,"title":"6.1. PCB(Process Control Block)","slug":"_6-1-pcb-process-control-block","link":"#_6-1-pcb-process-control-block","children":[]}]}],"git":{"createdTime":1665822149000,"updatedTime":1665822149000,"contributors":[{"name":"DrMaemi","email":"leesh1510@ajou.ac.kr","commits":1}]},"readingTime":{"minutes":4.02,"words":1207},"filePathRelative":"computer-science/operating-system/04-processes.md","localizedDate":"July 15, 2022"}`);export{e as data};