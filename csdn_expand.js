// ==UserScript==
// @name         csdn自动展开
// @namespace    https://github.com/hanqiuss/tampermonkeyTools/
// @icon         https://csdnimg.cn/public/favicon.ico
// @updateURL    https://github.com/hanqiuss/tampermonkeyTools/csdn_expand.js
// @downloadURL  https://github.com/hanqiuss/tampermonkeyTools/csdn_expand.js
// @author       You
// @match        https://blog.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var a = document.getElementById('article_content')
    if(a){a.style=''}
    a = document.getElementsByClassName('hide-article-box')
    a.map(x=>x.remove())
    // Your code here...
})();
