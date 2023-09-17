import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,a as e,b as a,d as s,e as n,r}from"./app.cde77ec0.js";const d={},i=n(`<h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><ul><li>\uD504\uB85C\uADF8\uB798\uBC0D\uC5D0\uC11C \uBCC0\uC218(variable)\uB780 data\uB97C \uC800\uC7A5\uD558\uAE30 \uC704\uD55C \uACF5\uAC04\uC784</li><li>\uD2B9\uC815 data\uB97C \uC800\uC7A5\uD574\uB193\uC740 \uACF5\uAC04\uC744 \uAC00\uB9AC\uD0A4\uAE30 \uC704\uD574 \uAC01 \uBCC0\uC218\uB294 \uACE0\uC720\uD55C \uC774\uB984 identifier\uB85C \uC2DD\uBCC4\uB428</li><li>\uBCC0\uC218 \uC774\uB984\uC740 \uB2E8\uC9C0 data\uB97C \uC800\uC7A5\uD574\uB193\uC740 \uACF5\uAC04 memory location\uC744 \uAC00\uB9AC\uD0A4\uB294 \uC0C1\uC9D5\uC801 \uD45C\uD604(symbolic representation)\uC784</li></ul><p>\uC608\uC2DC</p><div class="language-c ext-c"><pre class="language-c"><code><span class="token keyword">int</span> playerScore <span class="token operator">=</span> <span class="token number">95</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> ch <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
ch <span class="token operator">=</span> <span class="token char">&#39;1&#39;</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><code>playerScore</code>\uB780 identifier\uB97C \uAC00\uC9C4 \uBCC0\uC218\uB294 <code>int</code> type\uC774\uBA70, <code>95</code>\uB780 \uAC12(data)\uAC00 \uC800\uC7A5\uB428</li><li>\uBCC0\uC218\uC758 \uAC12\uC740 \uC911\uAC04\uC5D0 \uBC14\uB014 \uC218 \uC788\uC74C</li></ul><h3 id="c-is-a-strongly-typed-language" tabindex="-1"><a class="header-anchor" href="#c-is-a-strongly-typed-language" aria-hidden="true">#</a> C is a strongly typed language</h3><ul><li>\uBCC0\uC218 \uD0C0\uC785\uC740 \uBCC0\uC218\uAC00 \uC120\uC5B8\uB410\uC744 \uB54C \uC815\uD574\uC9C0\uBA70 \uBCC0\uD560 \uC218 \uC5C6\uC74C\uC744 <em>strongly typed language</em>\uB77C \uD568</li></ul><p>\uC608\uC2DC</p><div class="language-c ext-c"><pre class="language-c"><code><span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// integer variable</span>
number <span class="token operator">=</span> <span class="token number">5.5</span><span class="token punctuation">;</span>   <span class="token comment">// error</span>
<span class="token keyword">double</span> number<span class="token punctuation">;</span>  <span class="token comment">// error</span>
</code></pre></div><h2 id="literals" tabindex="-1"><a class="header-anchor" href="#literals" aria-hidden="true">#</a> Literals</h2><ul><li>\uC815\uD574\uC9C4 \uAC12(fixed values)\uC744 \uD45C\uD604\uD558\uB294 \uAC83\uC744 <em>Literal</em>\uC774\uB77C \uD568</li><li>ex. <code>1</code>, <code>2.5</code>, <code>&#39;c&#39;</code><ul><li>\uC704 \uD45C\uD604\uB41C \uBB38\uC790\uB4E4\uC740 \uB2E4\uB978 \uAC12\uC73C\uB85C \uD45C\uD604\uB420 \uC218 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 Literal\uC784</li></ul></li></ul><h3 id="integers" tabindex="-1"><a class="header-anchor" href="#integers" aria-hidden="true">#</a> Integers</h3><ul><li>\uC22B\uC790(Numeric) \uC911 \uC815\uC218 \uAC12\uC744 \uB098\uD0C0\uB0B4\uB294 Literal\uC744 \uC758\uBBF8</li><li>Deciaml(10\uC9C4\uC218), Octal(8\uC9C4\uC218), Hexadecimal(16\uC9C4\uC218)\uAC00 \uC788\uC74C</li></ul><table><thead><tr><th>Integer \uC885\uB958</th><th>\uC608\uC2DC</th></tr></thead><tbody><tr><td>Decimal</td><td><code>0</code>, <code>-9</code>, <code>22</code></td></tr><tr><td>Octal</td><td><code>021</code>, <code>077</code>, <code>033</code></td></tr><tr><td>Hexadecimal</td><td><code>0x7f</code>, <code>0x2a</code>, <code>0x521</code></td></tr></tbody></table><ul><li><code>0</code>\uC73C\uB85C \uC2DC\uC791\uD558\uB294 \uC218\uB294 8\uC9C4\uC218\uB85C \uC778\uC2DD</li><li><code>0x</code>\uC73C\uB85C \uC2DC\uC791\uD558\uB294 \uC218\uB294 16\uC9C4\uC218\uB85C \uC778\uC2DD</li></ul><h3 id="floating-point" tabindex="-1"><a class="header-anchor" href="#floating-point" aria-hidden="true">#</a> Floating-point</h3>`,16),p=e("ul",null,[e("li",null,"\uC22B\uC790 \uC911 \uC815\uC218\uAC00 \uC544\uB2CC \uC2E4\uC218 \uAC12\uC744 \uB098\uD0C0\uB0B4\uB294 Literal\uC744 \uC758\uBBF8"),e("li",null,[a("ex. "),e("code",null,"-2.0"),a(", "),e("code",null,"0.000234"),a(", "),e("code",null,"-0.22E-5"),e("ul",null,[e("li",null,[e("code",null,"-0.22E-5"),a("\uB294 "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",null,"\u2212"),e("mn",null,"0.22"),e("mo",null,"\xD7"),e("mn",null,"1"),e("msup",null,[e("mn",null,"0"),e("mrow",null,[e("mo",null,"\u2212"),e("mn",null,"5")])])]),e("annotation",{encoding:"application/x-tex"},"-0.22\\times10^{-5}")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),e("span",{class:"mord"},"\u2212"),e("span",{class:"mord"},"0.22"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"\xD7"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8141em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mord"},[e("span",{class:"mord"},"0"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8141em"}},[e("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mtight"},"\u2212"),e("span",{class:"mord mtight"},"5")])])])])])])])])])])]),a("\uC640 \uAC19\uC74C")])])])],-1),u=n(`<h3 id="characters" tabindex="-1"><a class="header-anchor" href="#characters" aria-hidden="true">#</a> Characters</h3><ul><li>\uC791\uC740\uB530\uC634\uD45C(single quotation)\uB85C \uAC10\uC2F8\uC9C4 1\uAC1C\uC758 \uBB38\uC790\uB97C \uC758\uBBF8</li><li>ex. <code>&#39;a&#39;</code>, <code>&#39;m&#39;</code>, <code>&#39;F&#39;</code>, <code>&#39;2&#39;</code>, <code>&#39;}&#39;</code></li></ul><h3 id="escape-sequences" tabindex="-1"><a class="header-anchor" href="#escape-sequences" aria-hidden="true">#</a> Escape Sequences</h3><ul><li>C \uD504\uB85C\uADF8\uB798\uBC0D\uC5D0\uC11C \uD2B9\uBCC4\uD55C \uC758\uBBF8\uB97C \uAC16\uB294 \uBB38\uC790\uC5F4</li><li>\uD655\uC7A5\uC5F4, \uB610\uB294 \uC81C\uC5B4 \uC2DC\uD000\uC2A4(Control Sequence)\uB77C\uACE0\uB3C4 \uD568</li></ul><table><thead><tr><th>Escape Sequence</th><th>\uB73B</th></tr></thead><tbody><tr><td><code>\\b</code></td><td>Backspace</td></tr><tr><td><code>\\f</code></td><td>Form feed</td></tr><tr><td><code>\\n</code></td><td>New line</td></tr><tr><td><code>\\r</code></td><td>Carriage return</td></tr><tr><td><code>\\t</code></td><td>Horizontal tab</td></tr><tr><td><code>\\v</code></td><td>Vertical tab</td></tr><tr><td><code>\\\\</code></td><td>Backslash</td></tr><tr><td><code>\\&#39;</code></td><td>Single quotation mark</td></tr><tr><td><code>\\&quot;</code></td><td>Double quotation mark</td></tr><tr><td><code>\\?</code></td><td>Question mark</td></tr><tr><td><code>\\0</code></td><td>Null character</td></tr></tbody></table><ul><li>Backslash <code>\\</code>\uB294 compiler\uAC00 \uC18C\uC2A4 \uCF54\uB4DC\uB97C \uC81C\uC5B4\uD558\uB294 \uADDC\uCE59\uC5D0\uC11C \uD0C8\uCD9C\uC2DC\uD0A4\uB294 \uBB38\uC790\uB85C, Escape Sequence\uC758 \uAC00\uC7A5 \uC55E\uC5D0 \uB4F1\uC7A5\uD568</li></ul><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3><ul><li>\uD070\uB530\uC634\uD45C(double quotations)\uB85C \uAC10\uC2F8\uC9C4 \uBB38\uC790\uC5F4(sequence of characters)\uB97C \uC758\uBBF8\uD568</li><li>ex. <code>&quot;good&quot;</code>, <code>&quot;&quot;</code>, <code>&quot; &quot;</code>, <code>&quot;x&quot;</code>, <code>&quot;Earth is round\\n</code></li></ul><h2 id="constants" tabindex="-1"><a class="header-anchor" href="#constants" aria-hidden="true">#</a> Constants</h2><ul><li><code>const</code> keyword\uB97C \uC0AC\uC6A9\uD574 \uACE0\uC815\uB41C \uAC12\uC744 \uAC00\uC9C4 \uBCC0\uC218\uB97C \uC120\uC5B8\uD558\uBA74 \uADF8\uAC83\uC744 \uC0C1\uC218(Constant)\uB77C \uD568</li><li>\uB610\uB294 \uC804\uCC98\uB9AC\uAE30(preprocessor) <code>#define</code> \uAD6C\uBB38\uC744 \uC774\uC6A9\uD574 \uC0C1\uC218\uB97C \uC120\uC5B8\uD560 \uC218 \uC788\uC74C.</li></ul><p>\uC608\uC2DC - <code>const</code></p><div class="language-c ext-c"><pre class="language-c"><code><span class="token keyword">const</span> <span class="token keyword">double</span> PI <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
PI <span class="token operator">=</span> <span class="token number">2.9</span><span class="token punctuation">;</span> <span class="token comment">// Error - cannot be changed.</span>
</code></pre></div><p>\uC608\uC2DC - <code>#define</code></p><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">PI</span> <span class="token expression"><span class="token number">3.14</span></span></span>
</code></pre></div><h2 id="a-\u110E\u1161\u11B7\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#a-\u110E\u1161\u11B7\u110C\u1169" aria-hidden="true">#</a> A. \uCC38\uC870</h2>`,15),h={href:"http://programiz.com",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.programiz.com/c-programming/c-variables-constants",target:"_blank",rel:"noopener noreferrer"};function g(k,b){const t=r("ExternalLinkIcon");return c(),l("div",null,[i,p,u,e("p",null,[a('Parewa Labs Pvt. Ltd., "C Variables, Constants and Literals," '),e("em",null,[e("a",h,[a("programiz.com"),s(t)])]),a(", [Online]. Available: "),e("a",m,[a("https://www.programiz.com/c-programming/c-variables-constants"),s(t)]),a(" [Accessed Jun. 4, 2023].")])])}const y=o(d,[["render",g],["__file","2-variables-constants.html.vue"]]);export{y as default};