import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,d as c,w as p,e as l,r as i,a as n,b as s}from"./app.686dda16.js";const u={},r=l('<figure class="opengraph"><a href="https://www.acmicpc.net/problem/11866" data-source-url="https://www.acmicpc.net/problem/11866"><div class="og-image" style="background-image:url(&#39;https://drive.google.com/uc?export=view&amp;id=1nCax5mgwtYA82T46I_ntU1afsBBNkrLr&#39;);"></div><div class="og-text"><p class="og-title">11866\uBC88: \uC694\uC138\uD478\uC2A4 \uBB38\uC81C 0</p><p class="og-desc">\uC694\uC138\uD478\uC2A4 \uBB38\uC81C\uB294 \uB2E4\uC74C\uACFC \uAC19\uB2E4. 1\uBC88\uBD80\uD130 N\uBC88\uAE4C\uC9C0 N\uBA85\uC758 \uC0AC\uB78C\uC774 \uC6D0\uC744 \uC774\uB8E8\uBA74\uC11C \uC549\uC544\uC788\uACE0, \uC591\uC758 \uC815\uC218 K(\u2264 N)\uAC00 \uC8FC\uC5B4\uC9C4\uB2E4. \uC774\uC81C \uC21C\uC11C\uB300\uB85C K\uBC88\uC9F8 \uC0AC\uB78C\uC744 \uC81C\uAC70\uD55C\uB2E4. \uD55C \uC0AC\uB78C\uC774 \uC81C\uAC70\uB418\uBA74 \uB0A8\uC740 \uC0AC\uB78C\uB4E4\uB85C \uC774\uB8E8\uC5B4\uC9C4 \uC6D0\uC744 \uB530\uB77C \uC774 \uACFC\uC815\uC744 \uACC4\uC18D\uD574 \uB098\uAC04\uB2E4. \uC774 \uACFC\uC815\uC740 N\uBA85\uC758 \uC0AC\uB78C\uC774 \uBAA8\uB450 \uC81C\uAC70\uB420 \uB54C\uAE4C\uC9C0 \uACC4\uC18D\uB41C\uB2E4. \uC6D0\uC5D0\uC11C \uC0AC\uB78C\uB4E4\uC774 \uC81C\uAC70\uB418\uB294 \uC21C\uC11C\uB97C (N, K)-\uC694\uC138\uD478\uC2A4 \uC21C\uC5F4\uC774\uB77C\uACE0 \uD55C\uB2E4. \uC608\uB97C \uB4E4\uC5B4 (7, 3)-\uC694\uC138\uD478\uC2A4 \uC21C\uC5F4\uC740 &lt;3, 6, 2, 7, 5, 1, 4&gt;\uC774\uB2E4.</p><p class="og-host">www.acmicpc.net</p></div></a></figure><h2 id="\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uCF54\uB4DC</h2>',2),k=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<vector>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<deque>")]),s(`

`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" N"),n("span",{class:"token punctuation"},","),s(" K"),n("span",{class:"token punctuation"},";"),s(`
    deque`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" dq"),n("span",{class:"token punctuation"},";"),s(`
    vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" ans"),n("span",{class:"token punctuation"},";"),s(`

    cin `),n("span",{class:"token operator"},">>"),s(" N "),n("span",{class:"token operator"},">>"),s(" K"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<="),s("N"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        dq`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("dq"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("K"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            dq`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("dq"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"front"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            dq`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop_front"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        ans`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("dq"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"front"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        dq`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop_front"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"<"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("size_t i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("ans"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        cout `),n("span",{class:"token operator"},"<<"),s(" ans"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'", "'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    cout `),n("span",{class:"token operator"},"<<"),s(" ans"),n("span",{class:"token punctuation"},"["),s("ans"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'">"'),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function d(m,v){const a=i("CodeTabs");return e(),o("div",null,[r,c(a,{id:"4",data:[{title:"C++"}]},{tab0:p(({title:b,value:f,isActive:w})=>[k]),_:1})])}const g=t(u,[["render",d],["__file","3-11866.html.vue"]]);export{g as default};