import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as k,c as r,d as a,w as e,a as n,b as s,e as d,r as o}from"./app.713a6185.js";const m={},b=d('<h2 id="\u110B\u1167\u11AB\u1100\u1167\u11AF-\u1105\u1175\u1109\u1173\u1110\u1173-linked-list-\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110B\u1167\u11AB\u1100\u1167\u11AF-\u1105\u1175\u1109\u1173\u1110\u1173-linked-list-\u1105\u1161\u11AB" aria-hidden="true">#</a> \uC5F0\uACB0 \uB9AC\uC2A4\uD2B8(Linked list)\uB780?</h2><p>\uD504\uB85C\uADF8\uB798\uBC0D \uC5B8\uC5B4\uC5D0\uC11C \uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uC790\uB8CC\uAD6C\uC870\uC778 \uBC30\uC5F4(Array)\uC5D0\uC11C \uB370\uC774\uD130\uC758 \uC0BD\uC785/\uC0AD\uC81C \uC2DC O(N)\uC758 \uC2DC\uAC04\uBCF5\uC7A1\uB3C4\uB97C \uAC00\uC84C\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD3EC\uC778\uD130 \uAC1C\uB150\uC744 \uC774\uC6A9\uD574 O(1)\uC5D0 \uB370\uC774\uD130 \uC0BD\uC785/\uC0AD\uC81C\uB97C \uC218\uD589\uD560 \uC218 \uC788\uB3C4\uB85D \uB9CC\uB4E0 \uC790\uB8CC\uAD6C\uC870\uAC00 \uBC14\uB85C \uC5F0\uACB0 \uB9AC\uC2A4\uD2B8(Linked list)\uC785\uB2C8\uB2E4.</p><p class="align-center"><img src="https://drive.google.com/uc?export=view&amp;id=1UmWPDSXFXXrT8VR2tRaL-gJe-ngxzOaD" alt="" loading="lazy"> &lt;\uADF8\uB9BC 1. Linked list \uC2DC\uAC04-\uACF5\uAC04 \uBCF5\uC7A1\uB3C4&gt;</p><p>\uC5F0\uACB0 \uB9AC\uC2A4\uD2B8\uB97C \uAD6C\uC131\uD558\uB294 \uC694\uC18C\uB294 \uC2E4\uC81C \uB370\uC774\uD130 \uAC12\uACFC \uB2E4\uC74C \uC694\uC18C\uB97C \uAC00\uB9AC\uD0A4\uB294 \uD3EC\uC778\uD130 \uBCC0\uC218\uB85C \uAD6C\uC131\uB41C \uAD6C\uC870\uCCB4 \uB610\uB294 \uD074\uB798\uC2A4\uC785\uB2C8\uB2E4. \uC694\uC18C \uAC04 \uC5F0\uACB0 \uAD00\uACC4\uC5D0 \uB530\uB77C \uB2E8\uC77C \uC5F0\uACB0 \uB9AC\uC2A4\uD2B8(Singly linked list), \uC774\uC911 \uC5F0\uACB0 \uB9AC\uC2A4\uD2B8(Doubly linked list), \uB2E4\uC911 \uC5F0\uACB0 \uB9AC\uC2A4\uD2B8(Multiply linked list), \uC6D0\uD615 \uC5F0\uACB0 \uB9AC\uC2A4\uD2B8(Circular linked list)\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</p><p class="align-center"><img src="https://drive.google.com/uc?export=view&amp;id=1sKG1tP27OkFt4xOOjK9C3zd6y4VKCInb" alt="" loading="lazy"> &lt;\uADF8\uB9BC 2. \uB2E8\uC77C \uC5F0\uACB0 \uB9AC\uC2A4\uD2B8&gt;</p><h2 id="\u1103\u1161\u11AB\u110B\u1175\u11AF-\u110B\u1167\u11AB\u1100\u1167\u11AF-\u1105\u1175\u1109\u1173\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u110B\u1175\u11AF-\u110B\u1167\u11AB\u1100\u1167\u11AF-\u1105\u1175\u1109\u1173\u1110\u1173" aria-hidden="true">#</a> \uB2E8\uC77C \uC5F0\uACB0 \uB9AC\uC2A4\uD2B8</h2>',6),v=n("div",{class:"language-cpp ext-cpp line-numbers-mode"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`

`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token keyword"},"namespace"),s(" std"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Node"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" data"),n("span",{class:"token punctuation"},";"),s(`
    Node`),n("span",{class:"token operator"},"*"),s(" next"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token function"},"Node"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token operator"},"->"),s("data "),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},";"),s(`
        next `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"LinkedList"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token keyword"},"private"),n("span",{class:"token operator"},":"),s(`
    Node`),n("span",{class:"token operator"},"*"),s(" head"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"public"),n("span",{class:"token operator"},":"),s(`
    `),n("span",{class:"token function"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(" head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            head `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token function"},"Node"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        Node`),n("span",{class:"token operator"},"*"),s(" current "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),s(`
            current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`

        current`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token function"},"Node"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"prepend"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        Node`),n("span",{class:"token operator"},"*"),s(" newHead "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token function"},"Node"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        newHead`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        head `),n("span",{class:"token operator"},"="),s(" newHead"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"deleteByValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token operator"},"->"),s("data "),n("span",{class:"token operator"},"=="),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            Node`),n("span",{class:"token operator"},"*"),s(" preHead "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
            head `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"delete"),s(" preHead"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        Node`),n("span",{class:"token operator"},"*"),s(" current "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token operator"},"->"),s("data "),n("span",{class:"token operator"},"=="),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                Node`),n("span",{class:"token operator"},"*"),s(" next "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
                current`),n("span",{class:"token operator"},"->"),s("next "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"delete"),s(" next"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"printAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        Node`),n("span",{class:"token operator"},"*"),s(" current "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            cout `),n("span",{class:"token operator"},"<<"),s(" current"),n("span",{class:"token operator"},"->"),s("data "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token char"},"' '"),n("span",{class:"token punctuation"},";"),s(`
            current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"->"),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token char"},"'\\n'"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    LinkedList linkedList`),n("span",{class:"token punctuation"},";"),s(`

    linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"prepend"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"deleteByValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    cout `),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"Program terminated successfully"'),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},"linked_list"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Node"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"Node"),s(" next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" data"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"LinkedList"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"Node"),s(" head"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            head `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token class-name"},"Node"),s(" current "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        current`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"prepend"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"Node"),s(" newHead "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        newHead`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
        head `),n("span",{class:"token operator"},"="),s(" newHead"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"deleteByValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"=="),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            head `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token class-name"},"Node"),s(" current "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"=="),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                current`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"printAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"Node"),s(" current "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%d "'),n("span",{class:"token punctuation"},","),s(" current"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Main"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"LinkedList"),s(" linkedList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"prepend"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"deleteByValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Program terminated successfully"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("p",null,"\uC2E4\uD589 \uACB0\uACFC",-1),h=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`-1 1 2 4 5 
Program terminated successfully
`)])],-1),f=n("h2",{id:"a-\u110E\u1161\u11B7\u110C\u1169",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#a-\u110E\u1161\u11B7\u110C\u1169","aria-hidden":"true"},"#"),s(" A. \uCC38\uC870")],-1),x={style:{"text-align":"left"}},L={href:"http://bigocheatsheet.com",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.bigocheatsheet.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.bigocheatsheet.com/",target:"_blank",rel:"noopener noreferrer"};function N(A,C){const c=o("CodeTabs"),t=o("ExternalLinkIcon");return k(),r("div",null,[b,a(c,{id:"18",data:[{title:"C++"},{title:"Java"}]},{tab0:e(({title:l,value:p,isActive:u})=>[v]),tab1:e(({title:l,value:p,isActive:u})=>[w]),_:1}),y,h,f,n("div",x,[n("p",null,[s('Big-O Cheat Sheet, "Know Thy Complexities!," '),n("em",null,[n("a",L,[s("bigocheatsheet.com"),a(t)])]),s(", [Online]. Available: ["),n("a",g,[s("https://www.bigocheatsheet.com/"),a(t)]),s("]j("),n("a",_,[s("https://www.bigocheatsheet.com/"),a(t)]),s(") [Accessed Aug. 2, 2022].")])])])}const H=i(m,[["render",N],["__file","linked-list.html.vue"]]);export{H as default};
