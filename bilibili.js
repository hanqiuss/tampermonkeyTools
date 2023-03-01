// ==UserScript==
// @name         bilibili文本复制
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/read/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    document.getElementById('article-content').children[0].addEventListener('copy',x=>{x.preventDefault(),x.stopPropagation(),x.clipboardData.setData('text/plain', window.getSelection().toString())})
})();
