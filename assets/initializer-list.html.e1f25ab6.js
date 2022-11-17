import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,a as n,b as s,d as t,e as c,r as i}from"./app.d57b59e5.js";const l={},u=c(`<h2 id="\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161\u110B\u116A-\u110E\u1169\u1100\u1175\u1112\u116A-\u1105\u1175\u1109\u1173\u1110\u1173-\u1107\u1175\u1100\u116D" tabindex="-1"><a class="header-anchor" href="#\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161\u110B\u116A-\u110E\u1169\u1100\u1175\u1112\u116A-\u1105\u1175\u1109\u1173\u1110\u1173-\u1107\u1175\u1100\u116D" aria-hidden="true">#</a> \uC0DD\uC131\uC790\uC640 \uCD08\uAE30\uD654 \uB9AC\uC2A4\uD2B8 \uBE44\uAD50</h2><p>\uAD6C\uC870\uCCB4 Student\uAC00 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC788\uC744 \uB54C,</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> <span class="token keyword">long</span> id<span class="token punctuation">;</span>
    string name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\uC0DD\uC131\uC790\uB85C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token function">Student</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> id<span class="token punctuation">,</span> string name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uADF8\uB7F0\uB370 \uC704 \uCF54\uB4DC\uC640 \uC544\uB798 \uCF54\uB4DC\uB294 \uAC19\uC740 \uAE30\uB2A5\uC744 \uC218\uD589\uD569\uB2C8\uB2E4.</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token function">Student</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> id<span class="token punctuation">,</span> string name<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function">id</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre></div><p>C++\uC5D0\uC11C \uC704\uC640 \uAC19\uC774 \uCF5C\uB860\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1D\uCCB4\uB97C \uCD08\uAE30\uD654\uD558\uB294 \uAC83\uC744 <strong>\uCD08\uAE30\uD654 \uB9AC\uC2A4\uD2B8</strong>\uB77C\uACE0 \uD569\uB2C8\uB2E4.</p><h2 id="\u110B\u1168\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u110C\u1166" aria-hidden="true">#</a> \uC608\uC81C</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> <span class="token keyword">long</span> id<span class="token punctuation">;</span>
    string name<span class="token punctuation">;</span>

    <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token function">Student</span><span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span> id<span class="token punctuation">,</span> string name<span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token function">id</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span>Student<span class="token operator">&amp;</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;(&quot;</span><span class="token operator">+</span><span class="token function">to_string</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;, &quot;</span><span class="token operator">+</span>s<span class="token punctuation">.</span>name <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;)\\n&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Student s<span class="token punctuation">;</span>
    Student<span class="token operator">*</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token operator">*</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC2E4\uD589 \uACB0\uACFC</p><div class="language-text ext-text"><pre class="language-text"><code>(0, )
(1, 1)
</code></pre></div><h2 id="\u110E\u1169\u1100\u1175\u1112\u116A-\u1105\u1175\u1109\u1173\u1110\u1173\u1105\u1173\u11AF-\u110A\u1173\u1102\u1173\u11AB-\u1100\u1167\u11BC\u110B\u116E" tabindex="-1"><a class="header-anchor" href="#\u110E\u1169\u1100\u1175\u1112\u116A-\u1105\u1175\u1109\u1173\u1110\u1173\u1105\u1173\u11AF-\u110A\u1173\u1102\u1173\u11AB-\u1100\u1167\u11BC\u110B\u116E" aria-hidden="true">#</a> \uCD08\uAE30\uD654 \uB9AC\uC2A4\uD2B8\uB97C \uC4F0\uB294 \uACBD\uC6B0</h2><ul><li>\uD074\uB798\uC2A4\uAC00 \uB808\uD37C\uB7F0\uC2A4(&amp;)\uB97C \uBA64\uBC84\uB85C \uAC00\uC9C8 \uB54C</li><li>non static const \uBA64\uBC84\uAC00 \uC788\uC744 \uB54C</li><li>default \uC0DD\uC131\uC790\uAC00 \uC5C6\uC744 \uB54C</li><li>base class\uB97C \uCD08\uAE30\uD654\uD560 \uB54C</li><li>\uC0DD\uC131\uC790 \uD30C\uB77C\uBBF8\uD130 \uC774\uB984\uC774 \uB370\uC774\uD130 \uBA64\uBC84\uB791 \uAC19\uC744 \uB54C this \uBB38\uBC95 \uB300\uC2E0 \uC0AC\uC6A9\uD558\uAE30 \uC704\uD574</li></ul><h2 id="a-\u110E\u1161\u11B7\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#a-\u110E\u1161\u11B7\u110C\u1169" aria-hidden="true">#</a> A. \uCC38\uC870</h2>`,15),r={style:{"text-align":"left"}},d={href:"http://hashcode.co.kr",target:"_blank",rel:"noopener noreferrer"},k={href:"https://hashcode.co.kr/questions/629/%EC%83%9D%EC%84%B1%EC%9E%90%EC%97%90%EC%84%9C-%EC%BD%9C%EB%A1%A0%EC%9D%80-%EC%99%9C-%EC%93%B0%EB%8A%94-%EA%B1%B4%EA%B0%80%EC%9A%94",target:"_blank",rel:"noopener noreferrer"};function v(m,g){const a=i("ExternalLinkIcon");return e(),o("div",null,[u,n("div",r,[n("p",null,[s('\uC724\uB3D9\uAE38, "\uC0DD\uC131\uC790\uC5D0\uC11C \uCF5C\uB860(:)\uC740 \uC65C \uC4F0\uB294 \uAC74\uAC00 - \uCD08\uAE30\uD654 \uB9AC\uC2A4\uD2B8\uD2B8\uC694?," '),n("em",null,[n("a",d,[s("hashcode.co.kr"),t(a)])]),s(", Jan. 25, 2016. [Online]. Available: "),n("a",k,[s("https://hashcode.co.kr/questions/629/\uC0DD\uC131\uC790\uC5D0\uC11C-\uCF5C\uB860\uC740-\uC65C-\uC4F0\uB294-\uAC74\uAC00\uC694"),t(a)]),s(" [Accessed Sep. 23, 2022].")])])])}const f=p(l,[["render",v],["__file","initializer-list.html.vue"]]);export{f as default};