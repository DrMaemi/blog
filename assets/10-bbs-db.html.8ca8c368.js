import{D as o}from"./DetailsOpen.d5ab58f9.js";import{f as c,o as l,c as i,a as s,b as n,d as a,w as r,u as d,e as t,r as e}from"./app.7838cc8d.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";const b=t(`<p>\uAC8C\uC2DC\uD310 \uD398\uC774\uC9C0\uC5D0\uC11C \uBCF4\uC5EC\uC904 \uAC8C\uC2DC\uAE00\uB4E4\uC5D0 \uB300\uD55C \uC815\uBCF4\uB97C \uB2F4\uACE0 \uC788\uB294 DB \uD14C\uC774\uBE14\uACFC, DB\uC640 \uC778\uD130\uD398\uC774\uC2F1\uD560 \uC790\uBC14 \uBE48(Java Bean) <code>Bbs.java</code>\uB97C \uC0DD\uC131\uD55C\uB2E4.</p><h2 id="db-\u1110\u1166\u110B\u1175\u1107\u1173\u11AF-bbs-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#db-\u1110\u1166\u110B\u1175\u1107\u1173\u11AF-bbs-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> DB \uD14C\uC774\uBE14 <code>BBS</code> \uC0DD\uC131</h2><details class="custom-container details"><summary>CMD</summary><div class="language-text ext-text"><pre class="language-text"><code>&gt; mysql -u root -p
Enter password: ***************
Welcome to the MySQL monitor.  Commands end with ; or \\g.
Your MySQL connection id is 28
Server version: 8.0.28 MySQL Community Server - GPL

Copyright (c) 2000, 2022, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.

mysql&gt; use BBS;
Database changed
mysql&gt; CREATE TABLE BBS (
    -&gt; bbsID INT,
    -&gt; bbsTitle VARCHAR(50),
    -&gt; userID VARCHAR(20),
    -&gt; bbsDate DATETIME,
    -&gt; bbsContent VARCHAR(2048),
    -&gt; bbsAvailable INT,
    -&gt; PRIMARY KEY (bbsID)
    -&gt; );
Query OK, 0 rows affected (0.03 sec)
</code></pre></div></details><h2 id="\u110C\u1161\u1107\u1161-\u1107\u1175\u11AB-java-bean-bbs" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1107\u1161-\u1107\u1175\u11AB-java-bean-bbs" aria-hidden="true">#</a> \uC790\uBC14 \uBE48(Java Bean) <code>Bbs</code></h2>`,4),v=s("code",null,"BBS",-1),C=s("code",null,"Bbs",-1),m=s("code",null,"src/main/java",-1),B=s("code",null,"bbs",-1),D=s("code",null,"Bbs",-1),y=s("code",null,"getter()",-1),h=s("code",null,"setter()",-1),A=t(`<details class="custom-container details"><summary>src/main/java/bbs/Bbs.java</summary><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">bbs</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bbs</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> bbsID<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> bbsTitle<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userID<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> bbsDate<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> bbsContent<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> bbsAvailable<span class="token punctuation">;</span>
     
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBbsID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> bbsID<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBbsID</span><span class="token punctuation">(</span><span class="token class-name">String</span> bbsID<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>bbsID <span class="token operator">=</span> bbsID<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBbsTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> bbsTitle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBbsTitle</span><span class="token punctuation">(</span><span class="token class-name">String</span> bbsTitle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>bbsTitle <span class="token operator">=</span> bbsTitle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUserID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userID<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUserID</span><span class="token punctuation">(</span><span class="token class-name">String</span> userID<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userID <span class="token operator">=</span> userID<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBbsDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> bbsDate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBbsDate</span><span class="token punctuation">(</span><span class="token class-name">String</span> bbsDate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>bbsDate <span class="token operator">=</span> bbsDate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBbsContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> bbsContent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBbsContent</span><span class="token punctuation">(</span><span class="token class-name">String</span> bbsContent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>bbsContent <span class="token operator">=</span> bbsContent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getBbsAvailable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> bbsAvailable<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBbsAvailable</span><span class="token punctuation">(</span><span class="token keyword">int</span> bbsAvailable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>bbsAvailable <span class="token operator">=</span> bbsAvailable<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="a-\u110E\u1161\u11B7\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#a-\u110E\u1161\u11B7\u110C\u1169" aria-hidden="true">#</a> A. \uCC38\uC870</h2>`,2),g={style:{"text-align":"left"}},w=s("em",null,"Youtube",-1),_={href:"https://youtu.be/OHvWkg9Bdf0",target:"_blank",rel:"noopener noreferrer"},f=c({__name:"10-bbs-db.html",setup(E){return(S,I)=>{const u=e("RouterLink"),p=e("ExternalLinkIcon");return l(),i("div",null,[b,s("p",null,[v,n(" \uD14C\uC774\uBE14\uC758 \uB370\uC774\uD130\uB97C \uB2E4\uB8F0 \uC790\uBC14 \uBE48 "),C,n("\uB97C \uAD6C\uD604\uD55C\uB2E4. \uC9C0\uB09C \uD3EC\uC2A4\uD2B8 "),a(u,{to:"/project/bulletin-board-jsp/%7B%7Bsite.url%7D%7D/application/web/jsp/3-user-db/#%EC%9E%90%EB%B0%94-%EB%B9%88java-bean-user"},{default:r(()=>[n("[JSP] 3. \uD68C\uC6D0 DB \uAD6C\uCD95")]),_:1}),n("\uC5D0\uC11C \uAD6C\uD604\uD55C \uAC83\uCC98\uB7FC "),m,n(" \uD558\uC704\uC5D0 "),B,n(" \uD328\uD0A4\uC9C0\uC640 "),D,n(" \uD074\uB798\uC2A4\uB97C \uC0DD\uC131\uD558\uACE0, \uAC01 \uD544\uB4DC\uC640 "),y,n(),h,n(" \uBA54\uC11C\uB4DC\uB4E4\uC744 \uC0DD\uC131\uD55C\uB2E4.")]),A,s("div",g,[s("p",null,[n('\uB3D9\uBE48\uB098, "JSP \uAC8C\uC2DC\uD310 \uB9CC\uB4E4\uAE30 \uAC15\uC88C 9\uAC15 - \uAC8C\uC2DC\uD310 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uAD6C\uCD95\uD558\uAE30 (JSP Advanced Development Tutorial #9)", '),w,n(", May 5, 2017. [Online]. Available: "),s("a",_,[n("https://youtu.be/OHvWkg9Bdf0"),a(p)]),n(" [Accessed Apr. 29, 2022].")])]),a(d(o))])}}}),R=k(f,[["__file","10-bbs-db.html.vue"]]);export{R as default};
