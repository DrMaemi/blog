import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c,d as o,w as p,e as l,r as i,a as n,b as s}from"./app.a781a7f7.js";const u={},r=l('<figure class="opengraph"><a href="https://www.acmicpc.net/problem/10815" data-source-url="https://www.acmicpc.net/problem/10815"><div class="og-image" style="background-image:url(&#39;https://drive.google.com/uc?export=view&amp;id=1nCax5mgwtYA82T46I_ntU1afsBBNkrLr&#39;);"></div><div class="og-text"><p class="og-title">10815\uBC88: \uC22B\uC790 \uCE74\uB4DC</p><p class="og-desc">\uC22B\uC790 \uCE74\uB4DC\uB294 \uC815\uC218 \uD558\uB098\uAC00 \uC801\uD600\uC838 \uC788\uB294 \uCE74\uB4DC\uC774\uB2E4. \uC0C1\uADFC\uC774\uB294 \uC22B\uC790 \uCE74\uB4DC N\uAC1C\uB97C \uAC00\uC9C0\uACE0 \uC788\uB2E4. \uC815\uC218 M\uAC1C\uAC00 \uC8FC\uC5B4\uC84C\uC744 \uB54C, \uC774 \uC218\uAC00 \uC801\uD600\uC788\uB294 \uC22B\uC790 \uCE74\uB4DC\uB97C \uC0C1\uADFC\uC774\uAC00 \uAC00\uC9C0\uACE0 \uC788\uB294\uC9C0 \uC544\uB2CC\uC9C0\uB97C \uAD6C\uD558\uB294 \uD504\uB85C\uADF8\uB7A8\uC744 \uC791\uC131\uD558\uC2DC\uC624.</p><p class="og-host">www.acmicpc.net</p></div></a></figure><h2 id="\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uD480\uC774</h2><p>\uC9D1\uD569 \uC790\uB8CC\uAD6C\uC870\uB97C \uC774\uC6A9\uD558\uB294 \uBB38\uC81C\uB2E4. <code>&lt;set&gt;.find(&lt;element&gt;) != &lt;set&gt;.end()</code>\uB97C \uC774\uC6A9\uD574 \uC9D1\uD569 \uB0B4 \uC694\uC18C\uC758 \uC874\uC7AC \uC720\uBB34\uB97C \uD655\uC778\uD560 \uC218 \uC788\uB2E4.</p><h2 id="\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uCF54\uB4DC</h2>',4),k=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<unordered_set>")]),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(" N"),n("span",{class:"token punctuation"},","),s(" M"),n("span",{class:"token punctuation"},";"),s(`
unordered_set`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" cards"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ios`),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"sync_with_stdio"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cin`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cout`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    cin `),n("span",{class:"token operator"},">>"),s(" N"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("N"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" card"),n("span",{class:"token punctuation"},";"),s(`
        cin `),n("span",{class:"token operator"},">>"),s(" card"),n("span",{class:"token punctuation"},";"),s(`
        cards`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("card"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    cin `),n("span",{class:"token operator"},">>"),s(" M"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("M"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" card"),n("span",{class:"token punctuation"},";"),s(`
        cin `),n("span",{class:"token operator"},">>"),s(" card"),n("span",{class:"token punctuation"},";"),s(`
        cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token punctuation"},"("),s("cards"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("card"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(" cards"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function d(m,b){const a=i("CodeTabs");return e(),c("div",null,[r,o(a,{id:"10",data:[{title:"C++"}]},{tab0:p(({title:v,value:h,isActive:w})=>[k]),_:1})])}const _=t(u,[["render",d],["__file","1-10815.html.vue"]]);export{_ as default};