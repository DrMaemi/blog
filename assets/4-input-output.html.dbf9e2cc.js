import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,a,b as n,d as t,e as c,r as u}from"./app.04e803b1.js";const l={},i=c(`<h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><ul><li><code>stdio.h</code> \uD5E4\uB354 \uD30C\uC77C\uC5D0 \uC815\uC758\uB41C <code>printf()</code> \uD568\uC218\uB97C \uC0AC\uC6A9\uD574 \uCD9C\uB825\uD558\uB294 \uBC29\uBC95\uC744 \uB9CE\uC774 \uC0AC\uC6A9\uD568 <ul><li>Literal\uC774 \uC544\uB2CC \uACBD\uC6B0 \uC11C\uC2DD \uC9C0\uC815\uC790(Format Specifier)\uB97C \uC774\uC6A9\uD568</li></ul></li></ul><h3 id="literal" tabindex="-1"><a class="header-anchor" href="#literal" aria-hidden="true">#</a> Literal</h3><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;C Programming&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uACB0\uACFC</p><div class="language-text ext-text"><pre class="language-text"><code>C Programming
</code></pre></div><h3 id="integer" tabindex="-1"><a class="header-anchor" href="#integer" aria-hidden="true">#</a> Integer</h3><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Number = %d&quot;</span><span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uACB0\uACFC</p><div class="language-text ext-text"><pre class="language-text"><code>Number = 5
</code></pre></div><h3 id="float-double" tabindex="-1"><a class="header-anchor" href="#float-double" aria-hidden="true">#</a> Float, Double</h3><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">float</span> number1 <span class="token operator">=</span> <span class="token number">13.5</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> number2 <span class="token operator">=</span> <span class="token number">12.4</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;number1 = %f\\n&quot;</span><span class="token punctuation">,</span> number1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;number2 = %lf&quot;</span><span class="token punctuation">,</span> number2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uACB0\uACFC</p><div class="language-text ext-text"><pre class="language-text"><code>number1 = 13.500000
number2 = 12.400000
</code></pre></div><h2 id="input-output" tabindex="-1"><a class="header-anchor" href="#input-output" aria-hidden="true">#</a> Input &amp; Output</h2><ul><li><code>stdio.h</code> \uD5E4\uB354 \uD30C\uC77C\uC5D0 \uC815\uC758\uB41C <code>scanf()</code> \uD568\uC218\uB97C \uC0AC\uC6A9\uD574 \uC785\uB825\uBC1B\uB294 \uBC29\uBC95\uC744 \uB9CE\uC774 \uC0AC\uC6A9\uD568 <ul><li>\uC11C\uC2DD \uC9C0\uC815\uC790 \uC774\uC6A9</li></ul></li></ul><h3 id="integer-1" tabindex="-1"><a class="header-anchor" href="#integer-1" aria-hidden="true">#</a> Integer</h3><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> number<span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter an integer : &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Entered number = %d&quot;</span><span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uACB0\uACFC</p><div class="language-text ext-text"><pre class="language-text"><code>Enter an integer : 23
Entered number = 23
</code></pre></div><ul><li><code>&amp;number</code> - <code>number</code>\uB77C\uB294 \uBCC0\uC218\uC758 \uC8FC\uC18C(address)\uB97C \uC758\uBBF8</li></ul><h3 id="float-double-1" tabindex="-1"><a class="header-anchor" href="#float-double-1" aria-hidden="true">#</a> Float, Double</h3><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">float</span> number1<span class="token punctuation">;</span>
    <span class="token keyword">double</span> number2<span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter number1 : &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%f&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>number1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter number2 : &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>number2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Entered number1 : %f\\n&quot;</span><span class="token punctuation">,</span> number1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Entered number2 : %lf&quot;</span><span class="token punctuation">,</span> number2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uACB0\uACFC</p><div class="language-text ext-text"><pre class="language-text"><code>Enter number1 : 11.1
Enter number2 : 21.1
Entered number1 : 11.100000
Entered number2 : 21.100000
</code></pre></div><h3 id="character-ascii-value" tabindex="-1"><a class="header-anchor" href="#character-ascii-value" aria-hidden="true">#</a> Character &amp; ASCII Value</h3><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> chr<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter a character : &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%c&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>chr<span class="token punctuation">)</span><span class="token punctuation">;</span>     

    <span class="token comment">// When %c is used, a character is displayed</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;You entered %c.\\n&quot;</span><span class="token punctuation">,</span>chr<span class="token punctuation">)</span><span class="token punctuation">;</span>  

    <span class="token comment">// When %d is used, ASCII value is displayed</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ASCII value is %d.&quot;</span><span class="token punctuation">,</span> chr<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uACB0\uACFC</p><div class="language-text ext-text"><pre class="language-text"><code>Enter a character : \\
You entered \\.
ASCII value is 92.
</code></pre></div><h3 id="\u110B\u1167\u1105\u1165-\u1100\u1161\u11B9-\u110B\u1175\u11B8\u1105\u1167\u11A8" tabindex="-1"><a class="header-anchor" href="#\u110B\u1167\u1105\u1165-\u1100\u1161\u11B9-\u110B\u1175\u11B8\u1105\u1167\u11A8" aria-hidden="true">#</a> \uC5EC\uB7EC \uAC12 \uC785\uB825</h3><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">float</span> b<span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter integer and then a float: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token comment">// Taking multiple inputs</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%f&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;You entered %d and %f&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uACB0\uACFC</p><div class="language-text ext-text"><pre class="language-text"><code>Enter integer and then a float: 1
1
You entered 1 and 1.000000
</code></pre></div><h2 id="a-\u110E\u1161\u11B7\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#a-\u110E\u1161\u11B7\u110C\u1169" aria-hidden="true">#</a> A. \uCC38\uC870</h2>`,34),r={href:"http://programiz.com",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.programiz.com/c-programming/c-input-output",target:"_blank",rel:"noopener noreferrer"};function d(g,h){const s=u("ExternalLinkIcon");return e(),o("div",null,[i,a("p",null,[n('Parewa Labs Pvt. Ltd., "C Input Output (I/O)," '),a("em",null,[a("a",r,[n("programiz.com"),t(s)])]),n(", [Online]. Available: "),a("a",k,[n("https://www.programiz.com/c-programming/c-input-output"),t(s)]),n(" [Accessed Jun. 5, 2023].")])])}const b=p(l,[["render",d],["__file","4-input-output.html.vue"]]);export{b as default};
