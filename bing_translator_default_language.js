// ==UserScript==
// @name         必应翻译默认语言改为中文
// @namespace    http://tampermonkey.net/
// @updateURL    https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/bing_translator_default_language.js
// @downloadURL  https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/bing_translator_default_language.js
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cn.bing.com/*ranslator
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    var e = document.getElementById('tta_tgtsl');
    if(e){e.value="zh-Hans"}
    e = document.getElementById('t_tl');
    if(e){e.value="zh-CHS"}
})();
