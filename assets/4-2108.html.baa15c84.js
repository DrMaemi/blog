import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as e,d as c,w as p,e as u,r as l,a as n,b as s}from"./app.aca2c8b2.js";const i={},k=u('<figure class="opengraph"><a href="https://www.acmicpc.net/problem/2108" data-source-url="https://www.acmicpc.net/problem/2108"><div class="og-image" style="background-image:url(&#39;https://drive.google.com/uc?export=view&amp;id=1nCax5mgwtYA82T46I_ntU1afsBBNkrLr&#39;);"></div><div class="og-text"><p class="og-title">2108\uBC88: \uD1B5\uACC4\uD559</p><p class="og-desc">\uC218\uB97C \uCC98\uB9AC\uD558\uB294 \uAC83\uC740 \uD1B5\uACC4\uD559\uC5D0\uC11C \uC0C1\uB2F9\uD788 \uC911\uC694\uD55C \uC77C\uC774\uB2E4. \uD1B5\uACC4\uD559\uC5D0\uC11C N\uAC1C\uC758 \uC218\uB97C \uB300\uD45C\uD558\uB294 \uAE30\uBCF8 \uD1B5\uACC4\uAC12\uC5D0\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uAC83\uB4E4\uC774 \uC788\uB2E4. \uB2E8, N\uC740 \uD640\uC218\uB77C\uACE0 \uAC00\uC815\uD558\uC790.</p><p class="og-host">www.acmicpc.net</p></div></a></figure><h2 id="\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uD480\uC774</h2><p>\uBC18\uC62C\uB9BC\uC744 \uC704\uD574 <code>&lt;cmath&gt;</code>\uD5E4\uB354\uC758 <code>round</code>\uB97C \uC0AC\uC6A9\uD55C\uB2E4. \uCD5C\uBE48\uAC12\uC744 \uC54C\uAE30 \uC704\uD574 \uB9F5 \uC790\uB8CC\uAD6C\uC870\uB97C \uC0AC\uC6A9\uD574\uC11C \uC22B\uC790 \uBCC4 \uB4F1\uC7A5 \uD69F\uC218\uB97C \uCE74\uC6B4\uD2B8\uD558\uACE0, <code>&lt;algorithm&gt;</code>\uD5E4\uB354\uC758 <code>max_element</code> \uD568\uC218\uC640 \uB78C\uB2E4 \uD568\uC218\uB97C \uC774\uC6A9\uD574 \uBE44\uAD50 \uD568\uC218\uB97C \uC791\uC131\uD558\uC5EC \uCD5C\uBE48 \uC22B\uC790\uB97C \uC54C\uC544\uB0B8\uB2E4. \uC774 \uB54C \uCD5C\uBE48 \uC22B\uC790\uAC00 \uC5EC\uB7EC \uAC1C\uC778 \uACBD\uC6B0\uB97C \uD310\uB2E8\uD558\uAE30 \uC704\uD55C \uB85C\uC9C1\uC744 \uB530\uB85C \uAD6C\uD604\uD574\uC57C \uD558\uB294 \uC810\uC5D0 \uC720\uC758\uD55C\uB2E4.</p><h2 id="\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uCF54\uB4DC</h2>',4),r=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<vector>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<unordered_map>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<algorithm>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<cmath>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<numeric>")]),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ios`),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"sync_with_stdio"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cin`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cout`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"int"),s(" N"),n("span",{class:"token punctuation"},";"),s(`
    vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" V"),n("span",{class:"token punctuation"},";"),s(`
    unordered_map`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" M"),n("span",{class:"token punctuation"},";"),s(`

    cin `),n("span",{class:"token operator"},">>"),s(" N"),n("span",{class:"token punctuation"},";"),s(`
    V`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resize"),n("span",{class:"token punctuation"},"("),s("N"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("N"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        cin `),n("span",{class:"token operator"},">>"),s(" V"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("M"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("V"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(" M"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            M`),n("span",{class:"token punctuation"},"["),s("V"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        M`),n("span",{class:"token punctuation"},"["),s("V"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s("V"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" V"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"int"),s(" mean "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"round"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"accumulate"),n("span",{class:"token punctuation"},"("),s("V"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" V"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0.0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("V"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" median "),n("span",{class:"token operator"},"="),s(" V"),n("span",{class:"token punctuation"},"["),s("V"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"auto"),s(" maxFreqItr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"max_element"),n("span",{class:"token punctuation"},"("),s("M"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" M"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token keyword"},"auto"),n("span",{class:"token operator"},"&"),s(" lhs"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token keyword"},"auto"),n("span",{class:"token operator"},"&"),s(" rhs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" lhs"),n("span",{class:"token punctuation"},"."),s("second "),n("span",{class:"token operator"},"<"),s(" rhs"),n("span",{class:"token punctuation"},"."),s("second"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" range "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token function"},"max_element"),n("span",{class:"token punctuation"},"("),s("V"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" V"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},"*"),n("span",{class:"token function"},"min_element"),n("span",{class:"token punctuation"},"("),s("V"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" V"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" maxFreqNums"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"auto"),s(" itr"),n("span",{class:"token operator"},"="),s("M"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" itr"),n("span",{class:"token operator"},"!="),s("M"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" itr"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("itr"),n("span",{class:"token operator"},"->"),s("second "),n("span",{class:"token operator"},"=="),s(" maxFreqItr"),n("span",{class:"token operator"},"->"),s("second"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            maxFreqNums`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("itr"),n("span",{class:"token operator"},"->"),s("first"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s("maxFreqNums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" maxFreqNums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" maxFreqNum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"<"),s(" maxFreqNums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"?"),s(" maxFreqNums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),s(" maxFreqNums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

    cout `),n("span",{class:"token operator"},"<<"),s(" mean "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"\\n"'),n("span",{class:"token punctuation"},";"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(" median "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"\\n"'),n("span",{class:"token punctuation"},";"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(" maxFreqNum "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"\\n"'),n("span",{class:"token punctuation"},";"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(" range "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"\\n"'),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function d(m,b){const a=l("CodeTabs");return o(),e("div",null,[k,c(a,{id:"10",data:[{title:"C++"}]},{tab0:p(({title:v,value:f,isActive:h})=>[r]),_:1})])}const y=t(i,[["render",d],["__file","4-2108.html.vue"]]);export{y as default};
