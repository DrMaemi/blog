import{D as u}from"./DetailsOpen.d5ab58f9.js";import{f as e,o as t,c as a,d as C,u as r,e as i}from"./app.3d770d81.js";import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";const s=i(`<h2 id="\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u1107\u1169\u11A8\u110C\u1166-git-clone-remote-set-url-push" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u1107\u1169\u11A8\u110C\u1166-git-clone-remote-set-url-push" aria-hidden="true">#</a> \uC800\uC7A5\uC18C \uBCF5\uC81C - git clone &amp; remote set-url &amp; push</h2><p>\uBA3C\uC800 Github\uC640 \uAC19\uC740, Git \uC6D0\uACA9 \uC800\uC7A5\uC18C \uD638\uC2A4\uD305 \uC11C\uBE44\uC2A4\uC5D0 \uC0C8\uB85C\uC6B4 \uC6D0\uACA9 \uC800\uC7A5\uC18C\uB97C \uC0DD\uC131\uD574\uC90D\uB2C8\uB2E4.</p><p>\uC774\uD6C4 \uAE30\uC874 \uC800\uC7A5\uC18C\uC758 \uCF54\uB4DC\uC640 \uCEE4\uBC0B \uAE30\uB85D\uC744 \uC0C8\uB85C\uC6B4 \uC6D0\uACA9 \uC800\uC7A5\uC18C\uC5D0 \uBCF5\uC81C\uD558\uAE30 \uC704\uD574\uC11C git clone, git remote set-url \uBA85\uB839\uC5B4\uB97C \uC2E4\uD589\uD574\uC8FC\uBA74 \uB429\uB2C8\uB2E4.</p><div class="language-text ext-text"><pre class="language-text"><code>git clone &lt;\uAE30\uC874 \uC6D0\uACA9 \uC800\uC7A5\uC18C URL&gt;
cd &lt;\uAE30\uC874 \uC6D0\uACA9 \uC800\uC7A5\uC18C \uC774\uB984&gt;
git remote set-url origin &lt;\uC0C8\uB85C\uC6B4 \uC6D0\uACA9 \uC800\uC7A5\uC18C URL&gt;
git push
</code></pre></div><h2 id="git-remote" tabindex="-1"><a class="header-anchor" href="#git-remote" aria-hidden="true">#</a> git remote</h2><p>\uD604\uC7AC \uD504\uB85C\uC81D\uD2B8\uC758 \uC6D0\uACA9 \uC800\uC7A5\uC18C \uC124\uC815\uACFC \uAD00\uB828\uB41C \uBA85\uB839\uC5B4\uC785\uB2C8\uB2E4.</p><h3 id="\u1103\u1173\u11BC\u1105\u1169\u11A8\u1103\u116C\u11AB-\u110B\u116F\u11AB\u1100\u1167\u11A8-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u1106\u1169\u11A8\u1105\u1169\u11A8-\u1112\u116A\u11A8\u110B\u1175\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1103\u1173\u11BC\u1105\u1169\u11A8\u1103\u116C\u11AB-\u110B\u116F\u11AB\u1100\u1167\u11A8-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u1106\u1169\u11A8\u1105\u1169\u11A8-\u1112\u116A\u11A8\u110B\u1175\u11AB" aria-hidden="true">#</a> \uB4F1\uB85D\uB41C \uC6D0\uACA9 \uC800\uC7A5\uC18C \uBAA9\uB85D \uD655\uC778</h3><div class="language-text ext-text"><pre class="language-text"><code>git remote
git remote show [alias]
git remote -v
</code></pre></div><h3 id="\u1103\u1173\u11BC\u1105\u1169\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1103\u1173\u11BC\u1105\u1169\u11A8" aria-hidden="true">#</a> \uB4F1\uB85D</h3><div class="language-text ext-text"><pre class="language-text"><code>git remote add &lt;alias&gt; &lt;\uC6D0\uACA9 \uC800\uC7A5\uC18C URL&gt;
</code></pre></div><p>\uC608\uC2DC</p><div class="language-text ext-text"><pre class="language-text"><code>git remote add origin https://github.com/DrMaemi/apple-edu-react-study.git
</code></pre></div><h3 id="url-\u1107\u1167\u11AB\u1100\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#url-\u1107\u1167\u11AB\u1100\u1167\u11BC" aria-hidden="true">#</a> URL \uBCC0\uACBD</h3><div class="language-text ext-text"><pre class="language-text"><code>git remote set-url &lt;alias&gt; &lt;\uC0C8\uB85C\uC6B4 \uC6D0\uACA9 \uC800\uC7A5\uC18C URL&gt;
</code></pre></div><h3 id="alias-\u1107\u1167\u11AB\u1100\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#alias-\u1107\u1167\u11AB\u1100\u1167\u11BC" aria-hidden="true">#</a> alias \uBCC0\uACBD</h3><div class="language-text ext-text"><pre class="language-text"><code>git remote rename &lt;old alias&gt; &lt;new alias&gt;
</code></pre></div><p>\uC608\uC2DC</p><div class="language-text ext-text"><pre class="language-text"><code>git remote rename origin github
</code></pre></div><h3 id="\u110E\u116C\u1109\u1175\u11AB\u1112\u116A-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u110E\u116C\u1109\u1175\u11AB\u1112\u116A-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173" aria-hidden="true">#</a> \uCD5C\uC2E0\uD654(\uC5C5\uB370\uC774\uD2B8)</h3><div class="language-text ext-text"><pre class="language-text"><code>git remote update
</code></pre></div><details class="custom-container details"><summary><code>git remote --help</code>\uB85C \uD655\uC778\uD574\uBCF8 update \uC124\uBA85</summary><div class="language-text ext-text"><pre class="language-text"><code>$ git remote --help
...
...
       update
           Fetch updates for remotes or remote groups in the repository as defined by remotes.&lt;group&gt;. If neither group nor rem
ote is
           specified on the command line, the configuration parameter remotes.default will be used; if remotes.default is 
not defined, all remotes which do not have the configuration para
meter remote.&lt;name&gt;.skipDefaultUpdate set to true will be 
updated. (See git-config(1)).

           With --prune option, run pruning against all the remotes that are updated.
...
...
</code></pre></div></details><h3 id="\u1109\u1161\u11A8\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u11A8\u110C\u1166" aria-hidden="true">#</a> \uC0AD\uC81C</h3><div class="language-text ext-text"><pre class="language-text"><code>git remote remove &lt;alias&gt;
</code></pre></div><p>\uC608\uC2DC</p><div class="language-text ext-text"><pre class="language-text"><code>git remote remove origin
</code></pre></div>`,25),d=e({__name:"03-git-remote.html",setup(o){return(l,g)=>(t(),a("div",null,[s,C(r(u))]))}}),h=n(d,[["__file","03-git-remote.html.vue"]]);export{h as default};
