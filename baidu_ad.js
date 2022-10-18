// ==UserScript==
// @name         百度搜索广告
// @namespace    https://github.com/hanqiuss/tampermonkeyTools/

// @updateURL    https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/baidu_ad.js
// @downloadURL  https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/baidu_ad.js
// @version      0.25
// @run-at       document-idle
// @description  去除百度搜索页广告
// @author       ...
// @match        https://www.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
    setInterval(function(){
        var list = document.getElementById('content_left').children;
        for(var i = 0; i < list.length; i++){
            if(check(list[i])){
                list[i].style.display='none';
                console.log('清除成功');
            }
        }
    },200);

    function check(e) {
        if (e.style.display == 'none') {
            return false;
        }
        if(e.getElementsByClassName('c-gap-left').length >0 ){
            return true;
        }
        return false;
    }
})();
