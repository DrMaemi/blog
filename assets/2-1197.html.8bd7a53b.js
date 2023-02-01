import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as u,d as t,w as e,e as r,a as n,b as s,r as k}from"./app.4498b458.js";const d={},m=r('<figure class="opengraph"><a href="https://www.acmicpc.net/problem/1197" data-source-url="https://www.acmicpc.net/problem/1197"><div class="og-image" style="background-image:url(&#39;https://drive.google.com/uc?export=view&amp;id=1nCax5mgwtYA82T46I_ntU1afsBBNkrLr&#39;);"></div><div class="og-text"><p class="og-title">1197\uBC88: \uCD5C\uC18C \uC2A4\uD328\uB2DD \uD2B8\uB9AC</p><p class="og-desc">\uADF8\uB798\uD504\uAC00 \uC8FC\uC5B4\uC84C\uC744 \uB54C, \uADF8 \uADF8\uB798\uD504\uC758 \uCD5C\uC18C \uC2A4\uD328\uB2DD \uD2B8\uB9AC\uB97C \uAD6C\uD558\uB294 \uD504\uB85C\uADF8\uB7A8\uC744 \uC791\uC131\uD558\uC2DC\uC624. \uCD5C\uC18C \uC2A4\uD328\uB2DD \uD2B8\uB9AC\uB294, \uC8FC\uC5B4\uC9C4 \uADF8\uB798\uD504\uC758 \uBAA8\uB4E0 \uC815\uC810\uB4E4\uC744 \uC5F0\uACB0\uD558\uB294 \uBD80\uBD84 \uADF8\uB798\uD504 \uC911\uC5D0\uC11C \uADF8 \uAC00\uC911\uCE58\uC758 \uD569\uC774 \uCD5C\uC18C\uC778 \uD2B8\uB9AC\uB97C \uB9D0\uD55C\uB2E4.</p><p class="og-host">www.acmicpc.net</p></div></a></figure><h2 id="\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uD480\uC774</h2><p>\uC8FC\uC5B4\uC9C4 \uB178\uB4DC\uB4E4\uACFC \uAC04\uC120\uB4E4\uC744 \uC774\uC6A9\uD574\uC11C \uCD5C\uC18C \uC2E0\uC7A5 \uD2B8\uB9AC(Minimum Spanning Tree)\uB97C \uB9CC\uB4E4 \uB54C Kruskal \uC54C\uACE0\uB9AC\uC998\uACFC Prim \uC54C\uACE0\uB9AC\uC998\uC744 \uC774\uC6A9\uD560 \uC218 \uC788\uB2E4.</p><h3 id="kruskal-\u110B\u1161\u11AF\u1100\u1169\u1105\u1175\u110C\u1173\u11B7" tabindex="-1"><a class="header-anchor" href="#kruskal-\u110B\u1161\u11AF\u1100\u1169\u1105\u1175\u110C\u1173\u11B7" aria-hidden="true">#</a> Kruskal \uC54C\uACE0\uB9AC\uC998</h3><p>Kruskal \uC54C\uACE0\uB9AC\uC998\uC740 \uC8FC\uC5B4\uC9C4 \uAC04\uC120\uB4E4\uC744 \uBE44\uC6A9 \uAE30\uC900\uC73C\uB85C \uC815\uB82C\uD55C \uB4A4, \uC815\uB82C\uD55C \uAC04\uC120 \uB9AC\uC2A4\uD2B8\uB97C \uC21C\uD68C\uD558\uBA74\uC11C \uD574\uB2F9 \uAC04\uC120\uC774 \uC5F0\uACB0\uD558\uB294 \uC591\uCABD \uB178\uB4DC\uAC00 \uC11C\uB85C \uB2E4\uB978 \uD2B8\uB9AC(Tree)\uC5D0 \uC788\uC73C\uBA74 \uAC04\uC120\uC744 \uC120\uD0DD\uD55C\uB2E4. \uC774\uB97C \uAD6C\uD604\uD558\uAE30 \uC704\uD574 \uAC01 \uB178\uB4DC\uAC00 \uC18D\uD55C \uD2B8\uB9AC\uC758 \uCD5C\uC0C1\uC704 \uB178\uB4DC\uB4E4\uC744 \uC800\uC7A5\uD574\uB193\uC740 DP \uBC30\uC5F4 <code>root</code>\uC640 \uC720\uB2C8\uC628 \uD30C\uC778\uB4DC \uD568\uC218 <code>findRoot</code>\uB97C \uC0AC\uC6A9\uD55C\uB2E4.</p><p><code>root[x]</code> \uAC12\uC740 \uB178\uB4DC <code>x</code>\uAC00 \uC18D\uD55C \uD2B8\uB9AC\uC758 \uCD5C\uC0C1\uC704 \uB178\uB4DC\uB97C \uB73B\uD55C\uB2E4. \uCD5C\uCD08\uC5D0 \uAC01 \uB178\uB4DC\uB294 \uC790\uC2E0\uB9CC\uC73C\uB85C \uC774\uB8E8\uC5B4\uC9C4 \uD2B8\uB9AC\uC5D0\uC11C \uC790\uC2E0\uC774 \uCD5C\uC0C1\uC704 \uB178\uB4DC\uC774\uACE0(<code>root[x] = x, x = 1, 2, ..., V</code>), \uC815\uB82C\uD55C \uAC04\uC120 \uB9AC\uC2A4\uD2B8\uB97C \uC21C\uD68C\uD558\uBA74\uC11C \uAC01 \uB178\uB4DC\uAC00 \uC18D\uD55C \uD2B8\uB9AC\uC758 \uCD5C\uC0C1\uC704 \uB178\uB4DC\uAC00 \uB2E4\uB984(<code>uRoot != vRoot</code>)\uC744 \uD655\uC778\uD558\uACE0 \uD574\uB2F9 \uAC04\uC120\uC744 \uC120\uD0DD\uD55C\uB2E4. \uAC04\uC120\uC744 \uC120\uD0DD\uD558\uBA74 \uD55C \uD2B8\uB9AC\uC758 \uCD5C\uC0C1\uC704 \uB178\uB4DC\uAC00 \uB2E4\uB978 \uD2B8\uB9AC\uC758 \uCD5C\uC0C1\uC704 \uB178\uB4DC\uAC00 \uB41C\uB2E4(\uD2B8\uB9AC \uBCD1\uD569, <code>root[uRoot] = root[vRoot]</code>).</p><p>\uC720\uB2C8\uC628 \uD30C\uC778\uB4DC \uD568\uC218 <code>findRoot(x)</code>\uB294 \uB178\uB4DC <code>x</code>\uC758 \uCD5C\uC0C1\uC704 \uB178\uB4DC\uC5D0 \uB300\uD55C \uC815\uBCF4\uB97C \uC218\uC815\uD558\uBA74\uC11C \uBC18\uD658\uD558\uB294 \uC5ED\uD560\uC744 \uC218\uD589\uD55C\uB2E4. \uAC04\uC120\uC744 \uC120\uD0DD\uD588\uC744 \uB54C <code>root[uRoot]</code>, <code>root[vRoot]</code> \uB458 \uC911 \uD558\uB098\uAC00 \uC218\uC815\uB418\uC9C0\uB9CC \uC218\uC815\uB41C \uCABD \uD2B8\uB9AC\uC5D0 \uC18D\uD55C \uB178\uB4DC\uB4E4\uC758 \uCD5C\uC0C1\uC704 \uB178\uB4DC\uC5D0 \uB300\uD55C \uC815\uBCF4\uB294 \uC218\uC815\uB418\uC9C0 \uC54A\uB294\uB2E4. \uADF8 \uB178\uB4DC\uB4E4 \uC911 \uD558\uB098\uB97C <code>y</code>\uB77C \uD588\uC744 \uB54C, \uD6C4\uC5D0 \uD568\uC218 <code>findRoot(y)</code>\uAC00 \uD638\uCD9C\uB428\uC5D0 \uB530\uB77C \uC7AC\uADC0\uC801\uC73C\uB85C \uC218\uC815\uB418\uB294 \uCABD \uD2B8\uB9AC\uC5D0 \uC18D\uD55C \uB178\uB4DC <code>y</code>\uC758 \uCD5C\uC0C1\uC704 \uB178\uB4DC\uC5D0 \uB300\uD55C \uC815\uBCF4\uAC00 \uCD5C\uC2E0\uD654\uB41C\uB2E4.</p><p>\uC120\uD0DD\uD55C \uAC04\uC120\uC758 \uAC1C\uC218\uAC00 <code>V-1</code>\uAC1C\uB77C\uBA74 \uD2B8\uB9AC\uC758 \uC870\uAC74\uC744 \uB9CC\uC871\uD558\uAC8C \uB418\uBBC0\uB85C \uD0D0\uC0C9\uC744 \uBA48\uCD98\uB2E4.</p><p>Kruskal \uC54C\uACE0\uB9AC\uC998\uC740 \uC8FC\uC5B4\uC9C4 \uBAA8\uB4E0 \uAC04\uC120\uC5D0 \uB300\uD574 \uC815\uB82C\uD574\uC57C\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC8FC\uC5B4\uC9C4 \uBB38\uC81C\uC5D0\uC11C \uAC04\uC120\uC758 \uAC1C\uC218\uAC00 \uC9C0\uB098\uCE58\uAC8C \uB9CE\uC744 \uACBD\uC6B0 \uD6C4\uC220\uD560 Prim \uC54C\uACE0\uB9AC\uC998\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC633\uB2E4.</p><h3 id="prim-\u110B\u1161\u11AF\u1100\u1169\u1105\u1175\u110C\u1173\u11B7" tabindex="-1"><a class="header-anchor" href="#prim-\u110B\u1161\u11AF\u1100\u1169\u1105\u1175\u110C\u1173\u11B7" aria-hidden="true">#</a> Prim \uC54C\uACE0\uB9AC\uC998</h3><p>Prim \uC54C\uACE0\uB9AC\uC998\uC740 \uCD5C\uCD08\uC5D0 \uC784\uC758 \uC120\uD0DD\uD55C \uB178\uB4DC\uB85C\uBD80\uD130 \uC778\uC811\uD55C \uB178\uB4DC\uB4E4\uC744 \uC120\uD0DD\uD574\uB098\uAC04\uB2E4. \uC774\uB97C \uAD6C\uD604\uD558\uAE30 \uC704\uD574 \uC778\uC811 \uB9AC\uC2A4\uD2B8 <code>adjs</code>, \uC778\uC811 \uB178\uB4DC\uC640\uC758 \uAC04\uC120 \uC815\uBCF4\uB97C \uB2F4\uB294 \uCD5C\uC18C \uD799(\uC6B0\uC120\uC21C\uC704 \uD050) <code>pq</code>, \uB178\uB4DC \uBC29\uBB38 \uC5EC\uBD80\uB97C \uC800\uC7A5\uD574\uB193\uC740 DP \uBC30\uC5F4 <code>visited</code>\uB97C \uC0AC\uC6A9\uD55C\uB2E4.</p><p>\uD604\uC7AC \uC54C\uACE0 \uC788\uB294 \uC778\uC811 \uB178\uB4DC\uB4E4 \uC911 \uCD5C\uC18C \uBE44\uC6A9 \uAC04\uC120\uC744 \uAC00\uC9C0\uB294 \uB178\uB4DC\uB97C <code>pq</code>\uC5D0\uC11C \uAC00\uC838\uC624\uACE0 \uADF8 \uC778\uC811 \uB178\uB4DC\uAC00 \uC544\uC9C1 \uBC29\uBB38\uD558\uC9C0 \uC54A\uC740 \uB178\uB4DC\uB77C\uBA74 \uADF8 \uB178\uB4DC\uC758 \uC778\uC811 \uB178\uB4DC\uB4E4\uACFC\uC758 \uAC04\uC120 \uC815\uBCF4\uB4E4\uC744 <code>pq</code>\uC5D0 \uC804\uBD80 \uB123\uB294\uB2E4. \uBAA8\uB4E0 \uB178\uB4DC\uB97C \uBC29\uBB38\uD560 \uB54C\uAE4C\uC9C0 \uC774 \uACFC\uC815\uC744 \uBC18\uBCF5\uD55C\uB2E4.</p><h3 id="kruskal-vs-prim" tabindex="-1"><a class="header-anchor" href="#kruskal-vs-prim" aria-hidden="true">#</a> Kruskal vs Prim</h3>',13),v=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"Prim"),n("th",{style:{"text-align":"center"}},"Kruskal")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}},"\uADF8\uB798\uD504 \uC0C1 \uC5B4\uB290 \uB178\uB4DC\uC5D0\uC11C\uB4E0 \uCD5C\uC18C \uC2E0\uC7A5 \uD2B8\uB9AC\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD55C \uC54C\uACE0\uB9AC\uC998\uC744 \uC218\uD589\uD560 \uC218 \uC788\uB2E4."),n("td",{style:{"text-align":"center"}},"\uAC04\uC120\uB4E4\uC744 \uBE44\uC6A9 \uAE30\uC900\uC73C\uB85C \uC815\uB82C\uD55C \uB4A4\uC5D0 \uCD5C\uC18C \uBE44\uC6A9 \uC21C\uC73C\uB85C \uC54C\uACE0\uB9AC\uC998\uC744 \uC218\uD589\uD560 \uC218 \uC788\uB2E4.")]),n("tr",null,[n("td",{style:{"text-align":"center"}},[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("msup",null,[n("mi",null,"V"),n("mn",null,"2")]),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(V^2)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])]),n("span",{class:"mclose"},")")])])]),s(", \uD53C\uBCF4\uB098\uCE58 \uD799(Fibonacci Heap)\uC744 \uC0AC\uC6A9\uD558\uBA74 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"E"),n("mi",null,"l"),n("mi",null,"o"),n("mi",null,"g"),n("mi",null,"V"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(ElogV)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"El"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),n("span",{class:"mclose"},")")])])])]),n("td",{style:{"text-align":"center"}},[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"E"),n("mi",null,"l"),n("mi",null,"o"),n("mi",null,"g"),n("mi",null,"V"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(ElogV)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"El"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),n("span",{class:"mclose"},")")])])])])]),n("tr",null,[n("td",{style:{"text-align":"center"}},"\uC5F0\uACB0\uB41C \uADF8\uB798\uD504(Connected Graph)\uC5D0 \uC801\uC6A9"),n("td",{style:{"text-align":"center"}},"\uC5B4\uB5A4 \uADF8\uB798\uD504\uC5D0\uB3C4 \uC801\uC6A9 \uAC00\uB2A5, \uC232(Forest, \uC5EC\uB7EC \uAC1C\uC758 \uD2B8\uB9AC) \uAD6C\uC131 \uAC00\uB2A5")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"\uBC00\uC9D1 \uADF8\uB798\uD504(Dense Graph)\uC5D0\uC11C \uC720\uB9AC"),n("td",{style:{"text-align":"center"}},"\uD76C\uC18C \uADF8\uB798\uD504(Sparse Graph)\uC5D0\uC11C \uC720\uB9AC")])])],-1),b=n("h2",{id:"\u110F\u1169\u1103\u1173",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u110F\u1169\u1103\u1173","aria-hidden":"true"},"#"),s(" \uCF54\uB4DC")],-1),h=n("h3",{id:"krusal-\u110B\u1161\u11AF\u1100\u1169\u1105\u1175\u110C\u1173\u11B7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#krusal-\u110B\u1161\u11AF\u1100\u1169\u1105\u1175\u110C\u1173\u11B7","aria-hidden":"true"},"#"),s(" Krusal \uC54C\uACE0\uB9AC\uC998")],-1),g=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<vector>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<algorithm>")]),s(`

`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token class-name"},"Edge"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" u"),n("span",{class:"token punctuation"},","),s(" v"),n("span",{class:"token punctuation"},","),s(" w"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token keyword"},"operator"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" Edge"),n("span",{class:"token operator"},"&"),s(" rhs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" w "),n("span",{class:"token operator"},"<"),s(" rhs"),n("span",{class:"token punctuation"},"."),s("w"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(" V"),n("span",{class:"token punctuation"},","),s(" E"),n("span",{class:"token punctuation"},";"),s(`
vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"int"),n("span",{class:"token operator"},">"),s(" root"),n("span",{class:"token punctuation"},";"),s(`
vector`),n("span",{class:"token operator"},"<"),s("Edge"),n("span",{class:"token operator"},">"),s(" edges"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"findRoot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" idx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(" idx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" idx"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" root"),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"findRoot"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"["),s("idx"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ios`),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"sync_with_stdio"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cin`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cout`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    cin `),n("span",{class:"token operator"},">>"),s(" V "),n("span",{class:"token operator"},">>"),s(" E"),n("span",{class:"token punctuation"},";"),s(`
    root`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resize"),n("span",{class:"token punctuation"},"("),s("V"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    edges`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resize"),n("span",{class:"token punctuation"},"("),s("E"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<="),s("V"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
        root`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("E"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" u"),n("span",{class:"token punctuation"},","),s(" v"),n("span",{class:"token punctuation"},","),s(" w"),n("span",{class:"token punctuation"},";"),s(`
        cin `),n("span",{class:"token operator"},">>"),s(" u "),n("span",{class:"token operator"},">>"),s(" v "),n("span",{class:"token operator"},">>"),s(" w"),n("span",{class:"token punctuation"},";"),s(`
        edges`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s("u"),n("span",{class:"token punctuation"},","),s(" v"),n("span",{class:"token punctuation"},","),s(" w"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),s("edges"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"begin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" edges"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"int"),s(" ans "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" cnt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("Edge edge"),n("span",{class:"token operator"},":"),s(" edges"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" uRoot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"findRoot"),n("span",{class:"token punctuation"},"("),s("edge"),n("span",{class:"token punctuation"},"."),s("u"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" vRoot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"findRoot"),n("span",{class:"token punctuation"},"("),s("edge"),n("span",{class:"token punctuation"},"."),s("v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("uRoot "),n("span",{class:"token operator"},"!="),s(" vRoot"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            root`),n("span",{class:"token punctuation"},"["),s("uRoot"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},"["),s("vRoot"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("uRoot"),n("span",{class:"token punctuation"},","),s(" vRoot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            ans `),n("span",{class:"token operator"},"+="),s(" edge"),n("span",{class:"token punctuation"},"."),s("w"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("cnt "),n("span",{class:"token operator"},"=="),s(" V"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    cout `),n("span",{class:"token operator"},"<<"),s(" ans"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("h3",{id:"prim-\u110B\u1161\u11AF\u1100\u1169\u1105\u1175\u110C\u1173\u11B7-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#prim-\u110B\u1161\u11AF\u1100\u1169\u1105\u1175\u110C\u1173\u11B7-1","aria-hidden":"true"},"#"),s(" Prim \uC54C\uACE0\uB9AC\uC998")],-1),w=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<vector>")]),s(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<queue>")]),s(`

`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token class-name"},"Edge"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" v"),n("span",{class:"token punctuation"},","),s(" w"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token class-name"},"compare"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"bool"),s(),n("span",{class:"token keyword"},"operator"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" Edge"),n("span",{class:"token operator"},"&"),s(" lhs"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"const"),s(" Edge"),n("span",{class:"token operator"},"&"),s(" rhs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" lhs"),n("span",{class:"token punctuation"},"."),s("w "),n("span",{class:"token operator"},">"),s(" rhs"),n("span",{class:"token punctuation"},"."),s("w"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(" V"),n("span",{class:"token punctuation"},","),s(" E"),n("span",{class:"token punctuation"},";"),s(`
vector`),n("span",{class:"token operator"},"<"),s("vector"),n("span",{class:"token operator"},"<"),s("Edge"),n("span",{class:"token operator"},">>"),s(" adjs"),n("span",{class:"token punctuation"},";"),s(`
vector`),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"bool"),n("span",{class:"token operator"},">"),s(" visited"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ios`),n("span",{class:"token double-colon punctuation"},"::"),n("span",{class:"token function"},"sync_with_stdio"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cin`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    cout`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"tie"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    cin `),n("span",{class:"token operator"},">>"),s(" V "),n("span",{class:"token operator"},">>"),s(" E"),n("span",{class:"token punctuation"},";"),s(`

    adjs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resize"),n("span",{class:"token punctuation"},"("),s("V"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    visited`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resize"),n("span",{class:"token punctuation"},"("),s("V"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("E"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" u"),n("span",{class:"token punctuation"},","),s(" v"),n("span",{class:"token punctuation"},","),s(" w"),n("span",{class:"token punctuation"},";"),s(`
        cin `),n("span",{class:"token operator"},">>"),s(" u "),n("span",{class:"token operator"},">>"),s(" v "),n("span",{class:"token operator"},">>"),s(" w"),n("span",{class:"token punctuation"},";"),s(`
        adjs`),n("span",{class:"token punctuation"},"["),s("u"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("v"),n("span",{class:"token punctuation"},","),s(" w"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        adjs`),n("span",{class:"token punctuation"},"["),s("v"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push_back"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("u"),n("span",{class:"token punctuation"},","),s(" w"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    priority_queue`),n("span",{class:"token operator"},"<"),s("Edge"),n("span",{class:"token punctuation"},","),s(" vector"),n("span",{class:"token operator"},"<"),s("Edge"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" compare"),n("span",{class:"token operator"},">"),s(" pq"),n("span",{class:"token punctuation"},";"),s(`
    pq`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"int"),s(" nVisited "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" ans "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("pq"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"empty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        Edge cur `),n("span",{class:"token operator"},"="),s(" pq"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"top"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        pq`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("visited"),n("span",{class:"token punctuation"},"["),s("cur"),n("span",{class:"token punctuation"},"."),s("v"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            visited`),n("span",{class:"token punctuation"},"["),s("cur"),n("span",{class:"token punctuation"},"."),s("v"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
            nVisited`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
            ans `),n("span",{class:"token operator"},"+="),s(" cur"),n("span",{class:"token punctuation"},"."),s("w"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nVisited "),n("span",{class:"token operator"},"=="),s(" V"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("Edge nxt"),n("span",{class:"token operator"},":"),s(" adjs"),n("span",{class:"token punctuation"},"["),s("cur"),n("span",{class:"token punctuation"},"."),s("v"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                pq`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("nxt"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    cout `),n("span",{class:"token operator"},"<<"),s(" ans"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(x,_){const a=k("CodeTabs");return i(),u("div",null,[m,v,b,h,t(a,{id:"89",data:[{title:"C++"}]},{tab0:e(({title:o,value:c,isActive:l})=>[g]),_:1}),y,t(a,{id:"97",data:[{title:"C++"}]},{tab0:e(({title:o,value:c,isActive:l})=>[w]),_:1})])}const R=p(d,[["render",f],["__file","2-1197.html.vue"]]);export{R as default};