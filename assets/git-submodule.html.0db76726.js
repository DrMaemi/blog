const e=JSON.parse(`{"key":"v-bc36fb5a","path":"/dev-ops/git/git-submodule.html","title":"[Git] \uC800\uC7A5\uC18C \uD3EC\uD568 - submodule","lang":"en-US","frontmatter":{"title":"[Git] \uC800\uC7A5\uC18C \uD3EC\uD568 - submodule","icon":"article","category":["Git"],"date":"2023-05-06T00:00:00.000Z","summary":"git submodule\uC740 \uC0C1\uC704 \uC800\uC7A5\uC18C\uC5D0\uC11C \uD558\uC704 \uC800\uC7A5\uC18C\uB97C \uD3EC\uD568\uC2DC\uCF1C \uAD00\uB9AC\uD558\uAE30 \uC704\uD574 \uC0AC\uC6A9\uD558\uB294 \uAE30\uB2A5\uC785\uB2C8\uB2E4. \uC0C1\uC704 \uC800\uC7A5\uC18C\uC640 \uD558\uC704 \uC800\uC7A5\uC18C\uAC00 \uAC01\uAC01 \uC6D0\uACA9 \uC800\uC7A5\uC18C\uB85C \uAD00\uB9AC\uB418\uC5B4\uC57C \uD558\uBA74\uC11C, \uB3D9\uC2DC\uC5D0 \uC0C1\uC704 \uC800\uC7A5\uC18C\uAC00 \uD558\uC704 \uC800\uC7A5\uC18C\uB97C \uC758\uC874\uD558\uC5EC \uC0AC\uC6A9\uD560 \uB54C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. Submodule\uC740 \uB2E4\uB978 Repository\uC5D0 embed \uB41C \uC5B4\uB5A4 Repository","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/dev-ops/git/git-submodule.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[Git] \uC800\uC7A5\uC18C \uD3EC\uD568 - submodule"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-28T09:14:32.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2023-05-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T09:14:32.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\uC0AC\uC6A9\uBC95","slug":"\u1109\u1161\u110B\u116D\u11BC\u1107\u1165\u11B8","link":"#\u1109\u1161\u110B\u116D\u11BC\u1107\u1165\u11B8","children":[]},{"level":2,"title":"\uC0DD\uC131 \uD30C\uC77C","slug":"\u1109\u1162\u11BC\u1109\u1165\u11BC-\u1111\u1161\u110B\u1175\u11AF","link":"#\u1109\u1162\u11BC\u1109\u1165\u11BC-\u1111\u1161\u110B\u1175\u11AF","children":[]},{"level":2,"title":"\uCEE4\uBC0B \uC2DC \uB85C\uADF8","slug":"\u110F\u1165\u1106\u1175\u11BA-\u1109\u1175-\u1105\u1169\u1100\u1173","link":"#\u110F\u1165\u1106\u1175\u11BA-\u1109\u1175-\u1105\u1169\u1100\u1173","children":[]},{"level":2,"title":"\uC11C\uBE0C \uBAA8\uB4C8\uC744 \uD3EC\uD568\uD55C \uD504\uB85C\uC81D\uD2B8\uB97C clone\uD560 \uB54C","slug":"\u1109\u1165\u1107\u1173-\u1106\u1169\u1103\u1172\u11AF\u110B\u1173\u11AF-\u1111\u1169\u1112\u1161\u11B7\u1112\u1161\u11AB-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173\u1105\u1173\u11AF-clone\u1112\u1161\u11AF-\u1104\u1162","link":"#\u1109\u1165\u1107\u1173-\u1106\u1169\u1103\u1172\u11AF\u110B\u1173\u11AF-\u1111\u1169\u1112\u1161\u11B7\u1112\u1161\u11AB-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173\u1105\u1173\u11AF-clone\u1112\u1161\u11AF-\u1104\u1162","children":[]},{"level":2,"title":"\uC11C\uBE0C \uBAA8\uB4C8 \uC5C5\uB370\uC774\uD2B8","slug":"\u1109\u1165\u1107\u1173-\u1106\u1169\u1103\u1172\u11AF-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173","link":"#\u1109\u1165\u1107\u1173-\u1106\u1169\u1103\u1172\u11AF-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173","children":[]},{"level":2,"title":"\uC11C\uBE0C \uBAA8\uB4C8 \uBE0C\uB79C\uCE58 \uBCC0\uACBD","slug":"\u1109\u1165\u1107\u1173-\u1106\u1169\u1103\u1172\u11AF-\u1107\u1173\u1105\u1162\u11AB\u110E\u1175-\u1107\u1167\u11AB\u1100\u1167\u11BC","link":"#\u1109\u1165\u1107\u1173-\u1106\u1169\u1103\u1172\u11AF-\u1107\u1173\u1105\u1162\u11AB\u110E\u1175-\u1107\u1167\u11AB\u1100\u1167\u11BC","children":[]},{"level":2,"title":"\uC11C\uBE0C \uBAA8\uB4C8 \uB514\uB809\uD1A0\uB9AC \uC704\uCE58 \uBCC0\uACBD","slug":"\u1109\u1165\u1107\u1173-\u1106\u1169\u1103\u1172\u11AF-\u1103\u1175\u1105\u1166\u11A8\u1110\u1169\u1105\u1175-\u110B\u1171\u110E\u1175-\u1107\u1167\u11AB\u1100\u1167\u11BC","link":"#\u1109\u1165\u1107\u1173-\u1106\u1169\u1103\u1172\u11AF-\u1103\u1175\u1105\u1166\u11A8\u1110\u1169\u1105\u1175-\u110B\u1171\u110E\u1175-\u1107\u1167\u11AB\u1100\u1167\u11BC","children":[]},{"level":2,"title":"Trouble Shootings","slug":"trouble-shootings","link":"#trouble-shootings","children":[{"level":3,"title":"A git directory for ... is found locally with remote(s)...","slug":"a-git-directory-for-is-found-locally-with-remote-s","link":"#a-git-directory-for-is-found-locally-with-remote-s","children":[]}]},{"level":2,"title":"A. \uCC38\uC870","slug":"a-\u110E\u1161\u11B7\u110C\u1169","link":"#a-\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1683387580000,"updatedTime":1685265272000,"contributors":[{"name":"DrMaemi","email":"dev.maemi@gmail.com","commits":2}]},"readingTime":{"minutes":1.32,"words":397},"filePathRelative":"dev-ops/git/git-submodule.md","localizedDate":"May 6, 2023"}`);export{e as data};