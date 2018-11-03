// ==UserScript==
// @name         replace google cdn
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @match        https://*/*
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';
    var list = document.getElementsByTagName('script')
    var map  = [
        ["ajax.googleapis.com"          ,"ajax.lug.ustc.edu.cn"],
        ["fonts.googleapis.com"         , "fonts.lug.ustc.edu.cn"],
        ["themes.googleusercontent.com" , "google-themes.lug.ustc.edu.cn"],
        ["fonts.gstatic.com"            , "fonts-gstatic.lug.ustc.edu.cn"],
    ]
    if(list.length){
        Object.values(list).forEach(function(el){
            if(el.src){
                var url = el.src
                for(var i=0;i < map.length; i++){
                    if(url.match(map[i][0])){
                        var oScript   = document.createElement("script");
                        oScript.type  = "text\/javascript";
                        oScript.src   = url.replace(map[i][0],map[i][1])
                        oScript.async = false
                        console.log(el.src);
                        el.parentNode.replaceChild(oScript, el)
                        break;
                    }
                }
            }
        })
    }
    // Your code here...
})();
