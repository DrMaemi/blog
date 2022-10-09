import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,d as c,w as p,e as l,r as u,a as n,b as s}from"./app.aca2c8b2.js";const i={},r=l('<figure class="opengraph"><a href="https://school.programmers.co.kr/learn/courses/30/lessons/17677" data-source-url="https://school.programmers.co.kr/learn/courses/30/lessons/17677"><div class="og-image" style="background-image:url(&#39;https://drive.google.com/uc?export=view&amp;id=1J7HqHQeh0rWbRtmHtU9-1E36gTRhJX8N&#39;);"></div><div class="og-text"><p class="og-title">[2018 \uCE74\uCE74\uC624 \uBE14\uB77C\uC778\uB4DC \uCC44\uC6A9][1\uCC28] \uB274\uC2A4 \uD074\uB7EC\uC2A4\uD130\uB9C1</p><p class="og-desc">\uC5EC\uB7EC \uC5B8\uB860\uC0AC\uC5D0\uC11C \uC3DF\uC544\uC9C0\uB294 \uB274\uC2A4, \uD2B9\uD788 \uC18D\uBCF4\uC131 \uB274\uC2A4\uB97C \uBCF4\uBA74 \uBE44\uC2B7\uBE44\uC2B7\uD55C \uC81C\uBAA9\uC758 \uAE30\uC0AC\uAC00 \uB9CE\uC544 \uC815\uC791 \uD544\uC694\uD55C \uAE30\uC0AC\uB97C \uCC3E\uAE30\uAC00 \uC5B4\uB835\uB2E4. Daum \uB274\uC2A4\uC758 \uAC1C\uBC1C \uC5C5\uBB34\uB97C \uB9E1\uAC8C \uB41C \uC2E0\uC785\uC0AC\uC6D0 \uD29C\uBE0C\uB294 \uC0AC\uC6A9\uC790\uB4E4\uC774 \uD3B8\uB9AC\uD558\uAC8C \uB2E4\uC591\uD55C \uB274\uC2A4\uB97C \uCC3E\uC544\uBCFC \uC218 \uC788\uB3C4\uB85D \uBB38\uC81C\uC810\uC744 \uAC1C\uC120\uD558\uB294 \uC5C5\uBB34\uB97C \uB9E1\uAC8C \uB418\uC5C8\uB2E4. \uAC1C\uBC1C\uC758 \uBC29\uD5A5\uC744 \uC7A1\uAE30 \uC704\uD574 \uD29C\uBE0C\uB294 \uC6B0\uC120 \uCD5C\uADFC \uD654\uC81C\uAC00 \uB418\uACE0 \uC788\uB294 &quot;\uCE74\uCE74\uC624 \uC2E0\uC785 \uAC1C\uBC1C\uC790 \uACF5\uCC44&quot; \uAD00\uB828 \uAE30\uC0AC\uB97C \uAC80\uC0C9\uD574\uBCF4\uC558\uB2E4.</p><p class="og-host">https://programmers.co.kr/</p></div></a></figure><h2 id="\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uD480\uC774</h2><p>\uC5EC\uB7EC \uAC1C\uC758 \uC911\uBCF5 \uC694\uC18C\uB97C \uAC00\uC9C8 \uC218 \uC788\uB294 <code>multiset</code>, \uBB38\uC790 \uC790\uB8CC\uD615\uACFC \uC544\uC2A4\uD0A4 \uCF54\uB4DC, <code>algorithm</code> \uD5E4\uB354\uC758 <code>set_intersection</code>, <code>set_union</code> \uC0AC\uC6A9\uBC95\uC5D0 \uB300\uD574 \uC54C\uACE0 \uC788\uC73C\uBA74 \uBB38\uC81C\uC5D0\uC11C \uC124\uBA85\uD55C \uC870\uAC74\uC744 \uCC28\uBD84\uD788 \uAD6C\uD604\uD558\uC5EC \uD480 \uC218 \uC788\uB294 \uBB38\uC81C\uC600\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uCF54\uB4DC</h2>',4),k=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<string>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<vector>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<set>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<algorithm>")]),s(`

`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

string `),n("span",{class:"token function"},"lowerCase"),n("span",{class:"token punctuation"},"("),s("string allAlpStr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    string lowered `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"char"),s(" x"),n("span",{class:"token operator"},":"),s(" allAlpStr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        lowered `),n("span",{class:"token operator"},"+="),s(" x "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token char"},"'a'"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token char"},"'a'"),n("span",{class:"token operator"},"+"),s("x"),n("span",{class:"token operator"},"-"),n("span",{class:"token char"},"'A'"),n("span",{class:"token operator"},":"),s(" x"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"return"),s(" lowered"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token function"},"isAllAlp"),n("span",{class:"token punctuation"},"("),s("string str"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"char"),s(" x"),n("span",{class:"token operator"},":"),s(" str"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token char"},"'A'"),s(),n("span",{class:"token operator"},"<="),s(" x "),n("span",{class:"token operator"},"&&"),s(" x "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token char"},"'Z'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token char"},"'a'"),s(),n("span",{class:"token operator"},"<="),s(" x "),n("span",{class:"token operator"},"&&"),s(" x "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token char"},"'z'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"else"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
            
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"solution"),n("span",{class:"token punctuation"},"("),s("string str1"),n("span",{class:"token punctuation"},","),s(" string str2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    multiset`),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token operator"},">"),s(" str1MultiSet"),n("span",{class:"token punctuation"},","),s(" str2MultiSet"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("size_t i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("str1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        string sliced `),n("span",{class:"token operator"},"="),s(" str1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substr"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"isAllAlp"),n("span",{class:"token punctuation"},"("),s("sliced"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            str1MultiSet`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"lowerCase"),n("span",{class:"token punctuation"},"("),s("sliced"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("size_t i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("str2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        string sliced `),n("span",{class:"token operator"},"="),s(" str2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substr"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"isAllAlp"),n("span",{class:"token punctuation"},"("),s("sliced"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            str2MultiSet`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"lowerCase"),n("span",{class:"token punctuation"},"("),s("sliced"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    multiset`),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token operator"},">"),s(" interSet"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"set_intersection"),n("span",{class:"token punctuation"},"("),s(`
        str1MultiSet`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" str1MultiSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        str2MultiSet`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" str2MultiSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"inserter"),n("span",{class:"token punctuation"},"("),s("interSet"),n("span",{class:"token punctuation"},","),s(" interSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    
    multiset`),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token operator"},">"),s(" unionSet"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"set_union"),n("span",{class:"token punctuation"},"("),s(`
        str1MultiSet`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" str1MultiSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        str2MultiSet`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" str2MultiSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"inserter"),n("span",{class:"token punctuation"},"("),s("unionSet"),n("span",{class:"token punctuation"},","),s(" unionSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token keyword"},"int"),s(" answer "),n("span",{class:"token operator"},"="),s(" unionSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"65536"),n("span",{class:"token operator"},"*"),s("interSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("unionSet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"65536"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" answer"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function d(m,b){const a=u("CodeTabs");return e(),o("div",null,[r,c(a,{id:"10",data:[{title:"C++"}]},{tab0:p(({title:v,value:f,isActive:h})=>[k]),_:1})])}const y=t(i,[["render",d],["__file","17677.html.vue"]]);export{y as default};
