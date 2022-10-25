import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as p,d as e,w as r,a as n,b as s,e as i,r as t}from"./app.6b3c7dfe.js";const u={},k=i('<figure class="opengraph"><a href="https://www.acmicpc.net/problem/1157" data-source-url="https://www.acmicpc.net/problem/1157"><div class="og-image" style="background-image:url(&#39;https://drive.google.com/uc?export=view&amp;id=1f3NcJon6wNc4oQy4NTc41Yuzw_mVlg7m&#39;);"></div><div class="og-text"><p class="og-title">1157\uBC88: \uB2E8\uC5B4 \uACF5\uBD80</p><p class="og-desc">\uC54C\uD30C\uBCB3 \uB300\uC18C\uBB38\uC790\uB85C \uB41C \uB2E8\uC5B4\uAC00 \uC8FC\uC5B4\uC9C0\uBA74, \uC774 \uB2E8\uC5B4\uC5D0\uC11C \uAC00\uC7A5 \uB9CE\uC774 \uC0AC\uC6A9\uB41C \uC54C\uD30C\uBCB3\uC774 \uBB34\uC5C7\uC778\uC9C0 \uC54C\uC544\uB0B4\uB294 \uD504\uB85C\uADF8\uB7A8\uC744 \uC791\uC131\uD558\uC2DC\uC624. \uB2E8, \uB300\uBB38\uC790\uC640 \uC18C\uBB38\uC790\uB97C \uAD6C\uBD84\uD558\uC9C0 \uC54A\uB294\uB2E4.</p><p class="og-host">www.acmicpc.net</p></div></a></figure><h2 id="\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uD480\uC774</h2><p>\uC785\uB825\uB41C \uBB38\uC790\uC5F4\uC744 \uBAA8\uB450 \uB300\uBB38\uC790\uB85C \uBC14\uAFB8\uACE0 \uC544\uC2A4\uD0A4\uCF54\uB4DC\uC5D0 \uB300\uD55C \uC5F0\uC0B0\uC744 \uD1B5\uD574 \uBC30\uC5F4\uC5D0 \uAC01 \uBB38\uC790\uC758 \uCD9C\uD604 \uBE48\uB3C4\uB97C \uC800\uC7A5\uD558\uACE0 \uCD5C\uBE48 \uBB38\uC790\uB97C \uCD9C\uB825\uD55C\uB2E4.</p><p><code>&lt;algorithm&gt;</code> \uD5E4\uB354\uC758 <code>transform()</code>, <code>max_element()</code>, <code>count()</code>, <code>find()</code>\uB97C \uD65C\uC6A9\uD55C\uB2E4. \uC790\uC138\uD55C \uC0AC\uC6A9\uBC95\uC740 <a href="#a-%EC%B0%B8%EC%A1%B0">A. \uCC38\uC870</a>\uC7A5 \uCC38\uC870</p><h2 id="\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uCF54\uB4DC</h2>',5),d=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<algorithm>")]),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    string S`),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" cntByAlp"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"26"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    cin `),n("span",{class:"token operator"},">>"),s(" S"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token function"},"transform"),n("span",{class:"token punctuation"},"("),s("S"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" S"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" S"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s("toupper"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"char"),s(" x"),n("span",{class:"token operator"},":"),s(" S"),n("span",{class:"token punctuation"},")"),s(`
        cntByAlp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},")"),s("x"),n("span",{class:"token operator"},"-"),n("span",{class:"token char"},"'A'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"int"),s(" maxCnt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token function"},"max_element"),n("span",{class:"token punctuation"},"("),s("cntByAlp"),n("span",{class:"token punctuation"},","),s(" cntByAlp"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"26"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token function"},"count"),n("span",{class:"token punctuation"},"("),s("cntByAlp"),n("span",{class:"token punctuation"},","),s(" cntByAlp"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"26"),n("span",{class:"token punctuation"},","),s(" maxCnt"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token char"},"'?'"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"else"),s(`
        cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"char"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token char"},"'A'"),n("span",{class:"token operator"},"+"),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("cntByAlp"),n("span",{class:"token punctuation"},","),s(" cntByAlp"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"26"),n("span",{class:"token punctuation"},","),s(" maxCnt"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),s("cntByAlp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("h2",{id:"a-\u110E\u1161\u11B7\u110C\u1169",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#a-\u110E\u1161\u11B7\u110C\u1169","aria-hidden":"true"},"#"),s(" A. \uCC38\uC870")],-1),h=n("em",null,"Tistory",-1),b={href:"https://cryptosalamander.tistory.com/12",target:"_blank",rel:"noopener noreferrer"},_=n("em",null,"Tistory",-1),f={href:"https://artist-developer.tistory.com/28",target:"_blank",rel:"noopener noreferrer"},y={href:"http://cplusplus.com",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cplusplus.com/reference/algorithm/max_element/",target:"_blank",rel:"noopener noreferrer"},w={href:"http://cplusplus.com",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.cplusplus.com/reference/algorithm/find/",target:"_blank",rel:"noopener noreferrer"},A=n("em",null,"Tistory",-1),x={href:"https://torbjorn.tistory.com/265",target:"_blank",rel:"noopener noreferrer"},C=n("em",null,"Tistory",-1),B={href:"https://boycoding.tistory.com/233",target:"_blank",rel:"noopener noreferrer"},N={href:"http://stackoverflow.com",target:"_blank",rel:"noopener noreferrer"},T={href:"https://stackoverflow.com/questions/559581/casting-a-function-pointer-to-another-type",target:"_blank",rel:"noopener noreferrer"};function M(O,S){const o=t("CodeTabs"),a=t("ExternalLinkIcon");return l(),p("div",null,[k,e(o,{id:"13",data:[{title:"C++"}]},{tab0:r(({title:E,value:V,isActive:j})=>[d]),_:1}),m,n("p",null,[s('cryptosalamander, "[\uBC31\uC900 / BOJ] - 1157\uBC88 \uB2E8\uC5B4 \uACF5\uBD80 C++ \uD480\uC774," '),h,s(", Feb. 3, 2020. [Online]. Available: "),n("a",b,[s("https://cryptosalamander.tistory.com/12"),e(a)]),s(" [Accessed May 13, 2022].")]),n("p",null,[s('\uAC1C\uBC1C\uC790 \uAE40\uBAA8\uC528, "[C++] transform \uD568\uC218," '),_,s(", Nov. 3, 2020. [Online]. Available: "),n("a",f,[s("https://artist-developer.tistory.com/28"),e(a)]),s(" [Accessed May 13, 2022].")]),n("p",null,[s('The C++ Resources Network, "std::max_element," '),n("em",null,[n("a",y,[s("cplusplus.com"),e(a)])]),s(", [Online]. Available: "),n("a",v,[s("https://www.cplusplus.com/reference/algorithm/max_element/"),e(a)]),s(" [Accessed May 13, 2022].")]),n("p",null,[s('The C++ Resources Network, "std::find," '),n("em",null,[n("a",w,[s("cplusplus.com"),e(a)])]),s(", [Online]. Available: "),n("a",g,[s("https://www.cplusplus.com/reference/algorithm/find/"),e(a)]),s(" [Accessed May 13, 2022].")]),n("p",null,[s('\uD1A0\uB974\uBE44\uC698, "C++ vector\uC5D0 \uC874\uC7AC\uD558\uB294 \uC6D0\uC18C\uC758 \uC778\uB371\uC2A4 \uCC3E\uAE30," '),A,s(", Apr. 29, 2020. [Online]. Available: "),n("a",x,[s("https://torbjorn.tistory.com/265"),e(a)]),s(" [Accessed May 13, 2022].")]),n("p",null,[s('\uC18C\uB144\uCF54\uB529, "C++ 08.09 - \uD568\uC218 \uD3EC\uC778\uD130 (function pointer)," '),C,s(", Feb. 11, 2019. [Online]. Available: "),n("a",B,[s("https://boycoding.tistory.com/233"),e(a)]),s(" [Accessed May 13, 2022].")]),n("p",null,[s('Mike Weller, "Casting a function pointer to another type," '),n("em",null,[n("a",N,[s("stackoverflow.com"),e(a)])]),s(", May 23, 2017. [Online]. Available: "),n("a",T,[s("https://stackoverflow.com/questions/559581/casting-a-function-pointer-to-another-type"),e(a)]),s(" [Accessed May 13, 2022].")])])}const I=c(u,[["render",M],["__file","5-1157.html.vue"]]);export{I as default};