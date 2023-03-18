import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as a,e as r}from"./app.d4e9f066.js";const i={},s=r('<h2 id="subtree\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#subtree\u1105\u1161\u11AB" aria-hidden="true">#</a> subtree\uB780</h2><p>Git\uC5D0\uB294 \uD504\uB85C\uC81D\uD2B8 \uAC04 Merging\uC744 Subtree Merging\uC774\uB77C \uD558\uBA70, \uC774 Sutbree Merging\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uBA85\uB839\uC5B4\uAC00 subtree\uC785\uB2C8\uB2E4.</p><p>Subtree Merging\uC740 \uC5EC\uB7EC \uAC1C\uC758 \uD504\uB85C\uC81D\uD2B8\uB97C \uD558\uB098\uB85C Merging\uD558\uB294 \uAC1C\uB150\uC744 \uB73B\uD569\uB2C8\uB2E4.</p><h2 id="\u1109\u1161\u110B\u116D\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uC0AC\uC6A9\uBC95</h2><p>\uD2B9\uC815 \uC800\uC7A5\uC18C\uC5D0\uC11C \uB2E4\uB978 \uC800\uC7A5\uC18C\uB97C Merge\uD558\uAE30 \uC704\uD574 subtree \uBA85\uB839\uC5B4\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.</p><div class="custom-container warning"><p class="custom-container-title">\uC8FC\uC758</p><p>\uB9CC\uC57D \uBE48 \uC800\uC7A5\uC18C\uC5D0\uC11C \uB2E4\uB978 \uC800\uC7A5\uC18C\uB4E4\uC744 \uD569\uD558\uB824\uBA74 initial commit\uC774 \uC874\uC7AC\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.</p></div><h3 id="_1-\u110B\u116F\u11AB\u1100\u1167\u11A8-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-url-\u110E\u116E\u1100\u1161" tabindex="-1"><a class="header-anchor" href="#_1-\u110B\u116F\u11AB\u1100\u1167\u11A8-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-url-\u110E\u116E\u1100\u1161" aria-hidden="true">#</a> 1. \uC6D0\uACA9 \uC800\uC7A5\uC18C URL \uCD94\uAC00</h3><div class="language-text ext-text"><pre class="language-text"><code>git remote add ${ALIAS} ${REMOTE_REPOSITORY_URL}\n</code></pre></div><p>\uC608\uC2DC</p><div class="language-text ext-text"><pre class="language-text"><code>git remote add javascript https://github.com/drmaemi/javascript\n</code></pre></div><h3 id="_2-subtree-\u110E\u116E\u1100\u1161" tabindex="-1"><a class="header-anchor" href="#_2-subtree-\u110E\u116E\u1100\u1161" aria-hidden="true">#</a> 2. subtree \uCD94\uAC00</h3><div class="language-text ext-text"><pre class="language-text"><code>git subtree add --prefix ${PATH} ${REMOTE_REPO_ALIAS} ${BRANCH}\n</code></pre></div><p>\uC608\uC2DC</p><div class="language-text ext-text"><pre class="language-text"><code>git subtree add --prefix javascript javascript master\n</code></pre></div><div class="custom-container warning"><p class="custom-container-title">\uC8FC\uC758</p><p>${PATH}\uAC00 \uBBF8\uB9AC \uC0DD\uC131\uB418\uC5B4 \uC788\uC73C\uBA74 \uC548\uB429\uB2C8\uB2E4.</p></div><h3 id="_3-push" tabindex="-1"><a class="header-anchor" href="#_3-push" aria-hidden="true">#</a> 3. push</h3><div class="language-text ext-text"><pre class="language-text"><code>git push\n</code></pre></div><h3 id="_4-git-remote-\u110C\u1166\u1100\u1165-\u110B\u116F\u11AB\u1100\u1167\u11A8-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u110C\u1166\u1100\u1165" tabindex="-1"><a class="header-anchor" href="#_4-git-remote-\u110C\u1166\u1100\u1165-\u110B\u116F\u11AB\u1100\u1167\u11A8-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u110C\u1166\u1100\u1165" aria-hidden="true">#</a> 4. git remote \uC81C\uAC70 / \uC6D0\uACA9 \uC800\uC7A5\uC18C \uC81C\uAC70</h3><div class="language-text ext-text"><pre class="language-text"><code>git remote remote ${ALIAS}\n</code></pre></div><p>\uC774\uD6C4 github \uC6D0\uACA9 \uC800\uC7A5\uC18C\uB3C4 \uC804\uBD80 \uC0AD\uC81C\uD574\uC90D\uB2C8\uB2E4.</p>',20),d=[s];function c(n,o){return t(),a("div",null,d)}const h=e(i,[["render",c],["__file","git-subtree.html.vue"]]);export{h as default};