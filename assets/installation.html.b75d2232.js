import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as l,a as t,b as e,d as a,e as n,r as c}from"./app.43eb96d1.js";const i={},d=n('<p>\uC791\uC131\uC77C \uAE30\uC900 \uC138\uACC4\uC5D0\uC11C \uAC00\uC7A5 \uB9CE\uC774 \uC4F0\uC774\uB294 \uC624\uD508 \uC18C\uC2A4 \uAD00\uACC4\uD615 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uAD00\uB9AC \uC2DC\uC2A4\uD15C(RDBMS) MySQL\uC744 \uC0AC\uC6A9\uD558\uAE30 \uC704\uD574 \uC124\uCE58\uD558\uB294 \uBC29\uBC95\uC744 \uB2E4\uB8F9\uB2C8\uB2E4.</p><h2 id="_1-\u110B\u1171\u11AB\u1103\u1169\u110B\u116E" tabindex="-1"><a class="header-anchor" href="#_1-\u110B\u1171\u11AB\u1103\u1169\u110B\u116E" aria-hidden="true">#</a> 1. \uC708\uB3C4\uC6B0</h2><p>\uC708\uB3C4\uC6B0\uC5D0\uC11C CLI\uB85C MySQL\uB97C \uC124\uCE58\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uC708\uB3C4\uC6B0\uC758 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uD328\uD0A4\uC9C0 \uAD00\uB9AC\uC790 Chocolatey\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uB9AC\uB205\uC2A4\uC758 \uD328\uD0A4\uC9C0 \uAD00\uB9AC\uC790\uC640 \uB2EC\uB9AC \uC708\uB3C4\uC6B0\uB294 \uBCC4\uB3C4\uB85C Chocolatey\uB97C \uC124\uCE58\uD574\uC918\uC57C \uD569\uB2C8\uB2E4.</p><h3 id="_1-1-chocolatey-\u1109\u1165\u11AF\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#_1-1-chocolatey-\u1109\u1165\u11AF\u110E\u1175" aria-hidden="true">#</a> 1.1. Chocolatey \uC124\uCE58</h3><p>\uC790\uC2E0\uC758 \uC708\uB3C4\uC6B0 \uBA38\uC2E0\uC5D0 Chocolatey\uAC00 \uC124\uCE58\uB418\uC5B4 \uC788\uB2E4\uBA74 <a href="#12-MySQL-%EC%84%A4%EC%B9%98">1.2\uC7A5</a>\uC73C\uB85C \uB118\uC5B4\uAC00\uB3C4 \uB429\uB2C8\uB2E4.</p>',5),h={href:"https://chocolatey.org/install",target:"_blank",rel:"noopener noreferrer"},y=n(`<p>\uC708\uB3C4\uC6B0 \uD30C\uC6CC \uC258(Window PowerShell)\uC744 <strong>\uAD00\uB9AC\uC790 \uAD8C\uD55C</strong>\uC73C\uB85C \uC2E4\uD589\uD55C \uB4A4 \uB2E4\uC74C \uCF54\uB4DC\uB97C \uC2E4\uD589\uD558\uBA74 \uB429\uB2C8\uB2E4.</p><div class="language-text ext-text"><pre class="language-text"><code>Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString(&#39;https://community.chocolatey.org/install.ps1&#39;))
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>PS C:\\Users\\...&gt; choco
Chocolatey v1.1.0
Please run &#39;choco -?&#39; or &#39;choco &lt;command&gt; -?&#39; for help menu.
</code></pre></div><h3 id="_1-2-mysql-\u1109\u1165\u11AF\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#_1-2-mysql-\u1109\u1165\u11AF\u110E\u1175" aria-hidden="true">#</a> 1.2. MySQL \uC124\uCE58</h3><p>choco\uAC00 \uC124\uCE58\uB418\uC5C8\uB2E4\uBA74 MySQL\uC744 \uC124\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uAD00\uB9AC\uC790 \uAD8C\uD55C\uC73C\uB85C \uC2E4\uD589\uD55C \uC708\uB3C4\uC6B0 \uD30C\uC6CC \uC258\uC5D0\uC11C \uBC14\uB85C \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4.</p><div class="language-text ext-text"><pre class="language-text"><code>choco install mysql
</code></pre></div><p><code>-y</code> \uC635\uC158\uC744 \uC8FC\uC9C0 \uC54A\uC544 \uC911\uAC04 \uC911\uAC04\uC5D0 \uC124\uCE58\uC5D0 \uB300\uD574 \uBB3C\uC5B4\uBCF4\uB294\uB370 \uC804\uBD80 <code>y</code>\uB97C \uC785\uB825\uD558\uBA74 \uC124\uCE58\uAC00 \uC644\uB8CC\uB429\uB2C8\uB2E4.</p><p>\uC774\uD6C4\uC5D4 \uC258\uC744 \uB2EB\uACE0 \uC0C8\uB85C\uC6B4 \uD130\uBBF8\uB110(CMD, PowerShell, Git Bash \uB4F1 \uC544\uBB34\uAC70\uB098 \uC0C1\uAD00 \uC5C6\uC5C8\uB2E4)\uC744 \uC2E4\uD589\uD55C \uB4A4 <code>mysql --version</code>\uC744 \uC785\uB825\uD558\uC5EC \uC124\uCE58 \uC5EC\uBD80\uB97C \uD655\uC778\uD569\uB2C8\uB2E4.</p><div class="language-text ext-text"><pre class="language-text"><code>$ mysql --version
C:\\tools\\mysql\\current\\bin\\mysql.exe  Ver 8.0.28 for Win64 on x86_64 (MySQL Community Server - GPL)
</code></pre></div><p>\uC124\uCE58 \uC9C1\uD6C4 <code>mysql</code>\uC744 \uC2E4\uD589\uD574\uBCF4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD328\uC2A4\uC6CC\uB4DC \uAD00\uB828 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4. \uC774\uC640 \uAD00\uB828\uB41C \uC124\uC815\uC744 \uCD94\uAC00\uB85C \uD574\uC918\uC57C \uD569\uB2C8\uB2E4.</p><div class="language-text ext-text"><pre class="language-text"><code>$ mysql
ERROR 1045 (28000): Access denied for user &#39;ODBC&#39;@&#39;localhost&#39; (using password: NO)
</code></pre></div><h3 id="_1-3-mysql-\u1107\u1169\u110B\u1161\u11AB-\u1100\u116A\u11AB\u1105\u1167\u11AB-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#_1-3-mysql-\u1107\u1169\u110B\u1161\u11AB-\u1100\u116A\u11AB\u1105\u1167\u11AB-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> 1.3. MySQL \uBCF4\uC548 \uAD00\uB828 \uC124\uC815</h3><p><code>mysql_secure_installation</code> \uBA85\uB839\uC5B4\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4. \uC774\uD6C4 \uBA87 \uAC00\uC9C0 \uBCF4\uC548 \uC124\uC815\uC5D0 \uAD00\uB828\uB41C \uC9C8\uBB38\uC744 \uBC1B\uAC8C \uB418\uB294\uB370, \uC790\uC2E0\uC758 \uC0C1\uD669\uC5D0 \uB9DE\uAC8C \uC124\uC815\uD558\uBA74 \uB41C\uB2E4. \uBCF8\uBB38\uC5D0\uC11C\uB294 \uD544\uC790\uC758 \uC124\uC815\uC744 \uB2E4\uB918\uB294\uB370 \uB3C5\uC790 \uC5EC\uB7EC\uBD84\uC740 \uC5EC\uB7EC\uBD84\uC758 \uC0C1\uD669\uC5D0 \uB9DE\uAC8C \uC124\uC815\uD558\uBA74 \uB429\uB2C8\uB2E4.</p><ol><li>\uBE44\uBC00\uBC88\uD638 \uAC15\uB3C4 - No</li></ol><div class="language-text ext-text"><pre class="language-text"><code>$ mysql_secure_installation
Securing the MySQL server deployment.

Connecting to MySQL using a blank password.

VALIDATE PASSWORD COMPONENT can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD component?

Press y|Y for Yes, any other key for No:
</code></pre></div><ol start="2"><li>\uBE44\uBC00\uBC88\uD638 \uC785\uB825</li></ol><div class="language-text ext-text"><pre class="language-text"><code>...
Press y|Y for Yes, any other key for No: n
Please set the password for root here.

New password: ***************

Re-enter new password: ***************
</code></pre></div><ol start="3"><li>\uC775\uBA85 \uC720\uC800(Anonymous Users) \uC5EC\uBD80 - N</li></ol><div class="language-text ext-text"><pre class="language-text"><code>...
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) : N
</code></pre></div><ol start="4"><li>\uB8E8\uD2B8 \uACC4\uC815 \uC6D0\uACA9 \uC811\uC18D \uCC28\uB2E8 \uC5EC\uBD80 - Y</li></ol><div class="language-text ext-text"><pre class="language-text"><code>...
Normally, root should only be allowed to connect from
&#39;localhost&#39;. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : Y
Success.
</code></pre></div><ol start="5"><li>\uD14C\uC2A4\uD2B8 DB \uC0AD\uC81C \uC5EC\uBD80 - N</li></ol><div class="language-text ext-text"><pre class="language-text"><code>...
By default, MySQL comes with a database named &#39;test&#39; that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) : N
</code></pre></div><ol start="6"><li>(\uB9C8\uC9C0\uB9C9 \uC9C8\uBB38)Privilege Tables Reload \uC5EC\uBD80 - Y</li></ol><div class="language-text ext-text"><pre class="language-text"><code>...
Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : Y
Success.

All done!
</code></pre></div><h3 id="_1-4-mysql-\u1109\u1175\u11AF\u1112\u1162\u11BC" tabindex="-1"><a class="header-anchor" href="#_1-4-mysql-\u1109\u1175\u11AF\u1112\u1162\u11BC" aria-hidden="true">#</a> 1.4. MySQL \uC2E4\uD589</h3><div class="language-text ext-text"><pre class="language-text"><code>$ mysql -u root -p
Enter password: ***************
Welcome to the MySQL monitor.  Commands end with ; or \\g.
Your MySQL connection id is 17
Server version: 8.0.28 MySQL Community Server - GPL

Copyright (c) 2000, 2022, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.

mysql&gt;
</code></pre></div><h3 id="_1-a-\u1100\u1175\u1110\u1161-\u1103\u1169\u1100\u116E-\u1109\u1165\u11AF\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#_1-a-\u1100\u1175\u1110\u1161-\u1103\u1169\u1100\u116E-\u1109\u1165\u11AF\u110E\u1175" aria-hidden="true">#</a> 1.A. \uAE30\uD0C0 \uB3C4\uAD6C \uC124\uCE58</h3><p>GUI\uB85C MySQL\uC744 \uB2E4\uB8F0 \uC218 \uC788\uB294 \uB3C4\uAD6C\uC778 MySQL Workbench\uB97C \uC124\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-text ext-text"><pre class="language-text"><code>PS C:\\...&gt; choco install mysql.workbench
</code></pre></div><h2 id="a-\u110E\u1161\u11B7\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#a-\u110E\u1161\u11B7\u110C\u1169" aria-hidden="true">#</a> A. \uCC38\uC870</h2>`,32),g={href:"https://kamang-it.tistory.com/236",target:"_blank",rel:"noopener noreferrer"},p={href:"https://kamang-it.tistory.com/entry/MySQLMySQL%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0",target:"_blank",rel:"noopener noreferrer"};function u(m,x){const o=c("ExternalLinkIcon");return r(),l("div",null,[d,t("p",null,[e("\uC124\uCE58 \uBC29\uBC95\uC740 "),t("a",h,[e("Chocolatey \uC124\uCE58 \uACF5\uC2DD \uC6F9\uD398\uC774\uC9C0"),a(o)]),e("\uB97C \uCC38\uC870\uD558\uC600\uC2B5\uB2C8\uB2E4.")]),y,t("p",null,[e(`Kamang's IT Blog, "[Choco]\uC708\uB3C4\uC6B0 choco \uD328\uD0A4\uC9C0 \uAD00\uB9AC\uC790", `),t("a",g,[e("https://kamang-it.tistory.com/236"),a(o)])]),t("p",null,[e(`Kamang's IT Blog, "[MySQL]MySQL\uC124\uCE58\uD558\uAE30", `),t("a",p,[e("https://kamang-it.tistory.com/entry/MySQLMySQL\uC124\uCE58\uD558\uAE30"),a(o)])])])}const S=s(i,[["render",u],["__file","installation.html.vue"]]);export{S as default};
