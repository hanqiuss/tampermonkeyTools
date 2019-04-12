// ==UserScript==
// @name         rfc翻译
// @namespace    http://qiuhan.ren/tampermonkey/
// @icon         https://tools.ietf.org//images/rfc.png
// @updateURL    http://qiuhan.ren/tampermonkey/rfc_translate.js
// @downloadURL  http://qiuhan.ren/tampermonkey/rfc_translate.js
// @version      0.01
// @description  rfc
// @author       ...
// @match        https://tools.ietf.org/html/*
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    document.body.append(document.getElementsByClassName('content')[0].cloneNode(true))
    $('.content').css('float','left').css('margin','0 2em').css('width','97ex')
    $('.content:last pre .grey').remove()
    $('.content:last pre:first').css('height','780px')
    $('.content:last .newpage').css('height','840px')
    $('.content:last pre').css('white-space','pre-wrap')
    $.each($('.content:last pre'),(i,v)=>{

        var s = v.innerText.split("\n\n");
        s = s.map(function(x){
            if(x.includes('. . . . . . . . '))return x
            if(x.includes('------+--------'))return x
            if(x.includes('-+-+-+-+-+-+-+-+'))return x

            if(x[0]==' '){
                x = x.split('\n').map(x=>x.replace(/ /g,'').length>=45 ? x : x+'\n').join('')
                console.log(x)
            }

            return x.trimRight()
        })
        v.textContent = s.join('\n \n')

    })

})();
