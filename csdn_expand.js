// ==UserScript==
// @name         csdn自动展开
// @namespace    https://github.com/hanqiuss/tampermonkeyTools/
// @icon         https://csdnimg.cn/public/favicon.ico
// @updateURL    https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/csdn_expand.js
// @downloadURL  https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/csdn_expand.js
// @version      0.02
// @run-at       document-idle
// @author       You
// @match        https://blog.csdn.net/*
// @match        https://bbs.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var a;
    switch(window.location.host){
        case 'blog.csdn.net':
            a = document.getElementById('article_content')
            if(a){a.style=''}
            a = document.getElementsByClassName('hide-article-box')
            a[0].remove()
            break
        case 'bbs.csdn.net':
            a = document.getElementById('bbs_detail_wrap')
            if(a){a.style=''}
            a = document.getElementsByClassName('hide_topic_box')
            a[0].remove()
            break
    }
    
    // Your code here...
})();
