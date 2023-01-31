import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c,a as n,b as s,d as t,e as o,r as l}from"./app.686dda16.js";const u={},r=o(`<p>\uC790\uBC14\uC758 System Property\uB294 \uC790\uBC14 \uB7F0\uD0C0\uC784 \uC815\uBCF4\uB098 OS \uC815\uBCF4\uAC00 \uD544\uC694\uD560 \uB54C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC989, \uC2DC\uC2A4\uD15C \uB610\uB294 \uC0AC\uC6A9\uC790 \uC815\uBCF4\uB97C System property\uC5D0 \uB2F4\uC544\uB193\uACE0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC5B4 \uC2E4\uD589 \uC704\uCE58\uC5D0 \uC788\uB294 \uD30C\uC77C\uC744 \uC77D\uC5B4\uC57C \uD560 \uB54C \uD604\uC7AC \uC704\uCE58\uC5D0 \uB300\uD55C \uC815\uBCF4 \uB4F1\uC758 \uC2DC\uC2A4\uD15C \uC815\uBCF4\uB97C \uAC00\uC838\uC62C \uB54C <code>System.getProperty()</code>\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheckUserHome</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> dir <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user.home&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheckAllProperties</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Properties</span> props <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Enumeration</span> e <span class="token operator">=</span> props<span class="token punctuation">.</span><span class="token function">propertyNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> e<span class="token punctuation">.</span><span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>e<span class="token punctuation">.</span><span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> value <span class="token operator">=</span> props<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u1100\u1175\u1107\u1169\u11AB-system-property" tabindex="-1"><a class="header-anchor" href="#\u1100\u1175\u1107\u1169\u11AB-system-property" aria-hidden="true">#</a> \uAE30\uBCF8 System Property</h2>`,5),i=n("thead",null,[n("tr",null,[n("th",null,"Property \uD0A4"),n("th",null,"\uC124\uBA85")])],-1),k=n("tr",null,[n("td",null,"java.version"),n("td",null,"Java \uBC84\uC804")],-1),d=n("tr",null,[n("td",null,"java.vendor"),n("td",null,"Java \uACF5\uAE09\uC790")],-1),m=n("tr",null,[n("td",null,"java.vendor.url"),n("td",null,"Java \uACF5\uAE09\uC790 \uC8FC\uC18C")],-1),h=n("tr",null,[n("td",null,"java.home Java\uB97C"),n("td",null,"\uC124\uCE58\uD55C \uB514\uB809\uD1A0\uB9AC")],-1),y=n("tr",null,[n("td",null,"java.class.version"),n("td",null,"Java \uD074\uB798\uC2A4 \uBC84\uC804")],-1),_=n("tr",null,[n("td",null,"java.class.path"),n("td",null,"Java \uD074\uB798\uC2A4 \uACBD\uB85C")],-1),v=n("tr",null,[n("td",null,"java.ext.dir"),n("td",null,"\uD655\uC7A5\uAE30\uB2A5\uC758 \uD074\uB798\uC2A4 \uACBD\uB85C")],-1),f={href:"http://os.name",target:"_blank",rel:"noopener noreferrer"},g=n("td",null,"\uC6B4\uC601\uCCB4\uC81C \uC774\uB984",-1),S=n("tr",null,[n("td",null,"os.arch"),n("td",null,"\uC6B4\uC601\uCCB4\uC81C \uC544\uD0A4\uD14D\uCC98")],-1),b=n("tr",null,[n("td",null,"os.version"),n("td",null,"\uC6B4\uC601\uCCB4\uC81C \uBC84\uC804 \uC815\uBCF4")],-1),P=n("tr",null,[n("td",null,"file.separator"),n("td",null,"\uD30C\uC77C \uAD6C\uBD84 \uBB38\uC790")],-1),j=n("tr",null,[n("td",null,"path.separator"),n("td",null,"\uACBD\uB85C \uAD6C\uBD84 \uBB38\uC790")],-1),w=n("tr",null,[n("td",null,"line.separator"),n("td",null,"\uD589 \uAD6C\uBD84 \uBB38\uC790")],-1),q={href:"http://user.name",target:"_blank",rel:"noopener noreferrer"},x=n("td",null,"\uC0AC\uC6A9\uC790 \uACC4\uC815",-1),J=n("tr",null,[n("td",null,"user.home"),n("td",null,"\uC0AC\uC6A9\uC790 \uD648 \uB514\uB809\uD1A0\uB9AC")],-1),V=n("tr",null,[n("td",null,"user.dir"),n("td",null,"\uD604\uC7AC \uB514\uB809\uD1A0\uB9AC")],-1),E=o(`<h2 id="\u110B\u1175\u11B7\u110B\u1174-property-\u110C\u1165\u110C\u1161\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11B7\u110B\u1174-property-\u110C\u1165\u110C\u1161\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC784\uC758 Property \uC800\uC7A5\uD558\uAE30</h2><p>JVM\uC758 VM arguments\uB294 JVM\uC744 \uAD6C\uB3D9\uD560 \uB54C \uD544\uC694\uD55C \uAC12\uB4E4\uC744 \uC138\uD305\uD558\uB294\uB370, -D \uC635\uC158 \uBC14\uB85C \uB4A4\uC5D0 &#39;\uD0A4=\uAC12&#39;\uC744 \uAE30\uC785\uD558\uBA74 \uC790\uBC14 \uD504\uB85C\uADF8\uB7A8 \uB0B4\uC5D0\uC11C <code>System.getProperty()</code>\uB97C \uD1B5\uD574 \uAC12\uC744 \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC5B4 <code>file.location.env</code>\uB77C\uB294 \uD0A4\uC5D0 \uAC12\uC744 \uC138\uD305\uD558\uC5EC \uC0AC\uC6A9\uD558\uACE0 \uC2F6\uB2E4\uBA74 <code>-Dfile.location.env=&quot;./fileUploads/&quot;</code>\uC640 \uAC19\uC774 VM arguments\uB97C \uC124\uC815\uD558\uACE0 <code>System.getProperty(&quot;file.location.env&quot;)</code> \uCF54\uB4DC\uB97C \uD1B5\uD574 \uAC12\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uD639\uC740 \uD504\uB85C\uADF8\uB7A8 \uB0B4\uBD80\uC5D0\uC11C <code>System.setProperty()</code>\uB97C \uD1B5\uD574 \uAC12\uC744 \uC138\uD305\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SetFileLocationEnv</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;file.location.env&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./fileUploads/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;file.location.env&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uC704\uCC98\uB7FC \uC138\uD305 \uACFC\uC815\uC744 \uAC70\uCE58\uC9C0 \uC54A\uACE0 \uC5C6\uB294 \uD0A4\uC5D0 \uC811\uADFC\uD558\uBA74 null\uC744 \uBC18\uD658\uBC1B\uC2B5\uB2C8\uB2E4.</p><h2 id="a-\u110E\u1161\u11B7\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#a-\u110E\u1161\u11B7\u110C\u1169" aria-hidden="true">#</a> A. \uCC38\uC870</h2>`,7),M={href:"http://tistory.com",target:"_blank",rel:"noopener noreferrer"},N={href:"https://lifeinprogram.tistory.com/19",target:"_blank",rel:"noopener noreferrer"};function A(B,C){const a=l("ExternalLinkIcon");return e(),c("div",null,[r,n("table",null,[i,n("tbody",null,[k,d,m,h,y,_,v,n("tr",null,[n("td",null,[n("a",f,[s("os.name"),t(a)])]),g]),S,b,P,j,w,n("tr",null,[n("td",null,[n("a",q,[s("user.name"),t(a)])]),x]),J,V])]),E,n("p",null,[s('lifeinprogram, "System.getProperty() \uC0AC\uC6A9\uBC95," '),n("em",null,[n("a",M,[s("tistory.com"),t(a)])]),s(", Mar. 18, 2020. [Online]. Available: "),n("a",N,[s("https://lifeinprogram.tistory.com/19"),t(a)]),s(" [Accessed Dec. 18, 2022].")])])}const U=p(u,[["render",A],["__file","system-property.html.vue"]]);export{U as default};