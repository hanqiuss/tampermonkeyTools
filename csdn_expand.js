// ==UserScript==
// @name         csdn自动展开
// @namespace    https://github.com/hanqiuss/tampermonkeyTools/
// @icon         https://csdnimg.cn/public/favicon.ico
// @updateURL    https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/csdn_expand.js
// @downloadURL  https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/csdn_expand.js
// @version      0.10
// @run-at       document-idle
// @author       You
// @match        https://*.blog.csdn.net/*
// @match        https://bbs.csdn.net/*
// @match        https://*.csdn.net/*
// @match        https://*.zhihu.com/*
// @grant        none
// ==/UserScript==

function block_zhihu(){
    let a = document.getElementsByClassName('Modal-wrapper')
    if(a.length){
        a[0].remove()
        document.getElementsByTagName('html')[0].style.overflow='auto'
    }
}
function block_csdn(){
    if(document.getElementById('passportbox')){
        document.getElementById('passportbox').style.display='';
        document.getElementsByClassName('login-mark').item(0).style.display='';
    }
    if(document.getElementById('writeGuide')){
        document.getElementById('writeGuide').style.display='';
    }
}
(function() {
    'use strict';
    console.log('000');
    var a;
    switch(window.location.host){
        case 'www.zhihu.com':
        case 'zhuanlan.zhihu.com':
            setInterval(block_zhihu,200);
            console.log('zhihu');
            break;
        case 'bbs.csdn.net':
            console.log('bbs.csdn');
            setInterval(block_csdn,200)
            a = document.getElementById('bbs_detail_wrap')
            if(a){a.style=''}
            a = document.getElementsByClassName('hide_topic_box')
            if(!a.length)break
            a[0].remove()
            break
        default :
            console.log('blog');
            setInterval(block_csdn,200)
            a = document.getElementById('article_content')
            if(a){a.style=''}
            a = document.getElementsByClassName('hide-article-box')
            if(!a.length)break
            a[0].remove()
            //展开评论
            a = document.getElementsByClassName('comment-list-box')
            if(!a.length)break
            if(a){a[0].style=''}
            a = document.getElementById('btnMoreComment')
            if(!a.length)break
            if(a){a.innerHTML = '<span> </span>'}

            break
    }

})();
