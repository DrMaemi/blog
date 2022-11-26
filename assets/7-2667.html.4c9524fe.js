import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as e,d as c,w as p,e as l,r as u,a as n,b as s}from"./app.7caaad76.js";const i={},r=l('<figure class="opengraph"><a href="https://www.acmicpc.net/problem/2667" data-source-url="https://www.acmicpc.net/problem/2667"><div class="og-image" style="background-image:url(&#39;https://drive.google.com/uc?export=view&amp;id=1nCax5mgwtYA82T46I_ntU1afsBBNkrLr&#39;);"></div><div class="og-text"><p class="og-title">2667\uBC88: \uB2E8\uC9C0\uBC88\uD638\uBD99\uC774\uAE30</p><p class="og-desc">&lt;\uADF8\uB9BC 1&gt;\uACFC \uAC19\uC774 \uC815\uC0AC\uAC01\uD615 \uBAA8\uC591\uC758 \uC9C0\uB3C4\uAC00 \uC788\uB2E4. 1\uC740 \uC9D1\uC774 \uC788\uB294 \uACF3\uC744, 0\uC740 \uC9D1\uC774 \uC5C6\uB294 \uACF3\uC744 \uB098\uD0C0\uB0B8\uB2E4. \uCCA0\uC218\uB294 \uC774 \uC9C0\uB3C4\uB97C \uAC00\uC9C0\uACE0 \uC5F0\uACB0\uB41C \uC9D1\uC758 \uBAA8\uC784\uC778 \uB2E8\uC9C0\uB97C \uC815\uC758\uD558\uACE0, \uB2E8\uC9C0\uC5D0 \uBC88\uD638\uB97C \uBD99\uC774\uB824 \uD55C\uB2E4. \uC5EC\uAE30\uC11C \uC5F0\uACB0\uB418\uC5C8\uB2E4\uB294 \uAC83\uC740 \uC5B4\uB5A4 \uC9D1\uC774 \uC88C\uC6B0, \uD639\uC740 \uC544\uB798\uC704\uB85C \uB2E4\uB978 \uC9D1\uC774 \uC788\uB294 \uACBD\uC6B0\uB97C \uB9D0\uD55C\uB2E4. \uB300\uAC01\uC120\uC0C1\uC5D0 \uC9D1\uC774 \uC788\uB294 \uACBD\uC6B0\uB294 \uC5F0\uACB0\uB41C \uAC83\uC774 \uC544\uB2C8\uB2E4. &lt;\uADF8\uB9BC 2&gt;\uB294 &lt;\uADF8\uB9BC 1&gt;\uC744 \uB2E8\uC9C0\uBCC4\uB85C \uBC88\uD638\uB97C \uBD99\uC778 \uAC83\uC774\uB2E4. \uC9C0\uB3C4\uB97C \uC785\uB825\uD558\uC5EC \uB2E8\uC9C0\uC218\uB97C \uCD9C\uB825\uD558\uACE0, \uAC01 \uB2E8\uC9C0\uC5D0 \uC18D\uD558\uB294 \uC9D1\uC758 \uC218\uB97C \uC624\uB984\uCC28\uC21C\uC73C\uB85C \uC815\uB82C\uD558\uC5EC \uCD9C\uB825\uD558\uB294 \uD504\uB85C\uADF8\uB7A8\uC744 \uC791\uC131\uD558\uC2DC\uC624.</p><p class="og-host">www.acmicpc.net</p></div></a></figure><h2 id="\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uCF54\uB4DC</h2>',2),k=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<vector>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<algorithm>")]),s(`

`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token class-name"},"Location"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" r"),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(" N"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"int"),s(" dr"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s("  "),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"int"),s(" dc"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s("  "),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
vector`),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token operator"},">"),s(" world"),n("span",{class:"token punctuation"},";"),s(`
vector`),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"bool"),n("span",{class:"token operator"},">>"),s(" visited"),n("span",{class:"token punctuation"},";"),s(`
vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" cntByNum"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"bfs"),n("span",{class:"token punctuation"},"("),s("Location start"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" cnt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    visited`),n("span",{class:"token punctuation"},"["),s("start"),n("span",{class:"token punctuation"},"."),s("r"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("start"),n("span",{class:"token punctuation"},"."),s("c"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    vector`),n("span",{class:"token operator"},"<"),s("Location"),n("span",{class:"token operator"},">"),s(" q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("start"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        vector`),n("span",{class:"token operator"},"<"),s("Location"),n("span",{class:"token operator"},">"),s(" nq"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("Location cur"),n("span",{class:"token operator"},":"),s(" q"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"int"),s(" nr "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("r"),n("span",{class:"token operator"},"+"),s("dr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"int"),s(" nc "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("c"),n("span",{class:"token operator"},"+"),s("dc"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"<="),s(" nr "),n("span",{class:"token operator"},"&&"),s(" nr "),n("span",{class:"token operator"},"<"),s(" N "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"<="),s(" nc "),n("span",{class:"token operator"},"&&"),s(" nc "),n("span",{class:"token operator"},"<"),s(" N"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("world"),n("span",{class:"token punctuation"},"["),s("nr"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("nc"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token char"},"'1'"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("visited"),n("span",{class:"token punctuation"},"["),s("nr"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("nc"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                        visited`),n("span",{class:"token punctuation"},"["),s("nr"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("nc"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
                        nq`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("nr"),n("span",{class:"token punctuation"},","),s(" nc"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                        cnt`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        q `),n("span",{class:"token operator"},"="),s(" nq"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    cntByNum`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("cnt"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    cin `),n("span",{class:"token operator"},">>"),s(" N"),n("span",{class:"token punctuation"},";"),s(`

    world`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resize"),n("span",{class:"token punctuation"},"("),s("N"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    visited`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resize"),n("span",{class:"token punctuation"},"("),s("N"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"vector"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"bool"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("N"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("N"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        cin `),n("span",{class:"token operator"},">>"),s(" world"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" r"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" r"),n("span",{class:"token operator"},"<"),s("N"),n("span",{class:"token punctuation"},";"),s(" r"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" c"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" c"),n("span",{class:"token operator"},"<"),s("N"),n("span",{class:"token punctuation"},";"),s(" c"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("world"),n("span",{class:"token punctuation"},"["),s("r"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("c"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token char"},"'1'"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("visited"),n("span",{class:"token punctuation"},"["),s("r"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("c"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token function"},"bfs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("r"),n("span",{class:"token punctuation"},","),s(" c"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s("cntByNum"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" cntByNum"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    cout `),n("span",{class:"token operator"},"<<"),s(" cntByNum"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"\\n"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" cnt"),n("span",{class:"token operator"},":"),s(" cntByNum"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        cout `),n("span",{class:"token operator"},"<<"),s(" cnt "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"\\n"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function d(m,b){const a=u("CodeTabs");return o(),e("div",null,[r,c(a,{id:"4",data:[{title:"C++"}]},{tab0:p(({title:v,value:w,isActive:y})=>[k]),_:1})])}const h=t(i,[["render",d],["__file","7-2667.html.vue"]]);export{h as default};