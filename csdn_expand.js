// ==UserScript==
// @name         csdn自动展开
// @namespace    https://github.com/hanqiuss/tampermonkeyTools/
// @icon         https://csdnimg.cn/public/favicon.ico
// @updateURL    https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/csdn_expand.js
// @downloadURL  https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/csdn_expand.js
// @version      0.01
// @run-at       document-idle
// @author       You
// @match        https://blog.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var a = document.getElementById('article_content')
    if(a){a.style=''}
    a = document.getElementsByClassName('hide-article-box')
    a[0].remove()
    // Your code here...
})();
