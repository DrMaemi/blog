import{U as i}from"./UmlScript.44c1627f.js";import{f as l,o as e,c as A,a as C,b as u,d as B,u as t,e as a,r as o}from"./app.0616fd94.js";import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";const n=a('<p><em>\uBCF8\uBB38\uC740 2019\uB144\uB3C4 \uD558\uBC18\uAE30 \uC544\uC8FC\uB300\uD559\uAD50\uC758 \uCEF4\uD4E8\uD130\uACF5\uD559\uACFC \uAD50\uC218\uB85C \uC7AC\uC9C1\uD558\uC168\uB358 \uAC15\uACBD\uB780 \uAD50\uC218\uB2D8\uC758 \uCEF4\uD4E8\uD130\uB124\uD2B8\uC6CC\uD06C \uACFC\uBAA9 \uAC15\uC758 \uC790\uB8CC\uB97C \uAE30\uBC18\uC73C\uB85C \uC791\uC131\uB418\uC5C8\uC74C\uC744 \uC54C\uB9BD\uB2C8\uB2E4.</em></p><h2 id="_1-sw\u110B\u1174-\u1102\u1166\u1110\u1173\u110B\u116F\u110F\u1173-\u1100\u1175\u1102\u1173\u11BC-\u1100\u116E\u1112\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#_1-sw\u110B\u1174-\u1102\u1166\u1110\u1173\u110B\u116F\u110F\u1173-\u1100\u1175\u1102\u1173\u11BC-\u1100\u116E\u1112\u1167\u11AB" aria-hidden="true">#</a> 1. SW\uC758 \uB124\uD2B8\uC6CC\uD06C \uAE30\uB2A5 \uAD6C\uD604</h2><p>SW\uC758 \uB124\uD2B8\uC6CC\uD06C \uAE30\uB2A5\uC740 Application \uACC4\uCE35\uC5D0\uC11C \uAD6C\uD604\uD55C\uB2E4. \uC774 \uB54C \uB2E4\uC74C \uC0AC\uD56D\uB4E4\uC744 \uACE0\uB824\uD574\uC57C \uD55C\uB2E4.</p><ul><li>\uB124\uD2B8\uC6CC\uD06C \uBAA8\uB378 <ul><li>Client-server vs P2P(Peer-to-peer)</li></ul></li><li>\uC804\uC1A1 \uACC4\uCE35(Transport layer) \uC11C\uBE44\uC2A4 \uBAA8\uB378 <ul><li>TCP vs UDP</li></ul></li><li>\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uACC4\uCE35 \uD504\uB85C\uD1A0\uCF5C <ul><li>HTTP, FTP, SMTP/IMAP, DNS</li></ul></li></ul><h2 id="_2-client-server-vs-p2p" tabindex="-1"><a class="header-anchor" href="#_2-client-server-vs-p2p" aria-hidden="true">#</a> 2. Client-server vs P2P</h2><p class="align-center"><img src="https://drive.google.com/uc?export=view&amp;id=1w2bo-DFZot1CMM6cX_a1E-2Jfx0aVkng" alt="" loading="lazy"> &lt;\uADF8\uB9BC 1. Client-server vs P2P&gt;</p><ul><li><p>Client-server architecture</p><ul><li>Server <ul><li>\uC5B8\uC81C\uB098 \uCF1C\uC838 \uC788\uC74C(Always-on)</li><li>\uACE0\uC815\uB41C \uC601\uAD6C(Permanent) IP</li><li>\uD2B8\uB798\uD53D\uC5D0 \uB530\uB978 \uC2A4\uCF00\uC77C\uB9C1</li></ul></li><li>Client <ul><li>\uC11C\uBC84\uC640 \uAC04\uD5D0\uC801(intermittently) \uD1B5\uC2E0</li><li>\uB3D9\uC801(Dynamic) IP</li><li>\uD074\uB77C\uC774\uC5B8\uD2B8\uAC04 \uC9C1\uC811\uC801 \uD1B5\uC2E0 \uC5C6\uC74C</li></ul></li></ul></li><li><p>P2P(Peer-to-peer) architecture</p><ul><li>\uC11C\uBC84\uAC00 \uC5B8\uC81C\uB098 \uCF1C\uC838\uC788\uC9C0\uB294 \uC54A\uC74C</li><li>\uC784\uC758\uC758 \uB2E8\uB9D0 \uC2DC\uC2A4\uD15C \uAC04 \uC9C1\uC811\uC801 \uD1B5\uC2E0</li><li>\uB2E8\uB9D0 \uC2DC\uC2A4\uD15C Peer\uB294 \uC11C\uBE44\uC2A4 \uC694\uCCAD\uACFC \uC81C\uACF5 \uB458 \uB2E4 \uC218\uD589</li><li>Self scalability <ul><li>\uC0C8\uB85C\uC6B4 Peer\uB294 \uC0C8\uB85C\uC6B4 Service capacity\uC784</li></ul></li><li>Peer\uB294 \uAC04\uD5D0\uC801\uC73C\uB85C \uD1B5\uC2E0\uD558\uBA70 \uB3D9\uC801 IP\uB97C \uAC00\uC9D0</li></ul></li></ul><h2 id="_3-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173\u1100\u1161\u11AB-\u1110\u1169\u11BC\u1109\u1175\u11AB" tabindex="-1"><a class="header-anchor" href="#_3-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173\u1100\u1161\u11AB-\u1110\u1169\u11BC\u1109\u1175\u11AB" aria-hidden="true">#</a> 3. \uD504\uB85C\uC138\uC2A4\uAC04 \uD1B5\uC2E0</h2><p>\uD504\uB85C\uC138\uC2A4\uB780 \uD638\uC2A4\uD2B8 \uB0B4\uBD80\uC5D0\uC11C \uB3D9\uC791\uD558\uB294 \uD504\uB85C\uADF8\uB7A8\uC744 \uB9D0\uD55C\uB2E4. \uD504\uB85C\uC138\uC2A4\uAC04 \uD1B5\uC2E0\uC740 \uAC19\uC740 \uD638\uC2A4\uD2B8 \uB0B4\uBD80\uC5D0\uC11C\uC758 OS\uC5D0 \uC758\uD574 \uC774\uB8E8\uC5B4\uC9C0\uB294 IPC(Inter-process communication)\uC774 \uC788\uACE0, \uB124\uD2B8\uC6CC\uD06C \uC0C1 \uC11C\uB85C \uB2E4\uB978 \uD638\uC2A4\uD2B8\uC758 \uD504\uB85C\uC138\uC2A4 \uAC04 \uBA54\uC2DC\uC9C0\uB97C \uAD50\uD658\uD558\uB294 \uD1B5\uC2E0\uC774 \uC788\uB2E4.</p><p>P2P \uC544\uD0A4\uD14D\uCC98\uB85C \uC124\uACC4\uB41C \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC740 Client \uD504\uB85C\uC138\uC2A4\uC640 Server \uD504\uB85C\uC138\uC2A4\uAC00 \uACF5\uC874\uD55C\uB2E4. Client \uD504\uB85C\uC138\uC2A4\uB294 \uD1B5\uC2E0\uC744 \uC2DC\uC791(initiate)\uD558\uBA70, Server \uD504\uB85C\uC138\uC2A4\uB294 \uD1B5\uC2E0 \uC811\uCD09(Contact)\uB97C \uAE30\uB2E4\uB9B0\uB2E4(wait).</p><h3 id="_3-1-socket" tabindex="-1"><a class="header-anchor" href="#_3-1-socket" aria-hidden="true">#</a> 3.1. Socket</h3><p>\uC18C\uCF13(Socket)\uC740 \uB124\uD2B8\uC6CC\uD06C \uC0C1\uC758 \uD504\uB85C\uC138\uC2A4 \uAC04 \uB370\uC774\uD130 \uD1B5\uC2E0 \uC2DC \uC2E4\uC9C8\uC801 \uC885\uC810(Endpoint) \uC5ED\uD560\uC744 \uC218\uD589\uD558\uB294 \uBB3C\uB9AC\uC801/\uB17C\uB9AC\uC801 \uC694\uC18C\uB2E4. \uBB3C\uB9AC\uC801\uC73C\uB85C \uCEF4\uD4E8\uD130 \uC2DC\uC2A4\uD15C\uC744 \uAD6C\uC131\uD558\uB294 \uD558\uB4DC\uC6E8\uC5B4\uC758 \uC5F0\uACB0 \uB2E8\uC790\uAC00 \uC18C\uCF13\uC758 \uC5ED\uD560\uC744 \uC218\uD589\uD558\uBA70 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uC5D0\uC11C \uD504\uB85C\uD1A0\uCF5C + IP \uC8FC\uC18C + \uD3EC\uD2B8 \uBC88\uD638\uB85C \uC18C\uCF13\uB4E4\uC744 \uAD6C\uBD84\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.</p><p class="align-center"><img src="https://drive.google.com/uc?export=view&amp;id=1XPiYPK2PgVyEVuVM2E-_JDVZ_ofNw7S3" alt="" loading="lazy"> &lt;\uADF8\uB9BC 2. Socket\uC740 \uD1B5\uC2E0 \uC2DC \uC885\uC810(Endpoint)\uC744 \uAD6C\uBD84\uD558\uB294 \uCD5C\uC18C \uB2E8\uC704\uB2E4.&gt;</p><div class="mxgraph" style="max-width:100%;margin:auto;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\\&quot;app.diagrams.net\\&quot; modified=\\&quot;2022-07-20T04:34:50.013Z\\&quot; agent=\\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36\\&quot; etag=\\&quot;0dNbV1kRePptCOoqK21l\\&quot; version=\\&quot;20.1.1\\&quot; type=\\&quot;google\\&quot;&gt;&lt;diagram id=\\&quot;LZP33Un9-cZIFlqMNWCZ\\&quot; name=\\&quot;Page-1\\&quot;&gt;7Ztbj5s4FMc/DVL70BU3Q/I4yXR3paraSvNQ9dEBN7FKcMY4l+mnXxsbCMZJmCQE0pnRSAMHc3z5/+zjC2N50+XuHwpXi68kRonl2vHO8h4t13V817XErx2/SEsIfGmYUxyrRJXhCf9Gymgr6xrHKKslZIQkDK/qxoikKYpYzQYpJdt6sp8kqee6gnPUMDxFMGlav+OYLaR15IaV/V+E54siZycYyydLWCRWNckWMCbbPZP32fKmlBAmr5a7KUpE4xXtIt/7+8DTsmAUpazNC5778J1+eZ55m+1/9o9dxr74u0/KywYma1XhaYKFQ15eEv1CTJWdvRQNwtCOZzdZsGXCDQ6/hAmep/w64u8hyg0bRBnmTfigHixxHIvXJxRl+Dec5a5sfr8iOGW5QGBigUfha81IJiEQrjNGyS80JQnhfh9TkgovP3GS6CaSMsWOExT3qsxFFXmh0O5g2zmlIhxlRJaI0ReepHhhDOQrimKnEHVbMVHaFns8eMoGFYbz0nWlFL9QYr1COLch3BOivI7vwtWE80P7tHDeLYUDDeEsN0iEMtkKpjXJgue1GBzyRvkkG/eBJ3D8Fa/dpHrOr+bqb+5oVhgkCR8+Fg94gWd6Ym6TGWs+6FWKcnmdwCSiCDJUgQ0eD5ZdQ56SdRqjWEG7XWCGnlYwEk+3PFzVe8M+in7p7bJhI9DoCwz0jQ30+V3RF7zT92bo8/2h0RcepK8EY4bT+Dgyl7IB8jz24iSfUIrKxjGPclmu78CFLINTb0KOTguZ4IyhtGspZS713jlw9Ty7b/XGp9WDUYRWJ8buy9WTufBEFD2vUXYf8oV9y1csjY/plyE5jNoiK9G+0aZrMUWWPAmhMj+ENyJqxpDBe5C1vO9P1uaSriGr2uXoWspiM0WFxkxbWQ5QTn2m7fUeIh3/vZdeXdYB9NLD6/eqlyYkQ533UZHJXfVJ4PQu3uHl77t4x+PjAMQzLTq0VuOD24PY9Od3UQKzDEf1hqq3qrnZUNw4EdAaTei2phE6UlgFGoN0jtiRdKFZhL1GBoY2LmwUJZCJEXy/bKaGVzl8E9u2lcaeo42u+qanrKZ6q5Kv6UiPviPNkWyHhqOcg7LaF6BhWtEMFY1RSzTGfaIR2nVF3fBMNHRH5er3RmgU+/13gUbYEo1Rn2gAUD8LKw84X4tGwxG4MRrNw8/hojFuiYZjWz2yEYy1iKL39rZsNBzpoalrNkyL8aGyUYTx03AEvcKhncX6+lSxNRy6Iz04dQ2Hd0dwgLZsuH2yoXV379zpxqnxp2syTJs+VyUjhtkif+iom2+QMUTT3OLa7pVHll6haCwr9AlC65mGB4476hoL06bRUAeMYh/69Ijh9wmHoy8szo0muqObRxPTptRg4fDbwgEGFE7KzasLw0mgM9Y1GqYPJtqgkfGCsVcQ0yKqDAKqXhc3ejjyz6XK1/bdSse3wqq5k6pO/DBJreo0Xkdt8F+QXmnvuzHvMJ06+QbQuvvat7nBmR/ZvVmF9BUg8BoKmUaCzgQqHP/pI3Xr1WSvOw3l+UMR/8892OBzwb/svR/3uNuOx22vuWG5P25Xh5PynJFjscQplA/f6kABNBIM3/+bTjH1BWKLgYLfVv/MIyWv/iXK+/w/&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div><div class="caption">&lt;\uADF8\uB9BC 3. \uD074\uB77C\uC774\uC5B8\uD2B8\uC640 \uC11C\uBC84\uC758 \uC18C\uCF13 \uB3D9\uC791 \uC21C\uC11C&gt;</div><h3 id="_3-2-ip-\u110C\u116E\u1109\u1169\u110B\u116A-\u1111\u1169\u1110\u1173-\u1107\u1165\u11AB\u1112\u1169" tabindex="-1"><a class="header-anchor" href="#_3-2-ip-\u110C\u116E\u1109\u1169\u110B\u116A-\u1111\u1169\u1110\u1173-\u1107\u1165\u11AB\u1112\u1169" aria-hidden="true">#</a> 3.2. IP \uC8FC\uC18C\uC640 \uD3EC\uD2B8 \uBC88\uD638</h3><p>\uD1B5\uC2E0\uC5D0 \uCC38\uC5EC\uD558\uB294 \uC885\uC810(Endpoint)\uC744 \uAD6C\uBD84\uD558\uAE30 \uC704\uD55C \uC2DD\uBCC4\uC790\uAC00 \uD544\uC694\uD558\uB2E4. \uC774 \uB54C \uC885\uC810\uC740 \uD504\uB85C\uC138\uC2A4\uB2E4. \uB124\uD2B8\uC6CC\uD06C \uC0C1\uC5D0\uC11C\uB294 IP \uC8FC\uC18C(IP Address, e.g., IPv4\uB294 32-bit)\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC11C\uB85C \uB2E4\uB978 \uB2E8\uB9D0 \uC2DC\uC2A4\uD15C\uC744 \uAD6C\uBD84\uD55C\uB2E4. \uAC19\uC740 \uB2E8\uB9D0 \uC2DC\uC2A4\uD15C \uB0B4\uBD80\uC5D0\uC11C \uD3EC\uD2B8 \uBC88\uD638(Port number)\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC11C\uB85C \uB2E4\uB978 \uD504\uB85C\uC138\uC2A4\uB97C \uAD6C\uBD84\uD55C\uB2E4.</p><p>\uB124\uD2B8\uC6CC\uD06C \uC0C1 \uC11C\uB85C \uB2E4\uB978 \uD504\uB85C\uC138\uC2A4\uB97C \uAD6C\uBD84\uD558\uB294 \uC2DD\uBCC4\uC790\uB294 IP \uC8FC\uC18C\uC640 \uD3EC\uD2B8 \uBC88\uD638\uB97C \uD569\uCE5C \uAC83\uC774\uB2E4.</p><h2 id="_4-\u110B\u1165\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1100\u1168\u110E\u1173\u11BC-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF-\u1100\u1162\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#_4-\u110B\u1165\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1100\u1168\u110E\u1173\u11BC-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF-\u1100\u1162\u110B\u116D" aria-hidden="true">#</a> 4. \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uACC4\uCE35 \uD504\uB85C\uD1A0\uCF5C \uAC1C\uC694</h2><p>\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uACC4\uCE35\uC758 \uD504\uB85C\uD1A0\uCF5C\uC740 \uB2E4\uC74C\uACFC \uAC19\uC740 \uAC83\uB4E4\uC744 \uC815\uC758\uD55C\uB2E4.</p><ul><li>\uBA54\uC2DC\uC9C0 \uAD50\uD658 \uD615\uC2DD <ul><li>\uC694\uCCAD(Request) vs \uC751\uB2F5(Response)</li></ul></li><li>\uBA54\uC2DC\uC9C0 \uBB38\uBC95(Syntax)</li><li>\uBA54\uC2DC\uC9C0 \uC758\uBBF8(Semantics) <ul><li>\uD544\uB4DC \uC815\uBCF4, \uC989 \uBA54\uC2DC\uC9C0 \uB0B4 \uBE44\uD2B8\uC758 \uC758\uBBF8 \uC815\uC758</li></ul></li><li>\uD1B5\uC2E0 \uADDC\uCE59 <ul><li>\uC5B8\uC81C, \uC5B4\uB5BB\uAC8C \uD504\uB85C\uC138\uC2A4 \uAC04 \uBA54\uC2DC\uC9C0\uB97C \uC804\uC1A1/\uC218\uC2E0\uD560 \uAC83\uC778\uC9C0 \uB4F1</li></ul></li></ul><div class="custom-container info"><p class="custom-container-title">Info</p><p>\uD504\uB85C\uD1A0\uCF5C\uC740 \uC18C\uC720\uAD8C\uC5D0 \uB530\uB77C Open protocol(E.g., HTTP, SMTP), Proprietary protocol(E.g., Skype)\uB85C \uBD84\uB958\uD560 \uC218 \uC788\uB2E4. Open protocol\uC5D0 \uC18D\uD55C \uD504\uB85C\uD1A0\uCF5C\uC740 \uD2B9\uC815 \uAE30\uC5C5\uC5D0 \uC18C\uC720\uB418\uC9C0 \uC54A\uACE0 \uC790\uC720\uB86D\uAC8C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uD504\uB85C\uD1A0\uCF5C\uC774\uB2E4. Proprietary protocol\uC5D0 \uC18D\uD55C \uD504\uB85C\uD1A0\uCF5C\uC740 \uD2B9\uC815 \uAE30\uC5C5\uC774 \uD504\uB85C\uD1A0\uCF5C\uC744 \uC5F0\uAD6C/\uAC1C\uBC1C\uD568\uC73C\uB85C\uC368 \uC18C\uC720\uAD8C\uC744 \uC9C0\uB2C8\uACE0 \uC788\uB2E4.</p></div><h2 id="_5-\u110B\u1165\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1110\u1173\u11A8\u1109\u1165\u11BC\u1100\u116A-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF" tabindex="-1"><a class="header-anchor" href="#_5-\u110B\u1165\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1110\u1173\u11A8\u1109\u1165\u11BC\u1100\u116A-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF" aria-hidden="true">#</a> 5. \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uD2B9\uC131\uACFC \uD504\uB85C\uD1A0\uCF5C</h2><p>\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC0AC\uC6A9\uD560 \uD504\uB85C\uD1A0\uCF5C\uC744 \uC120\uD0DD\uD560 \uB54C \uB2E4\uC74C\uACFC \uAC19\uC740 \uD2B9\uC131\uB4E4\uC744 \uACE0\uB824\uD574\uC57C \uD55C\uB2E4.</p><ul><li>\uB370\uC774\uD130 \uBB34\uACB0\uC131(Data Integrity) <ul><li>100% \uC2E0\uB8B0\uC131 \uC788\uB294 \uB370\uC774\uD130 \uC804\uC1A1 \uD544\uC694 vs \uC77C\uBD80 \uB370\uC774\uD130 \uC190\uC2E4\uC774 \uCE58\uBA85\uC801\uC774\uC9C0 \uC54A\uC74C(Loss-tolerant)</li><li>E.g. File transfer, Web transaction vs Voice, Video application</li></ul></li><li>\uC804\uC1A1 \uC9C0\uC5F0(Timing, Delay) <ul><li>\uB370\uC774\uD130 \uC804\uC1A1 \uC2DC \uC9C0\uC5F0\uC774 \uB0AE\uC744\uC218\uB85D \uD6A8\uACFC\uC801\uC778 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 <ul><li>E.g., \uC778\uD130\uB137 \uC804\uD654, \uAC8C\uC784</li></ul></li></ul></li><li>\uCC98\uB9AC\uC728(Throughput) <ul><li>\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uB3D9\uC791 \uC2DC \uBCF4\uC7A5\uB418\uC5B4\uC57C \uD560 \uCD5C\uC18C \uCC98\uB9AC\uC728</li></ul></li><li>\uBCF4\uC548(Security) <ul><li>\uB370\uC774\uD130 \uBB34\uACB0\uC131 \uBCF4\uC7A5</li></ul></li></ul><h2 id="_6-\u110C\u1165\u11AB\u1109\u1169\u11BC-\u1100\u1168\u110E\u1173\u11BC-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF-tcp-vs-udp" tabindex="-1"><a class="header-anchor" href="#_6-\u110C\u1165\u11AB\u1109\u1169\u11BC-\u1100\u1168\u110E\u1173\u11BC-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF-tcp-vs-udp" aria-hidden="true">#</a> 6. \uC804\uC1A1 \uACC4\uCE35 \uD504\uB85C\uD1A0\uCF5C TCP vs UDP</h2><ul><li><p>TCP</p><ul><li>\uC2E0\uB8B0\uC131 \uC788\uB294 \uC804\uC1A1(Reliable transport)</li><li>\uD750\uB984 \uC81C\uC5B4(Flow control) \uC9C0\uC6D0</li><li>\uD63C\uC7A1 \uC81C\uC5B4(Congestion control) \uC9C0\uC6D0</li><li>\uC5F0\uACB0\uC9C0\uD5A5(Connection-oriented) <ul><li>\uC5F0\uACB0 \uC0C1\uD0DC\uB97C \uC720\uC9C0\uD558\uC5EC \uD1B5\uC2E0</li></ul></li><li>\uCD5C\uC18C \uC804\uC1A1 \uC9C0\uC5F0(Timing), \uCD5C\uC18C \uCC98\uB9AC\uC728(Throughput), \uBCF4\uC548\uC5D0 \uB300\uD574\uC120 \uC9C0\uC6D0x</li></ul></li><li><p>UDP</p><ul><li>\uBE44\uC2E0\uB8B0\uC131(Unreliable) \uC804\uC1A1</li><li>TCP\uC758 \uD2B9\uC131\uB4E4 \uD3EC\uD568 \uBAA8\uB450 \uC9C0\uC6D0x</li><li>\uAC04\uACB0\uD55C \uBA54\uC2DC\uC9C0 \uAD6C\uC870</li><li>\uC5F0\uACB0 \uACFC\uC815 \uC0DD\uB7B5</li><li>\uBE60\uB978 \uC804\uC1A1 \uC18D\uB3C4</li></ul></li></ul><p>TCP\uB294 \uC2E0\uB8B0\uC131\uC774 \uB192\uACE0 \uB290\uB9AC\uBA70, UDP\uB294 \uC2E0\uB8B0\uC131\uC774 \uB0AE\uACE0 \uBE60\uB974\uB2E4. UDP\uAC00 TCP\uC5D0 \uBE44\uD574 \uD604\uC800\uD788 \uC801\uC740 \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD568\uC5D0\uB3C4 \uBD88\uAD6C\uD558\uACE0 TCP\uC640 UDP \uBAA8\uB450 \uC0AC\uC6A9\uB418\uACE0 \uC788\uB2E4.</p><h2 id="a-\u110E\u1161\u11B7\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#a-\u110E\u1161\u11B7\u110C\u1169" aria-hidden="true">#</a> A. \uCC38\uC870</h2>',29),E={style:{"text-align":"left"}},s=C("em",null,"Tistory",-1),p={href:"https://helloworld-88.tistory.com/215",target:"_blank",rel:"noopener noreferrer"},h={href:"http://Github.io",target:"_blank",rel:"noopener noreferrer"},c={href:"https://evan-moon.github.io/2019/10/08/what-is-http3/",target:"_blank",rel:"noopener noreferrer"},F=l({__name:"3-application-layer-intro.html",setup(d){return(m,g)=>{const D=o("ExternalLinkIcon");return e(),A("div",null,[n,C("div",E,[C("p",null,[u('\uB2EC\uB098\uB77C \uACF0\uB3CC\uC774, "[\uAE30\uBCF8] \uC18C\uCF13(SOCKET)\uD1B5\uC2E0 \uC774\uB780? - \uACF0\uB3CC\uC774 \uB180\uC774\uD130", '),s,u(", Oct. 23, 2019. [Online]. Available: "),C("a",p,[u("https://helloworld-88.tistory.com/215"),B(D)]),u(" [Accessed Jul. 20, 2022].")]),C("p",null,[u('Evan Moon, "HTTP/3\uB294 \uC65C UDP\uB97C \uC120\uD0DD\uD55C \uAC83\uC77C\uAE4C?", '),C("em",null,[C("a",h,[u("Github.io"),B(D)])]),u(", Oct. 8, 2019. [Online]. Available: "),C("a",c,[u("https://evan-moon.github.io/2019/10/08/what-is-http3/"),B(D)]),u(" [Accessed Jul. 20, 2022].")])]),B(t(i))])}}}),q=r(F,[["__file","3-application-layer-intro.html.vue"]]);export{q as default};
