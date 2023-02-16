import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as e,d as c,w as p,e as l,r as u,a as n,b as s}from"./app.7d828366.js";const i={},r=l('<figure class="opengraph"><a href="https://www.acmicpc.net/problem/11404" data-source-url="https://www.acmicpc.net/problem/11404"><div class="og-image" style="background-image:url(&#39;https://drive.google.com/uc?export=view&amp;id=1nCax5mgwtYA82T46I_ntU1afsBBNkrLr&#39;);"></div><div class="og-text"><p class="og-title">11404\uBC88: \uD0C0\uC784\uBA38\uC2E0</p><p class="og-desc">n(2 \u2264 n \u2264 100)\uAC1C\uC758 \uB3C4\uC2DC\uAC00 \uC788\uB2E4. \uADF8\uB9AC\uACE0 \uD55C \uB3C4\uC2DC\uC5D0\uC11C \uCD9C\uBC1C\uD558\uC5EC \uB2E4\uB978 \uB3C4\uC2DC\uC5D0 \uB3C4\uCC29\uD558\uB294 m(1 \u2264 m \u2264 100,000)\uAC1C\uC758 \uBC84\uC2A4\uAC00 \uC788\uB2E4. \uAC01 \uBC84\uC2A4\uB294 \uD55C \uBC88 \uC0AC\uC6A9\uD560 \uB54C \uD544\uC694\uD55C \uBE44\uC6A9\uC774 \uC788\uB2E4. \uBAA8\uB4E0 \uB3C4\uC2DC\uC758 \uC30D (A, B)\uC5D0 \uB300\uD574\uC11C \uB3C4\uC2DC A\uC5D0\uC11C B\uB85C \uAC00\uB294\uB370 \uD544\uC694\uD55C \uBE44\uC6A9\uC758 \uCD5C\uC19F\uAC12\uC744 \uAD6C\uD558\uB294 \uD504\uB85C\uADF8\uB7A8\uC744 \uC791\uC131\uD558\uC2DC\uC624.</p><p class="og-host">www.acmicpc.net</p></div></a></figure><h2 id="\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uCF54\uB4DC</h2>',2),k=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<vector>")]),s(`

`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"define"),s(),n("span",{class:"token macro-name"},"INF"),s(),n("span",{class:"token expression"},[n("span",{class:"token number"},"1e9")])]),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"floydWarshall"),n("span",{class:"token punctuation"},"("),s("vector"),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},"&"),s(" adjMatrix"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" n "),n("span",{class:"token operator"},"="),s(" adjMatrix"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" via"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" via"),n("span",{class:"token operator"},"<"),s("n"),n("span",{class:"token punctuation"},";"),s(" via"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" u"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" u"),n("span",{class:"token operator"},"<"),s("n"),n("span",{class:"token punctuation"},";"),s(" u"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" v"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" v"),n("span",{class:"token operator"},"<"),s("n"),n("span",{class:"token punctuation"},";"),s(" v"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                adjMatrix`),n("span",{class:"token punctuation"},"["),s("u"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("v"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("adjMatrix"),n("span",{class:"token punctuation"},"["),s("u"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("v"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" adjMatrix"),n("span",{class:"token punctuation"},"["),s("u"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("via"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"+"),s("adjMatrix"),n("span",{class:"token punctuation"},"["),s("via"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("v"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" u"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" u"),n("span",{class:"token operator"},"<"),s("n"),n("span",{class:"token punctuation"},";"),s(" u"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        adjMatrix`),n("span",{class:"token punctuation"},"["),s("u"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("u"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ios`),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"sync_with_stdio"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cin`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cout`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"int"),s(" n"),n("span",{class:"token punctuation"},","),s(" m"),n("span",{class:"token punctuation"},";"),s(`
    cin `),n("span",{class:"token operator"},">>"),s(" n "),n("span",{class:"token operator"},">>"),s(" m"),n("span",{class:"token punctuation"},";"),s(`
    vector`),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token function"},"adjMatrix"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"vector"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},","),s(" INF"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("m"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},";"),s(`
        cin `),n("span",{class:"token operator"},">>"),s(" a "),n("span",{class:"token operator"},">>"),s(" b "),n("span",{class:"token operator"},">>"),s(" c"),n("span",{class:"token punctuation"},";"),s(`
        a`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
        b`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
        adjMatrix`),n("span",{class:"token punctuation"},"["),s("a"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("b"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("adjMatrix"),n("span",{class:"token punctuation"},"["),s("a"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("b"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token function"},"floydWarshall"),n("span",{class:"token punctuation"},"("),s("adjMatrix"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" u"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" u"),n("span",{class:"token operator"},"<"),s("n"),n("span",{class:"token punctuation"},";"),s(" u"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" v"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" v"),n("span",{class:"token operator"},"<"),s("n"),n("span",{class:"token punctuation"},";"),s(" v"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token punctuation"},"("),s("adjMatrix"),n("span",{class:"token punctuation"},"["),s("u"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("v"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(" INF"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token operator"},":"),s(" adjMatrix"),n("span",{class:"token punctuation"},"["),s("u"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("v"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token char"},"' '"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token char"},"'\\n'"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function d(m,v){const a=u("CodeTabs");return o(),e("div",null,[r,c(a,{id:"4",data:[{title:"C++"}]},{tab0:p(({title:b,value:w,isActive:f})=>[k]),_:1})])}const x=t(i,[["render",d],["__file","6-11404.html.vue"]]);export{x as default};