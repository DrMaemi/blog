import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,d as c,w as p,e as l,r as u,a as n,b as s}from"./app.aca2c8b2.js";const i={},k=l('<figure class="opengraph"><a href="https://programmers.co.kr/learn/courses/30/lessons/42890" data-source-url="https://programmers.co.kr/learn/courses/30/lessons/42890"><div class="og-image" style="background-image:url(&#39;https://drive.google.com/uc?export=view&amp;id=1J7HqHQeh0rWbRtmHtU9-1E36gTRhJX8N&#39;);"></div><div class="og-text"><p class="og-title">[2019 \uCE74\uCE74\uC624 \uBE14\uB77C\uC778\uB4DC \uCC44\uC6A9] (\uB808\uBCA8 2) \uD6C4\uBCF4\uD0A4</p><p class="og-desc">\uD504\uB80C\uC988\uB300\uD559\uAD50 \uCEF4\uD4E8\uD130\uACF5\uD559\uACFC \uC870\uAD50\uC778 \uC81C\uC774\uC9C0\uB294 \uB124\uC624 \uD559\uACFC\uC7A5\uB2D8\uC758 \uC9C0\uC2DC\uB85C, \uD559\uC0DD\uB4E4\uC758 \uC778\uC801\uC0AC\uD56D\uC744 \uC815\uB9AC\uD558\uB294 \uC5C5\uBB34\uB97C \uB2F4\uB2F9\uD558\uAC8C \uB418\uC5C8\uB2E4. \uADF8\uC758 \uD559\uBD80 \uC2DC\uC808 \uD504\uB85C\uADF8\uB798\uBC0D \uACBD\uD5D8\uC744 \uB418\uC0B4\uB824, \uBAA8\uB4E0 \uC778\uC801\uC0AC\uD56D\uC744 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uB123\uAE30\uB85C \uD558\uC600\uACE0, \uC774\uB97C \uC704\uD574 \uC815\uB9AC\uB97C \uD558\uB358 \uC911\uC5D0 \uD6C4\uBCF4\uD0A4(Candidate Key)\uC5D0 \uB300\uD55C \uACE0\uBBFC\uC774 \uD544\uC694\uD558\uAC8C \uB418\uC5C8\uB2E4.</p><p class="og-host">https://programmers.co.kr/</p></div></a></figure><h2 id="\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uD480\uC774</h2><p>\uB9B4\uB808\uC774\uC158\uC758 \uC18D\uC131 \uAC1C\uC218\uB97C 1\uAC1C\uBD80\uD130 \uC804\uCCB4 \uAC1C\uC218\uAE4C\uC9C0 \uC120\uD0DD\uB41C \uC18D\uC131\uB4E4\uB85C \uAC01 \uD589\uC744 \uC2DD\uBCC4\uD560 \uC218 \uC788\uC73C\uBA74 \uD574\uB2F9 \uC18D\uC131 \uC9D1\uD569\uC740 \uB9B4\uB808\uC774\uC158\uC758 \uC288\uD37C\uD0A4\uAC00 \uB418\uBA70, \uACFC\uAC70\uC5D0 \uC120\uD0DD\uB41C \uD6C4\uBCF4\uD0A4\uB4E4\uC744 \uD3EC\uD568\uD558\uACE0 \uC788\uC9C0 \uC54A\uC73C\uBA74 \uADF8 \uC288\uD37C\uD0A4\uB294 \uB2E4\uC2DC \uD6C4\uBCF4\uD0A4\uAC00 \uB420 \uAC83\uC774\uB77C \uC0DD\uAC01\uD558\uBA70 \uD480\uC774\uD588\uC2B5\uB2C8\uB2E4.</p><p>\uB9B4\uB808\uC774\uC158\uC758 \uC18D\uC131\uC744 \uC21C\uC11C\uB97C \uACE0\uB824\uD558\uC5EC \uC120\uD0DD\uD558\uC5EC \uBAA8\uB4E0 \uC870\uD569\uC744 \uC54C\uC544\uB0B4\uB294 \uD568\uC218\uB85C <code>getCase</code>, <code>getAllCases</code>\uC744 \uAD6C\uD604\uD588\uC2B5\uB2C8\uB2E4.</p><p>\uB610\uD55C \uCD5C\uC18C \uC18D\uC131 \uAC1C\uC218\uC758 \uD6C4\uBCF4\uD0A4\uB97C \uCC3E\uAE30 \uC2DC\uC791\uD558\uB3C4\uB85D \uAD6C\uD604\uD558\uACE0 \uBBF8\uB798\uC5D0 \uCC3E\uC544\uB0B8 \uC288\uD37C\uD0A4\uAC00 \uD6C4\uBCF4\uD0A4\uC778\uC9C0 \uD655\uC778\uD558\uB294 \uD568\uC218 <code>isCandidateKey</code>\uB97C \uAD6C\uD604\uD588\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uCF54\uB4DC</h2>',6),r=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<string>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<vector>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<unordered_set>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<algorithm>")]),s(`

`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(" columnSize"),n("span",{class:"token punctuation"},";"),s(`
vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"bool"),n("span",{class:"token operator"},">"),s(" selected"),n("span",{class:"token punctuation"},";"),s(`
vector`),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">>"),s(" allCases"),n("span",{class:"token punctuation"},";"),s(`
vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" selectedColumns"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"getCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" nSelected"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"int"),s(" startColIdx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("selectedColumns"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(" nSelected"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        allCases`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("selectedColumns"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" col"),n("span",{class:"token operator"},"="),s("startColIdx"),n("span",{class:"token punctuation"},";"),s(" col"),n("span",{class:"token operator"},"<"),s("columnSize"),n("span",{class:"token punctuation"},";"),s(" col"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("selected"),n("span",{class:"token punctuation"},"["),s("col"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            selectedColumns`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("col"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            selected`),n("span",{class:"token punctuation"},"["),s("col"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"getCase"),n("span",{class:"token punctuation"},"("),s("nSelected"),n("span",{class:"token punctuation"},","),s(" col"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            selectedColumns`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop_back"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            selected`),n("span",{class:"token punctuation"},"["),s("col"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"getAllCases"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" colNum"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" colNum"),n("span",{class:"token operator"},"<="),s("columnSize"),n("span",{class:"token punctuation"},";"),s(" colNum"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"getCase"),n("span",{class:"token punctuation"},"("),s("colNum"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        selectedColumns`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token class-name"},"vsHash"),s(),n("span",{class:"token punctuation"},"{"),s(`
    size_t `),n("span",{class:"token keyword"},"operator"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" vector"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token operator"},">"),n("span",{class:"token operator"},"&"),s(" vs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
        hash`),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token operator"},">"),s(" hs"),n("span",{class:"token punctuation"},";"),s(`
        size_t res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"hs"),n("span",{class:"token punctuation"},"("),s("vs"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("size_t i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("vs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            res `),n("span",{class:"token operator"},"^="),s(),n("span",{class:"token function"},"hs"),n("span",{class:"token punctuation"},"("),s("vs"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        
        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token function"},"isCandidateKey"),n("span",{class:"token punctuation"},"("),s("vector"),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},"&"),s(" candidateKeys"),n("span",{class:"token punctuation"},","),s(" vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),n("span",{class:"token operator"},"&"),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),n("span",{class:"token operator"},"&"),s(" candidateKey"),n("span",{class:"token operator"},":"),s(" candidateKeys"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"intersected"),n("span",{class:"token punctuation"},"("),s("candidateKey"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"+"),s("key"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),n("span",{class:"token double-colon punctuation"},"::"),s("iterator it "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"set_intersection"),n("span",{class:"token punctuation"},"("),s("candidateKey"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" candidateKey"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" intersected"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        intersected`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"erase"),n("span",{class:"token punctuation"},"("),s("it"),n("span",{class:"token punctuation"},","),s(" intersected"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("intersected"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(" candidateKey"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"solution"),n("span",{class:"token punctuation"},"("),s("vector"),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token operator"},">>"),s(" relation"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    columnSize `),n("span",{class:"token operator"},"="),s(" relation"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    selected`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resize"),n("span",{class:"token punctuation"},"("),s("columnSize"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"getAllCases"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token keyword"},"int"),s(" answer "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    vector`),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">>"),s(" candidateKeys"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("vector"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" selectedColIdxs"),n("span",{class:"token operator"},":"),s(" allCases"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        unordered_set`),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" vsHash"),n("span",{class:"token operator"},">"),s(" filteredRows"),n("span",{class:"token punctuation"},";"),s(`
        
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("vector"),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token operator"},">"),s(" row"),n("span",{class:"token operator"},":"),s(" relation"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            vector`),n("span",{class:"token operator"},"<"),s("string"),n("span",{class:"token operator"},">"),s(" filteredRow"),n("span",{class:"token punctuation"},";"),s(`
            
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" col"),n("span",{class:"token operator"},":"),s(" selectedColIdxs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                filteredRow`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("row"),n("span",{class:"token punctuation"},"["),s("col"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            
            filteredRows`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("filteredRow"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("filteredRows"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(" relation"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"isCandidateKey"),n("span",{class:"token punctuation"},"("),s("candidateKeys"),n("span",{class:"token punctuation"},","),s(" selectedColIdxs"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                candidateKeys`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),s("selectedColIdxs"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                answer`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"return"),s(" answer"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function d(m,v){const a=u("CodeTabs");return e(),o("div",null,[k,c(a,{id:"16",data:[{title:"C++"}]},{tab0:p(({title:b,value:y,isActive:f})=>[r]),_:1})])}const g=t(i,[["render",d],["__file","42890.html.vue"]]);export{g as default};
