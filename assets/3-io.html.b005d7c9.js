const e=JSON.parse(`{"key":"v-fc3be0fa","path":"/programming-language/c++/3-io.html","title":"[C++] \uC785\uCD9C\uB825(I/O)","lang":"en-US","frontmatter":{"title":"[C++] \uC785\uCD9C\uB825(I/O)","icon":"article","category":["C++"],"date":"2022-04-24T00:00:00.000Z","order":3,"summary":"C++\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C #include \uACFC \uAC19\uC774 iostream \uD5E4\uB354 \uD30C\uC77C\uC744 \uC774\uC6A9\uD574 \uC785\uCD9C\uB825\uC744 \uC218\uD589\uD560 \uC218 \uC788\uB2E4. \uB450 \uAC1C\uC758 \uC815\uC218\uB97C \uC785\uB825\uBC1B\uACE0 \uD569\uC744 \uCD9C\uB825 \uC608\uC81C \uCF54\uB4DC \uC2E4\uD589 \uACB0\uACFC using namespace std \uCF54\uB4DC\uB97C \uCD94\uAC00\uD574\uC11C \uB124\uC784\uC2A4\uD398\uC774\uC2A4 std::\uB97C \uC0DD\uB7B5\uD560 \uC218 \uC788\uB2E4. \uACF5\uBC31\uC73C\uB85C \uAD6C\uBD84\uB41C 2\uCC28\uC6D0 \uBC30\uC5F4 \uC785\uB825 \uD6C4 \uADF8\uB300\uB85C \uCD9C\uB825 \uC608\uC81C \uCF54\uB4DC \uC2E4","head":[["meta",{"property":"og:url","content":"https://drmaemi.github.io/blog/blog/programming-language/c++/3-io.html"}],["meta",{"property":"og:site_name","content":"Maemi's Devlog"}],["meta",{"property":"og:title","content":"[C++] \uC785\uCD9C\uB825(I/O)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-13T04:53:42.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-04-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-13T04:53:42.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\uB450 \uAC1C\uC758 \uC815\uC218\uB97C \uC785\uB825\uBC1B\uACE0 \uD569\uC744 \uCD9C\uB825","slug":"\u1103\u116E-\u1100\u1162\u110B\u1174-\u110C\u1165\u11BC\u1109\u116E\u1105\u1173\u11AF-\u110B\u1175\u11B8\u1105\u1167\u11A8\u1107\u1161\u11AE\u1100\u1169-\u1112\u1161\u11B8\u110B\u1173\u11AF-\u110E\u116E\u11AF\u1105\u1167\u11A8","link":"#\u1103\u116E-\u1100\u1162\u110B\u1174-\u110C\u1165\u11BC\u1109\u116E\u1105\u1173\u11AF-\u110B\u1175\u11B8\u1105\u1167\u11A8\u1107\u1161\u11AE\u1100\u1169-\u1112\u1161\u11B8\u110B\u1173\u11AF-\u110E\u116E\u11AF\u1105\u1167\u11A8","children":[]},{"level":2,"title":"\uACF5\uBC31\uC73C\uB85C \uAD6C\uBD84\uB41C 2\uCC28\uC6D0 \uBC30\uC5F4 \uC785\uB825 \uD6C4 \uADF8\uB300\uB85C \uCD9C\uB825","slug":"\u1100\u1169\u11BC\u1107\u1162\u11A8\u110B\u1173\u1105\u1169-\u1100\u116E\u1107\u116E\u11AB\u1103\u116C\u11AB-2\u110E\u1161\u110B\u116F\u11AB-\u1107\u1162\u110B\u1167\u11AF-\u110B\u1175\u11B8\u1105\u1167\u11A8-\u1112\u116E-\u1100\u1173\u1103\u1162\u1105\u1169-\u110E\u116E\u11AF\u1105\u1167\u11A8","link":"#\u1100\u1169\u11BC\u1107\u1162\u11A8\u110B\u1173\u1105\u1169-\u1100\u116E\u1107\u116E\u11AB\u1103\u116C\u11AB-2\u110E\u1161\u110B\u116F\u11AB-\u1107\u1162\u110B\u1167\u11AF-\u110B\u1175\u11B8\u1105\u1167\u11A8-\u1112\u116E-\u1100\u1173\u1103\u1162\u1105\u1169-\u110E\u116E\u11AF\u1105\u1167\u11A8","children":[]},{"level":2,"title":"\uBB38\uC790\uC5F4 \uC785\uB825\uBC1B\uAE30 - cin","slug":"\u1106\u116E\u11AB\u110C\u1161\u110B\u1167\u11AF-\u110B\u1175\u11B8\u1105\u1167\u11A8\u1107\u1161\u11AE\u1100\u1175-cin","link":"#\u1106\u116E\u11AB\u110C\u1161\u110B\u1167\u11AF-\u110B\u1175\u11B8\u1105\u1167\u11A8\u1107\u1161\u11AE\u1100\u1175-cin","children":[]},{"level":2,"title":"\uBB38\uC790\uC5F4 \uC785\uB825\uBC1B\uAE30 - getline","slug":"\u1106\u116E\u11AB\u110C\u1161\u110B\u1167\u11AF-\u110B\u1175\u11B8\u1105\u1167\u11A8\u1107\u1161\u11AE\u1100\u1175-getline","link":"#\u1106\u116E\u11AB\u110C\u1161\u110B\u1167\u11AF-\u110B\u1175\u11B8\u1105\u1167\u11A8\u1107\u1161\u11AE\u1100\u1175-getline","children":[]},{"level":2,"title":"\uC790\uB8CC\uD615 \uD655\uC778","slug":"\u110C\u1161\u1105\u116D\u1112\u1167\u11BC-\u1112\u116A\u11A8\u110B\u1175\u11AB","link":"#\u110C\u1161\u1105\u116D\u1112\u1167\u11BC-\u1112\u116A\u11A8\u110B\u1175\u11AB","children":[]},{"level":2,"title":"\uCC38\uC870","slug":"\u110E\u1161\u11B7\u110C\u1169","link":"#\u110E\u1161\u11B7\u110C\u1169","children":[]}],"git":{"createdTime":1665636822000,"updatedTime":1665636822000,"contributors":[{"name":"DrMaemi","email":"leesh1510@ajou.ac.kr","commits":1}]},"readingTime":{"minutes":1.64,"words":493},"filePathRelative":"programming-language/c++/3-io.md","localizedDate":"April 24, 2022"}`);export{e as data};