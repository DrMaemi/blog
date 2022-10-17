import{D as t}from"./DetailsOpen.d5ab58f9.js";import{f as o,o as p,c as e,a as n,b as s,d as a,u as c,e as C,r as l}from"./app.8771a5fb.js";import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";const r=n("p",null,"C++\uB294 \uAC1D\uCCB4 \uC9C0\uD5A5 \uBC0F \uBA40\uD2F0 \uD328\uB7EC\uB2E4\uC784\uC744 \uC9C0\uC6D0\uD558\uB294 \uD504\uB85C\uADF8\uB798\uBC0D \uC5B8\uC5B4\uB2E4. C\uC5D0\uB294 \uC5C6\uB294 \uAC1D\uCCB4 \uC9C0\uD5A5 \uD504\uB85C\uADF8\uBC0D\uC744 \uC704\uD55C \uAE30\uB2A5\uC744 \uAC00\uC9C0\uACE0 \uC788\uC5B4 C\uC5B8\uC5B4\uC758 \uD655\uC7A5\uD310\uC73C\uB85C \uC0DD\uAC01\uD574\uB3C4 \uBB34\uBC29\uD558\uB2E4.",-1),d=n("h2",{id:"\u110B\u1171\u11AB\u1103\u1169\u110B\u116E-vs-code",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u110B\u1171\u11AB\u1103\u1169\u110B\u116E-vs-code","aria-hidden":"true"},"#"),s(" \uC708\uB3C4\uC6B0 - VS Code")],-1),k={href:"https://drmaemi.github.io/tools/mingw/installation",target:"_blank",rel:"noopener noreferrer"},B=C(`<p>MinGW\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uC124\uCE58\uB410\uB2E4\uBA74, VS Code\uC5D0 \uC5F0\uB3D9\uD574\uC57C \uD55C\uB2E4. VS Code\uC5D0\uC11C \uC6CC\uD0B9 \uB514\uB809\uD1A0\uB9AC \uCD5C\uC0C1\uC704 \uACBD\uB85C\uC5D0 <code>.vscode</code> \uD3F4\uB354\uB97C \uC0DD\uC131\uD558\uACE0, \uB0B4\uBD80\uC5D0 <code>tasks.json</code> \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uC5EC \uB2E4\uC74C \uCF54\uB4DC\uB97C \uCD94\uAC00\uD55C\uB2E4.</p><details class="custom-container details"><summary>/.vscode/tasks.json</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;runner&quot;</span><span class="token operator">:</span> <span class="token string">&quot;terminal&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shell&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;echoCommand&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;presentation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;reveal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">/* C++ \uCEF4\uD30C\uC77C */</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SAVE &amp; COMPILE FOR C++&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;g++&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;\${file}&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;-o&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;\${fileDirname}/\${fileBasenameNoExtension}&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">/* \uCEF4\uD30C\uC77C\uC2DC \uC5D0\uB7EC\uB97C \uD3B8\uC9D1\uAE30\uC5D0 \uBC18\uC601 */</span>
            <span class="token comment">/* \uCC38\uACE0 - https://code.visualstudio.com/docs/editor/tasks#_defining-a-problem-matcher */</span>
            <span class="token property">&quot;problemMatcher&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;fileLocation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;relative&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\${workspaceRoot}&quot;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">/* The regular expression */</span>
                    <span class="token comment">/* Example to match: helloWorld.c:5:3: warning: implicit declaration of function &#39;prinft&#39; */</span>
                    <span class="token property">&quot;regexp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning error):\\\\s+(.*)$&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;line&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;column&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;severity&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">/* C \uCEF4\uD30C\uC77C */</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SAVE &amp; COMPILE FOR C&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gcc&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;\${file}&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;-o&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;\${fileDirname}/\${fileBasenameNoExtension}&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">/* \uCEF4\uD30C\uC77C\uC2DC \uC5D0\uB7EC\uB97C \uD3B8\uC9D1\uAE30\uC5D0 \uBC18\uC601 */</span>
            <span class="token comment">/* \uCC38\uACE0:   https://code.visualstudio.com/docs/editor/tasks#_defining-a-problem-matcher */</span>
            <span class="token property">&quot;problemMatcher&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;fileLocation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;relative&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;\${workspaceRoot}&quot;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">/* The regular expression */</span>
                    <span class="token comment">/* Example to match: helloWorld.c:5:3: warning: implicit declaration of function &#39;prinft&#39; */</span>
                    <span class="token property">&quot;regexp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning error):\\\\s+(.*)$&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;line&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;column&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;severity&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">/* \uBC14\uC774\uB108\uB9AC \uC2E4\uD589(Windows) */</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EXECUTE&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\${fileDirname}\\\\\${fileBasenameNoExtension}&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><code>tasks.json</code> \uD30C\uC77C\uC744 \uC791\uC131\uD558\uAC8C \uB418\uBA74 VS Code\uC5D0\uC11C .c \uD639\uC740 .cpp \uD30C\uC77C\uC744 \uC791\uC131\uD55C \uD6C4 <code>Ctrl</code> + <code>Shift</code> + <code>B</code> \uB2E8\uCD95\uD0A4\uB97C \uD1B5\uD574 \uCEF4\uD30C\uC77C\uD560 \uC218 \uC788\uB2E4.</p><p>\uC774\uB294 VS Code\uC5D0 \uD574\uB2F9 \uB2E8\uCD95\uD0A4\uAC00 <strong>C/C++ \uCEF4\uD30C\uC77C/\uBE4C\uB4DC\uB97C \uD558\uAE30 \uC704\uD574\uC11C \uC774\uBBF8 \uC9C0\uC815\uB418\uC5B4 \uC788\uAE30 \uB54C\uBB38</strong>\uC774\uB2E4.</p><p>\uADF8\uB7EC\uB098 <strong>\uC18C\uC2A4\uCF54\uB4DC\uAC00 \uCEF4\uD30C\uC77C\uB41C .exe \uD30C\uC77C\uC744 \uC2E4\uD589\uC2DC\uD0A4\uB294 \uB2E8\uCD95\uD0A4\uB294 \uC9C0\uC815\uB418\uC5B4 \uC788\uC9C0 \uC54A\uB2E4</strong>.</p><p class="align-center"><img src="https://drive.google.com/uc?export=view&amp;id=1mrLEAfc20Nn1JXOon9Jsfq7VShyFJRdf" alt="" loading="lazy"> &lt;\uADF8\uB9BC 1. Ctrl + K + S \uB2E8\uCD95\uD0A4\uB97C \uC0AC\uC6A9\uD558\uC5EC Keyboard Shortcuts \uC138\uD305 \uD655\uC778&gt;</p><p class="align-center"><img src="https://drive.google.com/uc?export=view&amp;id=1EGpvvz5hgq0RqctXWA7yGxzFqAEnyznd" alt="" loading="lazy"> &lt;\uADF8\uB9BC 2. \uC18C\uC2A4\uCF54\uB4DC\uAC00 \uCEF4\uD30C\uC77C\uB41C .exe \uD30C\uC77C\uC744 \uC2E4\uD589\uC2DC\uD0A4\uB294 \uB2E8\uCD95\uD0A4\uB294 \uC9C0\uC815\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC74C&gt;</p><p class="align-center"><img src="https://drive.google.com/uc?export=view&amp;id=1Z9MxCDxhQ4ETj1cPgCP937_qD-i4bN54" alt="" loading="lazy"> &lt;\uADF8\uB9BC 3. keybindings.json \uD30C\uC77C\uC744 \uC5F4\uAE30 \uC704\uD574 \uC6B0\uCE21 \uC0C1\uB2E8 \uC544\uC774\uCF58 \uD074\uB9AD&gt;</p><p>\uB2E8\uCD95\uD0A4 \uC124\uC815\uC744 \uC704\uD574 <code>keybindings.json</code> \uD30C\uC77C [] \uB0B4\uBD80\uC5D0 \uB2E4\uC74C \uAC1D\uCCB4 \uCF54\uB4DC\uB97C \uCD94\uAC00\uD55C\uB2E4.</p><details class="custom-container details"><summary>keybindings.json</summary><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token comment">/* \uCEF4\uD30C\uC77C */</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+shift+c&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.tasks.build&quot;</span>
        <span class="token comment">// \uBCC0\uACBD \uC804 - CTRL + ALT + B</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/* \uC2E4\uD589 */</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+shift+r&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;workbench.action.tasks.test&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div></details><p><code>keybindings.json</code> \uD30C\uC77C\uC740 \uC708\uB3C4\uC6B0\uC5D0\uC11C C:/Users/&lt;\uC720\uC800 \uC774\uB984&gt;/AppData/Roaming/Code/User \uACBD\uB85C\uC5D0 \uC788\uB2E4.</p><p>\uC5EC\uAE30\uAE4C\uC9C0 \uC124\uC815\uD588\uB2E4\uBA74 <code>Ctrl</code> + <code>Shift</code> + <code>C</code>, <code>Ctrl</code> + <code>Shift</code> + <code>R</code>\uB85C C/C++ \uC18C\uC2A4\uCF54\uB4DC\uB97C \uCEF4\uD30C\uC77C \uBC0F \uC2E4\uD589\uD560 \uC218 \uC788\uB2E4.</p><p>\uCD94\uAC00\uB85C, &lt;\uADF8\uB9BC 4&gt;, &lt;\uADF8\uB9BC 5&gt;\uC640 \uAC19\uC774 Command Pallet\uC5D0\uC11C C/C++ \uD3B8\uC9D1 \uAD6C\uC131\uC5D0 \uAD00\uD55C \uC124\uC815\uC744 \uC774\uC6A9\uD558\uBA74 \uC0AC\uC6A9\uD560 \uCEF4\uD30C\uC77C\uB7EC\uB97C \uC9C1\uC811 \uC9C0\uC815\uD560 \uC218 \uC788\uB2E4.</p><p class="align-center"><img src="https://drive.google.com/uc?export=view&amp;id=1q3JGoEooqxTehXovPth3sk0cqQ9YHZhk" alt="" loading="lazy"> &lt;\uADF8\uB9BC 4. Command Pallet\uC5D0\uC11C C/C++ \uAC80\uC0C9&gt;</p><p class="align-center"><img src="https://drive.google.com/uc?export=view&amp;id=1KPISD7dwI-xIFfgel5ccbv7VOoBLypkw" alt="" loading="lazy"> &lt;\uADF8\uB9BC 5. C/C++ \uD3B8\uC9D1\uAE30 \uAD6C\uC131 \uC124\uC815&gt;</p><p>\uC704 \uC124\uC815\uC744 \uB05D\uB0B4\uBA74 <code>.vscode</code> \uD3F4\uB354 \uB0B4\uC5D0 <code>c_cpp_properties.json</code> \uD30C\uC77C\uC774 \uC0DD\uC131\uB41C\uB2E4.</p><h2 id="\u1107\u1169\u110E\u116E\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1107\u1169\u110E\u116E\u11BC" aria-hidden="true">#</a> \uBCF4\uCDA9</h2><p>\uC708\uB3C4\uC6B0\uC5D0\uC11C git bash\uB97C VS Code\uC758 \uAE30\uBCF8 \uD130\uBBF8\uB110\uB85C \uC124\uC815\uD55C \uACBD\uC6B0, C/C++ \uCEF4\uD30C\uC77C \uC2DC <code>:\\</code>\uC640 \uAC19\uC740 \uB514\uB809\uD1A0\uB9AC \uAD6C\uBD84\uC790\uB97C \uC778\uC2DD\uD558\uC9C0 \uBABB\uD574 <code>No such file or directory</code> \uC624\uB958\uB97C \uB9CC\uB0AC\uC5C8\uB2E4.</p><p>\uC704 \uC624\uB958\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574\uC120 <code>tasks.json</code> \uD30C\uC77C \uB0B4\uBD80\uC5D0\uC11C <code>gcc</code>, <code>g++</code> \uBA85\uB839\uC5B4 \uC778\uC790\uC778 <code>args</code>\uC5D0 \uD30C\uC77C \uBC0F \uACBD\uB85C\uC640 \uAD00\uB828\uB41C \uBD80\uBD84\uC744 <code>&#39;&#39;</code>(\uC791\uC740 \uB530\uC634\uD45C)\uB85C \uAC10\uC2F8\uC57C \uD55C\uB2E4. \uB610\uD55C \uBC14\uC774\uB108\uB9AC \uC2E4\uD589\uC5D0 \uD544\uC694\uD55C \uC778\uC790\uC5D0\uC11C <code>/C</code>\uB97C \uC81C\uAC70\uD55C\uB2E4.</p><details class="custom-container details"><summary>/.vscode/tasks.json - \`// \uCC38\uC870\`, \`// \uC81C\uAC70\` \uC8FC\uC11D \uC720\uC758</summary><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0&quot;</span><span class="token punctuation">,</span>
    ...
    <span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SAVE &amp; COMPILE FOR C++&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;g++&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;&#39;\${file}&#39;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \uCC38\uC870</span>
                <span class="token string">&quot;-o&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;&#39;\${fileDirname}/\${fileBasenameNoExtension}&#39;&quot;</span> <span class="token comment">// \uCC38\uC870</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span>
            ...
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">/* C \uCEF4\uD30C\uC77C */</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SAVE &amp; COMPILE FOR C&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gcc&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;&#39;\${file}&#39;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \uCC38\uC870</span>
                <span class="token string">&quot;-o&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;&#39;\${fileDirname}/\${fileBasenameNoExtension}&#39;&quot;</span> <span class="token comment">// \uCC38\uC870</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            ...
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">/* \uBC14\uC774\uB108\uB9AC \uC2E4\uD589(Windows) */</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EXECUTE&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cmd&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token comment">// &quot;/C&quot;, // \uC81C\uAC70</span>
                <span class="token string">&quot;&#39;\${fileDirname}\\\\\${fileBasenameNoExtension}&#39;&quot;</span> <span class="token comment">// \uCC38\uC870</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></details>`,20),m=o({__name:"0-dev-env.html",setup(D){return(q,v)=>{const u=l("ExternalLinkIcon");return p(),e("div",null,[r,d,n("p",null,[s("C/C++ \uC18C\uC2A4\uB97C \uCEF4\uD30C\uC77C\uD560 \uC218 \uC788\uB294 MinGW\uAC00 \uC124\uCE58\uB418\uC5B4 \uC788\uB2E4\uACE0 \uAC00\uC815\uD55C\uB2E4. \uB9CC\uC57D \uC124\uCE58\uB418\uC5B4\uC788\uC9C0 \uC54A\uB2E4\uBA74 "),n("a",k,[s("\uB9C1\uD06C"),a(u)]),s(" \uCC38\uC870\uD558\uAE38 \uBC14\uB780\uB2E4.")]),B,a(c(t))])}}}),A=i(m,[["__file","0-dev-env.html.vue"]]);export{A as default};
