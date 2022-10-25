import{D as p}from"./DetailsOpen.d5ab58f9.js";import{f as o,o as e,c,a as s,b as n,d as a,u as l,e as u,r as i}from"./app.6b3c7dfe.js";import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";const k=u(`<h2 id="\u110C\u1175\u11B8\u1112\u1161\u11B8-set-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165" tabindex="-1"><a class="header-anchor" href="#\u110C\u1175\u11B8\u1112\u1161\u11B8-set-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165" aria-hidden="true">#</a> \uC9D1\uD569(set) \uCEE8\uD14C\uC774\uB108</h2><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">template</span> <span class="token operator">&lt;</span>
    <span class="token keyword">class</span> <span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token comment">// set::key_type/value_type</span>
    <span class="token keyword">class</span> <span class="token class-name">Compare</span> <span class="token operator">=</span> less<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// set::key_compare/value_compare</span>
    <span class="token keyword">class</span> <span class="token class-name">Alloc</span> <span class="token operator">=</span> allocator<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> <span class="token comment">// set::allocator_type</span>
<span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">set</span><span class="token punctuation">;</span>
</code></pre></div><p>\uC9D1\uD569(set)\uC740 \uACE0\uC720\uD55C(unique) \uC694\uC18C\uB97C \uD2B9\uC815 \uC21C\uC11C\uC5D0 \uB530\uB77C \uC800\uC7A5\uD558\uB294 \uC5F0\uAD00 \uCEE8\uD14C\uC774\uB108(Associative Container)\uB2E4. \uC9D1\uD569\uC5D0 \uC800\uC7A5\uB41C \uB370\uC774\uD130\uB294 \uC218\uC815\uC774 \uBD88\uAC00\uD558\uC9C0\uB9CC \uC0C8\uB85C\uC6B4 \uC790\uB8CC\uAC00 \uC0BD\uC785\uB418\uAC70\uB098 \uAE30\uC874\uC5D0 \uC788\uB358 \uB370\uC774\uD130\uB97C \uC0AD\uC81C\uD560 \uC218 \uC788\uB2E4.</p><p>\uC9D1\uD569\uC740 \uB0B4\uBD80\uC801\uC73C\uB85C <em>strict weak ordering</em> \uAE30\uC900\uC5D0 \uB530\uB77C \uC5B8\uC81C\uB098 \uC815\uB82C\uB418\uC5B4 \uC788\uC73C\uBA70 \uD574\uB2F9 \uAE30\uC900\uC740 \uC9D1\uD569 \uB0B4\uBD80 \uBE44\uAD50 \uAC1D\uCCB4(comparison object)\uC5D0 \uB530\uB77C \uACB0\uC815\uB41C\uB2E4. \uB530\uB77C\uC11C C++\uC5D0\uC11C \uC0AC\uC6A9\uC790 \uC815\uC758 \uC790\uB8CC\uD615\uC744 \uC694\uC18C\uB85C \uAC00\uC9C0\uB294 \uC9D1\uD569\uC744 \uC0AC\uC6A9\uD560 \uB54C\uB294 \uBE44\uAD50\uB97C \uC704\uD55C \uC5F0\uC0B0\uC790<code>&lt;</code> \uC624\uBC84\uB85C\uB529\uC774 \uD544\uC694\uD558\uB2E4.</p><div class="custom-container info"><p class="custom-container-title">Info</p><p><em>strict weak ordering</em>\uC740 <em>strict partial order</em>\uC774\uBA74\uC11C <em>incomparability</em>\uAC00 <em>equivalence</em>\uB97C \uC758\uBBF8\uD558\uB294 <em>order</em>\uC774\uB2E4. strict partial order\uC758 \uC815\uC758\uB294 \uB2E4\uC74C\uACFC \uAC19\uB2E4.</p><blockquote><p>\uC9D1\uD569 A\uC640, A\uC5D0\uC11C \uC815\uC758\uB41C relation\u3008 \uC5D0 \uB300\uD558\uC5EC\u3008 \uAC00 \uB2E4\uC74C \uB450 \uC870\uAC74\uC744 \uB9CC\uC871\uC2DC\uD0A4\uBA74\u3008 \uB294 strict partial order\uC774\uB2E4. i) a\u3008 a \uB294 \uC131\uB9BD\uD558\uC9C0 \uC54A\uB294\uB2E4 (nonreflexivity) ii) a\u3008 b \uC774\uACE0 b\u3008 c \uC774\uBA74 a\u3008 c \uC774\uB2E4 (transitivity) for a, b, c \u2208 A.</p></blockquote><p>\uC774 \uB54C strict partial order \uC774\uAE30 \uB54C\uBB38\uC5D0 \u3008 \uB294 A\uC758 \uBAA8\uB4E0 \uC6D0\uC18C\uC5D0 \uB300\uD574 \uBE44\uAD50\uAC00\uB2A5\uD560 \uD544\uC694\uB294 \uC5C6\uB2E4. \uC774 \uC0C1\uD0DC\uC5D0\uC11C\u3008 \uAC00 weak ordering \uC774 \uB418\uBA74\uC11C \uCD94\uAC00\uB418\uB294 \uC870\uAC74\uC778</p><blockquote><p>incomparability\uB294 equivalence\uB97C \uC758\uBBF8\uD55C\uB2E4.</p></blockquote><p>\uC5D0 \uC758\uD574\u3008 \uB294 total ordering \uC774 \uB41C\uB2E4. \uC989, A x A \uC758 \uBAA8\uB4E0 pairs (a,b) \u2208 A x A \uC5D0 \uB300\uD558\uC5EC, a\u3008 b \uAC00 \uC815\uC758\uB418\uAC70\uB098, \uC815\uC758\uB418\uC9C0 \uC54A\uC744\uD150\uB370, \uC815\uC758\uB418\uBA74 \uADF8\uAC83\uC73C\uB85C \uB05D\uC774\uACE0, \uC815\uC758\uB418\uC9C0 \uC54A\uC73C\uBA74 equivalence \uC778 \uAC83\uC774\uB2E4. \uC989, &#39;\uAC19\uB2E4&#39;1. \uB530\uB77C\uC11C strict weak ordering\u3008 \uC5D0 \uC758\uD574 \uC9D1\uD569 A\uC758 \uBAA8\uB4E0 \uC6D0\uC18C\uC30D\uC740 \uAD00\uACC4\uB97C \uAC16\uAC8C \uB41C\uB2E4.</p></div><p>\uC9D1\uD569 \uCEE8\uD14C\uC774\uB108\uB97C \uC774\uC6A9\uD558\uB824\uBA74 \uB2E4\uC74C \uCF54\uB4DC\uB97C \uCD94\uAC00\uD574\uC57C \uD55C\uB2E4.</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;set&gt;</span></span>
</code></pre></div><h2 id="\u1106\u1166\u11B7\u1107\u1165-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#\u1106\u1166\u11B7\u1107\u1165-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> \uBA64\uBC84 \uD568\uC218</h2>`,8),C={href:"https://m.cplusplus.com/reference/set/set/",target:"_blank",rel:"noopener noreferrer"},d=u(`<h3 id="\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161-constructor" tabindex="-1"><a class="header-anchor" href="#\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161-constructor" aria-hidden="true">#</a> \uC0DD\uC131\uC790(Constructor)</h3><ul><li><em>empty container constructor</em></li><li><em>range constructor</em></li><li><em>copy constructor</em></li><li><em>move constructor</em></li><li><em>initializer constructor</em></li></ul><h3 id="\u1109\u1169\u1106\u1167\u11AF\u110C\u1161-desctructor" tabindex="-1"><a class="header-anchor" href="#\u1109\u1169\u1106\u1167\u11AF\u110C\u1161-desctructor" aria-hidden="true">#</a> \uC18C\uBA78\uC790(Desctructor)</h3><ul><li>~set</li></ul><h3 id="\u1107\u1161\u11AB\u1107\u1169\u11A8\u110C\u1161-iterators" tabindex="-1"><a class="header-anchor" href="#\u1107\u1161\u11AB\u1107\u1169\u11A8\u110C\u1161-iterators" aria-hidden="true">#</a> \uBC18\uBCF5\uC790(Iterators)</h3><ul><li>begin</li><li>end</li><li>rbegin</li><li>rend</li><li>cbegin</li><li>cend</li><li>crbegin</li><li>crend</li></ul><h3 id="\u110B\u116D\u11BC\u1105\u1163\u11BC-capacity" tabindex="-1"><a class="header-anchor" href="#\u110B\u116D\u11BC\u1105\u1163\u11BC-capacity" aria-hidden="true">#</a> \uC6A9\uB7C9(Capacity)</h3><ul><li>empty</li><li>size</li><li>max_size</li></ul><h3 id="\u1109\u116E\u110C\u1165\u11BC\u110C\u1161-modifiers" tabindex="-1"><a class="header-anchor" href="#\u1109\u116E\u110C\u1165\u11BC\u110C\u1161-modifiers" aria-hidden="true">#</a> \uC218\uC815\uC790(Modifiers)</h3><ul><li>insert</li><li>erase</li><li>swap</li><li>clear</li><li>emplace</li><li>emplace_hint</li></ul><h3 id="\u1100\u116A\u11AB\u110E\u1161\u11AF\u110C\u1161-observers" tabindex="-1"><a class="header-anchor" href="#\u1100\u116A\u11AB\u110E\u1161\u11AF\u110C\u1161-observers" aria-hidden="true">#</a> \uAD00\uCC30\uC790(Observers)</h3><ul><li>key_comp</li><li>value_comp</li></ul><h3 id="\u110B\u1167\u11AB\u1109\u1161\u11AB-operations" tabindex="-1"><a class="header-anchor" href="#\u110B\u1167\u11AB\u1109\u1161\u11AB-operations" aria-hidden="true">#</a> \uC5F0\uC0B0(Operations)</h3><ul><li>find</li><li>count</li><li>lower_bound</li><li>upper_bound</li><li>equal_range</li></ul><h3 id="\u1112\u1161\u11AF\u1103\u1161\u11BC\u110C\u1161-allocator" tabindex="-1"><a class="header-anchor" href="#\u1112\u1161\u11AF\u1103\u1161\u11BC\u110C\u1161-allocator" aria-hidden="true">#</a> \uD560\uB2F9\uC790(Allocator)</h3><ul><li>get_allocator</li></ul><h2 id="\u110B\u1168\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u110C\u1166" aria-hidden="true">#</a> \uC608\uC81C</h2><h3 id="\u1109\u1165\u11AB\u110B\u1165\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AB\u110B\u1165\u11AB" aria-hidden="true">#</a> \uC120\uC5B8</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">v</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> first<span class="token punctuation">;</span> <span class="token comment">// empty constructor</span>
set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">second</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// list initializer constructor</span>
set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">third</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// range constructor</span>
set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">fourth</span><span class="token punctuation">(</span>third<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// copy constructor</span>
</code></pre></div><h3 id="\u1109\u1165\u11AB\u110B\u1165\u11AB-with-\u1100\u116E\u110C\u1169\u110E\u1166" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AB\u110B\u1165\u11AB-with-\u1100\u116E\u110C\u1169\u110E\u1166" aria-hidden="true">#</a> \uC120\uC5B8 with \uAD6C\uC870\uCCB4</h3><details class="custom-container details"><summary><code>&lt;</code>\uC5F0\uC0B0\uC790 \uC624\uBC84\uB85C\uB529</summary><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> <span class="token keyword">long</span> id<span class="token punctuation">;</span>
    string name<span class="token punctuation">;</span>

    <span class="token keyword">bool</span> <span class="token keyword">operator</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token keyword">const</span> Student<span class="token operator">&amp;</span> rhs<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">!=</span> rhs<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token keyword">return</span> id <span class="token operator">&lt;</span> rhs<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
        <span class="token keyword">return</span> name <span class="token operator">&lt;</span> rhs<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

set<span class="token operator">&lt;</span>Student<span class="token operator">&gt;</span> <span class="token function">s</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

set<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span>Student<span class="token operator">&gt;&gt;</span> <span class="token function">s2</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><details class="custom-container details"><summary>Compare \uD074\uB798\uC2A4 \uC0AC\uC6A9</summary><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> <span class="token keyword">long</span> id<span class="token punctuation">;</span>
    string name<span class="token punctuation">;</span>

    <span class="token keyword">bool</span> <span class="token keyword">operator</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">const</span> Student<span class="token operator">&amp;</span> rhs<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">!=</span> rhs<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token keyword">return</span> id <span class="token operator">&gt;</span> rhs<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
        <span class="token keyword">return</span> name <span class="token operator">&gt;</span> rhs<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">StudentCompare</span> <span class="token punctuation">{</span>
    <span class="token keyword">bool</span> <span class="token keyword">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">const</span> Student<span class="token operator">&amp;</span> lhs<span class="token punctuation">,</span> <span class="token keyword">const</span> Student<span class="token operator">&amp;</span> rhs<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> lhs <span class="token operator">&gt;</span> rhs<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

set<span class="token operator">&lt;</span>Student<span class="token punctuation">,</span> StudentCompare<span class="token operator">&gt;</span> <span class="token function">s</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="find-erase" tabindex="-1"><a class="header-anchor" href="#find-erase" aria-hidden="true">#</a> find, erase</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code>set<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span>Student<span class="token operator">&gt;&gt;</span> <span class="token function">s2</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

set<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span>Student<span class="token operator">&gt;&gt;</span><span class="token double-colon punctuation">::</span>iterator it <span class="token operator">=</span> s2<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s2<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-cpp ext-cpp"><pre class="language-cpp"><code>set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">s</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">auto</span> it <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>it <span class="token operator">==</span> s<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;4 doesn&#39;t exist.\\n&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u110C\u1175\u11B8\u1112\u1161\u11B8-\u110B\u1167\u11AB\u1109\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110C\u1175\u11B8\u1112\u1161\u11B8-\u110B\u1167\u11AB\u1109\u1161\u11AB" aria-hidden="true">#</a> \uC9D1\uD569 \uC5F0\uC0B0</h3><ul><li><code>&lt;algorithm&gt;</code> \uD5E4\uB354\uC758 <code>set_union</code>, <code>set_intersection</code>, <code>set_difference</code> \uC774\uC6A9</li><li>\uC9D1\uD569 \uC5F0\uC0B0\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uB450 \uC790\uB8CC\uAD6C\uC870(\uD53C\uC5F0\uC0B0\uC790)\uB294 \uBAA8\uB450 \uC624\uB984\uCC28\uC21C \uB610\uB294 \uB0B4\uB9BC\uCC28\uC21C \uBC29\uC2DD\uC73C\uB85C \uB3D9\uC77C\uD558\uAC8C \uC815\uB82C\uB418\uC5B4 \uC788\uC5B4\uC57C \uD568</li><li>\uB450 \uC790\uB8CC\uAD6C\uC870\uB294 \uC774\uD130\uB808\uC774\uD130\uB098 \uD3EC\uC778\uD130\uB85C \uC0C9\uC778\uC774 \uAC00\uB2A5\uD574\uC57C \uD568</li><li><code>std::inserter</code>\uB97C \uC774\uC6A9\uD558\uBA74 \uACB0\uACFC \uCEE8\uD14C\uC774\uB108\uC758 \uBA54\uBAA8\uB9AC \uC81C\uC5B4(ex. resize, erase)\uB97C \uD560 \uD544\uC694 \uC5C6\uC74C</li></ul><div class="language-cpp ext-cpp"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> v <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">res</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span>s<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span>iterator it <span class="token operator">=</span> <span class="token function">set_union</span><span class="token punctuation">(</span>
    v<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    s<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    res<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

res<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>it<span class="token punctuation">,</span> res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 2 3 4 5 6</span>
</code></pre></div><div class="language-cpp ext-cpp"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> v <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> res<span class="token punctuation">;</span>

insert_iterator<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> it <span class="token operator">=</span> <span class="token function">set_union</span><span class="token punctuation">(</span>
    v<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    s<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">inserter</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> res<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 2 3 4 5 6</span>
</code></pre></div><h2 id="a-\u110E\u1161\u11B7\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#a-\u110E\u1161\u11B7\u110C\u1169" aria-hidden="true">#</a> A. \uCC38\uC870</h2>`,30),B={style:{"text-align":"left"}},m={href:"http://cplusplus.com",target:"_blank",rel:"noopener noreferrer"},h={href:"http://cplusplus.com",target:"_blank",rel:"noopener noreferrer"},A={href:"https://m.cplusplus.com/reference/set/set/",target:"_blank",rel:"noopener noreferrer"},D=s("em",null,"Tistory",-1),g={href:"https://adnoctum.tistory.com/206",target:"_blank",rel:"noopener noreferrer"},b={href:"http://Github.io",target:"_blank",rel:"noopener noreferrer"},f={href:"https://ansohxxn.github.io/stl/mapsetcustom/",target:"_blank",rel:"noopener noreferrer"},y={href:"http://Github.io",target:"_blank",rel:"noopener noreferrer"},_={href:"https://unluckyjung.github.io/cpp/2020/04/24/Set_Func/",target:"_blank",rel:"noopener noreferrer"},E=o({__name:"7-stl-set.html",setup(v){return(w,q)=>{const t=i("ExternalLinkIcon");return e(),c("div",null,[k,s("p",null,[n("\uAC01 \uBA64\uBC84\uD568\uC218\uC758 \uC608\uC81C \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uAE30\uC5D4 \uC591\uC774 \uB9E4\uC6B0 \uB9CE\uAE30 \uB54C\uBB38\uC5D0 "),s("a",C,[n("cplusplus.com"),a(t)]),n("\uC5D0\uC11C \uAC01 \uBA64\uBC84 \uD568\uC218 \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC5EC \uC608\uC81C\uB97C \uD655\uC778\uD558\uC790.")]),d,s("div",B,[s("p",null,[s("a",m,[n("cplusplus.com"),a(t)]),n(', "std::set," '),s("em",null,[s("a",h,[n("cplusplus.com"),a(t)])]),n(", [Online]. Available: "),s("a",A,[n("https://m.cplusplus.com/reference/set/set/"),a(t)]),n(" [Accessed May 26, 2022].")]),s("p",null,[n('adnoctum, "Strict weak ordering," '),D,n(", May 11, 2010. [Online]. Available: "),s("a",g,[n("https://adnoctum.tistory.com/206"),a(t)]),n(" [Accessed May 26, 2022].")]),s("p",null,[n('\uACF5\uBD80\uD558\uB294 \uC2DD\uBE75\uB9D8, "[STL \uCEE8\uD14C\uC774\uB108] set, unordered_set (+ map)\uC5D0 \uC0AC\uC6A9\uC790 \uC815\uC758 \uAD6C\uC870\uCCB4 \uD639\uC740 \uAC1D\uCCB4 \uB2F4\uAE30," '),s("em",null,[s("a",b,[n("Github.io"),a(t)])]),n(", Apr. 1, 2021. [Online]. Available: "),s("a",f,[n("https://ansohxxn.github.io/stl/mapsetcustom/"),a(t)]),n(" [Accessed May 31, 2022].")]),s("p",null,[n('UnluckyJung, "C++ \uD569\uC9D1\uD569, \uAD50\uC9D1\uD569, \uCC28\uC9D1\uD569 STL," '),s("em",null,[s("a",y,[n("Github.io"),a(t)])]),n(", Apr. 24, 2020. [Online]. Available: "),s("a",_,[n("https://unluckyjung.github.io/cpp/2020/04/24/Set_Func/"),a(t)]),n(" [Accessed Jun. 15, 2022].")])]),a(l(p))])}}}),z=r(E,[["__file","7-stl-set.html.vue"]]);export{z as default};