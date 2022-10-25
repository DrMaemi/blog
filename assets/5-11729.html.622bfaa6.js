import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,d as c,w as p,e as l,r as i,a as n,b as s}from"./app.6b3c7dfe.js";const u={},r=l('<figure class="opengraph"><a href="https://www.acmicpc.net/problem/11729" data-source-url="https://www.acmicpc.net/problem/11729"><div class="og-image" style="background-image:url(&#39;https://drive.google.com/uc?export=view&amp;id=1nCax5mgwtYA82T46I_ntU1afsBBNkrLr&#39;);"></div><div class="og-text"><p class="og-title">11729\uBC88: \uD558\uB178\uC774 \uD0D1 \uC774\uB3D9 \uC21C\uC11C</p><p class="og-desc"> \uC138 \uAC1C\uC758 \uC7A5\uB300\uAC00 \uC788\uACE0 \uCCAB \uBC88\uC9F8 \uC7A5\uB300\uC5D0\uB294 \uBC18\uACBD\uC774 \uC11C\uB85C \uB2E4\uB978 n\uAC1C\uC758 \uC6D0\uD310\uC774 \uC313\uC5EC \uC788\uB2E4. \uAC01 \uC6D0\uD310\uC740 \uBC18\uACBD\uC774 \uD070 \uC21C\uC11C\uB300\uB85C \uC313\uC5EC\uC788\uB2E4. \uC774\uC81C \uC218\uB3C4\uC2B9\uB4E4\uC774 \uB2E4\uC74C \uADDC\uCE59\uC5D0 \uB530\uB77C \uCCAB \uBC88\uC9F8 \uC7A5\uB300\uC5D0\uC11C \uC138 \uBC88\uC9F8 \uC7A5\uB300\uB85C \uC62E\uAE30\uB824 \uD55C\uB2E4. \uD55C \uBC88\uC5D0 \uD55C \uAC1C\uC758 \uC6D0\uD310\uB9CC\uC744 \uB2E4\uB978 \uD0D1\uC73C\uB85C \uC62E\uAE38 \uC218 \uC788\uB2E4. \uC313\uC544 \uB193\uC740 \uC6D0\uD310\uC740 \uD56D\uC0C1 \uC704\uC758 \uAC83\uC774 \uC544\uB798\uC758 \uAC83\uBCF4\uB2E4 \uC791\uC544\uC57C \uD55C\uB2E4. \uC774 \uC791\uC5C5\uC744 \uC218\uD589\uD558\uB294\uB370 \uD544\uC694\uD55C \uC774\uB3D9 \uC21C\uC11C\uB97C \uCD9C\uB825\uD558\uB294 \uD504\uB85C\uADF8\uB7A8\uC744 \uC791\uC131\uD558\uB77C. \uB2E8, \uC774\uB3D9 \uD69F\uC218\uB294 \uCD5C\uC18C\uAC00 \uB418\uC5B4\uC57C \uD55C\uB2E4.</p><p class="og-host">www.acmicpc.net</p></div></a></figure><h2 id="\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uCF54\uB4DC</h2>',2),k=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`

`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"hanoi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" n"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" from"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" via"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" to"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%d %d\\n"'),n("span",{class:"token punctuation"},","),s(" from"),n("span",{class:"token punctuation"},","),s(" to"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token function"},"hanoi"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" from"),n("span",{class:"token punctuation"},","),s(" to"),n("span",{class:"token punctuation"},","),s(" via"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%d %d\\n"'),n("span",{class:"token punctuation"},","),s(" from"),n("span",{class:"token punctuation"},","),s(" to"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"hanoi"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" via"),n("span",{class:"token punctuation"},","),s(" from"),n("span",{class:"token punctuation"},","),s(" to"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" N"),n("span",{class:"token punctuation"},";"),s(`
    cin `),n("span",{class:"token operator"},">>"),s(" N"),n("span",{class:"token punctuation"},";"),s(`

    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"<<"),s(" N"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"\\n"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"hanoi"),n("span",{class:"token punctuation"},"("),s("N"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function d(m,b){const a=i("CodeTabs");return e(),o("div",null,[r,c(a,{id:"4",data:[{title:"C++"}]},{tab0:p(({title:v,value:f,isActive:w})=>[k]),_:1})])}const _=t(u,[["render",d],["__file","5-11729.html.vue"]]);export{_ as default};