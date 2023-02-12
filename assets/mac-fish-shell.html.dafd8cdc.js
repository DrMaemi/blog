import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as e,b as s,d as a,e as h,r}from"./app.1fff3c95.js";const l={},c=h(`<h2 id="fish-shell" tabindex="-1"><a class="header-anchor" href="#fish-shell" aria-hidden="true">#</a> fish shell</h2><h3 id="\u1109\u1165\u11AF\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u110E\u1175" aria-hidden="true">#</a> \uC124\uCE58</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ brew <span class="token function">install</span> fish
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">which</span> fish
/usr/local/bin/fish
</code></pre></div><h3 id="\u1109\u1175\u1109\u1173\u1110\u1166\u11B7\u110B\u1175-\u1109\u1161\u110B\u116D\u11BC-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u1109\u1170\u11AF-\u1106\u1169\u11A8\u1105\u1169\u11A8\u110B\u1166-\u1103\u1173\u11BC\u1105\u1169\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u1109\u1173\u1110\u1166\u11B7\u110B\u1175-\u1109\u1161\u110B\u116D\u11BC-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u1109\u1170\u11AF-\u1106\u1169\u11A8\u1105\u1169\u11A8\u110B\u1166-\u1103\u1173\u11BC\u1105\u1169\u11A8" aria-hidden="true">#</a> \uC2DC\uC2A4\uD15C\uC774 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC258 \uBAA9\uB85D\uC5D0 \uB4F1\uB85D</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/shells
/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># sudo -e /etc/shells or</span>
$ <span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;echo $(which fish) &gt;&gt; /etc/shells&#39;</span>
<span class="token comment"># List of acceptable shells for chpass(1).</span>
<span class="token comment"># Ftpd will not allow users to connect who are not using</span>
<span class="token comment"># one of these shells.</span>
$ <span class="token function">cat</span> /etc/shells
/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
/usr/local/bin/fish
</code></pre></div><h3 id="\u1109\u1175\u1109\u1173\u1110\u1166\u11B7-\u1100\u1175\u1107\u1169\u11AB-\u1109\u1170\u11AF\u1105\u1169-\u1107\u1167\u11AB\u1100\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u1109\u1173\u1110\u1166\u11B7-\u1100\u1175\u1107\u1169\u11AB-\u1109\u1170\u11AF\u1105\u1169-\u1107\u1167\u11AB\u1100\u1167\u11BC" aria-hidden="true">#</a> \uC2DC\uC2A4\uD15C \uAE30\uBCF8 \uC258\uB85C \uBCC0\uACBD</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>$ chsh <span class="token parameter variable">-s</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> fish<span class="token variable">)</span></span>
</code></pre></div><p>\uC774\uD6C4 \uD130\uBBF8\uB110 \uC7AC\uC2DC\uC791</p><h2 id="oh-my-fish" tabindex="-1"><a class="header-anchor" href="#oh-my-fish" aria-hidden="true">#</a> Oh-My-Fish</h2>`,11),d={href:"https://github.com/oh-my-fish/oh-my-fish",target:"_blank",rel:"noopener noreferrer"},p=h(`<h3 id="\u1109\u1161\u11A8\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u11A8\u110C\u1166" aria-hidden="true">#</a> \uC0AD\uC81C</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>omf destroy
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code> ! \uE0B0 ~ \uE0B0 omf destroy                                      \uD1A0 12/ 3 12:12:30 2022
Checking for a sane environment...
This will uninstall Oh My Fish and all plugins and themes from
/Users/user/.local/share/omf.
read&gt; y
Uninstalling from /Users/user/.local/share/omf...
Uninstall complete
Welcome to fish, the friendly interactive shell
Type help for instructions on how to use fish
user@AL01549179 ~&gt;
</code></pre></div><h3 id="theme-\u1109\u1161\u11A8\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#theme-\u1109\u1161\u11A8\u110C\u1166" aria-hidden="true">#</a> Theme \uC0AD\uC81C</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>omf remove agnoster
omf remove bobthefish
</code></pre></div><h2 id="bobthefish-theme" tabindex="-1"><a class="header-anchor" href="#bobthefish-theme" aria-hidden="true">#</a> bobthefish Theme</h2>`,6),b={href:"https://github.com/oh-my-fish/theme-bobthefish",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"a-\u110E\u1161\u11B7\u110C\u1169",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#a-\u110E\u1161\u11B7\u110C\u1169","aria-hidden":"true"},"#"),s(" A. \uCC38\uC870")],-1),m={href:"http://tistory.com",target:"_blank",rel:"noopener noreferrer"},u={href:"https://ninetin.tistory.com/45",target:"_blank",rel:"noopener noreferrer"},g=e("em",null,"blog.youngbin.xyz",-1),_={href:"https://blog.youngbin.xyz/2015-07-30-install-fish-then-customize-it-with-oh-my-fish/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/oh-my-fish/oh-my-fish",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/oh-my-fish/theme-bobthefish",target:"_blank",rel:"noopener noreferrer"};function k(x,w){const n=r("ExternalLinkIcon");return o(),i("div",null,[c,e("p",null,[e("a",d,[s("Oh-My-Fish Github"),a(n)])]),p,e("p",null,[e("a",b,[s("Theme bobthefish Github"),a(n)])]),f,e("p",null,[s('NineTIN, "\u3010Mac/OS X\u3011 fish shell \uC124\uCE58\uD558\uAE30," '),e("em",null,[e("a",m,[s("tistory.com"),a(n)])]),s(", Nov. 6, 2018. [Online]. Available: "),e("a",u,[s("https://ninetin.tistory.com/45"),a(n)]),s(" [Accessed Nov. 30, 2022].")]),e("p",null,[s('Youngbin Han, "Fish \uC178 \uC124\uCE58\uD558\uACE0, Oh My Fish \uB85C \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5 \uD558\uAE30," '),g,s(", Jul. 30, 2015. [Online]. Availble: "),e("a",_,[s("https://blog.youngbin.xyz/2015-07-30-install-fish-then-customize-it-with-oh-my-fish/"),a(n)]),s(" [Accessed Nov. 30, 2022].")]),e("p",null,[e("a",v,[s("https://github.com/oh-my-fish/oh-my-fish"),a(n)])]),e("p",null,[e("a",y,[s("https://github.com/oh-my-fish/theme-bobthefish"),a(n)])])])}const z=t(l,[["render",k],["__file","mac-fish-shell.html.vue"]]);export{z as default};
