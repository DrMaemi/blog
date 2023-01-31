import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,d as c,w as p,e as l,r as i,a as n,b as s}from"./app.686dda16.js";const u={},r=l('<figure class="opengraph"><a href="https://www.acmicpc.net/problem/2606" data-source-url="https://www.acmicpc.net/problem/2606"><div class="og-image" style="background-image:url(&#39;https://drive.google.com/uc?export=view&amp;id=1nCax5mgwtYA82T46I_ntU1afsBBNkrLr&#39;);"></div><div class="og-text"><p class="og-title">2606\uBC88: \uBC14\uC774\uB7EC\uC2A4</p><p class="og-desc">\uC2E0\uC885 \uBC14\uC774\uB7EC\uC2A4\uC778 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uB294 \uB124\uD2B8\uC6CC\uD06C\uB97C \uD1B5\uD574 \uC804\uD30C\uB41C\uB2E4. \uD55C \uCEF4\uD4E8\uD130\uAC00 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uC5D0 \uAC78\uB9AC\uBA74 \uADF8 \uCEF4\uD4E8\uD130\uC640 \uB124\uD2B8\uC6CC\uD06C \uC0C1\uC5D0\uC11C \uC5F0\uACB0\uB418\uC5B4 \uC788\uB294 \uBAA8\uB4E0 \uCEF4\uD4E8\uD130\uB294 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uC5D0 \uAC78\uB9AC\uAC8C \uB41C\uB2E4.</p><p class="og-host">www.acmicpc.net</p></div></a></figure><h2 id="\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uCF54\uB4DC</h2>',2),k=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<vector>")]),s(`

`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(" N"),n("span",{class:"token punctuation"},","),s(" M"),n("span",{class:"token punctuation"},";"),s(`
vector`),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">>"),s(" adjs"),n("span",{class:"token punctuation"},";"),s(`
vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"bool"),n("span",{class:"token operator"},">"),s(" visited"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"int"),s(" cnt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" cur"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("visited"),n("span",{class:"token punctuation"},"["),s("cur"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
    
    cnt`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
    visited`),n("span",{class:"token punctuation"},"["),s("cur"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" nxt"),n("span",{class:"token operator"},":"),s(" adjs"),n("span",{class:"token punctuation"},"["),s("cur"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("nxt"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ios`),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"sync_with_stdio"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cin`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cout`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    cin `),n("span",{class:"token operator"},">>"),s(" N "),n("span",{class:"token operator"},">>"),s(" M"),n("span",{class:"token punctuation"},";"),s(`

    adjs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resize"),n("span",{class:"token punctuation"},"("),s("N"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    visited`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resize"),n("span",{class:"token punctuation"},"("),s("N"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("M"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" u"),n("span",{class:"token punctuation"},","),s(" v"),n("span",{class:"token punctuation"},";"),s(`
        cin `),n("span",{class:"token operator"},">>"),s(" u "),n("span",{class:"token operator"},">>"),s(" v"),n("span",{class:"token punctuation"},";"),s(`
        adjs`),n("span",{class:"token punctuation"},"["),s("u"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        adjs`),n("span",{class:"token punctuation"},"["),s("v"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("u"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    cout `),n("span",{class:"token operator"},"<<"),s(" cnt"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function d(m,v){const a=i("CodeTabs");return e(),o("div",null,[r,c(a,{id:"4",data:[{title:"C++"}]},{tab0:p(({title:b,value:w,isActive:f})=>[k]),_:1})])}const y=t(u,[["render",d],["__file","5-2606.html.vue"]]);export{y as default};