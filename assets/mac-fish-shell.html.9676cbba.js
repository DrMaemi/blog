import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as a,a as t,b as e,d as s,e as h,r as l}from"./app.a13e08e8.js";const c={},r=h(`<div class="language-text ext-text"><pre class="language-text"><code>$ brew install fish
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>$ cat /etc/shells
/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>$ which fish
/usr/local/bin/fish
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code># sudo -e /etc/shells or
$ sudo sh -c &#39;echo $(which fish) &gt;&gt; /etc/shells&#39;
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
/usr/local/bin/fish
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>$ chsh -s $(which fish)
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>$ echo &quot;Theme &#39;agnoster&#39;&quot; &gt;&gt; ~/.config/fish/config.fish
$ echo &quot;Plugin &#39;theme&#39;&quot; &gt;&gt; ~/.config/fish/config.fish
$ cat ~/.config/fish/config.fish

# &gt;&gt;&gt; conda initialize &gt;&gt;&gt;
# !! Contents within this block are managed by &#39;conda init&#39; !!
eval /Users/user/opt/anaconda3/bin/conda &quot;shell.fish&quot; &quot;hook&quot; $argv | source
# &lt;&lt;&lt; conda initialize &lt;&lt;&lt;

Theme &#39;agnoster&#39;
Plugin &#39;theme&#39;
</code></pre></div><h2 id="a-\u110E\u1161\u11B7\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#a-\u110E\u1161\u11B7\u110C\u1169" aria-hidden="true">#</a> A. \uCC38\uC870</h2>`,7),g={href:"http://tistory.com",target:"_blank",rel:"noopener noreferrer"},d={href:"https://ninetin.tistory.com/45",target:"_blank",rel:"noopener noreferrer"},u=t("em",null,"blog.youngbin.xyz",-1),f={href:"https://blog.youngbin.xyz/2015-07-30-install-fish-then-customize-it-with-oh-my-fish/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/oh-my-fish/oh-my-fish",target:"_blank",rel:"noopener noreferrer"};function p(x,m){const n=l("ExternalLinkIcon");return i(),a("div",null,[r,t("p",null,[e('NineTIN, "\u3010Mac/OS X\u3011 fish shell \uC124\uCE58\uD558\uAE30," '),t("em",null,[t("a",g,[e("tistory.com"),s(n)])]),e(", Nov. 6, 2018. [Online]. Available: "),t("a",d,[e("https://ninetin.tistory.com/45"),s(n)]),e(" [Accessed Nov. 30, 2022].")]),t("p",null,[e('Youngbin Han, "Fish \uC178 \uC124\uCE58\uD558\uACE0, Oh My Fish \uB85C \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5 \uD558\uAE30," '),u,e(", Jul. 30, 2015. [Online]. Availble: "),t("a",f,[e("https://blog.youngbin.xyz/2015-07-30-install-fish-then-customize-it-with-oh-my-fish/"),s(n)]),e(" [Accessed Nov. 30, 2022].")]),t("p",null,[t("a",b,[e("https://github.com/oh-my-fish/oh-my-fish"),s(n)])])])}const y=o(c,[["render",p],["__file","mac-fish-shell.html.vue"]]);export{y as default};
