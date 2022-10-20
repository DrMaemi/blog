import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,d as c,w as p,e as l,r as u,a as n,b as s}from"./app.80bc226f.js";const i={},r=l('<figure class="opengraph"><a href="https://www.acmicpc.net/problem/11286" data-source-url="https://www.acmicpc.net/problem/11286"><div class="og-image" style="background-image:url(&#39;https://drive.google.com/uc?export=view&amp;id=1nCax5mgwtYA82T46I_ntU1afsBBNkrLr&#39;);"></div><div class="og-text"><p class="og-title">11286\uBC88: \uC808\uB300\uAC12 \uD799</p><p class="og-desc">\uC808\uB313\uAC12 \uD799\uC740 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC5F0\uC0B0\uC744 \uC9C0\uC6D0\uD558\uB294 \uC790\uB8CC\uAD6C\uC870\uC774\uB2E4. \uBC30\uC5F4\uC5D0 \uC815\uC218 x (x \u2260 0)\uB97C \uB123\uB294\uB2E4. \uBC30\uC5F4\uC5D0\uC11C \uC808\uB313\uAC12\uC774 \uAC00\uC7A5 \uC791\uC740 \uAC12\uC744 \uCD9C\uB825\uD558\uACE0, \uADF8 \uAC12\uC744 \uBC30\uC5F4\uC5D0\uC11C \uC81C\uAC70\uD55C\uB2E4. \uC808\uB313\uAC12\uC774 \uAC00\uC7A5 \uC791\uC740 \uAC12\uC774 \uC5EC\uB7EC\uAC1C\uC77C \uB54C\uB294, \uAC00\uC7A5 \uC791\uC740 \uC218\uB97C \uCD9C\uB825\uD558\uACE0, \uADF8 \uAC12\uC744 \uBC30\uC5F4\uC5D0\uC11C \uC81C\uAC70\uD55C\uB2E4. \uD504\uB85C\uADF8\uB7A8\uC740 \uCC98\uC74C\uC5D0 \uBE44\uC5B4\uC788\uB294 \uBC30\uC5F4\uC5D0\uC11C \uC2DC\uC791\uD558\uAC8C \uB41C\uB2E4.</p><p class="og-host">www.acmicpc.net</p></div></a></figure><h2 id="\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uCF54\uB4DC</h2>',2),k=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<queue>")]),s(`

`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token class-name"},"pq_compare"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token keyword"},"operator"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},"&"),s(" lhs"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},"&"),s(" rhs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),s("lhs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),s("rhs"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),s("lhs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),s("rhs"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" lhs "),n("span",{class:"token operator"},">"),s(" rhs"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ios`),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"sync_with_stdio"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cin`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cout`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"int"),s(" N"),n("span",{class:"token punctuation"},";"),s(`
    priority_queue`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},","),s(" vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" pq_compare"),n("span",{class:"token operator"},">"),s(" pq"),n("span",{class:"token punctuation"},";"),s(`

    cin `),n("span",{class:"token operator"},">>"),s(" N"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("N"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" x"),n("span",{class:"token punctuation"},";"),s(`
        cin `),n("span",{class:"token operator"},">>"),s(" x"),n("span",{class:"token punctuation"},";"),s(`
        
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("pq"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                cout `),n("span",{class:"token operator"},"<<"),s(" pq"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"top"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"\\n"'),n("span",{class:"token punctuation"},";"),s(`
                pq`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
                cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"\\n"'),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            pq`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function d(m,b){const a=u("CodeTabs");return e(),o("div",null,[r,c(a,{id:"4",data:[{title:"C++"}]},{tab0:p(({title:v,value:w,isActive:h})=>[k]),_:1})])}const _=t(i,[["render",d],["__file","3-11286.html.vue"]]);export{_ as default};