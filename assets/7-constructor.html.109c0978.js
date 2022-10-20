import{D as u}from"./DetailsOpen.d5ab58f9.js";import{f as n,o as a,c as s,d as C,u as t,e as p}from"./app.80bc226f.js";import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";const c=p(`<h2 id="_1-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#_1-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161\u1105\u1161\u11AB" aria-hidden="true">#</a> 1. \uC0DD\uC131\uC790\uB780?</h2><p>\uC0DD\uC131\uC790\uB294 \uC778\uC2A4\uD134\uC2A4\uAC00 \uC0DD\uC131\uB420 \uB54C \uD638\uCD9C\uB418\uB294 <strong>\uC778\uC2A4\uD134\uC2A4 \uCD08\uAE30\uD654 \uBA54\uC11C\uB4DC</strong>\uC785\uB2C8\uB2E4.</p><p>\uC0DD\uC131\uC790\uC758 \uC870\uAC74\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.</p><blockquote><ol><li>\uC0DD\uC131\uC790\uC758 \uC774\uB984\uC740 \uD074\uB798\uC2A4\uC758 \uC774\uB984\uACFC \uAC19\uC544\uC57C \uD55C\uB2E4.</li><li>\uC0DD\uC131\uC790\uB294 \uBC18\uD658 \uAC12\uC774 \uC5C6\uB2E4.</li></ol></blockquote><div class="custom-container info"><p class="custom-container-title">Info</p><p>\uC0DD\uC131\uC790\uB3C4 \uBA54\uC11C\uB4DC\uC774\uAE30 \uB54C\uBB38\uC5D0 \uBC18\uD658 \uAC12\uC774 \uC5C6\uB2E4\uB294 \uC758\uBBF8\uC758 void\uB97C \uBD99\uC5EC\uC57C \uD558\uC9C0\uB9CC, \uBAA8\uB4E0 \uC0DD\uC131\uC790\uAC00 \uBC18\uD658 \uAC12\uC774 \uC5C6\uC73C\uBBC0\uB85C void\uB97C \uC0DD\uB7B5\uD560 \uC218 \uC788\uB3C4\uB85D \uD55C \uAC83\uC785\uB2C8\uB2E4.</p></div><p>\uC0DD\uC131\uC790\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC815\uC758\uD569\uB2C8\uB2E4.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Card</span> <span class="token punctuation">{</span>
    <span class="token class-name">Care</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC5C6\uB294 \uC0DD\uC131\uC790</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Card</span><span class="token punctuation">(</span><span class="token class-name">String</span> k<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC788\uB294 \uC0DD\uC131\uC790</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>\uC5F0\uC0B0\uC790 new\uAC00 \uC778\uC2A4\uD134\uC2A4\uB97C \uC0DD\uC131\uD558\uB294 \uAC83\uC774\uC9C0 \uC0DD\uC131\uC790\uAC00 \uC778\uC2A4\uD134\uC2A4\uB97C \uC0DD\uC131\uD558\uB294 \uAC83\uC774 \uC544\uB2D9\uB2C8\uB2E4.</p></div><p>Card \uD074\uB798\uC2A4\uC758 \uC778\uC2A4\uD134\uC2A4\uB97C \uC0DD\uC131\uD558\uB294 \uCF54\uB4DC\uB97C \uC124\uBA85\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token class-name">Card</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Card</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol><li>\uC5F0\uC0B0\uC790 new\uC5D0 \uC758\uD574 JVM \uBA54\uBAA8\uB9AC \uC601\uC5ED \uC911 \uD799(Heap)\uC5D0 Card \uD074\uB798\uC2A4\uC758 \uC778\uC2A4\uD134\uC2A4\uAC00 \uC0DD\uC131\uB428</li><li>\uC0DD\uC131\uC790 Card()\uAC00 \uD638\uCD9C\uB418\uC5B4 \uC218\uD589\uB428</li><li>\uC5F0\uC0B0\uC790 new\uC758 \uACB0\uACFC\uB85C \uC0DD\uC131\uB41C Card \uC778\uC2A4\uD134\uC2A4\uC758 \uC8FC\uC18C\uAC00 \uBC18\uD658\uB418\uC5B4 \uCC38\uC870\uBCC0\uC218 c\uC5D0 \uC800\uC7A5\uB428</li></ol><h2 id="_2-\u1100\u1175\u1107\u1169\u11AB-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161-default-constructor" tabindex="-1"><a class="header-anchor" href="#_2-\u1100\u1175\u1107\u1169\u11AB-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161-default-constructor" aria-hidden="true">#</a> 2. \uAE30\uBCF8 \uC0DD\uC131\uC790(Default Constructor)</h2><p>\uC790\uBC14\uC758 \uBAA8\uB4E0 \uD074\uB798\uC2A4\uC5D0\uB294 \uBC18\uB4DC\uC2DC \uD558\uB098 \uC774\uC0C1\uC758 \uC0DD\uC131\uC790\uAC00 \uC815\uC758\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uD074\uB798\uC2A4\uC5D0 \uC0DD\uC131\uC790\uB97C \uC815\uC758\uD558\uC9C0 \uC54A\uACE0\uB3C4 \uC778\uC2A4\uD134\uC2A4 \uC0DD\uC131\uC774 \uAC00\uB2A5\uD588\uB358 \uC774\uC720\uB294 \uCEF4\uD30C\uC77C\uB7EC\uAC00 \uC81C\uACF5\uD558\uB294 \uAE30\uBCF8 \uC0DD\uC131\uC790 \uB355\uBD84\uC785\uB2C8\uB2E4.</p><p>\uCEF4\uD30C\uC77C\uD560 \uB54C \uC18C\uC2A4\uD30C\uC77C(*.java)\uC758 \uD074\uB798\uC2A4\uC5D0 \uC0DD\uC131\uC790\uAC00 \uD558\uB098\uB3C4 \uC815\uC758\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uCEF4\uD30C\uC77C\uB7EC\uB294 \uC790\uB3D9\uC801\uC73C\uB85C \uC544\uB798\uC640 \uAC19\uC740 \uB0B4\uC6A9\uC758 \uAE30\uBCF8 \uC0DD\uC131\uC790\uB97C \uCD94\uAC00\uD558\uC5EC \uCEF4\uD30C\uC77C\uD569\uB2C8\uB2E4.</p><div class="language-java ext-java"><pre class="language-java"><code>\uD074\uB798\uC2A4\uC774\uB984<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>\uCEF4\uD30C\uC77C\uB7EC\uAC00 \uCD94\uAC00\uD558\uB294 \uAE30\uBCF8 \uC0DD\uC131\uC790\uB294 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC5C6\uC73C\uBA70 \uC544\uBB34\uB7F0 \uB0B4\uC6A9\uC774 \uC5C6\uB294 \uAC04\uB2E8\uD55C \uAC83\uC785\uB2C8\uB2E4.</p><details class="custom-container details"><summary>\uAE30\uBCF8\uC0DD\uC131\uC790 \uC608\uC81C</summary><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Data1</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Data2</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>

    <span class="token class-name">Data2</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConstructorTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Data</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Data</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uCEF4\uD30C\uC77C \uC5D0\uB7EC \uBC1C\uC0DD</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details><p>\uC704 \uC608\uC81C\uB97C \uCEF4\uD30C\uC77C\uD558\uBA74 Data2 \uD074\uB798\uC2A4\uC758 \uC0DD\uC131\uC790\uAC00 \uC815\uC758\uB418\uC5B4 \uC788\uC9C0 \uC54A\uB2E4\uB294 \uC5D0\uB7EC\uB97C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. <strong>\uCEF4\uD30C\uC77C\uB7EC\uB294 \uC815\uC758\uB41C \uC0DD\uC131\uC790\uAC00 \uD558\uB098\uB3C4 \uC5C6\uB294 \uD074\uB798\uC2A4\uC5D0\uB9CC \uAE30\uBCF8 \uC0DD\uC131\uC790\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.</strong></p><h2 id="_3-\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E\u1100\u1161-\u110B\u1175\u11BB\u1102\u1173\u11AB-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#_3-\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E\u1100\u1161-\u110B\u1175\u11BB\u1102\u1173\u11AB-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161" aria-hidden="true">#</a> 3. \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC788\uB294 \uC0DD\uC131\uC790</h2><p>\uC0DD\uC131\uC790\uB3C4 \uBA54\uC11C\uB4DC\uCC98\uB7FC \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC120\uC5B8\uD558\uC5EC \uD638\uCD9C \uC2DC \uAC12\uC744 \uB118\uACA8\uBC1B\uC544 \uC778\uC2A4\uD134\uC2A4\uC758 \uCD08\uAE30\uD654 \uC791\uC5C5\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC778\uC2A4\uD134\uC2A4\uB9C8\uB2E4 \uAC01\uAE30 \uB2E4\uB978 \uAC12\uC73C\uB85C \uCD08\uAE30\uD654\uB418\uC5B4\uC57C \uD558\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uAE30 \uB54C\uBB38\uC5D0 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC0AC\uC6A9\uD55C \uCD08\uAE30\uD654\uB294 \uB9E4\uC6B0 \uC720\uC6A9\uD569\uB2C8\uB2E4.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> color<span class="token punctuation">;</span>       <span class="token comment">// \uC0C9\uC0C1</span>
    <span class="token class-name">String</span> gearType<span class="token punctuation">;</span>    <span class="token comment">// \uBCC0\uC18D\uAE30 \uC885\uB958</span>
    <span class="token keyword">int</span> door<span class="token punctuation">;</span>           <span class="token comment">// \uBB38\uC758 \uAC1C\uC218</span>

    <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token class-name">String</span> c<span class="token punctuation">,</span> <span class="token class-name">String</span> g<span class="token punctuation">,</span> <span class="token keyword">int</span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        color <span class="token operator">=</span> c<span class="token punctuation">;</span>
        gearType <span class="token operator">=</span> g<span class="token punctuation">;</span>
        door <span class="token operator">=</span> d<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uB9E4\uAC1C\uBCC0\uC218\uB97C \uAC16\uB294 \uC0DD\uC131\uC790\uB97C \uC774\uC6A9\uD558\uBA74 \uCF54\uB4DC\uB97C \uBCF4\uB2E4 \uAC04\uACB0\uD558\uACE0 \uC9C1\uAD00\uC801\uC73C\uB85C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><details class="custom-container details"><summary>\uC608\uC2DC</summary><p>\uC804</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token class-name">Car</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span>gearType <span class="token operator">=</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span>door <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
</code></pre></div><p>\uD6C4</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token class-name">Car</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h2 id="_4-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161\u110B\u1166\u1109\u1165-\u1103\u1161\u1105\u1173\u11AB-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161-\u1112\u1169\u110E\u116E\u11AF\u1112\u1161\u1100\u1175-this-this" tabindex="-1"><a class="header-anchor" href="#_4-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161\u110B\u1166\u1109\u1165-\u1103\u1161\u1105\u1173\u11AB-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161-\u1112\u1169\u110E\u116E\u11AF\u1112\u1161\u1100\u1175-this-this" aria-hidden="true">#</a> 4. \uC0DD\uC131\uC790\uC5D0\uC11C \uB2E4\uB978 \uC0DD\uC131\uC790 \uD638\uCD9C\uD558\uAE30 - this(), this</h2><p>\uAC19\uC740 \uD074\uB798\uC2A4\uC758 \uBA64\uBC84\uB4E4 \uAC04 \uD638\uCD9C\uC774 \uAC00\uB2A5\uD55C \uAC83\uCC98\uB7FC \uC0DD\uC131\uC790 \uAC04 \uD638\uCD9C\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB2E8, \uB2E4\uC74C\uACFC \uAC19\uC740 \uC870\uAC74\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><blockquote><ul><li>\uC0DD\uC131\uC790\uC758 \uC774\uB984\uC73C\uB85C \uD074\uB798\uC2A4\uC774\uB984 \uB300\uC2E0 <code>this</code>\uB97C \uC0AC\uC6A9\uD55C\uB2E4.</li><li>\uD55C \uC0DD\uC131\uC790\uC5D0\uC11C \uB2E4\uB978 \uC0DD\uC131\uC790\uB97C \uD638\uCD9C\uD560 \uB54C\uB294 \uBC18\uB4DC\uC2DC \uCCAB \uC904\uC5D0\uC11C\uB9CC \uD638\uCD9C\uC774 \uAC00\uB2A5\uD558\uB2E4.</li></ul></blockquote><div class="custom-container info"><p class="custom-container-title">Info</p><p>\uC0DD\uC131\uC790 \uB0B4\uBD80\uC5D0\uC11C \uB2E4\uB978 \uC0DD\uC131\uC790\uB97C \uCCAB \uC904\uC5D0\uC11C\uB9CC \uD638\uCD9C\uC774 \uAC00\uB2A5\uD558\uB3C4\uB85D \uD55C \uC774\uC720\uB294, \uC0DD\uC131\uC790 \uB0B4\uC5D0\uC11C \uCD08\uAE30\uD654 \uC791\uC5C5 \uC911 \uB2E4\uB978 \uC0DD\uC131\uC790\uB97C \uD638\uCD9C\uD588\uC744 \uB54C \uD638\uCD9C\uB41C \uB2E4\uB978 \uC0DD\uC131\uC790 \uB0B4\uC5D0\uC11C\uB3C4 \uCD08\uAE30\uD654 \uC791\uC5C5\uC744 \uC9C4\uD589\uD558\uBA74 \uB2E4\uB978 \uC0DD\uC131\uC790\uB97C \uD638\uCD9C\uD558\uAE30 \uC774\uC804\uC758 \uCD08\uAE30\uD654 \uC791\uC5C5\uC774 \uBB34\uC758\uBBF8\uD574\uC9C8 \uC218 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.</p></div><p><code>this</code>\uB294 \uCC38\uC870\uBCC0\uC218\uB85C \uC778\uC2A4\uD134\uC2A4 \uC790\uC2E0\uC744 \uAC00\uB9AC\uD0A4\uBA70, \uCC38\uC870\uBCC0\uC218\uB97C \uD1B5\uD574 \uC778\uC2A4\uD134\uC2A4 \uBA64\uBC84\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB294 \uAC83\uCC98\uB7FC <code>this</code>\uB85C \uC778\uC2A4\uD134\uC2A4\uBCC0\uC218\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uADF8\uB7EC\uB098 <code>this</code>\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uAC83\uC740 \uC778\uC2A4\uD134\uC2A4 \uBA64\uBC84 \uBFD0\uC785\uB2C8\uB2E4. static \uBA54\uC11C\uB4DC(\uD074\uB798\uC2A4 \uBA54\uC11C\uB4DC)\uC5D0\uC11C\uB294 \uC778\uC2A4\uD134\uC2A4 \uBA64\uBC84\uC5D0 \uC811\uADFC\uD560 \uC218 \uC5C6\uB294 \uAC83\uCC98\uB7FC <code>this</code> \uC5ED\uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> color<span class="token punctuation">;</span>
    <span class="token class-name">String</span> gearType<span class="token punctuation">;</span>
    <span class="token keyword">int</span> door<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * color = &quot;white&quot;;
     * gearType = &quot;auto&quot;;
     * door = 4;
     * \uC704 \uCF54\uB4DC\uB85C \uC791\uC131\uD558\uC9C0 \uC54A\uACE0 \uB2E4\uB978 \uC0DD\uC131\uC790\uB97C \uC774\uC6A9\uD574 \uC774\uC640 \uAC19\uC774 \uB354 \uAC04\uB7B5\uD788 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
     */</span>
    <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token class-name">String</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>color<span class="token punctuation">,</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \uB9E4\uAC1C\uBCC0\uC218\uB85C \uC120\uC5B8\uB41C \uC9C0\uC5ED\uBCC0\uC218 color\uC640 \uC778\uC2A4\uD134\uC2A4\uBCC0\uC218 color\uB97C \uAD6C\uBD84\uD558\uAE30 \uC704\uD574
     * \uC778\uC2A4\uD134\uC2A4\uBCC0\uC218\uC5D0\uB294 this\uB97C \uC0AC\uC6A9\uD574 this.color\uB85C \uAD6C\uBD84\uD569\uB2C8\uB2E4.
     * \uB9CC\uC57D color = color\uC640 \uAC19\uC774 \uC791\uC131\uD558\uBA74 \uB458 \uB2E4 \uC9C0\uC5ED\uBCC0\uC218\uB85C \uC778\uC2DD\uD569\uB2C8\uB2E4.
     */</span>
    <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token class-name">String</span> color<span class="token punctuation">,</span> <span class="token class-name">String</span> gearType<span class="token punctuation">,</span> <span class="token keyword">int</span> door<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>gearType <span class="token operator">=</span> gearType<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>door <span class="token operator">=</span> door<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;%s : (%s, %s, %d)&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> color<span class="token punctuation">,</span> gearType<span class="token punctuation">,</span> door<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CarTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Car</span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Car</span> c2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&quot;blue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uC2E4\uD589 \uACB0\uACFC</p><div class="language-text ext-text"><pre class="language-text"><code>Car : (white, auto, 4)
Car : (blue, auto, 4)
</code></pre></div><p>\uC774\uAC83\uC740 \uB9C8\uCE58 \uC2E4\uC0DD\uD65C\uC5D0\uC11C \uC790\uB3D9\uCC28\uB97C \uC0DD\uC0B0\uD560 \uB54C \uC544\uBB34 \uC635\uC158\uC744 \uC8FC\uC9C0 \uC54A\uC73C\uBA74 \uAE30\uBCF8\uC801\uC73C\uB85C \uD770\uC0C9(white)\uC5D0 \uC790\uB3D9\uBCC0\uC18D\uAE30\uC5B4(auto) \uADF8\uB9AC\uACE0 \uBB38\uC758 \uAC1C\uC218\uAC00 4\uAC1C\uC778 \uC790\uB3D9\uCC28\uAC00 \uC0DD\uC0B0\uB418\uB3C4\uB85D \uD558\uB294 \uAC83\uC5D0 \uBE44\uC720\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="_5-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161\u1105\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u11AB-\u110B\u1175\u11AB\u1109\u1173\u1110\u1165\u11AB\u1109\u1173-\u1107\u1169\u11A8\u1109\u1161" tabindex="-1"><a class="header-anchor" href="#_5-\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161\u1105\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u11AB-\u110B\u1175\u11AB\u1109\u1173\u1110\u1165\u11AB\u1109\u1173-\u1107\u1169\u11A8\u1109\u1161" aria-hidden="true">#</a> 5. \uC0DD\uC131\uC790\uB97C \uC774\uC6A9\uD55C \uC778\uC2A4\uD134\uC2A4 \uBCF5\uC0AC</h2><p>\uC0DD\uC131\uC790\uB97C \uC774\uC6A9\uD558\uC5EC \uAE30\uC874 \uAC1D\uCCB4\uC758 \uAE4A\uC740 \uBCF5\uC0AC \uACB0\uACFC\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token class-name">String</span> color<span class="token punctuation">,</span> <span class="token class-name">String</span> gearType<span class="token punctuation">,</span> <span class="token keyword">int</span> door<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* \uC0DD\uC131\uC790\uB97C \uC774\uC6A9\uD55C \uC778\uC2A4\uD134\uC2A4 \uBCF5\uC0AC */</span>
    <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token class-name">Car</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>color<span class="token punctuation">,</span> c<span class="token punctuation">.</span>gearType<span class="token punctuation">,</span> c<span class="token punctuation">.</span>door<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="a-\u110E\u1161\u11B7\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#a-\u110E\u1161\u11B7\u110C\u1169" aria-hidden="true">#</a> A. \uCC38\uC870</h2><div style="text-align:left;"><p>S. Namgung, &quot;5. \uC0DD\uC131\uC790(Contsructor)&quot; in <em>Java\uC758 \uC815\uC11D</em>, Jung-gu, Korea: \uB3C4\uC6B0\uCD9C\uD310, 2022, ch. 6, sec. 5., pp. 291-299.</p></div>`,39),e=n({__name:"7-constructor.html",setup(l){return(B,k)=>(a(),s("div",null,[c,C(t(u))]))}}),A=o(e,[["__file","7-constructor.html.vue"]]);export{A as default};