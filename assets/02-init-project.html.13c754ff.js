import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,a as s,b as n,d as c,e as a,r as i}from"./app.df2ad722.js";const r={},l=a(`<p>\uB85C\uCEEC\uC5D0\uC11C \uAE43 \uC800\uC7A5\uC18C\uB97C \uC0DD\uC131(\uCD08\uAE30\uD654)\uD558\uAE30 \uC704\uD574\uC11C \uC0AC\uC6A9\uD558\uB294 \uBA85\uB839\uC5B4\uB294 \uD06C\uAC8C \uB450 \uAC00\uC9C0\uC774\uB2E4.</p><ol><li><code>git clone</code></li><li><code>git init</code></li></ol><h2 id="_1-git-clone" tabindex="-1"><a class="header-anchor" href="#_1-git-clone" aria-hidden="true">#</a> 1. <code>git clone</code></h2><p>\uAE43 \uC6D0\uACA9 \uC800\uC7A5\uC18C\uC5D0 \uC774\uBBF8 \uC874\uC7AC\uD558\uB294 \uD504\uB85C\uC81D\uD2B8\uB85C\uBD80\uD130 \uB2E4\uC6B4\uB85C\uB4DC\uBC1B\uC544 \uC2DC\uC791\uD558\uAE38 \uC6D0\uD558\uB294 \uACBD\uC6B0 \uC0AC\uC6A9\uD558\uB294 \uBA85\uB839\uC5B4\uB2E4. \uAE43\uC740 \uD574\uB2F9 \uD504\uB85C\uC81D\uD2B8 \uACBD\uB85C \uD558\uC704 <code>.git</code> \uD30C\uC77C \uC874\uC7AC \uC720\uBB34\uB85C \uAE43 \uC800\uC7A5\uC18C\uC778\uC9C0 \uC544\uB2CC\uC9C0 \uD310\uB2E8\uD55C\uB2E4.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/DrMaemi/test.git
Cloning into <span class="token string">&#39;test&#39;</span><span class="token punctuation">..</span>.
remote: Enumerating objects: <span class="token number">12</span>, done.
remote: Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">12</span>/12<span class="token punctuation">)</span>, done.
remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">7</span>/7<span class="token punctuation">)</span>, done.
remote: Total <span class="token number">12</span> <span class="token punctuation">(</span>delta <span class="token number">3</span><span class="token punctuation">)</span>, reused <span class="token number">10</span> <span class="token punctuation">(</span>delta <span class="token number">1</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
Receiving objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">12</span>/12<span class="token punctuation">)</span>, <span class="token number">84.27</span> KiB <span class="token operator">|</span> <span class="token number">42.13</span> MiB/s, done.
Resolving deltas: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, done.
</code></pre></div><h2 id="_2-git-init" tabindex="-1"><a class="header-anchor" href="#_2-git-init" aria-hidden="true">#</a> 2. <code>git init</code></h2><p>\uB85C\uCEEC\uC5D0 \uC874\uC7AC\uD558\uB294 \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8 \uB514\uB809\uD1A0\uB9AC\uC5D0\uC11C \uB2E4\uC74C \uBA85\uB839\uC5B4\uB4E4\uC744 \uC0AC\uC6A9\uD55C\uB2E4.</p><ol><li><code>git init</code></li><li><code>git add &lt;directory or file&gt;</code></li><li><code>git commit -m &quot;&lt;commit message&gt;&quot;</code></li><li><code>git push</code></li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">git</span> init
Initialized empty Git repository <span class="token keyword">in</span> C:/dev/Java/Projects/Eclipse/BBS-JSP/.git/

$ <span class="token function">git</span> status
On branch master

No commits yet

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        .classpath
        .project
        .settings/
        src/

nothing added to commit but untracked files present <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>

$ <span class="token function">git</span> push
fatal: No configured push destination.
Either specify the URL from the command-line or configure a remote repository using

    <span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>

and <span class="token keyword">then</span> push using the remote name

    <span class="token function">git</span> push <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
</code></pre></div>`,9),u=s("code",null,"git remote add <name> <remote repository URL>",-1),d={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote <span class="token function">add</span> github https://github.com/DrMaemi/BBS-JSP.git

$ <span class="token function">git</span> push github master
Enumerating objects: <span class="token number">21</span>, done.
Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">21</span>/21<span class="token punctuation">)</span>, done.
Delta compression using up to <span class="token number">16</span> threads
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">14</span>/14<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">21</span>/21<span class="token punctuation">)</span>, <span class="token number">1.93</span> MiB <span class="token operator">|</span> <span class="token number">500.00</span> KiB/s, done.
Total <span class="token number">21</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
To https://github.com/DrMaemi/BBS-JSP.git
 * <span class="token punctuation">[</span>new branch<span class="token punctuation">]</span>      master -<span class="token operator">&gt;</span> master
</code></pre></div><h2 id="git-\u1111\u1161\u110B\u1175\u11AF-\u1100\u116A\u11AB\u1105\u1175\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-3\u1100\u1161\u110C\u1175-\u110B\u1167\u11BC\u110B\u1167\u11A8" tabindex="-1"><a class="header-anchor" href="#git-\u1111\u1161\u110B\u1175\u11AF-\u1100\u116A\u11AB\u1105\u1175\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-3\u1100\u1161\u110C\u1175-\u110B\u1167\u11BC\u110B\u1167\u11A8" aria-hidden="true">#</a> Git \uD30C\uC77C \uAD00\uB9AC\uB97C \uC704\uD55C 3\uAC00\uC9C0 \uC601\uC5ED</h2><h3 id="working-directory" tabindex="-1"><a class="header-anchor" href="#working-directory" aria-hidden="true">#</a> Working Directory</h3><ul><li>\uD504\uB85C\uC81D\uD2B8\uC758 \uD2B9\uC815 \uBC84\uC804\uC744 Check-out\uD55C \uC601\uC5ED</li></ul><h3 id="staging-area" tabindex="-1"><a class="header-anchor" href="#staging-area" aria-hidden="true">#</a> Staging Area</h3><ul><li>Staing Index, \uB610\uB294 \uC2A4\uD14C\uC774\uC9D5\uC774\uB77C \uBD80\uB984</li><li>\uC800\uC7A5\uD560 \uD30C\uC77C\uB4E4\uC5D0 \uB300\uD55C \uC815\uBCF4\uB97C \uB2F4\uACE0 \uC788\uB294 \uD30C\uC77C</li><li>.git/index</li></ul><h3 id="git-directory" tabindex="-1"><a class="header-anchor" href="#git-directory" aria-hidden="true">#</a> Git Directory</h3><p>(\uC791\uC131 \uC911...)</p>`,8);function g(m,h){const t=i("ExternalLinkIcon");return o(),p("div",null,[l,s("p",null,[n("\uC704 \uBA85\uB839\uC5B4\uB97C \uC0B4\uD3B4\uBCF4\uBA74 \uC6D0\uACA9 \uC800\uC7A5\uC18C URL\uC744 \uB4F1\uB85D\uD574\uC8FC\uC9C0 \uC54A\uC558\uAE30 \uB54C\uBB38\uC5D0 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD55C\uB2E4. "),u,n("\uB85C \uC6D0\uACA9 \uC800\uC7A5\uC18C\uB97C \uB4F1\uB85D\uD574\uC900\uB2E4. \uB4F1\uB85D\uD560 \uC6D0\uACA9 \uC800\uC7A5\uC18C\uB294 "),s("a",d,[n("Github"),c(t)]),n("\uC5D0\uC11C \uBBF8\uB9AC \uC0DD\uC131\uB418\uC5B4 \uC788\uC5B4\uC57C \uD55C\uB2E4.")]),k])}const _=e(r,[["render",g],["__file","02-init-project.html.vue"]]);export{_ as default};
