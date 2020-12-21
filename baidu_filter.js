// ==UserScript==
// @name         百度搜索结果过滤
// @namespace    https://github.com/hanqiuss/tampermonkeyTools/

// @updateURL    https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/baidu_filter.js
// @downloadURL  https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/baidu_filter.js
// @version      0.01
// @run-at       document-idle
// @description  百度搜索结果过滤
// @author       ...
// @match        https://www.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
    const cb = function(x){
        let e = x.getElementsByClassName('c-showurl c-color-gray');
        if(!e.length){
            return false;
        }
        let str = e[0].text;
        let list = [
            'CSDN技术社区',
        ];
        return list.map(x=>new RegExp(x).test(str)).filter(x=>x).length > 0;
    }

    setInterval(function(){
        Array.from(document.getElementById('content_left').children)
            .filter(cb)
            .map(x=>x.style.display='none')
    },200);
})();
