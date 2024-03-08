// ==UserScript==
// @name         csdn 知乎
// @description  csdn自动展开、自动关闭登录页面、去除代码复制限制、知乎自动关闭登录页面
// @namespace    https://github.com/hanqiuss/tampermonkeyTools/
// @icon         https://csdnimg.cn/public/favicon.ico
// @updateURL    https://ghproxy.com/https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/csdn_expand.js
// @downloadURL  https://ghproxy.com/https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/csdn_expand.js
// @version      0.13
// @run-at       document-idle
// @author       You
// @match        https://*.blog.csdn.net/*
// @match        https://bbs.csdn.net/*
// @match        https://*.csdn.net/*
// @match        https://*.zhihu.com/*
// @grant        none
// ==/UserScript==

var csdn_css_is_in = false;
function block_zhihu(){
    let a = document.getElementsByClassName('Modal-wrapper')
    if(a.length){
        a[0].remove()
        document.getElementsByTagName('html')[0].style.overflow='auto'
    }
}
function block_csdn(){
    if(document.getElementById('passportbox')){
        document.getElementById('passportbox').remove();
    }
    if(document.getElementsByClassName('passport-login-container').length){
        document.getElementsByClassName('passport-login-container').item(0).remove();
    }
    if(document.getElementById('writeGuide')){
        document.getElementById('writeGuide').remove();
    }

    if(document.getElementsByClassName('hide-preCode-box').length){
        document.getElementsByClassName('hide-preCode-box').item(0).parentElement.classList.remove('set-code-hide')
        document.getElementsByClassName('hide-preCode-box').item(0).remove();
    }
    Array.from(document.getElementsByClassName('hljs-button')).map(x=>x.remove())
    if(!csdn_css_is_in){
        csdn_css();
        csdn_css_is_in = true;
    }
}
function csdn_css(){
    let node = document.createElement ('style');
    node.textContent = `
    #content_views pre,
    #content_views pre code{
        -webkit-touch-callout: auto;
        -webkit-user-select: auto;
        -khtml-user-select: auto;
        -moz-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
    }
    main div.blog-content-box pre {
        max-height:max-content;
    }
    `;
    document.getElementsByTagName('head')[0].appendChild(node);
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
            a[0].remove();
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
