import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,a as n,b as t,d as a,e as r,r as c}from"./app.7e49c75a.js";const i={},l=n("h2",{id:"gitignore-\u1111\u1161\u110B\u1175\u11AF\u110B\u1175\u1105\u1161\u11AB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitignore-\u1111\u1161\u110B\u1175\u11AF\u110B\u1175\u1105\u1161\u11AB","aria-hidden":"true"},"#"),t(" .gitignore \uD30C\uC77C\uC774\uB780?")],-1),d=n("p",null,"\uC0AC\uC6A9\uC790\uAC00 \uC6D0\uACA9 \uC800\uC7A5\uC18C\uC5D0 \uCEE4\uBC0B\uB418\uAE38 \uC6D0\uCE58 \uC54A\uB294 \uD30C\uC77C\uC744 \uC81C\uC678(\uBB34\uC2DC)\uD558\uAE30 \uC704\uD574 \uC791\uC131\uD558\uB294 \uD30C\uC77C",-1),g=n("h2",{id:"\u110C\u116E\u1105\u1169-\u110C\u1166\u110B\u116C\u1103\u116C\u1102\u1173\u11AB-\u1111\u1161\u110B\u1175\u11AF",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u110C\u116E\u1105\u1169-\u110C\u1166\u110B\u116C\u1103\u116C\u1102\u1173\u11AB-\u1111\u1161\u110B\u1175\u11AF","aria-hidden":"true"},"#"),t(" \uC8FC\uB85C \uC81C\uC678\uB418\uB294 \uD30C\uC77C")],-1),h=n("ul",null,[n("li",null,"IDE \uB3C4\uAD6C\uC640 \uAD00\uB828\uB41C \uC124\uC815 \uD30C\uC77C"),n("li",null,"\uD504\uB85C\uADF8\uB7A8 \uBE4C\uB4DC \uACB0\uACFC\uBB3C, \uB85C\uADF8, \uD328\uD0A4\uC9C0 \uAD00\uB828 \uD30C\uC77C"),n("li",null,"\uADF8 \uC678 \uC6A9\uB7C9\uC774 \uC9C0\uB098\uCE58\uAC8C \uD070 \uD30C\uC77C \uB4F1 \uC0AC\uC6A9\uC790\uAC00 \uC81C\uC678\uD558\uAE38 \uC6D0\uD558\uB294 \uD30C\uC77C")],-1),k={href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"},u=r(`<h2 id="gitignore-\u1111\u1161\u110B\u1175\u11AF-\u110B\u1171\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#gitignore-\u1111\u1161\u110B\u1175\u11AF-\u110B\u1171\u110E\u1175" aria-hidden="true">#</a> .gitignore \uD30C\uC77C \uC704\uCE58</h2><ul><li>\uD504\uB85C\uC81D\uD2B8 \uCD5C\uC0C1\uB2E8 \uD3F4\uB354\uC5D0 \uC0DD\uC131(\uD0C0 \uACBD\uB85C\uC5D0 \uC0DD\uC131 \uAC00\uB2A5\uD558\uB098 \uBE44\uD6A8\uC728\uC801)</li></ul><h2 id="\u110C\u1161\u11A8\u1109\u1165\u11BC-\u1100\u1172\u110E\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u11A8\u1109\u1165\u11BC-\u1100\u1172\u110E\u1175\u11A8" aria-hidden="true">#</a> \uC791\uC131 \uADDC\uCE59</h2><ul><li>\uD45C\uC900 glob \uD328\uD134 \uC0AC\uC6A9</li><li><code>#</code> - \uC8FC\uC11D</li><li><code>/</code> - \uD3F4\uB354</li><li><code>!</code> - \uBB34\uC2DC \uD574\uC81C</li></ul><h2 id="\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> \uC608\uC2DC</h2><div class="language-text ext-text"><pre class="language-text"><code>.
|-- A
|   |-- AA
|   \`-- TODO
|       \`-- a.txt
|-- B
|   |-- BB
|   |   |-- BBB
|   |   \`-- TODO
|   |       \`-- bb.txt
|   \`-- TODO
|       \`-- b.txt
|-- README.md
|-- TODO
|   \`-- td.txt
|-- r.txt
\`-- .gitignore
</code></pre></div><p>\uB514\uB809\uD1A0\uB9AC \uAD6C\uC870\uAC00 \uC704\uC640 \uAC19\uC744 \uB54C,</p><div class="language-gitignore ext-gitignore"><pre class="language-gitignore"><code><span class="token comment"># .gitignore</span>

<span class="token comment"># \uBAA8\uB4E0 .txt \uD30C\uC77C \uBB34\uC2DC</span>
<span class="token entry string"><span class="token operator">*</span>.txt</span>

<span class="token comment"># b.txt \uD30C\uC77C\uC740 \uBB34\uC2DC \uD574\uC81C</span>
<span class="token entry string"><span class="token operator">!</span>b.txt</span>

<span class="token comment"># &#39;\uC808\uB300 \uACBD\uB85C&#39; \uC0C1\uC758 TODO \uD3F4\uB354 \uBB34\uC2DC</span>
<span class="token comment"># \uC989, \uD574\uB2F9 \uD3F4\uB354 \uB0B4 td.txt \uD30C\uC77C\uC740 \uBB34\uC2DC\uB418\uACE0 r.txt a.txt b.txt bb.txt\uB294 \uBB34\uC2DC\uB418\uC9C0 \uC54A\uC74C</span>
<span class="token entry string"><span class="token punctuation">/</span>TODO</span>

<span class="token comment"># &#39;\uD504\uB85C\uC81D\uD2B8 \uC804\uCCB4 \uD3F4\uB354&#39; \uC911 TODO\uB77C\uB294 \uD3F4\uB354\uBA85\uC744 \uC0AC\uC6A9\uD558\uB294 \uBAA8\uB4E0 \uD3F4\uB354 \uBB34\uC2DC</span>
<span class="token comment"># \uC989, a.txt b.txt bb.txt\uB294 \uBB34\uC2DC\uB418\uACE0 r.txt\uB294 \uBB34\uC2DC\uB418\uC9C0 \uC54A\uC74C</span>
<span class="token comment"># **/TODO/ \uC640 \uAC19\uC740 \uD6A8\uACFC</span>
<span class="token entry string">TODO<span class="token punctuation">/</span></span>

<span class="token comment"># &#39;.gitignore \uD30C\uC77C\uC774 \uC704\uCE58\uD55C&#39; \uACBD\uB85C \uC911 TODO \uD3F4\uB354 \uBC14\uB85C \uBC11\uC5D0 \uC788\uB294 .txt \uD30C\uC77C \uBB34\uC2DC</span>
<span class="token comment"># TODO/example/td2.txt \uAC00 \uC874\uC7AC\uD558\uB294 \uACBD\uC6B0 td2.txt \uD30C\uC77C\uC740 \uBB34\uC2DC\uB418\uC9C0 \uC54A\uC74C</span>
<span class="token entry string">TODO<span class="token punctuation">/</span><span class="token operator">*</span>.txt</span>

<span class="token comment"># &#39;.gitignore \uD30C\uC77C\uC774 \uC704\uCE58\uD55C&#39; \uACBD\uB85C \uC911 TODO \uD3F4\uB354 \uD558\uC704 \uBAA8\uB4E0 .txt \uD30C\uC77C \uBB34\uC2DC</span>
<span class="token comment"># TODO \uD3F4\uB354 \uD558\uC704 \uC5B4\uB5A4 \uD3F4\uB354\uC5D0 \uC874\uC7AC\uD558\uB354\uB77C\uB3C4 .txt \uD30C\uC77C \uBB34\uC2DC</span>
<span class="token entry string">TODO<span class="token punctuation">/</span><span class="token operator">**</span><span class="token punctuation">/</span><span class="token operator">*</span>.txt</span>

<span class="token comment"># &#39;.gitignore \uD30C\uC77C\uC774 \uC704\uCE58\uD55C&#39; \uACBD\uB85C \uBC14\uB85C \uBC11\uC5D0 \uC788\uB294 TODO \uD3F4\uB354 \uBC14\uB85C \uBC11\uC5D0 \uC788\uB294 .txt \uD30C\uC77C \uBB34\uC2DC</span>
<span class="token comment"># \uC989, a.txt\uB9CC \uBB34\uC2DC\uB418\uACE0 \uB098\uBA38\uC9C0 .txt \uD30C\uC77C\uB4E4\uC740 \uBB34\uC2DC\uB418\uC9C0 \uC54A\uC74C</span>
<span class="token entry string"><span class="token operator">*</span><span class="token punctuation">/</span>TODO<span class="token punctuation">/</span><span class="token operator">*</span>.txt</span>

<span class="token comment"># &#39;\uD504\uB85C\uC81D\uD2B8 \uC804\uCCB4 \uD3F4\uB354&#39; \uC911 TODO\uB77C\uB294 \uD3F4\uB354\uBA85\uC744 \uC0AC\uC6A9\uD558\uB294 \uBAA8\uB4E0 \uD3F4\uB354 \uBC14\uB85C \uBC11\uC5D0 \uC788\uB294 .txt \uD30C\uC77C \uBB34\uC2DC</span>
<span class="token comment"># /**/TODO/*.txt \uC640 \uAC19\uC740 \uD6A8\uACFC</span>
<span class="token entry string"><span class="token operator">**</span><span class="token punctuation">/</span>TODO<span class="token punctuation">/</span><span class="token operator">*</span>.txt</span> 

<span class="token comment"># &#39;\uD504\uB85C\uC81D\uD2B8 \uC804\uCCB4 \uD3F4\uB354&#39; \uC911 TODO\uB77C\uB294 \uD3F4\uB354\uBA85\uC744 \uC0AC\uC6A9\uD558\uB294 \uBAA8\uB4E0 \uD3F4\uB354 \uD558\uC704 \uBAA8\uB4E0 .txt \uD30C\uC77C \uBB34\uC2DC</span>
<span class="token entry string"><span class="token operator">**</span><span class="token punctuation">/</span>TODO<span class="token punctuation">/</span><span class="token operator">**</span><span class="token punctuation">/</span><span class="token operator">*</span>.txt</span>
</code></pre></div><h2 id="\u110E\u1161\u11B7\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#\u110E\u1161\u11B7\u110C\u1169" aria-hidden="true">#</a> \uCC38\uC870</h2>`,9),x=n("em",null,"Tistory",-1),m={href:"https://shilan.tistory.com/entry/gitignore-%ED%8C%8C%EC%9D%BC-%EC%9E%91%EC%84%B1-%EA%B7%9C%EC%B9%99",target:"_blank",rel:"noopener noreferrer"};function O(_,D){const s=c("ExternalLinkIcon");return o(),p("div",null,[l,d,g,h,n("p",null,[t("\uCEE4\uBC0B \uB300\uC0C1\uC5D0\uC11C \uC81C\uC678\uC2DC\uD0AC \uD30C\uC77C \uC885\uB958\uC5D0 \uB300\uD55C \uAC00\uC774\uB4DC\uB77C\uC778\uC744 \uC5BB\uACE0 \uC2F6\uB2E4\uBA74 "),n("a",k,[t("Github\uC5D0\uC11C \uC81C\uC2DC\uD558\uB294 \uAC00\uC774\uB4DC\uB77C\uC778"),a(s)]),t("\uB97C \uCC38\uC870\uD558\uAE38 \uBC14\uB78D\uB2C8\uB2E4.")]),u,n("p",null,[t('\uC54C\uD30C\uCE74\uCE5C\uAD6C, ".gitignore \uD30C\uC77C \uC791\uC131 \uADDC\uCE59," '),x,t(", Mar. 12, 2018. [Online]. Available: "),n("a",m,[t("https://shilan.tistory.com/entry/gitignore-\uD30C\uC77C-\uC791\uC131-\uADDC\uCE59"),a(s)]),t(" [Accessed Mar. 12, 2023].")])])}const f=e(i,[["render",O],["__file","how-to-write-git-ignore.html.vue"]]);export{f as default};
