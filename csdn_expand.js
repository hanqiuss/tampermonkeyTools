// ==UserScript==
// @name         csdn自动展开
// @namespace    https://github.com/hanqiuss/tampermonkeyTools/
// @icon         https://csdnimg.cn/public/favicon.ico
// @updateURL    https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/csdn_expand.js
// @downloadURL  https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/csdn_expand.js
// @version      0.06
// @run-at       document-idle
// @author       You
// @match        https://blog.csdn.net/*
// @match        https://*.blog.csdn.net/*
// @match        https://bbs.csdn.net/*
// @match        https://*.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var a;
    switch(window.location.host){
        case 'bbs.csdn.net':
            a = document.getElementById('bbs_detail_wrap')
            if(a){a.style=''}
            a = document.getElementsByClassName('hide_topic_box')
            a[0].remove()
            break
        default :
            a = document.getElementById('article_content')
            if(a){a.style=''}
            a = document.getElementsByClassName('hide-article-box')
            a[0].remove()
            //展开评论
            a = document.getElementsByClassName('comment-list-box')
            if(a){a[0].style=''}
            a = document.getElementById('btnMoreComment')
            if(a){a.innerHTML = '<span> </span>'}
            break
    }
    var interval = setInterval(function(){
        if(document.getElementById('passportbox')){
            document.getElementById('passportbox').style.display='';
            document.getElementsByClassName('login-mark').item(0).style.display='';
        }
        if(document.getElementById('writeGuide')){
            document.getElementById('writeGuide').style.display='';
        }
    },200);
    // Your code here...
})();
