// ==UserScript==
// @name         bing default cn
// @namespace    http://tampermonkey.net/
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
    e = document.getElementById('t_tl').value="zh-CHS";
    if(e){e.value="zh-CHS"}

    // Your code here...
})();
