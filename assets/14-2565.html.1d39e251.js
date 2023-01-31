import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as i,a as n,b as s,d as a,w as t,e as u,r as e}from"./app.686dda16.js";const r={},k=u('<figure class="opengraph"><a href="https://www.acmicpc.net/problem/2565" data-source-url="https://www.acmicpc.net/problem/2565"><div class="og-image" style="background-image:url(&#39;https://drive.google.com/uc?export=view&amp;id=1nCax5mgwtYA82T46I_ntU1afsBBNkrLr&#39;);"></div><div class="og-text"><p class="og-title">2565\uBC88: \uC804\uAE43\uC904</p><p class="og-desc">\uB450 \uC804\uBD07\uB300 A\uC640 B \uC0AC\uC774\uC5D0 \uD558\uB098 \uB458\uC529 \uC804\uAE43\uC904\uC744 \uCD94\uAC00\uD558\uB2E4 \uBCF4\uB2C8 \uC804\uAE43\uC904\uC774 \uC11C\uB85C \uAD50\uCC28\uD558\uB294 \uACBD\uC6B0\uAC00 \uBC1C\uC0DD\uD558\uC600\uB2E4. \uD569\uC120\uC758 \uC704\uD5D8\uC774 \uC788\uC5B4 \uC774\uB4E4 \uC911 \uBA87 \uAC1C\uC758 \uC804\uAE43\uC904\uC744 \uC5C6\uC560 \uC804\uAE43\uC904\uC774 \uAD50\uCC28\uD558\uC9C0 \uC54A\uB3C4\uB85D \uB9CC\uB4E4\uB824\uACE0 \uD55C\uB2E4. \uC608\uB97C \uB4E4\uC5B4, &lt;\uADF8\uB9BC 1&gt;\uACFC \uAC19\uC774 \uC804\uAE43\uC904\uC774 \uC5F0\uACB0\uB418\uC5B4 \uC788\uB294 \uACBD\uC6B0 A\uC758 1\uBC88 \uC704\uCE58\uC640 B\uC758 8\uBC88 \uC704\uCE58\uB97C \uC787\uB294 \uC804\uAE43\uC904, A\uC758 3\uBC88 \uC704\uCE58\uC640 B\uC758 9\uBC88 \uC704\uCE58\uB97C \uC787\uB294 \uC804\uAE43\uC904, A\uC758 4\uBC88 \uC704\uCE58\uC640 B\uC758 1\uBC88 \uC704\uCE58\uB97C \uC787\uB294 \uC804\uAE43\uC904\uC744 \uC5C6\uC560\uBA74 \uB0A8\uC544\uC788\uB294 \uBAA8\uB4E0 \uC804\uAE43\uC904\uC774 \uC11C\uB85C \uAD50\uCC28\uD558\uC9C0 \uC54A\uAC8C \uB41C\uB2E4.</p><p class="og-host">www.acmicpc.net</p></div></a></figure><h2 id="\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uD480\uC774</h2>',2),d=n("h2",{id:"\u110F\u1169\u1103\u1173",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u110F\u1169\u1103\u1173","aria-hidden":"true"},"#"),s(" \uCF54\uB4DC")],-1),m=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<vector>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<algorithm>")]),s(`

`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" N"),n("span",{class:"token punctuation"},";"),s(`
    cin `),n("span",{class:"token operator"},">>"),s(" N"),n("span",{class:"token punctuation"},";"),s(`
    vector`),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">>"),s(" pairs"),n("span",{class:"token punctuation"},";"),s(`
    vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"LIS"),n("span",{class:"token punctuation"},"("),s("N"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("N"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},";"),s(`
        cin `),n("span",{class:"token operator"},">>"),s(" a "),n("span",{class:"token operator"},">>"),s(" b"),n("span",{class:"token punctuation"},";"),s(`
        pairs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s("pairs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" pairs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("N"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" j"),n("span",{class:"token operator"},"="),s("i"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token operator"},"<="),s("j"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("pairs"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" pairs"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                LIS`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("LIS"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" LIS"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    cout `),n("span",{class:"token operator"},"<<"),s(" N"),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},"*"),n("span",{class:"token function"},"max_element"),n("span",{class:"token punctuation"},"("),s("LIS"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" LIS"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function b(v,h){const o=e("RouterLink"),c=e("CodeTabs");return l(),i("div",null,[k,n("p",null,[s("\uBB38\uC81C \uC124\uBA85\uC744 \uBCF4\uBA74 \uC5B4\uB5BB\uAC8C \uD480\uC5B4\uC57C \uD558\uC9C0? \uC2F6\uC744 \uC218 \uC788\uC73C\uB098 LIS \uAE30\uBCF8 \uBB38\uC81C\uC778 "),a(o,{to:"/algorithm/boj/step-by-step/16-dynamic-programming-1/%7B%7Bsite.url%7D%7D/algorithm/baekjoon-online-judge/c++/step-by-step/16-dynamic-programming-1/12-cpp/"},{default:t(()=>[s("11053\uBC88: \uAC00\uC7A5 \uAE34 \uC99D\uAC00\uD558\uB294 \uBD80\uBD84 \uC218\uC5F4")]),_:1}),s("\uB97C \uAE30\uC5B5\uD55C\uB2E4\uBA74 \uACE7\uBC14\uB85C \uAC19\uC740 LIS \uBB38\uC81C\uC784\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC8FC\uC5B4\uC9C4 \uC804\uAE43\uC904 \uC785\uB825\uC744 \uBB38\uC81C\uC758 \uC804\uAE43\uC904 \uADF8\uB9BC\uACFC \uAC19\uC774 \uBC30\uC5F4\uD558\uAE30 \uC704\uD574 A \uC804\uBD07\uB300\uC758 \uAC12\uC73C\uB85C \uC815\uB82C\uD55C \uD6C4 B \uC804\uBD07\uB300\uC5D0 \uB300\uC751\uB418\uB294 \uAC12\uB4E4\uC5D0 \uB300\uD574 LIS\uC758 \uAE38\uC774\uB97C \uAD6C\uD558\uBA74 \uC804\uCCB4 \uCE35 \uAC1C\uC218\uC640 \uD574\uB2F9 \uAE38\uC774\uC758 \uCC28\uAC00 \uC815\uB2F5\uC785\uB2C8\uB2E4.")]),d,a(c,{id:"10",data:[{title:"C++"}]},{tab0:t(({title:g,value:w,isActive:f})=>[m]),_:1})])}const x=p(r,[["render",b],["__file","14-2565.html.vue"]]);export{x as default};