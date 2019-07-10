// ==UserScript==
// @name         rfc-cn
// @namespace    http://qiuhan.ren/tampermonkey/
// @icon         https://tools.ietf.org//images/rfc.png
// @updateURL    https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/rfc-cn.js
// @downloadURL  https://raw.githubusercontent.com/hanqiuss/tampermonkeyTools/master/rfc-cn.js
// @version      0.01
// @description  rfc
// @author       ...
// @match        https://tools.ietf.org/html/*
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @run-at       document-idle
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @connect      bing.com
// ==/UserScript==

(function() {
    'use strict';
    $.ajax('https://raw.githubusercontent.com/hanqiuss/rfc-translate/master' + window.location.pathname,{success:function(ret){
        document.body.append($(ret)[0])
        $('.content').css('float','left').css('margin','0 2em').css('width','97ex')
    }})
})();
